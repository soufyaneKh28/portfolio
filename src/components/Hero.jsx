import React from "react";
import { arrow, me, vector } from "../assets";

const Hero = () => {
  return (
    <section className="mt-5 py-20 scroll-smooth">
      <div className=" container pt-3 px-3 ">
        <div className=" text-center flex-col flex justify-center items-center">
          <div className="relative">
            <img src={vector} alt="" className="absolute -right-6 -top-6" />
            <div className=" py-2 px-5 border-solid border-2 border-white  flex items-center justify-center rounded-full poppins-bold">
              Hello!
            </div>
          </div>
          <h1 className=" text-[26px] font-medium mt-3">
            I'm <span className=" text-orange-500">Soufyane</span>, <br />
            Front-end Developer and UI UX Designer
          </h1>
        </div>
        <div className="pt-3 flex justify-center flex-col items-center relative overflow-hidden ">
          <div className=" bg-orange-500 w-[390px] h-[390px] absolute rounded-full top-[100px]"></div>
          <div className=" w-[300px] h-[360px] overflow-hidden">
            <img src={me} alt="" className=" w-[100%] grayscale" />
          </div>
          <div className=" absolute  rounded-full border-2  p-2  bottom-[20px] font-bold flex backdrop-blur-sm">
            <button className="bg-orange-500 z-10 py-2 px-4 rounded-full flex items-center hover:bg-slate-500 transition-colors">
              Portfolio <img src={arrow} alt="arrow" />
            </button>
            <button className="py-2 px-4 transition-colors hover:text-orange-500">
              Hire me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
