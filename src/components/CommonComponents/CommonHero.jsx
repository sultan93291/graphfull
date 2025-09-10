import React, { useState } from "react";
import bg_img from "../../assets/img/slider-img/dope.png";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import { SmileFace } from "../../SvgContainer/SvgContainer";
import defalut_arr_img from "../../assets/img/slider-img/jar.jpg";
import Marquee from "react-fast-marquee";

const items = [
  {
    id: 1,
    title: "Presentation Websites",
    img: defalut_arr_img,
  },
  {
    id: 2,
    title: "Webflow Front-End Development",
    img: defalut_arr_img,
  },
  {
    id: 3,
    title: "Landing Page Design",
    img: defalut_arr_img,
  },
  {
    id: 4,
    title: "E-commerce Flows",
    img: defalut_arr_img,
  },
  {
    id: 5,
    title: "CMS Systems",
    img: defalut_arr_img,
  },
  {
    id: 1,
    title: "Presentation Websites",
    img: defalut_arr_img,
  },
  {
    id: 2,
    title: "Webflow Front-End Development",
    img: defalut_arr_img,
  },
  {
    id: 3,
    title: "Landing Page Design",
    img: defalut_arr_img,
  },
  {
    id: 4,
    title: "E-commerce Flows",
    img: defalut_arr_img,
  },
  {
    id: 5,
    title: "CMS Systems",
    img: defalut_arr_img,
  },
];

const CommonHero = ({
  bgImg = bg_img,
  title = "SERVICES",
  subTitle = "Strategic websites that move brands forward",
  descreption = "From first concept to final click, we craft web experiences that deliver, combining great user experience, clear structure, and brand alignment to drive real results.",
  btnTxt = "Book a Call",
  marqueeArr = items,
}) => {
  const [isHovering, setisHovering] = useState(false);

  return (
    <section
      className="h-[900px] w-full"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-auto w-full py-[205px]  ">
        <div className="flex flex-col gap-y-20">
          <div className="flex flex-col gap-y-8 container  ">
            <Heading Variant="h6" Txt={title} className="small-heading" />

            <Heading
              Variant="h3"
              Txt={subTitle}
              className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 3xl:text-[48px] text-primary-white font-bold leading-[120%] tracking-[-0.4px] max-w-[560px]  "
            />
            <Paragraph
              Txt={descreption}
              className="text-sm text-primary-light-white font-medium leading-[150%] max-w-[560px]  "
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
                {btnTxt}
              </span>
            </div>
          </div>
          <Marquee gradient={false} speed={50} pauseOnHover>
            {items.map((item, idx) => {
              return (
                <div
                  style={{
                    backgroundColor: "rgba(16, 32, 45, 0.60)",
                  }}
                  className="h-auto mx-1.5 cursor-pointer w-auto p-2.5 flex flex-row items-center rounded-[8px]  gap-x-4"
                  key={idx}
                >
                  <img
                    src={item.img}
                    className="w-[71px] h-10 rounded-[8px]"
                    alt="not found"
                  />
                  <Heading
                    Variant="h6"
                    Txt={item.title}
                    className="text-base font-bold text-metal-white leading-[150%] "
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default CommonHero;
