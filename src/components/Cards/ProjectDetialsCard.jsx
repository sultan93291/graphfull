import React from "react";
import Heading from "../Heading/Heading";
import { ArrowSvg } from "@/SvgContainer/SvgContainer";

const ProjectDetialsCard = ({
  bgImg,
  heading,
  subHeading,
  tagLineArr
}) => {
  return (
    <div className="h-auto w-auto flex flex-col gap-y-6 relative  ">
      <img
        src={bgImg}
        className=" cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg w-full max-h-[188px] md:max-h-[250px] xl:max-h-[356px] ojbect-cover rounded-[16px] "
        alt="not found"
      />
      <div className="flex flex-col gap-y-4 ">
        <Heading
          Variant={"h4"}
          Txt={heading}
          className={`text-2xl font-bold leading-[140%] tracking-[-0.
          24px] text-primary-white `}
        />
        <Heading
          Variant={"h4"}
          Txt={subHeading}
          className={`text-base font-normal leading-[150%] tracking-[-0.
          24px] text-primary-light-white  `}
        />
      </div>
      <div className="flex flex-row gap-x-2 items-center">
        {tagLineArr.map((tag, idx) => (
          <div
            key={idx}
            className="h-auto w-auto px-3 py-2 rounded-[16px] bg-secondary-off-gray text-xs text-primary-light-white font-medium leading-[150%]"
          >
            {tag}
          </div>
        ))}
      </div>
      <button className="text-xs xl:hidden flex items-center gap-x-2 cursor-pointer uppercase text-metal-white font-extrabold leading-[150%] tracking-[1.92px]">
        View project <ArrowSvg />
      </button>
    </div>
  );
};

export default ProjectDetialsCard;
