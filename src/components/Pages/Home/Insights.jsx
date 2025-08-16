import React, { useState } from "react";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";


const Insights = () => {
 
  return (
    <section className="h-auto w-full bg-extra-blue  py-[112px] overflow-hidden">
      <div className="container flex flex-col gap-y-20 ">
        <div className="flex flex-col gap-y-4 mb-12 lg:mb-0">
          <Heading
            Variant="h6"
            Txt="breakdown"
            className="text-base capitalize text-primary-light-white font-extrabold leading-[150%] tracking-[1.92px]"
          />
          <div className="flex flex-col gap-y-6">
            <Heading
              Variant="h3"
              Txt="Freelancer, agency, in-house or Graphfull?"
              className="text-[40px] text-primary-white font-bold leading-[150%] tracking-[-0.4px] "
            />
            <Paragraph
              Txt="See the trade-offs of each model, so you can pick what matches your goals and budget"
              className="text-sm text-primary-light-white font-medium leading-[150%] tracking-[-0.4px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
