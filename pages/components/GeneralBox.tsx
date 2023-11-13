import React from "react";
import { useMultipleIsVisible } from "../hooks/useMultipleIsVisible";

type Props = {};

const GeneralBox = ({ text1, text2, number }) => {
  const { refArray, isVisibleArray } = useMultipleIsVisible(1);

  return (
    <div
      ref={refArray[0]}
      className={`w-[90%] h-40 rounded-lg flex flex-col justify-between items-center relative my-2.5 border transition-colors delay-300 ${
        isVisibleArray[0] ? "bg-[#0d0d0d] " : "bg-[#f7f6f1] "
      }`}
    >
      <span
        className={`w-full text-base  font-light text-left top-4 left-5 relative transition-text delay-300 ${
          isVisibleArray[0] ? "text-[#f7f6f1] " : "text-[#0d0d0d] "
        }`}
      >
        {`// ${number}`}
      </span>
      <h2
        className={`w-full text-4xl font-bold text-right bottom-4 right-5 relative transition-text delay-300 ${
          isVisibleArray[0] ? "text-[#f7f6f1] " : "text-[#0d0d0d] "
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
