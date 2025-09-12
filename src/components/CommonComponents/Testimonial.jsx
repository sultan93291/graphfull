import React from "react";
import { ArrowLeft, WebFlow } from "../../SvgContainer/SvgContainer";
import reviw_girl from "../../assets/img/review.avif";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Buttons/Button";
import ScrollStack, { ScrollStackItem } from "../ScrollStack";

const testimonials = [
  {
    id: 1,
    companyLogo: WebFlow,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    quote: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.`,
    name: "Name Surname",
    position: "Position, Company name",
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
  return (
    <section className="w-full bg-primary-color  py-20">
      <div className="container  flex flex-col items-center">
        <ScrollStack
          className="max-w-[1040px] w-full"
          stackPosition="28vh"
          peekOffset={12}
          arriveStartOffset={0.0}
          arriveEndOffset={0.5}
          cardGap={32}
          bottomGapPx={40}
        >
          {testimonials
            .slice()
            .reverse()
            .map(item => {
              const Svg = item.companyLogo;
              return (
                <ScrollStackItem
                  key={item.id}
                  itemClassName="bg-[#0C1924] border border-white/5 text-white p-8 sm:p-12 h-[340px] sm:h-[360px] lg:h-[380px]"
                >
                  <div className="h-full flex flex-col justify-between">
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
                        <button className="flex items-center gap-2 text-xs uppercase font-extrabold text-white hover:text-primary-green transition-all duration-300 cursor-pointer ">
                          <span>See Project</span>
                          <ArrowLeft />
                        </button>
                      </div>
                    </div>
                  </div>
                </ScrollStackItem>
              );
            })}
        </ScrollStack>

        <Button
          className="px-5 py-2 bg-primary-green cursor-pointer text-primary-dark-blue font-bold rounded-[8px] hover:bg-transparent border-[1px] border-transparent hover:border-solid hover:border-primary-green hover:text-primary-green transition-all duration-300"
          btnTxt="View more"
        />
      </div>
    </section>
  );
};

export default Testimonial;
