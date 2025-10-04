import React, { useRef } from "react";
import { gsap } from "gsap";
import Heading from "../Heading/Heading";
import { ArrowSvg } from "../../SvgContainer/SvgContainer";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ item }) => {
  const containerRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    gsap.killTweensOf([containerRef.current, descRef.current, btnRef.current]);

    // Animate card background + scale
    gsap.to(containerRef.current, {
      scale: 1.05,
      width: "+=20",
      duration: 0.6,
      ease: "power3.out",
      backgroundColor: item.colorCode,
      backgroundImage: "none",
    });

    // Hide paragraph smoothly (no space taken)
    gsap.to(descRef.current, {
      height: 0,
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power3.inOut",
      onStart: () => {
        descRef.current.style.overflow = "hidden";
      },
    });

    // Hide button smoothly
    gsap.to(btnRef.current, {
      opacity: 0,
      y: 50,
      pointerEvents: "none",
      duration: 0.6,
      ease: "power3.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.killTweensOf([containerRef.current, descRef.current, btnRef.current]);

    // Reset card background + scale
    gsap.to(containerRef.current, {
      scale: 1,
      width: "-=20",
      duration: 0.6,
      ease: "power3.inOut",
      backgroundImage: `linear-gradient(180deg, rgba(12, 25, 36, 0.10) 0%, rgba(12, 25, 36, 0.70) 50%), url(${item.bgImg})`,
      backgroundColor: "transparent",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    });

    // Show paragraph again smoothly
    gsap.to(descRef.current, {
      height: "auto",
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      onStart: () => {
        descRef.current.style.overflow = "visible";
      },
    });

    // Show button smoothly
    gsap.fromTo(
      btnRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        pointerEvents: "auto",
        duration: 0.8,
        ease: "power3.out",
      }
    );
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

        {/* Description - visible by default, collapsed on hover */}
        <div
          ref={descRef}
          style={{
            transform: "translateY(0px)",
            opacity: 1,
            height: "auto",
            overflow: "visible",
          }}
        >
          <Heading
            Txt={item.descreption}
            className="text-base text-primary-white font-normal leading-[150%] max-w-[352px]"
            Variant="h5"
          />
        </div>

        {/* Button */}
        <button
          onClick={() => {
            navigate("/projects");
          }}
          className="text-xs cursor-pointer uppercase group-hover:text-white text-metal-white font-extrabold leading-[150%] tracking-[1.92px]"
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
