import { useState, useRef, useEffect } from "react";
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
    text: "Since launching, we've been getting a ton of compliments on the site. I had the pleasure of working with Teo & the team at Graphfull to relaunch the JMA website in November 2023. Specifically, I worked with Teo to make my site function better for my audience...without losing the vibe' of the JMA brand. Teo delivered on the ask exceptionally well, by injecting her team's design & UX expertise into JMA's existing creative aesthetic, managing to improve the site's load time by 2X whilst enlivening the overall feel of the site. My recommendation is to let Teo have a look at your website, even if you think it's perfect.",
    name: "Name Surname",
    position: "Position, Company name",
    img: coffee,
  },
  {
    title:
      "Since launching, we’ve been getting a ton of compliments on the site.",
    text: "Since launching, we've been getting a ton of compliments on the site. I had the pleasure of working with Teo & the team at Graphfull to relaunch the JMA website in November 2023. Specifically, I worked with Teo to make my site function better for my audience...without losing the vibe' of the JMA brand. Teo delivered on the ask exceptionally well, by injecting her team's design & UX expertise into JMA's existing creative aesthetic, managing to improve the site's load time by 2X whilst enlivening the overall feel of the site. My recommendation is to let Teo have a look at your website, even if you think it's perfect.",
    name: "Name Surname",
    position: "Position, Company name",
    img: coffee,
  },
];

const layout = [
  { type: "single", img: coffee },
  { type: "grid", cols: 3, img: person },
  { type: "single", img: coffee },
  { type: "grid", cols: 2, img: person },
  { type: "single", img: coffee },
  { type: "grid", cols: 2, img: person },
  { type: "single", img: coffee },
];

const Industry = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const imagesRef = useRef(null);

  const toggleExpand = index => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Nested scroll: first scroll images container, then page
  useEffect(() => {
    const handleWheel = e => {
      const container = imagesRef.current;
      if (!container) return;

      // Only apply for large screens
      if (window.innerWidth < 1024) return;

      const maxScroll = container.scrollHeight - container.clientHeight;
      const atTop = container.scrollTop <= 0 && e.deltaY < 0;
      const atBottom = container.scrollTop >= maxScroll && e.deltaY > 0;

      // Scroll container if possible
      if (!atTop && !atBottom) {
        e.preventDefault(); // prevent page scroll
        container.scrollTop += e.deltaY;
      }
      // If atTop or atBottom, allow page to scroll naturally
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="h-auto w-full bg-primary-color py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[120px]">
      <div className="container flex flex-col gap-y-12 md:gap-y-14 xl:flex-row gap-x-[80px]">
        {/* Left Column */}
        <div className="flex flex-col gap-y-8 w-full 3xl:min-w-[495px]">
          <div className="flex flex-col gap-y-6 xl:gap-y-[56px]">
            <GettaSvg />
            <div className="flex flex-col gap-y-5 xl:gap-y-8">
              <Heading Variant="h6" Txt="Industry" className="small-heading" />
              <Heading
                Variant="h3"
                Txt="Short heading goes here"
                className="text-[24px] md:text-[32px] lg:text-[28px] xl:text-[36px] font-filson 3xl:text-[40px] capitalize text-primary-white font-bold"
              />
              <div className="flex flex-row gap-x-2 items-center">
                {tagLineArr.map((tag, idx) => (
                  <div
                    key={idx}
                    className="h-auto w-auto px-3 py-2 rounded-[16px] bg-secondary-off-gray text-xs text-primary-light-white font-medium leading-[150%]"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-y-6 xl:gap-y-8 max-w-[495px]">
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

          {/* Reviews */}
          <div className="flex flex-col gap-y-4 xl:gap-y-8 xl:max-h-[80vh] xl:overflow-y-auto">
            {cardArr.map((card, idx) => (
              <div
                key={idx}
                className="h-auto p-4 xl:p-8 w-auto xl:max-w-[495px] bg-extra-blue rounded-[16px]"
              >
                <Heading
                  Variant="h3"
                  Txt={"“"}
                  className="text-xl xl:text-2xl font-bold leading-[140%] tracking-[-0.24px] text-primary-white"
                />
                <div className="flex flex-col gap-y-4">
                  <Heading
                    Variant="h3"
                    Txt={card.title}
                    className="text-lg xl:text-2xl font-bold leading-[140%] tracking-[-0.24px] text-primary-white"
                  />
                  <Paragraph
                    Txt={
                      expandedIndex === idx
                        ? card.text
                        : card.text.slice(0, 200) + "..."
                    }
                    className="text-xs font-normal leading-[140%] text-metal-white"
                  />
                  <div className="flex flex-row w-full justify-between items-center">
                    <div className="flex flex-row gap-x-3 items-center">
                      <div>
                        <img
                          src={card.img}
                          className="w-8 h-8 object-cover rounded-[8px]"
                          alt="not found"
                        />
                      </div>
                      <div className="flex flex-col gap-y-1">
                        <Heading
                          Variant={"h4"}
                          className="text-xs font-medium leading-[150%] text-metal-white"
                          Txt={card.name}
                        />
                        <Heading
                          Variant={"h4"}
                          className="text-xs font-medium leading-[150%] text-metal-gray"
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
                        Txt={expandedIndex === idx ? "Show Less" : "Show More"}
                        className="small-heading"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Images */}
        <div
          ref={imagesRef}
          className="w-full xl:max-h-[80vh] xl:overflow-y-auto flex flex-col gap-4"
        >
          {layout.map((section, index) => (
            <div key={index}>
              {section.type === "single" ? (
                <img
                  src={section.img}
                  alt={`Placeholder ${index}`}
                  className="w-full h-[189px] md:h-[250px] lg:h-[320px] xl:h-[401px] object-cover rounded-[11.3px]"
                />
              ) : (
                <div
                  className={`grid w-full gap-4 ${
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
                      className={`object-cover rounded-[11.3px] ${
                        section.cols === 3
                          ? "h-[106px] md:h-[150px] lg:h-[200px] xl:h-[227px] w-full"
                          : "h-[164px] md:h-[200px] lg:h-[250px] xl:h-[349px] w-full"
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
