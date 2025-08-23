import React, { useRef, useState, useEffect } from "react";
import logo from "../assets/logo/logo.svg";
import Button from "../components/Buttons/Button";
import { Link, NavLink } from "react-router-dom";
import { ArrowLeft, BoxSvg, Dropdown } from "../SvgContainer/SvgContainer";
import email from "../assets/img/navbar/email.jpeg";
import marketing from "../assets/img/navbar/marketing.jpeg";
import Heading from "../components/Heading/Heading";
import Paragraph from "../components/Paragraph/Paragraph";
import gsap from "gsap";

const navLinks = [
  { label: "work", redirectLink: "/demo" },
  { label: "about", redirectLink: "/demo" },
  { label: "projects", redirectLink: "/projects" },
  {
    label: "service",
    redirectLink: "/demo",
    subItems: [
      { label: "demo", redirectLink: "/demo" },
      { label: "demo", redirectLink: "/demo" },
    ],
  },
  {
    label: "industries",
    redirectLink: "/demo",
    subItems: [{ label: "demo", redirectLink: "/demo" }],
  },
];

const subMenu = [
  {
    menuList: [
      {
        title: "Branding",
        desc: "Strategic identities to resonate, adapt, and stand apart.",
      },
      {
        title: "Web Design",
        desc: "Modern, responsive websites built to convert.",
      },
      {
        title: "UI/UX",
        desc: "User-first systems that make every interaction intuitive.",
      },
      {
        title: "Email Marketing",
        desc: "On-brand designs that drive engagement and conversions.",
      },
      {
        title: "Landing Pages",
        desc: "Conversion-optimized pages tailored for action.",
      },
    ],
  },
  {
    menuList: [
      {
        title: "Presentations",
        desc: "Pitch decks, sales decks, internal comms, investor decks.",
      },
      {
        title: "Social & Ad Creatives",
        desc: "Thumb-stopping visuals built for performance.",
      },
      {
        title: "Print & Packaging",
        desc: "Premium experiences that bring brands into the real world.",
      },
      {
        title: "Video Editing",
        desc: "Short-form content, ads, explainers, reels, UGC.",
      },
    ],
  },
];



