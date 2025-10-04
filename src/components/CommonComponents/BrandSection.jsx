import React from "react";

import webflow from "../../assets/img/brand/webflow.png";
import relume from "../../assets/img/brand/relume.png";
import Marquee from "react-fast-marquee";
import Heading from "../Heading/Heading";

const BrandSection = ({ isBgColr =true }) => {
  const brandImg = [
    webflow,
    relume,
    webflow,
    relume,
    webflow,
    relume,
    webflow,
    relume,
    webflow,
    relume,
    webflow,
    relume,
  ];
  return (
    <section
      className={`h-auto ${
        isBgColr && "bg-[#0C1924]"
      }   w-full py-10 2xl:py-20 flex flex-col items-center gap-y-4 lg:gap-y-6  xl:gap-y-12`}
    >
      <Heading
        Variant={"h6"}
        Txt={"trusted by 150+ brands"}
        className={"small-heading "}
      />
      <Marquee
        play={true}
        pauseOnHover={false}
        direction="left"
        gradient={false}
      >
        {brandImg.map((item, idx) => (
          <img
            key={idx}
            src={item}
            alt={`brand-logo-${idx}`}
            className=" w-[134px] h-[44px] lg:w-[150px] xl:w-[200px] lg:h-[55px] object-contain mx- xl:mx-6 cursor-pointer "
          />
        ))}
      </Marquee>
      <Marquee
        play={true}
        pauseOnHover={true}
        direction="right"
        gradient={false}
      >
        {brandImg.map((item, idx) => (
          <img
            key={idx}
            src={item}
            alt={`brand-logo-${idx}`}
            className=" w-[134px] h-[44px] lg:w-[150px] xl:w-[200px] lg:h-[55px] object-contain mx- xl:mx-6 cursor-pointer "
          />
        ))}
      </Marquee>
    </section>
  );
};

export default BrandSection;
