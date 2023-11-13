import React, { useState } from "react";
import Image from "next/image";
import { useMultipleIsVisible } from "../hooks/useMultipleIsVisible";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const { refArray, isVisibleArray } = useMultipleIsVisible(1);
  return (
    <div
      ref={refArray[0]}
      className={`relative mb-4 h-auto w-5/6 flex flex-col pt-2 rounded px-6 items-center transition-all duration-200 ${
        isOpen ? "bg-[#0d0d0d] text-white pt-4 pb-8" : "bg-transparent"
      }`}
    >
      <div
        onClick={toggleOpen}
        className={`w-full h-20 flex flex-row justify-between items-center text-left pr-2 transition-opacity duration-500 ${
          isVisibleArray[0] ? "opacity-100" : "opacity-0"
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
