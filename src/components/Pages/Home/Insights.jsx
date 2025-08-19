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

const TimelineItem = ({ number, title, desc, isActive }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      gsap.to(itemRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    } else {
      gsap.to(itemRef.current, {
        opacity: 0.5,
        y: 50,
        duration: 0.4,
        ease: "power3.inOut",
      });
    }
  }, [isActive]);

  return (
    <div ref={itemRef} className="relative flex items-start mb-16">
      {/* Dot */}
      <div
        className={`w-4 h-4 rounded-full absolute -left-[7px] top-2 z-10 transition-colors duration-300 ${
          isActive ? "bg-orange-500" : "bg-gray-400"
        }`}
      />
      {/* Line */}
      <div
        className={`absolute left-0 top-6 w-[3px] h-full transition-colors duration-300 ${
          isActive ? "bg-orange-500" : "bg-gray-400"
        }`}
      />
      {/* Text */}
      <div className="flex flex-col gap-y-2 " style={{ marginLeft: "78.6px" }}>
        <Paragraph
          className=" text-primary-yellow leading-[150%] tracking-[1.92px] font-extra-bold text-sm "
          Txt={number}
        />

        <Heading
          Variant={"h3"}
          className={`text-2xl font-bold leading-[140%]  tracking-[-0.24px]  ${
            isActive ? " text-primary-white" : " text-primary-light-white"
          }`}
          Txt={title}
        />
        <Paragraph
          className={`text-base font-medium leading-[150%] ${isActive ? "text-metal-gray" : "text-gray-500"}`}
          Txt={desc}
        />
      </div>
    </div>
  );
};

const Insights = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const children = containerRef.current.querySelectorAll(".timeline-item");
      let newActive = 0;

      children.forEach((child, index) => {
        const rect = child.getBoundingClientRect();
        const containerHeight = window.innerHeight;
        if (
          rect.top < containerHeight * 0.6 &&
          rect.bottom > containerHeight * 0.3
        ) {
          newActive = index;
        }
      });

      setActiveIndex(newActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="h-auto w-full bg-primary-color py-[112px]">
      <div className="container flex flex-row justify-between ">
        {/* Section Heading */}
        <div className="flex flex-col gap-y-4">
          <Heading
            Variant="h6"
            Txt="insights"
            className="text-base capitalize text-primary-light-white font-extrabold leading-[150%] tracking-[1.92px]"
          />
          <div className="flex flex-col gap-y-6">
            <Heading
              Variant="h3"
              Txt="Here’s what we bring to the table"
              className="text-[40px] text-primary-white font-bold leading-[150%] tracking-[-0.4px] max-w-[464px]"
            />
            <Paragraph
              Txt="Design is the output. Clear thinking is the foundation."
              className="text-sm text-primary-light-white font-medium leading-[150%] tracking-[-0.4px]"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-12 pl-10 w-[808px]">
          <div className="absolute left-0 ml-10 top-0 w-[3px] h-full bg-gray-400" />
          <div className="flex flex-col" ref={containerRef}>
            {items.map((item, index) => (
              <div key={item.id} className="timeline-item relative">
                <TimelineItem
                  number={index + 1}
                  title={item.title}
                  desc={item.desc}
                  isActive={index === activeIndex}
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
