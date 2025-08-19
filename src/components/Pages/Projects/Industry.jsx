
import { GettaSvg } from "../../../SvgContainer/SvgContainer";
import Heading from "../../Heading/Heading";
import Paragraph from './../../Paragraph/Paragraph';

const paraArr = [
  `Our project for GETTA aimed to create vibrant and fun packaging for flavored filled dates, giving customers a joyful journey from farm to snack. Each package tells the story of the farmers behind each "Single Origin" batch, emphasizing quality and connection.`,
  `With a clean and colorful design, we focus on key information that shows credibility. Inside, whimsical illustrations and extra details add to the fun, making every bite a delightful experience with GETTA.`,
];

const tagLineArr = ["Branding", "Packaging", "Landing Pages"];

const cardArr = [
  {
    text: "Since launching, we've been getting a ton of compliments on the site. I had the pleasure of working with Teo & the team at Graphfull to relaunch the JMA website in November 2023. Specifically, I worked with Teo to make my site function better for my audience...without losing the vibe' of the JMA brand. Teo delivered on the ask exceptionally well, by injecting her team's design & UX expertise into JMA's existing creative aesthetic, managing to improve the site's load time by 2X whilst enlivening the overall feel of the site. I was particularly impressed by Teo's ability to come up with new ways to deliver on the design effectiveness principles of 2023: this includes building for the smartphone rather than desktop & developing content management solutions that ensure my latest work can be uploaded quickly & easily. My recommendation is to let Teo have a look at your website, even if you think it's perfect. She'll find a way to improve it, without losing what made it great in the first place. And better yet, she can execute her recommendations in a collaborative & timely fashion. That's what I did...and now my business is in a much better spot!",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    text: "Since launching, we've been getting a ton of compliments on the site. I had the pleasure of working with Teo & the team at Graphfull to relaunch the JMA website in November 2023. Specifically, I worked with Teo to make my site function better for my audience...without losing the vibe' of the JMA brand. Teo delivered on the ask exceptionally well, by injecting her team's design & UX expertise into JMA's existing creative aesthetic, managing to improve the site's load time by 2X whilst enlivening the overall feel of the site. I was particularly impressed by Teo's ability to come up with new ways to deliver on the design effectiveness principles of 2023: this includes building for the smartphone rather than desktop & developing content management solutions that ensure my latest work can be uploaded quickly & easily. My recommendation is to let Teo have a look at your website, even if you think it's perfect. She'll find a way to improve it, without losing what made it great in the first place. And better yet, she can execute her recommendations in a collaborative & timely fashion. That's what I did...and now my business is in a much better spot!",
    name: "Name Surname",
    position: "Position, Company name",
  },
];

const Industry = () => {
  return (
    <section className="h-auto w-full bg-primary-color py-[112px] ">
      <div className="container flex flex-row">
        <div className="flex flex-col gap-y-8 ">
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
                {tagLineArr.map((tag, idx) => {
                  return (
                    <div
                      key={idx}
                      className="h-auto w-auto px-3 py-2 rounded-[16px] bg-secondary-off-gray text-xs text-primary-light-white font-medium leading-[150%]   "
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-y-8 max-w-[495px]  " >
                {
                  paraArr.map((para, idx) => {
                    return (
                      <Paragraph
                        key={idx}
                        className={
                          "text-sm font-medium leading-[150%] text-[#C2CFDC] "
                        }
                        Txt={para}
                      />
                    );
                  })
                }


              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 "></div>
        </div>
      </div>
    </section>
  );
};

export default Industry;
