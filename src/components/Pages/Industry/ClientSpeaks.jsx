import React from "react";
import bg_img from "../../../assets/img/slider-img/coffe.png";
import Heading from "../../Heading/Heading";
import clientPic from "../../../assets/img/review.avif";
import Paragraph from "../../Paragraph/Paragraph";


const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-[#b5b5b5a4] bg-clip-text inline-block ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 20%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};

const ClientSpeaks = ({
  title = "clients speak",
  clientFeedback = "Lorem ipsum dolor sit amet, consectetur adipiscing elittristique.",
  clientName = "Eve",
  clientPosition = "CEO, Graphy",
  clientProfilePic = clientPic,
  bgImg = bg_img,
}) => {
  return (
    <section className="h-auto w-auto bg-primary-color py-[112px]">
      <div className="container">
        <div className="flex flex-row gap-x-10">
          <div className="flex flex-col gap-y-8 max-w-[703px]">
            {/* Title remains as normal text */}
            <Heading
              Variant="h6"
              Txt={title}
              className="text-xs uppercase text-metal-white font-extrabold leading-[150%] tracking-[1.92px]"
            />

            {/* Apply ShinyText only for clientFeedback */}
            <Heading
              className="text-[40px] capitalize text-primary-white font-bold leading-[150%] tracking-[-0.4px]"
              Variant="h4"
              Txt={<ShinyText text={clientFeedback} />}
            />

            <div className="flex items-center gap-5">
              <img
                src={clientProfilePic}
                alt={"not found"}
                className="w-12 h-12 object-cover rounded-[12px]"
              />
              <div className="flex flex-col gap-y-1">
                <Paragraph
                  Txt={clientName}
                  className={
                    " text-sm lg:text-base font-[600] leading-[150%] text-metal-white"
                  }
                />
                <Paragraph
                  Txt={clientPosition}
                  className={
                    " text-sm lg:text-base font-normal leading-[150%] text-metal-gray"
                  }
                />
              </div>
            </div>
          </div>
          <img
            src={bgImg}
            className="w-[568px] h-[320px] object-cover rounded-[16px] cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
            alt="not found"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientSpeaks;
