import React, { useState } from "react";
import logo from "../assets/logo/logo.svg";
import { InstaSvg, LinkdeinSvg, SmileFace } from "../SvgContainer/SvgContainer";
import Heading from "../components/Heading/Heading";
import { Link } from "react-router-dom";

const FooterNavLink = {
  leftSideLink: [
    { label: "Work", redirectLink: "/work" },
    { label: "About", redirectLink: "/about" },
    { label: "Feedback", redirectLink: "/feedback" },
  ],
  rightSideLink: [
    { label: "Branding", redirectLink: "/branding" },
    { label: "Email Marketing", redirectLink: "/email-marketing" },
    { label: "Landing Pages", redirectLink: "/landing-pages" },
    { label: "Web Design", redirectLink: "/web-design" },
    { label: "UI/UX", redirectLink: "/ui-ux" },
    { label: "Social & Ad Creatives", redirectLink: "/social-ad-creatives" },
    { label: "Print & Packaging", redirectLink: "/print-packaging" },
    { label: "Video Editing", redirectLink: "/video-editing" },
    { label: "Presentations", redirectLink: "/presentations" },
  ],
};

const Footer = () => {
  const [isHovering, setisHovering] = useState(false);
  return (
    <footer className="h-auto w-full py-10  2xl:py-12 3xl:py-20 bg-primary-color ">
      <div className="  container flex flex-col  gap-y-20 ">
        <div className="flex flex-col gap-y-10 xl:flex-row justify-between  ">
          <div className="flex flex-col gap-y-8 ">
            <div className="flex flex-col gap-y-3 xl:gap-y-6 ">
              <Heading
                Txt={"Why leave it here?"}
                Variant={"h2"}
                className={
                  " text-[28px] 3xl:text-[40px] font-bold leading-[120%] font-filson tracking-[-0.4px] text-primary-light-white "
                }
              />
              <Heading
                Txt={"Let’s connect."}
                Variant={"h2"}
                className={
                  "text-[28px] 3xl:text-[40px] font-filson font-bold leading-[120%] tracking-[-0.4px] text-primary-green "
                }
              />
            </div>
            <div
              onMouseEnter={() => setisHovering(true)}
              onMouseLeave={() => setisHovering(false)}
              className={`flex items-center  font-bold justify-start cursor-pointer p-2 rounded-[8px] bg-primary-green overflow-hidden transition-all duration-300 ${
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
          <div className="flex lg:flex-row justify-between 2xl:justify-normal flex-col gap-y-4 gap-x-8 ">
            <ul className="flex flex-col gap-y-4 min-w-[178px] ">
              {FooterNavLink?.leftSideLink?.map((item, idx) => {
                return (
                  <Link
                    to={item?.redirectLink}
                    className="text-sm text-primary-light-white font-medium leading-[150%] ease-in-out duration-300 hover:text-primary-white "
                    key={idx}
                  >
                    {item?.label}
                  </Link>
                );
              })}
            </ul>
            <ul className="flex flex-col gap-y-4 min-w-[178px] items-start ">
              {FooterNavLink?.rightSideLink?.map((item, idx) => {
                return (
                  <Link
                    to={item?.redirectLink}
                    className="text-sm text-primary-light-white font-medium leading-[150%] ease-in-out duration-300 hover:text-primary-white "
                    key={idx}
                  >
                    {item?.label}
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-row xl:items-center items-start justify-between">
          <Link to={"/"} className="cursor-pointer">
            <img src={logo} alt="site logo" className="w-[127px] h-[25px]" />
          </Link>
          <ul className="flex flex-row gap-x-3 items-center">
            <li className="flex cursor-pointer items-center justify-center p-2 xl:p-4 rounded-[8px] bg-primary-green hover:bg-primary-light-green hover:scale-110 hover:shadow-lg transition-transform ease-in-out duration-300 animate-pulse-custom">
              <InstaSvg />
            </li>
            <li className="flex cursor-pointer items-center justify-center p-2 xl:p-4 rounded-[8px] bg-primary-yellow hover:bg-primary-light-yellow hover:scale-110 hover:shadow-lg transition-transform ease-in-out duration-300 animate-pulse-custom">
              <LinkdeinSvg />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
