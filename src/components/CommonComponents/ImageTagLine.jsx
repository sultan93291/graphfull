import React, { useState } from "react";

import bg_img from "../../assets/img/slider-img/coffe.png";
import { CuteSmileFace } from "../../SvgContainer/SvgContainer";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";

const ImageTagLine = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="h-auto w-auto bg-primary-color py-[112px]">
      <div className="container items-center flex flex-row justify-between ">
        <div className="flex  flex-col gap-y-8 max-w-[560px] ">
          <div className="flex flex-col gap-y-6 ">
            <Heading
              Variant="h6"
              Txt="NEXT STEPS"
              className="text-xs uppercase text-metal-white font-extrabold leading-[150%] tracking-[1.92px]"
            />
            <div className="flex flex-col gap-y-4 ">
              <Heading
                Variant="h3"
                Txt="Your brand’s next chapter is waiting"
                className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 3xl:text-[48px] text-primary-white font-bold leading-[120%] tracking-[-0.4px]"
              />
              <Paragraph
                Txt="We’ll help you shape it with fresh ideas, refined visuals, and strategic design that capture your vision and leave a lasting impression."
                className="text-xl text-metal-white font-normal leading-[140%] tracking-[-0.02px] "
              />
              <Paragraph
                Txt={`
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.`}
                className="text-base text-primary-light-white font-normal leading-[150%]"
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={`hidden xl:flex items-center h-auto font-bold justify-start cursor-pointer p-2 rounded-[8px] bg-primary-green overflow-hidden transition-all duration-300 ${
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
        <img
          src={bg_img}
          className="w-[616x] h-[640px] rounded-[16px] object-cover transition-transform duration-500 group-hover:scale-105 "
          alt="not found"
        />
      </div>
    </section>
  );
};

export default ImageTagLine;
