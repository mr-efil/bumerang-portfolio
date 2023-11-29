import React, { useEffect, useRef, useState } from "react";

type GeneralBoxProps = {
  text1: string;
  text2: string;
  number: number;
};

const GeneralBox: React.FC<GeneralBoxProps> = ({ text1, text2, number }) => {
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
      className={`group w-[90%] max-w-lg md:max-w-xl lg:max-w-md 2xl:max-w-sm h-40 rounded-lg flex flex-col justify-between items-center relative my-2.5 mx-2 border transition-colors delay-300 ${
        isVisible1 ? "bg-[#0d0d0d] hover:bg-[#f7f6f1] lg:delay-0 hover:border hover:border-[#0d0d0d]" : "bg-[#f7f6f1] "
      }`}
    >
      <span
        className={`w-full text-base font-light text-left top-4 left-5 relative transition-text delay-300 ${
          isVisible1 ? "text-[#f7f6f1] group-hover:text-[#0d0d0d] lg:delay-0" : "text-[#0d0d0d] "
        }`}
      >
        {`// ${number}`}
      </span>
      <h2
        className={`w-full text-4xl font-bold text-right bottom-4 right-5 relative transition-text delay-300 ${
          isVisible1 ? "text-[#f7f6f1] group-hover:text-[#0d0d0d] lg:delay-0" : "text-[#0d0d0d] "
        }`}
      >
        {text1}
        <br />
        <span className="text-3xl font-light">{text2}</span>
      </h2>
    </div>
  );
};

export default GeneralBox;
