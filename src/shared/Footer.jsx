import React from "react";
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
  return (
    <footer className="h-auto w-full py-20 bg-primary-color ">
      <div className="  container flex flex-col  gap-y-20 ">
        <div className="flex flex-row justify-between items-center ">
          <div className="flex flex-col gap-y-8 ">
            <div className="flex flex-col gap-y-6 ">
              <Heading
                Txt={"Why leave it here?"}
                Variant={"h2"}
                className={
                  "text-[40px] font-bold leading-[120%] tracking-[-0.4px] text-primary-light-white "
                }
              />
              <Heading
                Txt={"Let’s connect."}
                Variant={"h2"}
                className={
                  "text-[40px] font-bold leading-[120%] tracking-[-0.4px] text-primary-green "
                }
              />
            </div>
            <div className="flex items-center justify-center h-auto w-auto max-w-10 p-2 rounded-[8px] bg-primary-green ">
              <SmileFace />
            </div>
          </div>
          <div className="flex flex-row gap-x-8 ">
            <ul className="flex flex-col gap-y-4 min-w-[178px] ">
              {FooterNavLink?.leftSideLink?.map((item, idx) => {
                return (
                  <Link
                    to={item?.redirectLink}
                    className="text-sm text-primary-light-white font-medium leading-[150%] ease-in-out duration-300 hover:text-primary-yellow "
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
                    className="text-sm text-primary-light-white font-medium leading-[150%] ease-in-out duration-300 hover:text-primary-yellow "
                    key={idx}
                  >
                    {item?.label}
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-between ">
          <Link to={'/'} className="cursor-pointer" >
            <img src={logo} alt="site logo" className="w-[127px] h-[25px]" />
          </Link>
          <ul className="flex flex-row gap-x-3 items-center ">
            <li className="flex items-center justify-center p-4 rounded-[8px] bg-primary-green  ">
              <InstaSvg />
            </li>
            <li className="flex items-center justify-center p-4 rounded-[8px] bg-primary-yellow  ">
              <LinkdeinSvg />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
