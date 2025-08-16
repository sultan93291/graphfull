import React, { useState } from "react";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import {
  CheckMark,
  CirleMark,
  CrossMark,
  SmileFace,
} from "../../../SvgContainer/SvgContainer";

const comparisonData = {
  categories: [
    "Cost",
    "Delivery speed",
    "Brand consistency",
    "Senior oversight",
    "Tool integration",
    "Tool subscriptions",
    "Communication",
    "Flexibility & scale",
    "Commitment",
  ],
  options: ["Graphfull", "Freelancer", "Traditional agencies", "In-house"],
  data: {
    Graphfull: [
      "Custom predictable pricing",
      "Fast sprints",
      "One team, one system",
      "Senior designers on every brief",
      "Plug-and-play with your stack",
      "Full-stack, included",
      "Zero micromanagement",
      "Add or pause scope anytime",
      "Start small, expand if it fits",
    ],
    Freelancer: [
      "Varies",
      "Unpredictable",
      "Style drift over time",
      "Rare, mostly solo work",
      "You manage files & process",
      "Inconsistent or limited",
      "You chase updates",
      "Good for one-offs",
      "Low, but unreliable",
    ],
    "Traditional agencies": [
      "High retainers",
      "Slow with multi-layer approvals",
      "Handoffs break consistency",
      "Yes, but adds layers & cost",
      "Agency tools, your team adapts",
      "Full-stack, included",
      "Status calls, account managers",
      "Scales, but expensive",
      "Long contracts",
    ],
    "In-house": [
      "Salary + benefits + overhead",
      "Competes with other tasks",
      "Good but limited skill range",
      "Depends on hire level",
      "You have control",
      "You pay",
      "Available",
      "One person capacity",
      "Hiring, onboarding, ramp-up",
    ],
  },
  symbols: {
    Graphfull: [
      "checkmark",
      "checkmark",
      "checkmark",
      "checkmark",
      "checkmark",
      "checkmark",
      "checkmark",
      "checkmark",
      "checkmark",
    ],
    Freelancer: [
      "circle",
      "cross",
      "cross",
      "circle",
      "checkmark",
      "circle",
      "cross",
      "checkmark",
      "circle",
    ],
    "Traditional agencies": [
      "cross",
      "cross",
      "cross",
      "circle",
      "cross",
      "checkmark",
      "cross",
      "circle",
      "cross",
    ],
    "In-house": [
      "cross",
      "circle",
      "circle",
      "circle",
      "checkmark",
      "cross",
      "checkmark",
      "cross",
      "cross",
    ],
  },
};

const BreakDown = () => {
  const [isHovering, setisHovering] = useState(false);
  return (
    <section className="h-auto w-full bg-extra-blue  py-[112px] overflow-hidden">
      <div className="container flex flex-col gap-y-20 ">
        {/* Left Section */}
        <div className="flex flex-row justify-between">
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
          <div>
            <div
              onMouseEnter={() => setisHovering(true)}
              onMouseLeave={() => setisHovering(false)}
              className={`flex items-center h-auto  font-bold justify-start cursor-pointer p-2 rounded-[8px] bg-primary-yellow overflow-hidden transition-all duration-300 ${
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
                className={` whitespace-nowrap transition-all duration-300 ${
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
        <table id="comparison-table">
          <thead>
            <tr>
              <th></th>
              {comparisonData.options.map((option, idx) => (
                <th
                  className={`py-6 h-auto text-lg ${
                    idx !== comparisonData.options.length - 1 &&
                    "border-r-[2px] border-solid border-border-blue"
                  } text-primary-white border-b-[2px] border-solid border-border-blue font-bold leading-[150%] bg-primary-color w-auto ${
                    idx === 0 && "rounded-tl-[16px] text-[36px]  font-extrabold"
                  } ${
                    idx === comparisonData.options.length - 1 &&
                    "rounded-tr-[16px]"
                  }`}
                  key={option}
                >
                  {option}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonData.categories.map((category, index) => {
              return (
                <tr
                  className={`bg-primary-color ${
                    index !== comparisonData.categories.length - 1 &&
                    "border-b-[2px] border-solid border-border-blue"
                  } text-sm font-bold leading-[150%] px-6 text-primary-light-white`}
                  key={category}
                >
                  <td
                    className={`px-6 ${
                      index === 0 && "px-6 rounded-tl-[16px]"
                    } ${
                      index === comparisonData.categories.length - 1 &&
                      "rounded-bl-[16px]"
                    }`}
                  >
                    {category}
                  </td>
                  {comparisonData.options.map((option, optIndex) => {
                    const lastIndex = comparisonData.data[option].length - 1;
                    const isLastOption =
                      optIndex === comparisonData.options.length - 1;
                    const isLastItem = index === lastIndex && isLastOption;
                    const symbol = comparisonData.symbols[option][index];

                    // Render SVG based on symbol identifier
                    const renderSymbol = () => {
                      switch (symbol) {
                        case "checkmark":
                          return <CheckMark />;
                        case "cross":
                          return <CrossMark />;
                        case "circle":
                          return <CirleMark />;
                        default:
                          return null;
                      }
                    };

                    return (
                      <td
                        className={`py-5 px-2 ${
                          isLastItem ? "rounded-br-[16px]" : ""
                        } ${option === "Graphfull" ? "text-white" : ""}`}
                        key={`${option}-${category}`}
                      >
                        <div className="flex items-center space-x-3">
                          {renderSymbol()}
                          <span>{comparisonData.data[option][index]}</span>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default BreakDown