import React, { useState } from "react";
import bg_img from "../../../assets/img/slider-img/coffe.png";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import { SmileFace } from "../../../SvgContainer/SvgContainer";

const Hero = () => {
  const [isHovering, setisHovering] = useState(false);
  return (
    <section className="h-auto w-full pb-[64px]  xl:py-[64px] 2xl:py-[112px] bg-primary-color ">
      <div className="  flex flex-col-reverse xl:flex-col gap-y-12 xl:gap-y-20 relative   ">
        <div className="flex container flex-col gap-y-6 xl:flex-row justify-between w-full ">
          <div className="flex flex-col gap-y-8 ">
            <Heading
              Variant={"h6"}
              Txt={"Industry"}
              className={
                "text-xs uppercase  text-metal-gray font-extrabold leading-[150%] tracking-[1.92px] "
              }
            />
            <Heading
              Txt={"Medium length hero heading goes here"}
              Variant={"h2"}
              className={
                "text-[24px] font-filson md:text-[28px] lg:text-[32px] xl:text-[36px] 3xl:text-[48px] font-bold text-primary-white leading-[120%] tracking-[-0.48px] max-w-[516px] "
              }
            />
          </div>
          <div className="flex flex-col gap-y-8 ">
            <Paragraph
              Txt={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
              }
              className={
                " text-base xl:text-lg text-primary-light-white font-normal leading-[150%] max-w-[616px]  "
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
          className="  w-full max-h-[420px] xl:max-h-[550px] 2xl:max-h-[738px] object-cover  transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Hero;
