import React, { useState } from "react";
import bg_img from "../../../assets/img/slider-img/coffe.png";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import { SmileFace } from "../../../SvgContainer/SvgContainer";

const Hero = () => {
  const [isHovering, setisHovering] = useState(false);
  return (
    <section className="h-auto w-full py-[112px] bg-primary-color ">
      <div className=" container flex flex-col gap-y-20 relative   ">
        <div className="flex flex-row justify-between w-full ">
          <div className="flex flex-col gap-y-8 ">
            <Heading
              Variant={"h6"}
              Txt={"Creative done right"}
              className={
                "text-xs uppercase  text-metal-white font-extrabold leading-[150%] tracking-[1.92px] "
              }
            />
            <Heading
              Txt={"Design that tells your story"}
              Variant={"h2"}
              className={
                "text-[48px] font-bold text-primary-white leading-[120%] tracking-[-0.48px] max-w-[516px] "
              }
            />
          </div>
          <div className="flex flex-col gap-y-8 ">
            <Paragraph
              Txt={
                "Graphfull turns vision into visuals that stick. Smart strategy, bold design, and zero fluff, because your brand deserves more than just looking pretty."
              }
              className={
                "text-lg text-primary-light-white font-normal leading-[150%] max-w-[616px]  "
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
          className=" rounded-[16px] w-full h-[738px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Hero;
