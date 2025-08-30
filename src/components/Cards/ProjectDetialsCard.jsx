import React from "react";
import Heading from "../Heading/Heading";

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
        className=" w-full max-h-[356px] ojbect-cover rounded-[16px] "
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
    </div>
  );
};

export default ProjectDetialsCard;
