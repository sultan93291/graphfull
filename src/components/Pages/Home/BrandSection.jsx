import React from "react";
import Heading from "../../Heading/Heading";
import webflow from "../../../assets/img/brand/webflow.png";
import relume from "../../../assets/img/brand/relume.png";
import Marquee from "react-fast-marquee";

const BrandSection = () => {
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
    <section className="h-auto w-full py-20 flex flex-col items-center gap-y-12  ">
      <Heading
        Variant={"h6"}
        Txt={"trusted by 150+ brands"}
        className={"text-base capitalize text-primary-light-white font-bold "}
      />
      <Marquee
        play={true}
        pauseOnHover={true}
        direction="left"
        gradient={false}
      >
        {brandImg.map((item, idx) => (
          <img
            key={idx}
            src={item}
            alt={`brand-logo-${idx}`}
            className="w-[200px] h-[55px] object-contain mx-6 cursor-pointer "
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
            className="w-[200px] h-[55px] object-contain mx-6 cursor-pointer "
          />
        ))}
      </Marquee>
    </section>
  );
};

export default BrandSection;
