import React, { useState } from "react";
import { SmileFace } from "../../../SvgContainer/SvgContainer";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import one from "../../../assets/img/slider-img/one.png";
import two from "../../../assets/img/slider-img/two.png";
import three from "../../../assets/img/slider-img/three.jpeg";
import four from "../../../assets/img/slider-img/four.png";

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);

  const imgArr = [one, two, three, four];

  const renderImages = prefix =>
    [...imgArr, ...imgArr, ...imgArr, ...imgArr, ...imgArr, ...imgArr].map(
      (item, idx) => (
        <img
          key={`${prefix}-${idx}`}
          className="w-[210px] h-[316px] my-2.5 object-cover rounded-[12px] flex-shrink-0"
          src={item}
          alt={`${prefix}-slider-${idx}`}
          style={{ userSelect: "none" }}
        />
      )
    );

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
        className="flex flex-row gap-x-2.5 overflow-hidden h-[700px] w-[700px]"
        style={{ userSelect: "none" }}
      >
        {/* Left Column - Scroll Down */}
        <div
          className="w-[233px] overflow-hidden"
          style={{ willChange: "transform" }}
        >
          <div
            className="marquee-content"
            style={{
              display: "flex",
              flexDirection: "column",
              animation: "scrollDown 70s linear infinite",
            }}
          >
            {renderImages("left")}
          </div>
        </div>

        {/* Middle Column - Scroll Up */}
        <div
          className="w-[233px] overflow-hidden"
          style={{ willChange: "transform" }}
        >
          <div
            className="marquee-content"
            style={{
              display: "flex",
              flexDirection: "column",
              animation: "scrollUp 70s linear infinite",
            }}
          >
            {renderImages("middle")}
          </div>
        </div>

        {/* Right Column - Scroll Down */}
        <div
          className="w-[233px] overflow-hidden"
          style={{ willChange: "transform" }}
        >
          <div
            className="marquee-content"
            style={{
              display: "flex",
              flexDirection: "column",
              animation: "scrollDown 70s linear infinite",
            }}
          >
            {renderImages("right")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
