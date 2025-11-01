import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Heading from "../Heading/Heading";
import { ArrowSvg } from "../../SvgContainer/SvgContainer";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ item }) => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const navigate = useNavigate();
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  const handleMouseEnter = () => {
    gsap.killTweensOf([
      containerRef.current,
      overlayRef.current,
      descRef.current,
      btnRef.current,
    ]);

    gsap.to(containerRef.current, {
      scale: 1.04,
      filter: "brightness(1.1)",
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.to(descRef.current, {
      opacity: 1,
      y: 0,
      height: "auto",
      duration: 0.45,
      delay: 0.1,
      ease: "power2.out",
      onStart: () => (descRef.current.style.overflow = "visible"),
    });

    gsap.to(btnRef.current, {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
      duration: 0.45,
      delay: 0.2,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.killTweensOf([
      containerRef.current,
      overlayRef.current,
      descRef.current,
      btnRef.current,
    ]);

    gsap.to(containerRef.current, {
      scale: 1,
      filter: "brightness(1)",
      duration: 0.45,
      ease: "power2.inOut",
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.55,
      ease: "power2.inOut",
    });

    gsap.to(descRef.current, {
      opacity: 0,
      y: 10,
      height: 0,
      duration: 0.4,
      ease: "power2.inOut",
      onStart: () => (descRef.current.style.overflow = "hidden"),
    });

    gsap.to(btnRef.current, {
      opacity: 0,
      y: 20,
      pointerEvents: "none",
      duration: 0.4,
      delay: 0.05,
      ease: "power2.inOut",
    });
  };

  // Default hover state for smaller devices (mobile/tablet)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    setIsSmallDevice(mediaQuery.matches);

    if (mediaQuery.matches) {
      // Trigger and lock hover state
      handleMouseEnter();

      // Disable hover events on smaller devices
      const currentContainer = containerRef.current;
      if (currentContainer) {
        currentContainer.onmouseenter = null;
        currentContainer.onmouseleave = null;
      }
    }
  }, []);

  const textClass = isSmallDevice
    ? "text-white"
    : "text-black group-hover:text-white";

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => {
        if (!window.matchMedia("(max-width: 1024px)").matches)
          handleMouseEnter();
      }}
      onMouseLeave={() => {
        if (!window.matchMedia("(max-width: 1024px)").matches)
          handleMouseLeave();
      }}
      className="relative w-[335px] 4xl:w-[461px] h-[450px] 3xl:h-[630px] rounded-[20px] overflow-hidden cursor-pointer group"
      style={{
        backgroundColor: item.colorCode,
        transformOrigin: "center center",
        transition: "background-color 0.6s ease",
      }}
    >
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 opacity-0"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(12,25,36,0.1) 0%, rgba(12,25,36,0.75) 80%), url(${item.bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "opacity 0.6s ease",
        }}
      ></div>

      <div className="absolute left-0 bottom-0 w-full flex flex-col gap-y-8 items-start p-6 2xl:p-8 z-10">
        <div className="flex flex-col gap-y-2 items-start">
          <Heading
            Txt={"“"}
            className={`text-[40px] capitalize ${textClass} font-bold leading-[150%] tracking-[-0.4px] ease-in-out duration-500`}
            Variant="h4"
          />
          <Heading
            Txt={item.quote}
            className={`text-2xl font-filson ${textClass} font-bold leading-[140%] tracking-[-0.24px] max-w-[352px] ease-in-out duration-500`}
            Variant="h5"
          />
        </div>

        <div
          ref={descRef}
          style={{
            opacity: 0,
            height: 0,
            overflow: "hidden",
            transform: "translateY(10px)",
          }}
        >
          <Heading
            Txt={item.descreption}
            className="text-base text-primary-white font-normal leading-[150%] max-w-[352px]"
            Variant="h5"
          />
        </div>

        <button
          ref={btnRef}
          onClick={() => navigate("/projects")}
          className="text-xs uppercase text-metal-white font-extrabold leading-[150%] tracking-[1.92px]"
          style={{
            transform: "translateY(20px)",
            opacity: 0,
            pointerEvents: "none",
          }}
        >
          <div className="flex items-center gap-x-2">
            {item.btnTxt} <ArrowSvg />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
