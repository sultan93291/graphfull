import React, { useState } from "react";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import { SmileFace } from "../../../SvgContainer/SvgContainer";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const overView = [
  {
    title: "Branding, rebranding or refresh projects completed",
    value: 45,
  },
  {
    title: "Projects we completed and a wide range of deliverables",
    value: 340,
  },
  {
    title: "Brands we worked with across multiple projects",
    value: 170,
  },
];

const Branding = () => {
  const [isHovering, setisHovering] = useState(false);

  // Hook to track if section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the section is in view
    triggerMargin: "0px", // Trigger when the section is just visible
  });

  return (
    <section className="h-auto w-auto bg-primary-color py-[112px] " ref={ref}>
      <div className="container">
        <div className="flex flex-col gap-y-20 ">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-y-4">
              <Heading
                Variant="h6"
                Txt="proof in numbers"
                className="small-heading"
              />
              <div className="flex flex-col gap-y-6">
                <Heading
                  Variant="h3"
                  Txt="Branding by the numbers"
                  className="md:text-[32px] text-[24px] lg:text-[28px] font-filson xl:text-[36px] 3xl:text-[40px] text-primary-white font-bold leading-[120%] tracking-[-0.4px]"
                />
              </div>
            </div>
            <div>
              <div
                onMouseEnter={() => setisHovering(true)}
                onMouseLeave={() => setisHovering(false)}
                className={`hidden xl:flex items-center h-auto font-bold justify-start cursor-pointer p-2 rounded-[8px] bg-primary-green overflow-hidden transition-all duration-300 ${
                  isHovering ? "w-36" : "w-10"
                }`}
              >
                <div
                  className={`flex-shrink-0 transition-opacity duration-300 ${
                    isHovering ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <SmileFace />
                </div>
                <span
                  className={`whitespace-nowrap transition-all duration-300 ${
                    isHovering
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2"
                  }`}
                >
                  Book a Call
                </span>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-3 gap-x-12 items-center ">
            {overView.map((item, idx) => (
              <div
                key={idx}
                className="h-auto w-auto p-8 flex flex-col gap-y-6 ease-in-out duration-500 group hover:bg-extra-blue border-l-[8px] border-transparent hover:border-solid hover:shadow-md cursor-pointer hover:border-primary-green rounded-[16px]"
              >
                <Heading
                  Variant={"h2"}
                  Txt={
                    <>
                      {inView && (
                        <CountUp
                          end={item.value}
                          duration={2.5}
                          separator=","
                          start={0}
                        />
                      )}
                      +
                    </>
                  }
                  className="font-filson text-[80px] font-bold leading-[120%] tracking-[-0.04] text-primary-white group-hover:text-primary-green ease-in-out duration-500"
                />
                <Paragraph
                  Txt={item.title}
                  className="text-xl text-primary-light-white font-bold leading-[150%] group-hover:text-primary-green ease-in-out duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branding;
