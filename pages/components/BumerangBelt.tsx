import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface BumerangBeltProps {
  invert: boolean;
  id: number;
  drc: string
}

function BumerangBelt({ invert , id,drc}: BumerangBeltProps) {
  const imageWidth = 30; // Width of each image in pixels
  const padding = 10; // Adjusted padding between images in pixels

  const [imageCount, setImageCount] = useState(0);
  const [threshold, setThreshold] = useState<number | null>(null);

  const thresholdsubstract = [0,550,650]
  const direction = {
    right: ['rotate(90deg)', 'rotate(-90deg)'],
    left: ['rotate(-90deg)', 'rotate(90deg)'],
  };

  useEffect(() => {
    const calculateImageCount = () => {
      const screenWidth = window.innerWidth;
      const availableWidth = screenWidth - padding;
      return Math.floor(availableWidth / (imageWidth + padding));
    };

    const handleResize = () => {
      setImageCount(calculateImageCount);
    };

    const targetDiv = document.getElementById(`threshold-div-${id}`);

    const handleScroll = () => {
      if (targetDiv) {
        const rect = targetDiv.getBoundingClientRect();
        setThreshold(rect.top + window.scrollY - thresholdsubstract[id]);
      }
    };

    if (typeof window !== 'undefined') {
      setImageCount(calculateImageCount); // Calculate initial image count
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [imageWidth, padding,id,invert]);

  const imageUrls = Array.from({ length: imageCount }, (_, index) => '/bumerangtek.svg');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const index = Math.floor((scrollY - (threshold || 0)) / (imageWidth + padding));

      const images = document.querySelectorAll(`.rotate-animation-${id}`);
      images.forEach((image, i) => {
        const imageElement = image as HTMLImageElement;
        if (drc=="right" ? i <= index : images.length - i <= index ) {
          imageElement.style.transform = drc=="right" ? direction.right[0] : direction.left[0];
          imageElement.style.opacity = '1'
        } else {
          imageElement.style.transform = drc=="right" ? direction.right[1] : direction.left[1];
          imageElement.style.opacity = '0.3'
        }
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [threshold, imageWidth, padding,invert]);

  return (
    <div
      id={`threshold-div-${id}`}
      className="w-full h-fit absolute flex flex-row -top-20 md:-top-0 justify-center"
      style={{ filter: invert ? 'invert(1)' : 'invert(0)' }}
    >
      {imageUrls.map((url, index) => (
        <div key={index} className={`rotate-animation-${id} duration-500`} style={{ marginRight: `${padding}px` }}>
          <Image src={url} width={imageWidth} height={30} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default BumerangBelt;
