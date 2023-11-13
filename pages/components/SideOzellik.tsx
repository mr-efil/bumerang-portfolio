import Image from "next/image";
import React, { ReactNode, ReactElement, RefObject, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
  title: string;
  image: string;
  position: string;
}

const SideOzellik = ({
  children,
  title,
  image,
  position,
}: Props): ReactElement => {
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
      className={`relative bottom-0 justify-between ${
        position == "right" ? "left-8 items-start" : "right-8 items-end"
      }  w-screen h-[30rem] lg:h-[60rem] flex flex-col rounded-xl my-4 bg-[rgb(232,232,232)]`}
    >
      <div className="relative w-full h-3/4 lg:h-5/6 top-4 right-0 flex items-center">
        <Image
          src={image}
          alt="lolol"
          width={3000}
          height={1800}
          className="w-full h-full object-contain"
        />
      </div>
      <div
        className={`relative w-5/6 bottom-10 lg:bottom-36 flex flex-col ${
          position == "right"
            ? "items-end left-0 text-right"
            : "items-start right-0 text-left"
        } justify-between h-24  text-[#0d0d0d] transition-opacity delay-500 ease-in duration-500  ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="font-bold text-4xl lg:text-6xl lg:mb-4">{title}</h2>
        <h3 className="font-light italic text-base lg:text-4xl">{children}</h3>
      </div>
    </div>
  );
};

export default SideOzellik;
