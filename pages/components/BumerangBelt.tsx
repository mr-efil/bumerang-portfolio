import Image from 'next/image';
import React, { useEffect } from 'react'

type Props = {}

function BumerangBelt() {

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
    const index = Math.floor((scrollY - 250) / 60);

    // Apply rotation to the corresponding image
    const images = document.querySelectorAll('.rotate-animation');
    images.forEach((image, i) => {
        if (i <= index) {
          image.style.transform = 'rotate(90deg)';
          image.style.opacity = 1
        } else {
          image.style.transform = 'rotate(-90deg)';
          image.style.opacity = .3
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
    <div className="w-full h-fit absolute flex flex-row -top-20 md:-top-0">{imageUrls.map((url, index) => (
        <div key={index} className={`rotate-animation duration-500`}>
          <Image src={url} width={100} height={100} alt={`Image ${index + 1}`}/>
        </div>
      ))}</div>
  )
}

export default BumerangBelt