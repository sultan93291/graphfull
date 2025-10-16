import React from "react";
import Button from "../Buttons/Button";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";

const Brands = ({
  bgImg
}) => {
  return (
    <section className="w-full py-[64px] 2xl:py-[112px] bg-primary-color">
      <div className="relative w-full container h-auto">
        <div className="relative w-full h-[600px] rounded-[16px] overflow-hidden group">
          {/* Background Image */}
          <img
            src={bgImg}
            alt="Brand background"
            className="w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg  object-cover cursor-pointer  group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] rounded-[16px]">
            <div className="flex flex-col justify-end h-full py-8 px-4 sm:px-8   2xl:p-[64px] gap-y-8">
              <Heading
                Variant="h6"
                Txt="NEXT STEPS"
                className="small-heading !text-[#9FADB9]"
              />

              <div className="max-w-[768px] flex flex-col gap-y-6">
                <Heading
                  Variant="h3"
                  Txt="Your brand’s next chapter is waiting"
                  className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 3xl:text-[48px] text-primary-white font-bold leading-[120%] tracking-[-0.4px]"
                />
                <Paragraph
                  Txt="We’ll help you shape it with fresh ideas, refined visuals, and strategic design that capture your vision and leave a lasting impression."
                  className="text-base text-primary-light-white font-normal leading-[150%]"
                />
              </div>

              <Button
                className="h-auto w-auto text-sm md:text-base max-w-[130px] px-3 md:px-5 py-2 bg-primary-yellow text-primary-dark-blue font-bold rounded-[8px] cursor-pointer transition-all duration-500 hover:bg-transparent border-[1px] border-transparent hover:border-solid hover:border hover:border-primary-yellow hover:text-primary-yellow"
                btnTxt={"Book a call"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
