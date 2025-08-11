import React, { useState } from "react";
import {
  Dope,
  FigmaIcon,
  Illusion,
  Poco,
  SmileFace,
} from "../../../SvgContainer/SvgContainer";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import medicine from "../../../assets/img/slider-img/medicine.png";
import illusion from "../../../assets/img/slider-img/illusion.png";
import cookie from "../../../assets/img/slider-img/cookie.png";
import jar from "../../../assets/img/slider-img/jar.jpg";
import coffee from "../../../assets/img/slider-img/coffe.png";
import dope from "../../../assets/img/slider-img/dope.png";

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [videoReady, setVideoReady] = useState({});
  const [isHovering, setisHovering] = useState(false);

  const colorCodes = [
    { id: 1, name: "green", color: "#21694A" },
    { id: 2, name: "purple", color: "#7D5B94" },
    { id: 3, name: "yellow", color: "#D8EA68" },
    { id: 4, name: "red", color: "#21694A" },
    { id: 5, name: "orange", color: "#F26129" },
  ];

  const itemsArr = [
    {
      id: 1,
      img: medicine,
      svg: FigmaIcon,
      colorSlug: "green",
      videoUrl:
        "https://res.cloudinary.com/dfogl3n5q/video/upload/v1754562722/full_stack_app/videos/company_overview/1.mp4",
    },
    {
      id: 2,
      img: illusion,
      colorSlug: "purple",
      videoUrl:
        "https://res.cloudinary.com/dfogl3n5q/video/upload/v1754562722/full_stack_app/videos/company_overview/1.mp4",
    },
    {
      id: 3,
      img: cookie,
      colorSlug: "yellow",
      videoUrl:
        "https://res.cloudinary.com/dfogl3n5q/video/upload/v1754562722/full_stack_app/videos/company_overview/1.mp4",
    },
    {
      id: 4,
      img: jar,
      colorSlug: "yellow",
      videoUrl:
        "https://res.cloudinary.com/dfogl3n5q/video/upload/v1754562722/full_stack_app/videos/company_overview/1.mp4",
    },
    {
      id: 5,
      img: medicine,
      svg: FigmaIcon,
      colorSlug: "green",
      videoUrl:
        "https://res.cloudinary.com/dfogl3n5q/video/upload/v1754562722/full_stack_app/videos/company_overview/1.mp4",
    },
    {
      id: 6,
      img: coffee,
      colorSlug: "green",
      videoUrl:
        "https://res.cloudinary.com/dfogl3n5q/video/upload/v1754562722/full_stack_app/videos/company_overview/1.mp4",
    },
    {
      id: 7,
      img: dope,
      colorSlug: "red",
      videoUrl:
        "https://res.cloudinary.com/dfogl3n5q/video/upload/v1754562722/full_stack_app/videos/company_overview/1.mp4",
    },
  ];

  const repeatedImages = [...itemsArr, ...itemsArr];

  const handleVideoCanPlay = key => {
    setVideoReady(prev => ({ ...prev, [key]: true }));
  };

  const renderImages = prefix =>
    repeatedImages.map((item, idx) => {
      const key = `${prefix}-${idx}`;
      const isHovered = hoveredIndex === key;
      const isReady = videoReady[key] === true;

      const matchedColor = colorCodes.find(c => c.name === item.colorSlug);
      const colorValue = matchedColor ? matchedColor.color : "transparent";
      const Svg = item.svg;

      return (
        <div
          key={key}
          className="w-[210px] cursor-pointer h-[316px] relative my-2.5 rounded-[12px]"
          onMouseEnter={() => {
            setHoveredIndex(key);
            setVideoReady(prev => ({ ...prev, [key]: false }));
          }}
          onMouseLeave={() => {
            setHoveredIndex(null);
            setVideoReady(prev => ({ ...prev, [key]: false }));
          }}
        >
          {/* Image always there, fades out when video ready */}
          <img
            src={item.img}
            alt={`${prefix}-slider-${idx}`}
            loading="lazy"
            draggable={false}
            className="absolute top-0 left-0 h-full w-full object-cover rounded-[12px] z-10 select-none transition-opacity duration-700"
            style={{ opacity: isHovered && isReady ? 0 : 1 }}
          />

          {/* Video fades in when ready */}
          {isHovered && (
            <video
              src={item.videoUrl}
              autoPlay
              muted
              loop
              preload="auto"
              playsInline
              onCanPlay={() => handleVideoCanPlay(key)}
              className="absolute top-0 left-0 h-full w-full object-cover rounded-[12px] z-20 select-none transition-opacity duration-700"
              style={{ opacity: isReady ? 1 : 0, pointerEvents: "none" }}
            />
          )}

          {Svg && (
            <div
              style={{ backgroundColor: colorValue }}
              className="absolute top-0 left-0 h-auto p-2 rounded-[6.51px] overflow-hidden w-auto mt-2.5 ml-2 z-30 flex items-center"
            >
              <Svg />
            </div>
          )}
        </div>
      );
    });

  return (
    <section className="flex flex-row justify-between items-center container">
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-6">
          <Heading
            Variant={"h3"}
            Txt={"Design that makes sense, and makes moves"}
            className="text-primary-light-white text-[40px] font-bold leading-[120%] tracking-[-0.04px] max-w-[496px]"
          />
          <Paragraph
            Txt={
              "Senior team delivering thoughtful design with clarity and purpose"
            }
            className="text-primary-light-white text-sm font-medium leading-[150%]"
          />
        </div>
        <div
          onMouseEnter={() => setisHovering(true)}
          onMouseLeave={() => setisHovering(false)}
          className={`flex items-center  font-bold justify-start cursor-pointer p-2 rounded-[8px] bg-primary-green overflow-hidden transition-all duration-300 ${
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

      <div
        className="flex flex-row gap-x-2.5"
        style={{ userSelect: "none", height: "700px", width: "700px" }}
      >
        <div className="marquee-column">
          <div
            className="marquee-content scroll-down"
            style={hoveredIndex ? { animationPlayState: "paused" } : {}}
          >
            {renderImages("left")}
          </div>
        </div>

        <div className="marquee-column">
          <div
            className="marquee-content scroll-up"
            style={hoveredIndex ? { animationPlayState: "paused" } : {}}
          >
            {renderImages("middle")}
          </div>
        </div>

        <div className="marquee-column">
          <div
            className="marquee-content scroll-down"
            style={hoveredIndex ? { animationPlayState: "paused" } : {}}
          >
            {renderImages("right")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
