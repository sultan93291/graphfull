import React, { useState } from "react";
import bg_img from "../../../assets/img/slider-img/coffe.png";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import { SmileFace } from "../../../SvgContainer/SvgContainer";

const Hero = () => {
  const [isHovering, setisHovering] = useState(false);
  return (
    <section className="h-auto w-full py-[64px] 2xl:py-[112px] bg-primary-color ">
      <div className=" container flex flex-col gap-y-12 lg:gap-y-20 relative   ">
        <div className="flex flex-col gap-y-5 xl:flex-row justify-between w-full ">
          <div className="flex flex-col gap-y-4 lg:gap-y-8 ">
            <Heading
              Variant={"h6"}
              Txt={"Creative done right"}
              className={"small-heading !text-metal-gray  "}
            />
            <Heading
              Txt={"Design that tells your story"}
              Variant={"h2"}
              className={
                "text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 3xl:text-[48px] font-bold text-primary-white leading-[120%] tracking-[-0.48px] max-w-[516px] "
              }
            />
          </div>
          <div className="flex flex-col gap-y-8 ">
            <Paragraph
              Txt={
                "Graphfull turns vision into visuals that stick. Smart strategy, bold design, and zero fluff, because your brand deserves more than just looking pretty."
              }
              className={
                " text-base lg:text-lg text-primary-light-white font-normal leading-[150%] max-w-[616px]  "
              }
            />
            <div
              onMouseEnter={() => setisHovering(true)}
              onMouseLeave={() => setisHovering(false)}
              className={`hidden xl:flex items-center h-auto font-bold justify-start cursor-pointer p-2 rounded-[8px] bg-primary-yellow overflow-hidden transition-all duration-300 ${
                isHovering ? "w-36" : "w-10"
              }`}
            >
              <div
                className={`flex-shrink-0 transition-opacity duration-300 ${
                  isHovering ? "opacity-0" : "opacity-100"
                }`}
              >
                <SmileFace />
              </div>
              <span
                className={`whitespace-nowrap transition-all duration-300 ${
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
        <img
          src={bg_img}
          alt="not found"
          className=" rounded-[16px] w-full max-h-[188px] sm:max-h-[300px] lg:max-h-[400px] 2xl:max-h-[738px]  transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg  object-cover cursor-pointer  group-hover:scale-105 "
        />
      </div>
    </section>
  );
};

export default Hero;
