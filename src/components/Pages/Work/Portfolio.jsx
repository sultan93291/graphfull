import React, { useState } from "react";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import { ArrowSvg } from "../../../SvgContainer/SvgContainer";
import ProjectDetialsCard from "../../Cards/ProjectDetialsCard";

import coffee from "../../../assets/img/slider-img/coffe.png";
import cookie from "../../../assets/img/slider-img/cookie.png";
import medicine from "../../../assets/img/slider-img/medicine.png";

const projectDetails = [
  {
    title: "Project name here",
    description:
      "Revamped an online store to enhance user engagement and sales",
    actions: ["Prototyping", "Landing Pages"],
    bgImg: medicine,
  },
  {
    title: "Project name here",
    description:
      "Revamped an online store to enhance user engagement and sales",
    actions: ["Prototyping", "Landing Pages"],
    bgImg: cookie,
  },
  {
    title: "Project name here",
    description:
      "Revamped an online store to enhance user engagement and sales",
    actions: ["Prototyping", "Landing Pages"],
    bgImg: coffee,
  },
  {
    title: "Project name here",
    description:
      "Revamped an online store to enhance user engagement and sales",
    actions: ["Prototyping", "Landing Pages"],
    bgImg: cookie,
  },
  {
    title: "Project name here",
    description:
      "Revamped an online store to enhance user engagement and sales",
    actions: ["Prototyping", "Landing Pages"],
    bgImg: medicine,
  },
  {
    title: "Project name here",
    description:
      "Revamped an online store to enhance user engagement and sales",
    actions: ["Prototyping", "Landing Pages"],
    bgImg: cookie,
  },
  {
    title: "Project name here",
    description:
      "Revamped an online store to enhance user engagement and sales",
    actions: ["Prototyping", "Landing Pages", "Packaging"],
    bgImg: coffee,
  },
  {
    title: "Project name here",
    description:
      "Revamped an online store to enhance user engagement and sales",
    actions: ["Prototyping", "Landing Pages"],
    bgImg: cookie,
  },
  {
    title: "Project name here",
    description:
      "Revamped an online store to enhance user engagement and sales",
    actions: ["Prototyping", "Landing Pages", "Packaging"],
    bgImg: coffee,
  },
  {
    title: "Project name here",
    description:
      "Revamped an online store to enhance user engagement and sales",
    actions: ["Prototyping", "Landing Pages"],
    bgImg: medicine,
  },
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  // Number of projects to show initially
  const initialCount = 4;
  const displayedProjects = showAll
    ? projectDetails
    : projectDetails.slice(0, initialCount);

  return (
    <section className="h-auto w-full bg-primary-color py-[112px]">
      <div className="flex flex-col gap-y-[112px] items-center">
        <div className="container flex flex-col gap-y-20">
          <div className="flex flex-col gap-y-6 items-center">
            <Heading Variant="h6" Txt="Portfolio" className="small-heading" />
            <div className="flex flex-col items-center gap-y-3 2xl:gap-y-6">
              <Heading
                Variant="h3"
                Txt="Our Creative Showcase"
                className="text-[24px] md:text-[28px] lg:text-[32px] font-filson xl:text-[36px] font-filson 3xl:text-[40px] text-primary-white font-bold leading-[120%] tracking-[-0.4px] text-center max-w-[464px]"
              />
              <Paragraph
                Txt="Explore our diverse range of design projects."
                className="text-sm text-primary-light-white font-medium leading-[150%] text-center 2xl:text-left"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-[112px]">
            {displayedProjects.map((project, idx) => (
              <ProjectDetialsCard
                key={idx}
                bgImg={project.bgImg}
                tagLineArr={project.actions}
                heading={project.title}
                subHeading={project.description}
              />
            ))}
          </div>
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="text-xs flex items-center gap-x-2 cursor-pointer uppercase text-metal-white font-extrabold leading-[150%] tracking-[1.92px]"
        >
          {showAll ? "View Less" : "View More"} <ArrowSvg />
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
