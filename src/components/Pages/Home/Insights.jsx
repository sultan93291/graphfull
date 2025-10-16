import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";

const items = [
  {
    id: 1,
    title: "Archetype-based tone",
    desc: "Design strategy rooted in your brand’s own voice",
  },
  {
    id: 2,
    title: "Strategic filters",
    desc: "Every idea runs through real goals, not guesswork",
  },
  {
    id: 3,
    title: "AI used right",
    desc: "Thinking is ours. We use AI to test, speed up, and amplify",
  },
  {
    id: 4,
    title: "Design systems",
    desc: "Templates and patterns you can build on, not reinvent",
  },
  {
    id: 5,
    title: "Clear flow",
    desc: "Notion. Slack. Figma. Everything tracked, nothing lost.",
  },
];

const TimelineItem = ({ number, title, desc }) => {
  return (
    <div  className="relative flex items-start mb-10 md:mb-16">
  
      <div className="flex flex-col gap-y-2 md:ml-[32px] lg:ml-[78.6px]">
        <Paragraph
          className="text-primary-yellow leading-[150%] tracking-[1.92px] font-extrabold text-2xl"
          Txt={number}
        />
        <Heading
          Variant="h3"
          className={` text-xl xl:text-2xl font-bold leading-[140%] tracking-[-0.24px] text-primary-white font-filson `}
          Txt={title}
        />
        <Paragraph
          className={` text-sm xl:text-base font-medium leading-[150%] text-metal-gray `}
          Txt={desc}
        />
      </div>
    </div>
  );
};

const Insights = () => {
  return (
    <section className="h-auto w-full bg-primary-color py-16 2xl:py-20 3xl:py-28">
      <div className="container flex flex-col 2xl:flex-row gap-10 xl:gap-y-14 items-center  justify-between">
        {/* Sticky Heading Section */}
        <div className="flex flex-col gap-y-3 xl:gap-y-4 2xl:sticky xl:top-[112px] items-center 2xl:items-start  2xl:self-start">
          <Heading
            Variant="h6"
            Txt="insights"
            className="small-heading !text-[#62707D] "
          />
          <div className="flex flex-col gap-y-3 2xl:gap-y-6">
            <Heading
              Variant="h3"
              Txt="Here’s what we bring to the table"
              className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-filson 3xl:text-[40px] text-primary-white font-bold leading-[120%] tracking-[-0.4px] max-w-[464px] text-center 2xl:text-left  "
            />
            <Paragraph
              Txt="Design is the output. Clear thinking is the foundation."
              className="text-sm text-primary-light-white font-medium leading-[150%] text-center 2xl:text-left  "
            />
          </div>
        </div>

        <div className="relative my-8 xl:mt-0 pl-5 xl:pl-10 w-full xl:w-[808px]">        
          <div className="flex flex-col">
            {items.map((item, index) => (
              <div key={item.id} className="timeline-item relative">
                <TimelineItem
                  number={index + 1}
                  title={item.title}
                  desc={item.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
