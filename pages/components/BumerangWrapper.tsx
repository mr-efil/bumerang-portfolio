import Image from "next/image";
import React from "react";

type Props = {};

const BumerangWrapper = (props: Props) => {
  return (
    <div className="w-full h-full absolute -z-10">
      <Image
        src="/bumerangtek.svg"
        alt="chat toggle button"
        width={10}
        height={14}
        className="absolute -top-6 left-8 w-5 opacity-30"
      />
      <Image
        src="/bumerangtek.svg"
        alt="chat toggle button"
        width={10}
        height={14}
        className="absolute -top-6 right-8 w-5 opacity-30"
      />
      <Image
        src="/bumerangtek.svg"
        alt="chat toggle button"
        width={10}
        height={14}
        className="absolute bottom-24 left-8 w-5 opacity-30 rotate-180"
      />
      <Image
        src="/bumerangtek.svg"
        alt="chat toggle button"
        width={10}
        height={14}
        className="absolute bottom-24 right-8 w-5 opacity-30 rotate-180"
      />
    </div>
  );
};

export default BumerangWrapper;