const latestArticles = [
  {
    img: email,
    title: "Getta Snacks: branding & packaging",
    link: "#",
  },
  {
    img: marketing,
    title: "DOPE Marketing: lorem ipsum dolor sit amet consectetuer",
    link: "#",
  },
  {
    img: email,
    title: "Army Pink: lorem ipsum dolor sit",
    link: "#",
  },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleMouseEnterNav = item => {
    clearTimeout(timeoutRef.current);
    setActiveItem(item);
  };

  const handleMouseLeaveNav = () => {
    timeoutRef.current = setTimeout(() => setActiveItem(null), 150);
  };

  const handleMouseEnterDropdown = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeaveDropdown = () => {
    timeoutRef.current = setTimeout(() => setActiveItem(null), 150);
  };

  useEffect(() => {
    if (!dropdownRef.current) return;

    if (activeItem) {
      gsap.fromTo(
        dropdownRef.current,
        {
          height: 0,
          opacity: 0,
          y: -20,
          pointerEvents: "none",
          overflow: "hidden",
        },
        {
          height: dropdownRef.current.scrollHeight + 32,
          opacity: 1,
          y: 0,
          pointerEvents: "auto",
          duration: 0.5,
          ease: "power3.out",
          onComplete: () => {
            dropdownRef.current.style.height = "auto";
            dropdownRef.current.style.overflow = "visible";
          },
        }
      );
    } else {
      gsap.to(dropdownRef.current, {
        height: 0,
        opacity: 0,
        y: -20,
        pointerEvents: "none",
        duration: 0.3,
        ease: "power3.in",
        overflow: "hidden",
      });
    }
  }, [activeItem]);

  return (
    <nav className="sticky top-0 left-0 bg-primary-color py-4.5 z-50">
      <div className="container relative flex flex-row items-center justify-between">
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="site logo" className="w-[127px] h-[25px]" />
        </Link>

        <div className="flex flex-row gap-x-12 items-center relative">
          <ul className="flex flex-row gap-x-8">
            {navLinks.map((item, idx) => (
              <li key={idx} className="relative">
                {item.subItems ? (
                  <div
                    onMouseEnter={() => handleMouseEnterNav(item)}
                    onMouseLeave={handleMouseLeaveNav}
                    className="flex flex-row gap-x-2 items-center cursor-pointer select-none"
                  >
                    <NavLink
                      to={item.redirectLink || "#"}
                      className={({ isActive }) =>
                        `text-xs font-extrabold leading-[150%] tracking-[1.92px] uppercase hover:text-primary-yellow ease-in-out duration-300 ${
                          isActive
                            ? "text-primary-yellow"
                            : "text-primary-light-white"
                        }`
                      }
                      onClick={() => setActiveItem(null)}
                    >
                      {item.label}
                    </NavLink>
                    <div>
                      <Dropdown />
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={item.redirectLink || "#"}
                    className={({ isActive }) =>
                      `text-xs font-extrabold leading-[150%] tracking-[1.92px] uppercase hover:text-primary-yellow ease-in-out duration-300 ${
                        isActive
                          ? "text-primary-yellow"
                          : "text-primary-light-white"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <Button
            className={
              "h-auto w-auto px-5 py-2 bg-primary-yellow text-primary-dark-blue font-bold rounded-[8px] cursor-pointer ease-in-out duration-500 hover:bg-transparent border-[1px] border-transparent hover:border-solid hover:border-primary-yellow hover:text-primary-yellow  "
            }
            btnTxt={"Book a call"}
          />
        </div>
      </div>
      <div
        ref={dropdownRef}
        onMouseEnter={handleMouseEnterDropdown}
        onMouseLeave={handleMouseLeaveDropdown}
        className="dropdown-wrapper absolute     top-full left-0 w-full glass-effect border-b border-primary-light-white shadow-md   flex gap-x-[120px] "
        style={{
          overflow: "hidden",
          height: 0,
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <div className="flex flex-row  w-auto p-8 gap-x-24     mx-auto">
          {subMenu.map((menu, idx) => (
            <div key={idx} className="flex flex-col gap-y-0 items-start">
              <ul className="flex flex-col gap-y-10">
                {menu.menuList.map((item, idx2) => (
                  <li
                    key={idx2}
                    className="flex group cursor-pointer flex-col gap-y-6"
                  >
                    <div className="flex  flex-row gap-x-2">
                      <div className="w-5 h-5 rounded-[4px] bg-primary-light-white group-hover:bg-primary-green ease-in-out duration-300 "></div>
                      <div className="flex flex-col gap-y-1">
                        <Heading
                          Variant={"h3"}
                          Txt={item.title}
                          className="text-primary-white text-sm font-bold leading-[150%]"
                        />
                        <Paragraph
                          Txt={item.desc}
                          className="text-primary-light-white text-xs font-noraml leading-[150%]"
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex  bg-extra-blue py-8 pl-8 pr-[96px] flex-col  gap-y-6 w-[30%] ">
          <div className="flex flex-col gap-y-10">
            {latestArticles.map((article, idx) => (
              <Link
                to={article.link}
                key={idx}
                className="flex  cursor-pointer flex-row gap-x-6 w-auto"
              >
                <img
                  src={article.img}
                  alt="not found"
                  className="h-[80px] w-[120px] rounded-[8px] object-cover"
                  style={{ flex: "0 0 auto" }} // same effect as flex-shrink-0
                />
                <Heading
                  Variant={"h3"}
                  Txt={article.title}
                  className="text-primary-white   text-sm font-bold leading-[150%]"
                />
              </Link>
            ))}
          </div>
          <Button
            className={
              "flex flex-row gap-x-3 text-xs font-extrabold leading-[150%] tracking-[1.92px] uppercase text-primary-light-white "
            }
            btnTxt={
              <>
                See all <ArrowLeft />{" "}
              </>
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
