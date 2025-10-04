import React, { useRef } from "react";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import animationData from "../../../assets/UJ23XW8UR3.lottie";

const OverviewArr = [
  { title: "Brands we worked with", value: 170, suffix: "+" },
  { title: "Projects we conducted", value: 240, suffix: "+" },
  { title: "Deliverables last year", value: 9000, suffix: "+" },
  { title: "In-house work", value: 100, suffix: "%" },
  { title: "LinkedIn recommendations", value: 15, suffix: "+" },
];

const Overview = () => {
  const svgRef = useRef(null);
  const isInView = useInView(svgRef, { once: true });

  return (
    <section className="h-auto w-full py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[120px]">
      <div className="flex flex-col-reverse gap-y-12 xl:flex-row container gap-x-20 items-center">
        {/* Grid of stats + Lottie */}
        <div className="grid grid-cols-2 gap-4 w-full 2xl:max-w-[820px]">
          {OverviewArr.map((Overview, idx) => (
            <div
              key={idx}
              className={`w-full 
                aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] 
                p-6 rounded-[16px] bg-extra-blue shadow-md flex flex-col 
                gap-y-2.5 2xl:gap-y-[56px] items-center sm:items-start justify-center
                ${
                  idx == OverviewArr.length - 1 &&
                  `w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] 
   col-span-2 sm:col-span-1 items-center justify-center flex 
   max-h-[120px] sm:max-h-[200px] md:max-h-[320px]`
                }
`}
            >
              <Heading
                Variant="h6"
                Txt={Overview?.title}
                className="text-sm capitalize text-center sm:text-left max-w-[80px] sm:max-w-[160px] 
                md:text-left text-primary-light-white font-[600] leading-[150%]  "
              />
              <div
                className={`flex items-end w-full relative ${
                  idx == OverviewArr.length - 1
                    ? "justify-center sm:justify-end"
                    : "justify-end"
                } `}
              >
                <Paragraph
                  className="text-[32px] lg:text-[48px] 2xl:text-[80px] font-filson font-bold leading-[120%] 
                  text-primary-white tracking-[-0.8px]"
                  Txt={
                    <CountUp
                      end={Overview?.value}
                      duration={2.5}
                      separator=","
                      suffix={Overview?.suffix}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  }
                />
              </div>
            </div>
          ))}

          {/* Lottie → always last */}
          <div
            className="
              w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] 
              col-span-2 sm:col-span-1 order-last
            "
          >
            <DotLottieReact
              className="w-full h-full"
              src={animationData}
              loop
              autoplay
              renderConfig={{ autoResize: true }}
              layout={{ fit: "cover", align: [0.5, 0.5] }}
            />
          </div>
        </div>

        {/* Right side text */}
        <div className="flex flex-col gap-y-3 lg:gap-y-6 items-center max-w-[384px]">
          <Heading
            className="text-2xl text-center xl:text-left 2xl:text-[32px] font-filson font-medium 
            leading-[120%] tracking-[-0.32px] text-primary-white"
            Variant="h4"
            Txt={"Numbers don’t define us. But they do say a lot."}
          />
          <Paragraph
            className="text-sm text-center xl:text-left font-medium leading-[150%] 
            text-primary-light-white tracking-[-0.32px]"
            Txt={
              "Every project has a face, a brand, and a goal. This is the work we show up for, and we’ve done it more than once."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Overview;
