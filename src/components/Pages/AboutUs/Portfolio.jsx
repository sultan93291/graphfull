import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import { CuteSmileFace } from "../../../SvgContainer/SvgContainer";
import medicine from "../../../assets/img/slider-img/medicine.png";
import illusion from "../../../assets/img/slider-img/illusion.png";
import cookie from "../../../assets/img/slider-img/cookie.png";
import jar from "../../../assets/img/slider-img/jar.jpg";
import coffee from "../../../assets/img/slider-img/coffe.png";
import dope from "../../../assets/img/slider-img/dope.png";
import { div } from "framer-motion/client";

const portfolioData = [
  { img: medicine },
  { img: illusion },
  { img: cookie },
  { img: jar },
  { img: coffee },
  { img: dope },
];

const Portfolio = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [videoReady, setVideoReady] = useState({});

  const videoUrl =
    "https://res.cloudinary.com/dfogl3n5q/video/upload/v1754562722/full_stack_app/videos/company_overview/1.mp4";

  const handleVideoCanPlay = key => {
    setVideoReady(prev => ({ ...prev, [key]: true }));
  };

  return (
    <section className="h-auto w-full bg-primary-color">
      <div className="flex flex-col gap-y-20 py-[112px]">
        {/* Section Heading */}
        <div className="flex flex-row container justify-between">
          <div className="flex flex-col gap-y-4">
            <Heading
              Variant="h6"
              Txt="Portfolio"
              className="text-xs uppercase text-metal-white font-extrabold leading-[150%] tracking-[1.92px]"
            />
            <div className="flex flex-col gap-y-6">
              <Heading
                Variant="h3"
                Txt="What happens when strategy meets design"
                className="md:text-[32px] text-[24px] lg:text-[28px] xl:text-[36px] 3xl:text-[40px] text-primary-white font-bold leading-[120%] tracking-[-0.4px]"
              />
              <Paragraph
                Txt="Consistent identities, faster launches, stronger recall"
                className="text-lg text-primary-light-white font-normal leading-[150%] tracking-[-0.4px]"
              />
            </div>
          </div>
          <div>
            <div
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`hidden xl:flex items-center h-auto font-bold justify-start cursor-pointer p-2 rounded-[8px] bg-secondary-blue overflow-hidden transition-all duration-300 ${
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
        </div>

        <div className="flex flex-col gap-y-8 xl:gap-y-12 w-full">
          <Marquee gradient={false} speed={50} pauseOnHover>
            {portfolioData.map((item, idx) => {
              const key = `slide-${idx}`;
              const isHovered = hoveredIndex === key;
              const isReady = videoReady[key] === true;

              return (
                <div className="flex flex-col gap-y-6 ">
                  <div className="flex flex-col px-6 gap-y-[26px] ">
                    <div className="flex flex-col gap-y-4 ">
                      <Heading
                        Variant="h6"
                        Txt={"FASHION & BEAUTY"}
                        className="text-xs uppercase text-metal-white font-extrabold leading-[150%] tracking-[1.92px]"
                      />
                      <Heading
                        Variant="h3"
                        Txt={"Army Pink"}
                        className="text-2xl  text-primary-white font-extrabold leading-[140%] tracking-[-0.24px]"
                      />
                      <div className="flex flex-row gap-x-2 items-center">
                        {[0,1,2,3].map((tag, idx) => (
                          <div
                            key={idx}
                            className="h-auto w-auto px-3 py-2 rounded-[16px] bg-secondary-off-gray text-xs text-primary-light-white font-medium leading-[150%]"
                          >
                            Services
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    key={key}
                    className="relative mx-4 w-[209px] lg:w-[270px] xl:w-[300px] 3xl:w-[480px] 4xl:w-[520px] h-[314px] lg:h-[350px] xl:h-[400px] 3xl:h-[650px] 4xl:h-[780px] rounded-[16px] overflow-hidden cursor-pointer flex-shrink-0"
                    onMouseEnter={() => {
                      setHoveredIndex(key);
                      setVideoReady(prev => ({ ...prev, [key]: false }));
                    }}
                    onMouseLeave={() => {
                      setHoveredIndex(null);
                      setVideoReady(prev => ({ ...prev, [key]: false }));
                    }}
                  >
                    <img
                      src={item.img}
                      alt={`slide-${idx}`}
                      className="absolute inset-0 h-full w-full object-cover z-10 transition-opacity duration-700"
                      style={{ opacity: isHovered && isReady ? 0 : 1 }}
                    />
                    {isHovered && (
                      <video
                        src={videoUrl}
                        autoPlay
                        muted
                        loop
                        preload="auto"
                        playsInline
                        onCanPlay={() => handleVideoCanPlay(key)}
                        className="absolute inset-0 h-full w-full object-cover z-20 transition-opacity duration-700"
                        style={{
                          opacity: isReady ? 1 : 0,
                          pointerEvents: "none",
                        }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
