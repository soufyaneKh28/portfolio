import React from "react";
import { Web_Dev, star, ui_ux, Video_Editing, Wireframe } from "../assets";

const Slider = () => {
  const images = [
    {
      img: Web_Dev,
      alt: "web-dev",
    },

    {
      img: ui_ux,
      alt: "ui-ux",
    },
    {
      img: Video_Editing,
      alt: "Video_Editing",
    },
    {
      img: Wireframe,
      alt: "Wireframe",
    },
    {
      img: star,
      alt: "star",
    },
  ];
  return (
    <main className="  flex flex-col justify-center  overflow-hidden">
      <div className=" bg-secondary_color w-full py-[20px] inline-flex flex-nowrap">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {images.map((img) => (
            <>
              {img.img === star ? null : (
                <>
                  <li key={img.alt}>
                    <img
                      className="w-[130px] md:w-[150px]"
                      src={img.img === star ? null : img.img}
                      alt={img.alt === star ? null : img.alt}
                    />
                  </li>
                  <li>
                    <img className="w-[15px]" src={star} alt={"star"} />
                  </li>
                </>
              )}
            </>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {images.map((img) => (
            <>
              {img.img === star ? null : (
                <>
                  <li key={img.alt}>
                    <img
                      className="w-[130px] md:w-[150px]"
                      src={img.img === star ? null : img.img}
                      alt={img.alt === star ? null : img.alt}
                    />
                  </li>
                  <li>
                    <img className="w-[15px]" src={star} alt={"star"} />
                  </li>
                </>
              )}
            </>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Slider;
