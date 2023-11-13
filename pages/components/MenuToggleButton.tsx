import Image from "next/image";
import React from "react";

interface MenuToggleButtonProps {
  setChatShow: React.Dispatch<React.SetStateAction<boolean>>;
  chatShow: boolean;
}

const MenuToggleButton: React.FC<MenuToggleButtonProps> = ({ setChatShow, chatShow }) => {
  return (
    <div
      key={"menu toggle button"}
      className="relative h-8 right-8 z-50 flex justify-center items-center group toggle-holder inverse-hover"
      onClick={() => setChatShow(!chatShow)}
      style={{ filter: chatShow ? "invert(1)" : "" }}
    >
      <Image
        src="/bumerangtek.svg"
        alt="chat toggle button"
        width={10}
        height={14}
        className={
          chatShow
            ? "-rotate-90 mt-0.5 w-7 translate-x-2 transition-transform duration-500"
            : "rotate-90 translate-x-4 transition-transform duration-500"
        }
      />
      <Image
        src="/bumerangtek.svg"
        alt="chat toggle button"
        width={20}
        height={24}
        className={
          "rotate-90 -translate-x-1.5 transition-transform duration-500 group-hover:scale-150"
        }
      />
    </div>
  );
};

export default MenuToggleButton;
