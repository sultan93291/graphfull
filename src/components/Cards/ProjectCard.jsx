import React, { useRef } from "react";
import { gsap } from "gsap";
import Heading from "../Heading/Heading";
import { ArrowSvg } from "../../SvgContainer/SvgContainer";

const ProjectCard = ({ item }) => {
  const containerRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.killTweensOf([containerRef.current, descRef.current, btnRef.current]);

    // Scale card, increase width, and change background
    gsap.to(containerRef.current, {
      scale: 1.05,
      width: "+=20", 
      duration: 0.5,
      ease: "power2.out",
      backgroundColor: item.colorCode,
      backgroundImage: "none",
    });

    // Hide description and button
    gsap.to([descRef.current, btnRef.current], {
      opacity: 0,
      y: 20,
      pointerEvents: "none",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.killTweensOf([containerRef.current, descRef.current, btnRef.current]);

    // Reset card scale, width, and background
    gsap.to(containerRef.current, {
      scale: 1,
      width: "-=20",
      duration: 0.5,
      ease: "power2.in",
      backgroundImage: `linear-gradient(180deg, rgba(12, 25, 36, 0.10) 0%, rgba(12, 25, 36, 0.70) 50%), url(${item.bgImg})`,
      backgroundColor: "transparent",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    });

    // Show description and button
    gsap.to([descRef.current, btnRef.current], {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
      duration: 0.7,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-[335px] 4xl:w-[461px] h-[450px] 3xl:h-[630px] group rounded-[20px] relative cursor-pointer overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(12, 25, 36, 0.10) 0%, rgba(12, 25, 36, 0.70) 50%), url(${item.bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transformOrigin: "center center",
      }}
    >
      <div className="absolute left-0 bottom-0 w-full rounded-[20px] flex flex-col gap-y-8 items-start p-6 2xl:p-8">
        {/* Quote section - always visible */}
        <div className="flex flex-col gap-y-2 items-start">
          <Heading
            Txt={"“"}
            className="text-[40px] capitalize text-primary-white font-bold leading-[150%] tracking-[-0.4px]"
            Variant="h4"
          />
          <Heading
            Txt={item.quote}
            className="text-2xl font-filson text-primary-white font-bold leading-[140%] tracking-[-0.24px] max-w-[352px]"
            Variant="h5"
          />
        </div>

        {/* Description - visible by default, hidden on hover */}
        <Heading
          ref={descRef}
          Txt={item.descreption}
          className="text-base group-hover:hidden ease-in-out duration-300 text-primary-white font-normal leading-[150%] max-w-[352px]"
          style={{
            transform: "translateY(0px)",
            opacity: 1,
            pointerEvents: "auto",
          }}
          Variant="h5"
        />

        {/* Button - visible by default, hidden on hover */}
        <button
          ref={btnRef}
          className="text-xs itec uppercase text-metal-white font-extrabold leading-[150%] tracking-[1.92px]"
          style={{
            transform: "translateY(0px)",
            opacity: 1,
            pointerEvents: "auto",
          }}
        >
          <div className="flex items-center flex-row gap-x-2">
            {item.btnTxt} <ArrowSvg />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
