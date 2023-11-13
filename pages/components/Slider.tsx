import React, { useEffect, useState } from "react";
import HorScroll from "./HorScroll";

type Props = {};

const Slider = (props: Props) => {
  const [page, setPage] = useState(1); // Initialize with the current page

  useEffect(() => {
    const scrollableDiv = document.getElementById("scrollableDiv");
    const handleScroll = () => {
      if (scrollableDiv) {
        const scrollPosition = scrollableDiv.scrollLeft;
        console.log(scrollPosition);
        const currentPage = Math.floor((scrollPosition + 700) / 640);

        if (currentPage !== page) {
          setPage(currentPage);
        }
      }
    };

    if (scrollableDiv) {
      scrollableDiv.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener("scroll", handleScroll);
      }
    };
  }, [page]);

  return (
    <div className="w-full h-screen relative flex flex-col items-start justify-start">
      <div
        id="scrollableDiv"
        className="relative flex h-screen w-full justify-start overflow-x-scroll scroll"
      >
        <HorScroll title={"TAKVİM"} image={"/image_2.png"}>
          “Hayatı <span className="font-bold">sıkışık </span>değil
          <br /> <span className="font-bold">seri</span> yaşa”
        </HorScroll>
        <HorScroll title={"PATİKA"} image={"/image_2.png"}>
          “<span className="font-bold">Zekana </span>değil
          <br /> <span className="font-bold">çabana</span> güven”
        </HorScroll>
        <HorScroll title={"KÜRSÜ"} image={"/image_2.png"}>
          “<span className="font-bold">Tabanı </span>taşı
          <br /> <span className="font-bold">tavana</span> sınır koyma”
        </HorScroll>
      </div>
      <div className="slider-buttons flex flex-row w-auto justify-between items-center mx-auto">
        {[1, 2, 3].map((pageNumber) => (
          <div
            key={pageNumber}
            className={`h-2 mx-1 rounded border border-black transition-width duration-300 ${
              pageNumber === page ? "bg-black w-8" : "w-4 "
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
