import React, { useState } from "react";
import Heading from "../../Heading/Heading";
import { CuteSmileFace, SmileFace } from "../../../SvgContainer/SvgContainer";

import person from "../../../assets/img/review.avif";
import coffee from "../../../assets/img/slider-img/coffe.png";
import cookie from "../../../assets/img/slider-img/cookie.png";
import medicine from "../../../assets/img/slider-img/medicine.png";

const Portfolio = () => {
  const imgArr = [coffee, cookie, medicine];

  const [isHovering, setisHovering] = useState(false);
  return (
    <section className="h-auto w-full bg-primary-color  py-[112px] overflow-hidden">
      <div className="container flex flex-col gap-y-20 ">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-y-4 mb-12 lg:mb-0">
            <Heading
              Variant="h6"
              Txt="Portfolio"
              className="text-base capitalize text-primary-light-white font-extrabold leading-[150%] tracking-[1.92px]"
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
          {imgArr.map((img, idx) => {
            return (
              <img
                src={img}
                key={idx}
                alt="not found"
                className="h-[240px] w-[33.33%] object-cover rounded-[16px] "
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
