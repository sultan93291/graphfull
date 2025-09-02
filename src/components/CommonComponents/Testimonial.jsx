import React, { useState } from "react";
import { ArrowLeft, WebFlow } from "../../SvgContainer/SvgContainer";
import reviw_girl from "../../assets/img/review.avif";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Buttons/Button";

const testimonials = [
  {
    id: 1,
    companyLogo: WebFlow,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    quote: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    name: "John Doe",
    position: "CEO, Webflow",
    image: reviw_girl,
  },
  {
    id: 2,
    companyLogo: WebFlow,
    title: "Another testimonial title goes here.",
    quote: `Suspendisse varius enim in eros elementum tristique.`,
    name: "Jane Smith",
    position: "Marketing Manager, CompanyX",
    image: reviw_girl,
  },
  {
    id: 3,
    companyLogo: WebFlow,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    quote: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    name: "John Doe",
    position: "CEO, Webflow",
    image: reviw_girl,
  },
  {
    id: 4,
    companyLogo: WebFlow,
    title: "Another testimonial title goes here.",
    quote: `Suspendisse varius enim in eros elementum tristique.`,
    name: "Jane Smith",
    position: "Marketing Manager, CompanyX",
    image: reviw_girl,
  },
  {
    id: 5,
    companyLogo: WebFlow,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    quote: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    name: "John Doe",
    position: "CEO, Webflow",
    image: reviw_girl,
  },
  {
    id: 6,
    companyLogo: WebFlow,
    title: "Another testimonial title goes here.",
    quote: `Suspendisse varius enim in eros elementum tristique.`,
    name: "Jane Smith",
    position: "Marketing Manager, CompanyX",
    image: reviw_girl,
  },
];

const Testimonial = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const CARD_SPACING = 20;
  const HOVER_LIFT = 20;

  return (
    <div className="relative py-20 container mx-auto">
      {testimonials
        .slice() // make a copy
        .reverse() // reverse so first item is visually on top
        .map((item, index) => {
          const Svg = item.companyLogo;
          const offset = index * CARD_SPACING;
          const scale = 1 - index * 0.015;

          return (
            <div
              key={item.id}
              className="absolute left-0 right-0 mx-auto max-w-[1000px] w-full rounded-[16px] p-10 text-white cursor-pointer shadow-lg border-[1px] border-white/5 bg-[#0C1924] transition-all duration-300"
              style={{
                top: `${offset}px`,
                zIndex: hoveredCard === index ? 999 : index + 1, 
                transform:
                  hoveredCard === index
                    ? `translateY(-${HOVER_LIFT}px) scale(1.03)`
                    : `translateY(0) scale(${scale})`,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col gap-6">
                <Svg />
                <div className="flex flex-col gap-2">
                  <Heading
                    Variant="h4"
                    Txt={item.title}
                    className="text-[24px] font-bold leading-[130%]"
                  />
                  <Paragraph
                    Txt={item.quote}
                    className="text-base italic font-normal leading-[150%] text-metal-white"
                  />
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-[12px]"
                    />
                    <div className="flex flex-col gap-1">
                      <Paragraph
                        Txt={item.name}
                        className="text-sm font-semibold text-metal-white"
                      />
                      <Paragraph
                        Txt={item.position}
                        className="text-sm font-normal text-metal-gray"
                      />
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-xs uppercase font-extrabold text-white hover:text-primary-green transition-all duration-300">
                    <span>See Project</span>
                    <ArrowLeft />
                  </button>
                </div>
              </div>
            </div>
          );
        })}

      <div className=" mt-[350px] flex justify-center">
        <Button
          className="px-5 py-2 bg-primary-green text-primary-dark-blue font-bold rounded-[8px] hover:bg-transparent hover:border hover:border-primary-green hover:text-primary-green transition-all duration-300"
          btnTxt="View more"
        />
      </div>
    </div>
  );
};

export default Testimonial;
