import { useState } from "react";
import { GettaSvg } from "../../../SvgContainer/SvgContainer";
import Heading from "../../Heading/Heading";
import Paragraph from "./../../Paragraph/Paragraph";
import person from "../../../assets/img/review.avif";
import coffee from "../../../assets/img/slider-img/coffe.png";

const paraArr = [
  `Our project for GETTA aimed to create vibrant and fun packaging for flavored filled dates, giving customers a joyful journey from farm to snack. Each package tells the story of the farmers behind each "Single Origin" batch, emphasizing quality and connection.`,
  `With a clean and colorful design, we focus on key information that shows credibility. Inside, whimsical illustrations and extra details add to the fun, making every bite a delightful experience with GETTA.`,
];

const tagLineArr = ["Branding", "Packaging", "Landing Pages"];

const cardArr = [
  {
    title:
      "Since launching, we’ve been getting a ton of compliments on the site.",
    text: "Since launching, we've been getting a ton of compliments on the site. I had the pleasure of working with Teo & the team at Graphfull to relaunch the JMA website in November 2023. Specifically, I worked with Teo to make my site function better for my audience...without losing the vibe' of the JMA brand. Teo delivered on the ask exceptionally well, by injecting her team's design & UX expertise into JMA's existing creative aesthetic, managing to improve the site's load time by 2X whilst enlivening the overall feel of the site. I was particularly impressed by Teo's ability to come up with new ways to deliver on the design effectiveness principles of 2023: this includes building for the smartphone rather than desktop & developing content management solutions that ensure my latest work can be uploaded quickly & easily. My recommendation is to let Teo have a look at your website, even if you think it's perfect. She'll find a way to improve it, without losing what made it great in the first place. And better yet, she can execute her recommendations in a collaborative & timely fashion. That's what I did...and now my business is in a much better spot!",
    name: "Name Surname",
    position: "Position, Company name",
    img: coffee,
  },
  {
    title:
      "Since launching, we’ve been getting a ton of compliments on the site.",
    text: "Since launching, we've been getting a ton of compliments on the site. I had the pleasure of working with Teo & the team at Graphfull to relaunch the JMA website in November 2023. Specifically, I worked with Teo to make my site function better for my audience...without losing the vibe' of the JMA brand. Teo delivered on the ask exceptionally well, by injecting her team's design & UX expertise into JMA's existing creative aesthetic, managing to improve the site's load time by 2X whilst enlivening the overall feel of the site. I was particularly impressed by Teo's ability to come up with new ways to deliver on the design effectiveness principles of 2023: this includes building for the smartphone rather than desktop & developing content management solutions that ensure my latest work can be uploaded quickly & easily. My recommendation is to let Teo have a look at your website, even if you think it's perfect. She'll find a way to improve it, without losing what made it great in the first place. And better yet, she can execute her recommendations in a collaborative & timely fashion. That's what I did...and now my business is in a much better spot!",
    name: "Name Surname",
    position: "Position, Company name",
    img: coffee,
  },
];

const layout = [
  { type: "single", img: coffee },
  {
    type: "grid",
    cols: 3,
    img: person,
  },
  { type: "single", img: coffee },
  {
    type: "grid",
    cols: 2,
    img: person,
  },
  {
    type: "single",
    img: coffee,
  },
  {
    type: "grid",
    cols: 2,
    img: person,
  },
  {
    type: "single",
    img: coffee,
  },
];

// Generate placeholder URL based on size (using via.placeholder.com with fixed dimensions)

