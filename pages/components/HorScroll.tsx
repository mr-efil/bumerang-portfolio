import Image from "next/image";
import React, { ReactNode, ReactElement, RefObject, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
  title: string;
  image: string;
}

const HorScroll = ({ children, title, image }: Props): ReactElement => {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const [isVisible1, setIsVisible1] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible1(entry.isIntersecting);
    });
  
    const currentRef = ref1.current; // Capture the current ref value
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref1]);
  
  return (
    <div
      ref={ref1}
      className="relative bottom-0 w-fit h-full flex flex-col justify-start"
    >
      <div className="h-5/6 w-5/6 absolute m-auto border border-[#0d0d0d] rounded translate-x-14 translate-y-16" />
      <div className="relative w-[40rem] h-3/4 top-8 left-0 -z-10 flex items-center">
        <Image
          src={image}
          alt="lolol"
          width={3000}
          height={1800}
          className="w-full h-full object-cover scale-75"
        />
      </div>
      <div
        className={`w-60 bottom-0 left-24 flex flex-col items-end justify-between h-24 text-right relative text-[#0d0d0d] transition-opacity delay-500 ease-in duration-500  ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="font-bold text-4xl">{title}</h2>
        <h3 className="font-light italic text-base">{children}</h3>
      </div>
    </div>
  );
};

export default HorScroll;
