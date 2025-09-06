import React from "react";
import Button from "../../Buttons/Button";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import Testimonial from "../../CommonComponents/Testimonial";

const Hero = () => {
  return (
    <section className="h-auto bg-primary-color  w-auto  ">
      <div className=" flex flex-col  gap-y-20  ">
        <div className=" grid-background   ">
          <div className="  flex flex-col py-[64px] gap-y-[56px] container items-center  ">
            <div className="flex flex-col gap-y-8 items-center ">
              <Heading
                Variant={"h6"}
                Txt={"Built on trust"}
                className={"small-heading"}
              />
              <div className="flex flex-col items-center gap-y-4">
                <Heading
                  Variant="h3"
                  Txt="Great work is just the beginning"
                  className="text-primary-white md:text-[32px] text-[24px] lg:text-[28px] xl:text-[36px] 3xl:text-[40px] font-bold leading-[120%] max-w-[350px] text-center"
                />
                <Paragraph
                  Txt="The real story is how it feels to work with us."
                  className="text-primary-light-white text-sm font-medium leading-[150%]"
                />
              </div>
            </div>
            <Button
              className={
                "h-auto w-auto !max-w-[130px] px-5 py-2 bg-primary-yellow text-primary-dark-blue font-bold rounded-[8px] cursor-pointer ease-in-out duration-500 hover:bg-transparent border-[1px] border-transparent hover:border-solid hover:border-primary-yellow hover:text-primary-yellow"
              }
              btnTxt={"Book a call"}
            />
          </div>
        </div>
        <Testimonial />
      </div>
    </section>
  );
};

export default Hero;
