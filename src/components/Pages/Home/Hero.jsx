import React, { useState, useEffect } from "react";
import { FigmaIcon, SmileFace } from "../../../SvgContainer/SvgContainer";
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
  const [hoveredColumn, setHoveredColumn] = useState(null);
  const [videoReady, setVideoReady] = useState({});
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1280);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      svg: FigmaIcon,
      videoUrl:
        "https://res.cloudinary.com/dfogl3n5q/video/upload/v1754562722/full_stack_app/videos/company_overview/1.mp4",
    },
    {
      id: 3,
      img: cookie,
      colorSlug: "purple",
      svg: FigmaIcon,
      videoUrl:
        "https://res.cloudinary.com/dfogl3n5q/video/upload/v1754562722/full_stack_app/videos/company_overview/1.mp4",
    },
    {
      id: 4,
      img: jar,
      colorSlug: "green",
      svg: FigmaIcon,
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
      svg: FigmaIcon,
      videoUrl:
        "https://res.cloudinary.com/dfogl3n5q/video/upload/v1754562722/full_stack_app/videos/company_overview/1.mp4",
    },
    {
      id: 7,
      img: dope,
      colorSlug: "red",
      svg: FigmaIcon,
      videoUrl:
        "https://res.cloudinary.com/dfogl3n5q/video/upload/v1754562722/full_stack_app/videos/company_overview/1.mp4",
    },
  ];

  const repeatedImages = [...itemsArr, ...itemsArr];

  const handleVideoCanPlay = key =>
    setVideoReady(prev => ({ ...prev, [key]: true }));

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
          className="cursor-pointer  z-0 relative flex-shrink-0 m-2 rounded-[12px]"
          style={
            isMobile
              ? { width: "154px", aspectRatio: "4.5 / 5" } 
              : { width: "210.667px", height: "316px" }
          }
          onMouseEnter={() => {
            setHoveredIndex(key);
            setHoveredColumn(prefix);
            setVideoReady(prev => ({ ...prev, [key]: false }));
          }}
          onMouseLeave={() => {
            setHoveredIndex(null);
            setHoveredColumn(null);
            setVideoReady(prev => ({ ...prev, [key]: false }));
          }}
        >
          <div className="absolute inset-0 rounded-[12px] overflow-hidden">
            <img
              src={item.img}
              alt={`${prefix}-${idx}`}
              className="w-full h-full object-cover transition-opacity duration-700"
              style={{ opacity: isHovered && isReady ? 0 : 1 }}
            />
            {isHovered && (
              <video
                src={item.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                onCanPlay={() => handleVideoCanPlay(key)}
                className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700"
                style={{ opacity: isReady ? 1 : 0 }}
              />
            )}
          </div>
          {Svg && (
            <div
              style={{ backgroundColor: colorValue }}
              className="absolute top-2 left-2 p-2 rounded-[6.5px] flex items-center z-10"
            >
              <Svg />
            </div>
          )}
        </div>
      );
    });

  return (
    <section className="flex py-10 2xl:py-0 flex-col 2xl:flex-row gap-y-10 justify-between 2xl:items-center container">
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-6">
          <Heading
            Variant="h3"
            Txt="Design that makes sense, and makes moves"
            className="text-primary-white font-filson md:text-[32px] font-filson text-[24px] lg:text-[28px] xl:text-[36px] 3xl:text-[40px] font-bold leading-[120%] max-w-[496px]"
          />
          <Paragraph
            Txt="Senior team delivering thoughtful design with clarity and purpose"
            className="text-primary-light-white text-sm font-medium leading-[150%]"
          />
        </div>
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`flex items-center font-bold justify-start cursor-pointer p-2 rounded-[8px] bg-primary-yellow overflow-hidden transition-all duration-300 ${
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
            Book a Call
          </span>
        </div>
      </div>

      <div
        className="flex gap-2"
        style={{
          width: isMobile ? "100%" : "700px",
          height: isMobile ? "400px" : "700px",
          userSelect: "none",
        }}
      >
        {isMobile ? (
          <div className="flex flex-col gap-2 w-full">
            <div className="marquee-column horizontal w-full overflow-hidden">
              <div
                className="marquee-content scroll-left flex gap-2"
                style={
                  hoveredColumn === "left"
                    ? { animationPlayState: "paused" }
                    : {}
                }
              >
                {renderImages("left")}
              </div>
            </div>
            <div className="marquee-column horizontal w-full overflow-hidden">
              <div
                className="marquee-content scroll-right flex gap-2"
                style={
                  hoveredColumn === "right"
                    ? { animationPlayState: "paused" }
                    : {}
                }
              >
                {renderImages("right")}
              </div>
            </div>
          </div>
        ) : (
          ["left", "middle", "right"].map((prefix, i) => (
            <div key={i} className="marquee-column vertical">
              <div
                className={`marquee-content ${
                  i % 2 === 0 ? "scroll-down" : "scroll-up"
                }`}
                style={
                  hoveredColumn === prefix
                    ? { animationPlayState: "paused" }
                    : {}
                }
              >
                {renderImages(prefix)}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Hero;
