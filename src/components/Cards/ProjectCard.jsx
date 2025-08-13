import React, { useRef } from "react";
import { gsap } from "gsap";
import Heading from "../Heading/Heading";
import { ArrowSvg } from "../../SvgContainer/SvgContainer";

const ProjectCard = ({ item }) => {
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.killTweensOf([containerRef.current, descRef.current, btnRef.current]);

    gsap.to(containerRef.current, {
      scale: 1.05,
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(descRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power2.out",
      pointerEvents: "auto",
    });
    gsap.to(btnRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      delay: 0.15,
      ease: "power2.out",
      pointerEvents: "auto",
    });
  };

  const handleMouseLeave = () => {
    gsap.killTweensOf([containerRef.current, descRef.current, btnRef.current]);

    gsap.to(containerRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power2.in",
    });
    gsap.to(descRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      pointerEvents: "none",
    });
    gsap.to(btnRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      pointerEvents: "none",
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-[461px] h-[630px] rounded-[20px] relative cursor-pointer overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(12, 25, 36, 0.10) 0%, rgba(12, 25, 36, 0.70) 50%), url(${item.bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transformOrigin: "center center",
      }}
    >
      <div className="absolute left-0 bottom-0 w-full rounded-[20px] flex flex-col gap-y-8 items-start p-8">
        <div className="flex flex-col gap-y-2 items-start">
          <Heading
            Txt={"“"}
            className="text-[40px] capitalize text-primary-white font-bold leading-[150%] tracking-[-0.4px]"
            Variant="h4"
          />
          <Heading
            Txt={item.quote}
            className="text-2xl text-primary-white font-bold leading-[140%] tracking-[-0.24px] max-w-[352px]"
            Variant="h5"
          />
        </div>

        <Heading
          ref={descRef}
          Txt={item.descreption}
          className="text-base text-primary-white font-normal leading-[150%] max-w-[352px]"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            pointerEvents: "none",
          }}
          Variant="h5"
        />

        <button
          ref={btnRef}
          className="text-base capitalize cursor-pointer text-primary-white font-extrabold leading-[150%] tracking-[1.92px]"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            pointerEvents: "none",
          }}
        >
          <div className="flex flex-row gap-x-2">
            {item.btnTxt} <ArrowSvg />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
