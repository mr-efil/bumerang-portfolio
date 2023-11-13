import Image from "next/image";
import React, { ReactNode, ReactElement, RefObject, useEffect } from "react";
import { useMultipleIsVisible } from "../hooks/useMultipleIsVisible";

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
  const { refArray, isVisibleArray } = useMultipleIsVisible(1);
  return (
    <div
      ref={refArray[0]}
      className={`relative bottom-0 justify-between ${
        position == "right" ? "left-8 items-start" : "right-8 items-end"
      }  w-screen h-[30rem] flex flex-col rounded-xl my-4 bg-[rgb(232,232,232)]`}
    >
      <div className="relative w-full h-3/4 top-4 right-0 flex items-center">
        <Image
          src={image}
          alt="lolol"
          width={3000}
          height={1800}
          className="w-full h-full object-contain"
        />
      </div>
      <div
        className={`relative w-5/6 bottom-10 flex flex-col ${
          position == "right"
            ? "items-end left-0 text-right"
            : "items-start right-0 text-left"
        } justify-between h-24  text-[#0d0d0d] transition-opacity delay-500 ease-in duration-500  ${
          isVisibleArray[0] ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="font-bold text-4xl">{title}</h2>
        <h3 className="font-light italic text-base">{children}</h3>
      </div>
    </div>
  );
};

export default SideOzellik;
