import React from "react";
import {
  PP,
  Java,
  JavaScript,
  react,
  Material_Ui,
  Python,
  Git,
  GitHub,
  Html,
  Vs,
  Tailwind,
  Firebase,
  Figma,
  Css,
  ChatGPT,
  Bootstrap,
} from "../assets";
const About = () => {
  const skills = [
    {
      img: PP,
      alt: "PP",
    },
    {
      img: Java,
      alt: "java",
    },
    {
      img: JavaScript,
      alt: "javaScript",
    },
    {
      img: react,
      alt: "react",
    },
    {
      img: Material_Ui,
      alt: "Material_Ui",
    },
    {
      img: Python,
      alt: "Python",
    },
    {
      img: Git,
      alt: "Git",
    },
    {
      img: GitHub,
      alt: "GitHub",
    },
    {
      img: Html,
      alt: "Html",
    },
    {
      img: Vs,
      alt: "Vs",
    },
    {
      img: Tailwind,
      alt: "Tailwind",
    },
    {
      img: Firebase,
      alt: "Firebase",
    },
    {
      img: Figma,
      alt: "Figma",
    },
    {
      img: Css,
      alt: "CSS3",
    },
    {
      img: ChatGPT,
      alt: "ChatGPT",
    },
    {
      img: Bootstrap,
      alt: "Bootstrap",
    },
  ];
  return (
    <section id="About" className="  rounded-3xl p-3  scroll-smooth ">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="about flex flex-col items-center">
          <div className="flex items-center">
            <div className=" h-1 w-6 bg-main_color " />
            <div className=" py-2 px-3 border-solid text-[24px] font-semibold text-main_dark">
              About Me
            </div>
          </div>
          <h2 className=" text-center text-[32px] md:text-[42px] max-w-[400px] font-bold">
            Who is <span className=" text-main_color">Soufyane Khalfallah</span>{" "}
            ?
          </h2>
          <p className=" text-center text-[16px] w-[350px] leading-7 mt-5  text-main_dark">
            Hey there! I'm Soufyane, a multidisciplinary creative soul
            passionate about weaving digital experiences and crafting visual
            stories. At 21 years old, I've embarked on a journey as a Front-End
            Developer, UI/UX Designer, Video Editor, Photographer, and Painter.
            I thrive on the dynamic intersection of technology, design, and art,
            constantly pushing boundaries to create compelling and immersive
            experiences.
          </p>
          <button className=" bg-main_color text-white font-bold py-3 px-8 rounded-full   my-7">
            Download CV
          </button>
        </div>
        <div className="skills max-w-[400px] max-h-[350px] flex flex-wrap my-5 justify-center mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.alt}
              className=" w-[70px] bg-[#ab9fdc] hover:scale-110 hover:shadow transition-all  flex justify-center items-center m-2  rounded-full h-[60px]"
            >
              <img src={skill.img} alt={skill.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className="container py-6 flex flex-col md:flex-row  justify-between">
        <div className="education">
          <h3 className=" text-secondary_color text-[24px] font-semibold">
            Education
          </h3>
        </div>
        <div className="Work"></div>
      </div>
    </section>
  );
};

export default About;
