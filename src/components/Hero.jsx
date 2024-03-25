import React from "react";
import { arrow, me, vector } from "../assets";


const Hero = () => {
  return (
    <section className=" pt-20 scroll-smooth bg-main_dark -mt-1">
      <div className=" container pt-3 px-3 ">
        <div className=" text-center flex-col flex justify-center items-center">
          <div className=" flex flex-row justify-center items-center">
            <div className=" h-1 w-6 bg-secondary_color " />
            <div className=" py-2 px-3 border-solid text-[16px] font-medium text-white">
              Hello!
            </div>
          </div>
          <h1 className=" text-white text-[32px] md:text-[40px]  font-bold mt-3 leading-[55px]">
            I'm <span className=" text-secondary_color">Soufyane</span>, <br />
            Front-end Developer and UI UX Designer
          </h1>
        </div>
        <div className="pt-3 flex justify-center flex-col items-center relative overflow-hidden ">
          <div className=" bg-main_color w-[370px] h-[350px] md:w-[550px] md:h-[550px] absolute rounded-full top-[80px]"></div>
          <div className=" w-[250px] h-[370px]  md:w-[379px] md:h-[524px] overflow-hidden">
            <img src={me} alt="" className=" w-[100%] grayscale" />
          </div>
          <div className=" absolute  rounded-full border-[3px] border-secondary_color  p-2  bottom-[20px] font-bold flex backdrop-blur-sm">
            <button className="text-[20px] bg-secondary_color z-10 py-2 px-4 rounded-full flex items-center hover:bg-slate-500 transition-colors text-main_dark">
              Portfolio <img src={arrow} alt="arrow" />
            </button>
            <button className="py-2 text-white px-4 text-[20px] transition-colors hover:text-orange-500">
              Hire me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