const Industry = () => {
  const [expanded, setExpanded] = useState(Array(cardArr.length).fill(false)); // track which cards are expanded

  const toggleExpand = index => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <section className="h-auto w-full bg-primary-color py-[112px] ">
      <div className="container gap-x-[80px] flex flex-row">
        <div className="flex 3xl:min-w-[495px] flex-col gap-y-8 ">
          <div className="flex flex-col gap-y-[56px] ">
            <GettaSvg />
            <div className="flex flex-col gap-y-8 ">
              <Heading
                Variant="h6"
                Txt="Industry"
                className="text-base capitalize text-primary-light-white font-extrabold"
              />
              <Heading
                Variant="h3"
                Txt="Short heading goes here"
                className="text-[40px] capitalize text-primary-white font-bold"
              />
              <div className="flex flex-row gap-x-2 items-center ">
                {tagLineArr.map((tag, idx) => (
                  <div
                    key={idx}
                    className="h-auto w-auto px-3 py-2 rounded-[16px] bg-secondary-off-gray text-xs text-primary-light-white font-medium leading-[150%]"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-y-8 max-w-[495px] ">
                {paraArr.map((para, idx) => (
                  <Paragraph
                    key={idx}
                    className="text-sm font-medium leading-[150%] text-[#C2CFDC]"
                    Txt={para}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-8 ">
            {cardArr.map((card, idx) => (
              <div
                key={idx}
                className="h-auto p-8 w-auto max-w-[495px] bg-extra-blue rounded-[16px]"
              >
                <Heading
                  Variant={"h3"}
                  Txt={"“"}
                  className="text-2xl font-bold leading-[140%] tracking-[-0.24px] text-primary-white"
                />

                <div className="flex flex-col gap-y-4 ">
                  <Heading
                    Variant={"h3"}
                    Txt={card.title}
                    className="text-2xl font-bold leading-[140%] tracking-[-0.24px] text-primary-white"
                  />

                  <Paragraph
                    Txt={
                      expanded[idx]
                        ? card.text
                        : card.text.slice(0, 200) + "..."
                    }
                    className="text-xs font-normal leading-[140%] text-metal-white"
                  />

                  <div className="flex flex-row w-full justify-between items-center ">
                    <div className="flex flex-row gap-x-3 items-center ">
                      <div>
                        <img
                          src={card.img}
                          className="w-8 h-8 object-cover rounded-[8px] "
                          alt="not found"
                        />
                      </div>
                      <div className="flex flex-col gap-y-1  ">
                        <Heading
                          Variant={"h4"}
                          className={
                            "text-xs font-medium leading-[150%] text-metal-white "
                          }
                          Txt={card.name}
                        />
                        <Heading
                          Variant={"h4"}
                          className={
                            "text-xs font-medium leading-[150%] text-metal-gray "
                          }
                          Txt={card.position}
                        />
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-x-2 cursor-pointer"
                      onClick={() => toggleExpand(idx)}
                    >
                      <Heading
                        Variant="h6"
                        Txt={expanded[idx] ? "Show Less" : "Show More"}
                        className="text-base capitalize text-metal-white font-extrabold"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d={
                            expanded[idx]
                              ? "M7.70697 15.707L12 11.414L16.293 15.707L17.707 14.293L12 8.58594L6.29297 14.293L7.70697 15.707Z"
                              : "M16.293 8.29297L12 12.586L7.70697 8.29297L6.29297 9.70697L12 15.414L17.707 9.70697L16.293 8.29297Z" // Down arrow
                          }
                          fill="#C2CFDC"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          {layout.map((section, index) => (
            <div key={index} className={section.className}>
              {section.type === "single" ? (
                <img
                  src={section.img}
                  alt={`Placeholder ${index}`}
                  className="w-full mb-4 h-[401px] object-cover rounded-[11.3px]"
                />
              ) : (
                <div
                  className={`grid w-full relative gap-4 ${
                    section.cols === 2
                      ? "grid-cols-2"
                      : section.cols === 3
                      ? "grid-cols-3"
                      : "grid-cols-1"
                  }`}
                >
                  {Array.from({ length: section.cols }, (_, i) => (
                    <img
                      key={i}
                      src={section.img}
                      alt={`Placeholder ${index}-${i}`}
                      className={`object-cover mb-4 rounded-[11.3px] ${
                        section.cols === 3
                          ? "h-[227px] w-full"
                          : "h-[349px] w-full"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industry;
