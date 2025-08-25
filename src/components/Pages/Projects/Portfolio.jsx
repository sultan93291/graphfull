import React, { useState } from "react";
import Heading from "../../Heading/Heading";
import { ArrowLeft, CuteSmileFace, SmileFace } from "../../../SvgContainer/SvgContainer";

import person from "../../../assets/img/review.avif";
import coffee from "../../../assets/img/slider-img/coffe.png";
import cookie from "../../../assets/img/slider-img/cookie.png";
import medicine from "../../../assets/img/slider-img/medicine.png";

const Portfolio = () => {
  const imgArr = [coffee, cookie, medicine];

  const projectArr = [
    {
      img: coffee,
      title: "Smart branding for a food safety and quality consultancy",
      btnTxt: "see more",
    },
    {
      img: cookie,
      title: "Smart branding for a food safety and quality consultancy",
      btnTxt: "see more",
    },
    {
      img: medicine,
      title: "Smart branding for a food safety and quality consultancy",
      btnTxt: "see more",
    },
  ];

  const [isHovering, setisHovering] = useState(false);

  return (
    <section className="h-auto w-full bg-primary-color  py-[60px] 2xl:py-[80px] 3xl:py-[120px]  overflow-hidden">
      <div className="container flex flex-col gap-y-12 3xl:gap-y-20 ">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-y-2 xl:gap-y-4 xl:mb-12 lg:mb-0">
            <Heading
              Variant="h6"
              Txt="Portfolio"
              className={
                "text-xs uppercase  text-metal-white font-extrabold leading-[150%] tracking-[1.92px] "
              }
            />
            <div className="flex flex-col gap-y-6">
              <Heading
                Variant="h3"
                Txt="See more projects"
                className="md:text-[32px] text-[24px] lg:text-[28px] xl:text-[36px] 3xl:text-[40px] text-primary-white font-bold leading-[150%] tracking-[-0.4px] "
              />
            </div>
          </div>
          <div>
            <div
              onMouseEnter={() => setisHovering(true)}
              onMouseLeave={() => setisHovering(false)}
              className={`hidden lg:flex items-center h-auto  font-bold justify-start cursor-pointer p-2 rounded-[8px] bg-light-blue overflow-hidden transition-all duration-300 ${
                isHovering ? "w-36" : "w-10"
              }`}
            >
              <div
                className={`flex-shrink-0 transition-opacity duration-300 ${
                  isHovering ? "opacity-0" : "opacity-100"
                }`}
              >
                <CuteSmileFace />
              </div>
              <span
                className={` whitespace-nowrap transition-all duration-300 ${
                  isHovering
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2"
                }`}
              >
                Book a Call
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1   lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-4 w-full relative">
          {projectArr.map((project, idx) => (
            <div
              key={idx}
              className="group relative cursor-pointer rounded-[16px] overflow-hidden transition-all duration-700 ease-in-out h-[240px] "
            >
              {/* Image */}
              <img
                src={project.img}
                alt="not found"
                className="h-full w-full object-cover rounded-[16px] transition-transform duration-700 ease-in-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black/30 rounded-[16px] flex items-end p-6
                      opacity-100 sm:opacity-0 group-hover:sm:opacity-100 transition-opacity duration-700 ease-in-out z-10"
              >
                <div className="flex flex-col  max-w-[350px]  gap-y-3">
                  <Heading
                    Txt={project.title}
                    Variant="h3"
                    className="text-base md:text-lg 2xl:text-base font-medium leading-[120%] text-white drop-shadow-md
                       transform translate-y-0 sm:translate-y-6 opacity-100 sm:opacity-0 group-hover:sm:translate-y-0 group-hover:sm:opacity-100 transition-all duration-500 delay-200"
                  />
                  <button
                    className="flex flex-row items-center gap-x-2 text-xs uppercase text-white font-extrabold leading-[150%] tracking-[1.92px]
                       transform translate-y-0 sm:translate-y-6 opacity-100 sm:opacity-0 group-hover:sm:translate-y-0 group-hover:sm:opacity-100 transition-all duration-500 delay-400"
                  >
                    <span>{project.btnTxt}</span>
                    <ArrowLeft />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
