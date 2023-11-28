import Image from "next/image";
import React from "react";

interface BumerangWrapperProps {
  invert: boolean;
}

const BumerangWrapper = ({ invert}: BumerangWrapperProps) => {

  return (
    <div className="w-full h-full absolute" style={{filter: invert ? "invert(1)" : "invert(0)"}}>
        
      <Image
        src="/bumerangtek.svg"
        alt="chat toggle button"
        width={10}
        height={14}
        className="absolute top-12 left-8 w-5 opacity-30"
      />
      <Image
        src="/bumerangtek.svg"
        alt="chat toggle button"
        width={10}
        height={14}
        className="absolute top-12 right-8 w-5 opacity-30"
      />
      <Image
        src="/bumerangtek.svg"
        alt="chat toggle button"
        width={10}
        height={14}
        className="absolute bottom-12 left-8 w-5 opacity-30 rotate-180"
      />
      <Image
        src="/bumerangtek.svg"
        alt="chat toggle button"
        width={10}
        height={14}
        className="absolute bottom-12 right-8 w-5 opacity-30 rotate-180"
      />
    </div>
  );
};

export default BumerangWrapper;
