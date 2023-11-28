import Image from 'next/image';
import React, { useEffect } from 'react'

interface BumerangBeltProps {
    invert: boolean;
    threshold: number;
  }

function BumerangBelt({ invert, threshold }: BumerangBeltProps) {

  // Dummy image URLs
  const imageUrls = [
    "/bumerangtek.svg",
    "/bumerangtek.svg",
    "/bumerangtek.svg",
    "/bumerangtek.svg",
    "/bumerangtek.svg",
    "/bumerangtek.svg",
    "/bumerangtek.svg",
    "/bumerangtek.svg",
    "/bumerangtek.svg",
    "/bumerangtek.svg",
  ];

  // Function to handle scroll and apply rotation
  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Calculate the index of the image to rotate based on scroll position
    const index = Math.floor((scrollY - threshold) / 60);

    // Apply rotation to the corresponding image
    const images = document.querySelectorAll('.rotate-animation');
    images.forEach((image, i) => {
        const imageElement = image as HTMLImageElement;
        if (i <= index) {
          imageElement.style.transform = 'rotate(90deg)';
          imageElement.style.opacity = '1';
        } else {
          imageElement.style.transform = 'rotate(-90deg)';
          imageElement.style.opacity = '0.3';
        }
      });
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="w-full h-fit absolute flex flex-row -top-20 md:-top-0" style={{filter: invert ? "invert(1)" : "invert(0)"}}>{imageUrls.map((url, index) => (
        <div key={index} className={`rotate-animation duration-500`}>
          <Image src={url} width={100} height={100} alt={`Image ${index + 1}`}/>
        </div>
      ))}</div>
  )
}

export default BumerangBelt