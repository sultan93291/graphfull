// src/layout/Navbar.jsx
import React, { useRef, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import gsap from "gsap";

import logo from "../assets/logo/logo.svg";
import Button from "../components/Buttons/Button";
import { ArrowLeft, Dropdown } from "../SvgContainer/SvgContainer";
import email from "../assets/img/navbar/email.jpeg";
import marketing from "../assets/img/navbar/marketing.jpeg";
import Heading from "../components/Heading/Heading";
import Paragraph from "../components/Paragraph/Paragraph";

const navLinks = [
  { label: "work", redirectLink: "/work" },
  { label: "about", redirectLink: "/about-us" },
  { label: "projects", redirectLink: "/projects" },
  { label: "testimonial", redirectLink: "/testimonial" },
  { label: "Contact us", redirectLink: "/contact-us" },
  {
    label: "service",
    redirectLink: "/service",
    subItems: [
      { label: "demo", redirectLink: "/demo" },
      { label: "demo", redirectLink: "/demo-2" },
    ],
  },
  {
    label: "industries",
    redirectLink: "/industry",
    subItems: [{ label: "demo", redirectLink: "/demo" }],
  },
];

const serviceSubMenu = [
  {
    menuList: [
      {
        title: "Branding",
        desc: "Strategic identities to resonate, adapt, and stand apart.",
        link: "/service/branding",
      },
      {
        title: "Web Design",
        desc: "Modern, responsive websites built to convert.",
        link: "/service/web-design",
      },
      {
        title: "UI/UX",
        desc: "User-first systems that make every interaction intuitive.",
        link: "/service/ui-ux",
      },
      {
        title: "Email Marketing",
        desc: "On-brand designs that drive engagement and conversions.",
        link: "/service/email-marketing",
      },
      {
        title: "Landing Pages",
        desc: "Conversion-optimized pages tailored for action.",
        link: "/service/landing-pages",
      },
    ],
  },
  {
    menuList: [
      {
        title: "Presentations",
        desc: "Pitch decks, sales decks, internal comms, investor decks.",
        link: "/service/presentations",
      },
      {
        title: "Social & Ad Creatives",
        desc: "Thumb-stopping visuals built for performance.",
        link: "/service/social-creative",
      },
      {
        title: "Print & Packaging",
        desc: "Premium experiences that bring brands into the real world.",
        link: "/service/print-packaging",
      },
      {
        title: "Video Editing",
        desc: "Short-form content, ads, explainers, reels, UGC.",
        link: "/service/video-production",
      },
    ],
  },
];

// Added links for industries so they can navigate
const industriesMenu = [
  {
    menuList: [
      {
        title: "E-commerce",
        desc: "Designs that drive clicks, carts, and conversions",
        link: "/industry/ecommerce",
      },
      {
        title: "Fashion & Beauty",
        desc: "Bold, elevated visuals that turn heads",
        link: "/industry/fashion-beauty",
      },
      {
        title: "Health & Sustainability",
        desc: "Visual identity for brands that do good",
        link: "/industry/health-sustainability",
      },
    ],
  },
  {
    menuList: [
      {
        title: "Food & Travel",
        desc: "Crave-worthy branding that sparks exploration",
        link: "/industry/food-travel",
      },
      {
        title: "Technology & SaaS",
        desc: "Modern design built for fast-moving products",
        link: "/industry/technology-saas",
      },
      {
        title: "Marketing & Advertising",
        desc: "Assets made to perform across every channel",
        link: "/industry/marketing-advertising",
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
  const sidebarRef = useRef(null);
  const timeoutRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const navigate = useNavigate();

  // Clear timeout on unmount
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest('[aria-label="Toggle menu"]')
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Dropdown handlers
  const handleMouseEnterNav = item => {
    clearTimeout(timeoutRef.current);
    setActiveItem(item);
  };

  const handleMouseLeaveNav = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setActiveItem(null), 80);
  };

  const handleMouseEnterDropdown = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeaveDropdown = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setActiveItem(null), 80);
  };

  // GSAP animation
  useEffect(() => {
    if (!dropdownRef.current) return;

    gsap.killTweensOf(dropdownRef.current);

    if (activeItem) {
      gsap.fromTo(
        dropdownRef.current,
        {
          height: 0,
          opacity: 0,
          y: -10,
          pointerEvents: "none",
          overflow: "hidden",
        },
        {
          height: dropdownRef.current.scrollHeight + 32,
          opacity: 1,
          y: 0,
          pointerEvents: "auto",
          duration: 0.35,
          ease: "power2.out",
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
        y: -10,
        pointerEvents: "none",
        duration: 0.25,
        ease: "power2.in",
        overflow: "hidden",
      });
    }
  }, [activeItem]);

  return (
    <>
      <nav className="sticky top-0 left-0 bg-primary-color py-4.5 z-50">
        <div className="container relative flex flex-row items-center justify-between">
          <Link to="/" className="cursor-pointer">
            <img src={logo} alt="site logo" className="w-[127px] h-[25px]" />
          </Link>

          {/* Desktop Navbar */}
          <div className="hidden 2xl:flex flex-row gap-x-12 items-center relative">
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
                      <Dropdown />
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
                "h-auto w-auto px-5 py-2 bg-primary-yellow text-primary-dark-blue font-bold rounded-[8px] cursor-pointer ease-in-out duration-500 hover:bg-transparent border-[1px] border-transparent hover:border-solid hover:border-primary-yellow hover:text-primary-yellow"
              }
              btnTxt={"Book a call"}
            />
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative 2xl:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-7 h-0.5 bg-white rounded-full transform transition-all duration-500 ease-in-out ${
                isOpen ? "rotate-45 absolute" : ""
              }`}
            />
            <span
              className={`block w-7 h-0.5 bg-white rounded-full transform transition-all duration-500 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-7 h-0.5 bg-white rounded-full transform transition-all duration-500 ease-in-out ${
                isOpen ? "-rotate-45 absolute" : ""
              }`}
            />
          </button>
        </div>

        {/* Dropdown Menu */}
        <div
          ref={dropdownRef}
          onMouseEnter={handleMouseEnterDropdown}
          onMouseLeave={handleMouseLeaveDropdown}
          className="dropdown-wrapper absolute top-full left-0 w-full glass-effect border-b-[0.2px] border-primary-light-white shadow-md flex gap-x-[60px] 3xl:gap-x-[120px]"
          style={{
            overflow: "hidden",
            height: 0,
            opacity: 0,
            pointerEvents: "none",
          }}
        >
          <div className="flex flex-row w-auto p-6 3xl:p-8 gap-x-12 3xl:gap-x-24 mx-auto">
            {activeItem?.label === "industries"
              ? industriesMenu.map((menu, idx) => (
                  <div key={idx} className="flex flex-col gap-y-0 items-start">
                    <ul className="flex flex-col gap-y-6 3xl:gap-y-10">
                      {menu.menuList.map((item, idx2) => (
                        <li key={idx2} className="group">
                          <Link
                            to={item.link || "#"}
                            onClick={() => setActiveItem(null)}
                            className="flex flex-row gap-x-2 cursor-pointer"
                          >
                            <div className="w-5 h-5 rounded-[4px] bg-primary-light-white group-hover:bg-primary-green ease-in-out duration-300"></div>
                            <div className="flex flex-col gap-y-1">
                              <Heading
                                Variant={"h3"}
                                Txt={item.title}
                                className="text-primary-white text-sm font-bold leading-[150%]"
                              />
                              <Paragraph
                                Txt={item.desc}
                                className="text-primary-light-white text-xs font-normal leading-[150%]"
                              />
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              : serviceSubMenu.map((menu, idx) => (
                  <div key={idx} className="flex flex-col gap-y-0 items-start">
                    <ul className="flex flex-col gap-y-6 3xl:gap-y-10">
                      {menu.menuList.map((item, idx2) => (
                        <li key={idx2} className="group">
                          <Link
                            to={item.link}
                            onClick={() => setActiveItem(null)}
                            className="flex flex-row gap-x-2 cursor-pointer"
                          >
                            <div className="w-5 h-5 rounded-[4px] bg-primary-light-white group-hover:bg-primary-green ease-in-out duration-300"></div>
                            <div className="flex flex-col gap-y-1">
                              <Heading
                                Variant={"h3"}
                                Txt={item.title}
                                className="text-primary-white text-sm font-bold leading-[150%]"
                              />
                              <Paragraph
                                Txt={item.desc}
                                className="text-primary-light-white text-xs font-normal leading-[150%]"
                              />
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
          </div>

          <div className="flex bg-extra-blue py-6 3xl:py-8 pl-4 3xl:pl-8 pr-[50px] 3xl:pr-[96px] flex-col gap-y-6 w-[30%]">
            <div className="flex flex-col gap-y-6 3xl:gap-y-10">
              {latestArticles.map((article, idx) => (
                <Link
                  to={article.link}
                  key={idx}
                  className="flex cursor-pointer flex-row gap-x-4 3xl:gap-x-6 w-auto"
                >
                  <img
                    src={article.img}
                    alt="not found"
                    className="h-[80px] w-[120px] rounded-[6px] 3xl:rounded-[8px] object-cover"
                    style={{ flex: "0 0 auto" }}
                  />
                  <Heading
                    Variant={"h3"}
                    Txt={article.title}
                    className="text-primary-white text-sm font-bold leading-[150%]"
                  />
                </Link>
              ))}
            </div>
            <Button
              className="flex flex-row gap-x-3 text-xs font-extrabold leading-[150%] tracking-[1.92px] uppercase text-primary-light-white"
              btnTxt={
                <>
                  See all <ArrowLeft />
                </>
              }
            />
          </div>
        </div>
      </nav>

      {/* Glass Effect Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed flex flex-col gap-y-8 py-5 px-5 top-0 left-0 h-full w-[280px] bg-primary-color glass-effect z-[99] shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="site logo" className="w-[100px] h-[25px]" />
        </Link>

        <ul className="flex flex-col gap-y-3">
          {navLinks.map((item, idx) => (
            <li key={idx} className="relative">
              {item.subItems ? (
                <div className="flex flex-col">
                  <div
                    onClick={() =>
                      setOpenSubMenu(openSubMenu === idx ? null : idx)
                    }
                    className="flex flex-row gap-x-2 items-center cursor-pointer select-none px-4 py-0"
                  >
                    <NavLink
                      to={item.redirectLink || "#"}
                      className="text-xs font-extrabold leading-[150%] tracking-[1.92px] uppercase text-primary-light-white hover:text-primary-yellow ease-in-out duration-300"
                      onClick={() => setActiveItem(null)}
                    >
                      {item.label}
                    </NavLink>
                    <span
                      className={`transition-transform duration-300 ease-in-out ${
                        openSubMenu === idx ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <Dropdown />
                    </span>
                  </div>

                  {openSubMenu === idx && (
                    <ul className="flex flex-col gap-y-2 ml-6 mt-2">
                      {item.subItems.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <NavLink
                            to={sub.redirectLink}
                            className="text-xs font-extrabold leading-[150%] tracking-[1.92px] uppercase text-primary-light-white hover:text-primary-yellow ease-in-out duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <NavLink
                  to={item.redirectLink || "#"}
                  className={({ isActive }) =>
                    `text-xs font-extrabold leading-[150%] tracking-[1.92px] uppercase hover:text-primary-yellow ease-in-out duration-300 px-4 py-2 ${
                      isActive
                        ? "text-primary-yellow"
                        : "text-primary-light-white"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <Button
          className={
            "h-auto w-auto px-2 py-2 max-w-[150px] bg-primary-yellow text-primary-dark-blue font-bold rounded-[8px] cursor-pointer ease-in-out duration-500 hover:bg-transparent border-[1px] border-transparent hover:border-solid hover:border-primary-yellow text-sm hover:text-primary-yellow"
          }
          btnTxt={"Book a call"}
        />
      </div>
    </>
  );
};

export default Navbar;
