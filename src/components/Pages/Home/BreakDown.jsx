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

const symbolTitles = {
  checkmark: "Advantage",
  cross: "Disadvantage",
  circle: "Neutral",
};

const BreakDown = () => {
  const [isHovering, setisHovering] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Graphfull");

  const renderSymbol = symbol => {
    const title = symbolTitles[symbol] || "";
    let Icon;
    switch (symbol) {
      case "checkmark":
        Icon = CheckMark;
        break;
      case "cross":
        Icon = CrossMark;
        break;
      case "circle":
        Icon = CirleMark;
        break;
      default:
        return null;
    }
    return (
      <div title={title} className="cursor-help">
        <Icon />
      </div>
    );
  };

  return (
    <section className="h-auto w-full bg-extra-blue py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[120px]">
      <div className="container flex flex-col gap-y-10 xl:gap-y-20">
        {/* Header */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-y-4">
            <Heading
              Variant="h6"
              Txt="breakdown"
              className="small-heading !text-[#62707D] "
            />
            <div className="flex flex-col gap-y-6">
              <Heading
                Variant="h3"
                Txt="Freelancer, agency, in-house or Graphfull?"
                className="md:text-[32px] text-[24px] lg:text-[28px] font-filson xl:text-[36px] 3xl:text-[40px] text-primary-white font-bold leading-[120%] tracking-[-0.4px]"
              />
              <Paragraph
                Txt="See the trade-offs of each model, so you can pick what matches your goals and budget"
                className="text-lg text-primary-light-white font-normal leading-[150%] tracking-[-0.4px]"
              />
            </div>
          </div>
          <div>
            <div
              onMouseEnter={() => setisHovering(true)}
              onMouseLeave={() => setisHovering(false)}
              className={`hidden xl:flex items-center h-auto font-bold justify-start cursor-pointer p-2 rounded-[8px] bg-primary-yellow overflow-hidden transition-all duration-300 ${
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

        {/* Mobile Responsive View */}
        <div className="xl:hidden flex flex-col gap-4">
          {/* Dropdown for options */}
          <div className="xl:hidden flex flex-col gap-4 relative">
            {/* Dropdown for options */}
            <select
              value={selectedOption}
              onChange={e => setSelectedOption(e.target.value)}
              className="px-4 py-3 rounded-md font-bold bg-primary-color text-primary-white pr-10 w-full appearance-none"
              style={{
                WebkitAppearance: "none",
                MozAppearance: "none",
                appearance: "none",
              }}
            >
              {comparisonData.options.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {/* Custom SVG arrow */}
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>

          {/* Selected option details */}
          <div className="flex-1 flex flex-col gap-y-3">
            {comparisonData.categories.map((category, idx) => (
              <div
                key={category}
                className="flex flex-col bg-primary-color p-3 rounded-md"
              >
                <span className="text-sm font-semibold text-primary-white mb-1">
                  {category}
                </span>
                <div className="flex items-center gap-2">
                  {renderSymbol(comparisonData.symbols[selectedOption][idx])}
                  <span className="text-primary-light-white text-sm">
                    {comparisonData.data[selectedOption][idx]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Table */}
        <div className="overflow-x-scroll xl:block hidden w-full">
          <table
            id="comparison-table"
            className="xl:min-w-[600px] w-full border-collapse"
          >
            <thead>
              <tr>
                <th></th>
                {comparisonData.options.map((option, idx) => (
                  <th
                    key={option}
                    className={`py-6 text-lg ${
                      idx !== comparisonData.options.length - 1 &&
                      "border-r-[2px] border-solid border-border-blue"
                    } text-primary-white border-b-[2px] border-solid border-border-blue font-bold leading-[150%] bg-primary-color w-auto ${
                      idx === 0 &&
                      "rounded-tl-[16px] text-[36px] font-extrabold"
                    } ${
                      idx === comparisonData.options.length - 1 &&
                      "rounded-tr-[16px]"
                    }`}
                  >
                    {option}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.categories.map((category, index) => {
                const lastIndex = comparisonData.categories.length - 1;
                return (
                  <tr
                    key={category}
                    className={`bg-primary-color ${
                      index !== lastIndex &&
                      "border-b-[2px] border-solid border-border-blue"
                    } text-sm font-bold leading-[150%] text-primary-light-white`}
                  >
                    <td
                      className={`px-6 ${index === 0 && "rounded-tl-[16px]"} ${
                        index === lastIndex && "rounded-bl-[16px]"
                      }`}
                    >
                      {category}
                    </td>
                    {comparisonData.options.map((option, optIndex) => {
                      const isLastOption =
                        optIndex === comparisonData.options.length - 1;
                      const isLastItem = index === lastIndex && isLastOption;
                      const symbol = comparisonData.symbols[option][index];

                      return (
                        <td
                          key={`${option}-${category}`}
                          className={`py-5 px-2 ${
                            isLastItem ? "rounded-br-[16px]" : ""
                          } ${option === "Graphfull" ? "text-white" : ""}`}
                        >
                          <div className="flex items-center space-x-3">
                            {renderSymbol(symbol)}
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
      </div>
    </section>
  );
};

export default BreakDown;
