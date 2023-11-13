import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

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
      className={`relative mb-4 h-auto w-5/6 flex flex-col pt-2 rounded px-6 items-center transition-all duration-200 ${
        isOpen ? "bg-[#0d0d0d] text-white pt-4 pb-8" : "bg-transparent"
      }`}
    >
      <div
        onClick={toggleOpen}
        className={`w-full h-20 flex flex-row justify-between items-center text-left pr-2 transition-opacity duration-500 ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="w-5/6 flex flex-wrap text-lg font-bold">{question}</h3>

        <Image
          src="/bumerang_sss.png"
          alt="chat toggle button"
          width={10}
          height={14}
          className={
            isOpen
              ? "-rotate-180 mt-0.5 w-7 translate-x-2 transition-transform duration-500 invert"
              : " w-7 translate-x-4 transition-transform duration-500"
          }
        />
      </div>
      {isOpen && (
        <h4 className="relative flex mt-2 text-base font-light italic">
          {answer}
          {answer}
        </h4>
      )}
    </div>
  );
};

export default FAQItem;
