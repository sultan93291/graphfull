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
    <section className="h-auto w-full bg-primary-color  py-[112px] overflow-hidden">
      <div className="container flex flex-col gap-y-20 ">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-y-4 mb-12 lg:mb-0">
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
                className="text-[40px] text-primary-white font-bold leading-[150%] tracking-[-0.4px] "
              />
            </div>
          </div>
          <div>
            <div
              onMouseEnter={() => setisHovering(true)}
              onMouseLeave={() => setisHovering(false)}
              className={`flex items-center h-auto  font-bold justify-start cursor-pointer p-2 rounded-[8px] bg-light-blue overflow-hidden transition-all duration-300 ${
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
        <div className="flex flex-row gap-x-4  w-full relative ">
          {projectArr.map((project, idx) => {
            return (
              <div
                className="h-[240px] cursor-pointer w-[33.33%] group relative rounded-[16px] overflow-hidden transition-all duration-[1000ms] ease-in-out hover:w-[40%]"
                key={idx}
              >
                {/* Image zoom */}
                <img
                  src={project.img}
                  alt="not found"
                  className="h-full w-full object-cover rounded-[16px] transition-transform duration-[1000ms] ease-in-out group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 rounded-[16px] flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] ease-in-out z-10">
                  <div className="flex flex-col gap-y-3">
                    {/* Title with stagger */}
                    <Heading
                      className="text-base font-medium leading-[120%] text-white drop-shadow-md transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[800ms] delay-200"
                      Txt={project.title}
                      Variant={"h3"}
                    />
                    {/* Button with stagger */}
                    <button className="flex flex-row items-center gap-x-2 text-xs uppercase text-white font-extrabold leading-[150%] tracking-[1.92px] transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[800ms] delay-400">
                      <span>{project.btnTxt}</span>
                      <ArrowLeft />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
