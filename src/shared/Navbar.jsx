import React, { useRef, useState, useEffect } from "react";
import logo from "../assets/logo/logo.svg";
import Button from "../components/Buttons/Button";
import { Link, NavLink } from "react-router-dom";
import { BoxSvg, Dropdown } from "../SvgContainer/SvgContainer";
import email from "../assets/img/navbar/email.jpeg";
import marketing from "../assets/img/navbar/marketing.jpeg";
import Heading from "../components/Heading/Heading";
import Paragraph from "../components/Paragraph/Paragraph";
import gsap from "gsap";

const navLinks = [
  { label: "work", redirectLink: "/demo" },
  { label: "about", redirectLink: "/demo" },
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
    title: "Our Services",
    menuList: [
      {
        title: "Email Campaigns",
        desc: "Transform your email marketing with our expertise.",
      },
      {
        title: "Brand Identity",
        desc: "Crafting unique brands that resonate with audiences.",
      },
      {
        title: "Web Solutions",
        desc: "Building responsive websites that engage users.",
      },
      {
        title: "UI/UX Design",
        desc: "Enhancing user experience through thoughtful design.",
      },
    ],
  },
  {
    title: "More Services",
    menuList: [
      {
        title: "Ad Creatives",
        desc: "Engaging ads that capture attention and drive results.",
      },
      {
        title: "Client Success",
        desc: "Discover how we've helped our clients thrive.",
      },
      {
        title: "Case Studies",
        desc: "Explore our successful projects and their outcomes.",
      },
      {
        title: "Testimonials",
        desc: "Hear from our satisfied clients and partners.",
      },
    ],
  },
];

const latestArticles = [
  {
    img: email,
    title: "Email Marketing",
    desc: "Strategies to enhance your email outreach.",
    link: "#",
  },
  {
    img: marketing,
    title: "Brand Strategy",
    desc: "Building a brand that stands out in the market.",
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
          height: dropdownRef.current.scrollHeight + 40,
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
    <nav className="relative bg-primary-color py-4.5 z-50">
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

      {/* Dropdown */}
      <div
        ref={dropdownRef}
        onMouseEnter={handleMouseEnterDropdown}
        onMouseLeave={handleMouseLeaveDropdown}
        className="dropdown-wrapper absolute top-full left-0 w-full glass-effect border-b border-primary-light-white shadow-md py-10 px-24 flex gap-x-[120px] "
        style={{
          overflow: "hidden",
          height: 0,
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <div className="flex flex-row w-[60%] justify-between max-w-[1200px] mx-auto">
          {subMenu.map((menu, idx) => (
            <div key={idx} className="flex flex-col gap-y-10 items-start">
              <Heading
                Variant={"h3"}
                Txt={menu.title}
                className="text-primary-light-white font-bold leading-[170%]"
              />
              <ul className="flex flex-col gap-y-6">
                {menu.menuList.map((item, idx2) => (
                  <li
                    key={idx2}
                    className="flex cursor-pointer flex-col gap-y-3"
                  >
                    <div className="flex  flex-row gap-x-2">
                      <BoxSvg />
                      <div className="flex flex-col gap-y-1">
                        <Heading
                          Variant={"h3"}
                          Txt={item.title}
                          className="text-primary-light-white font-bold leading-[170%]"
                        />
                        <Paragraph
                          Txt={item.desc}
                          className="text-primary-light-white text-sm font-bold leading-[170%]"
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-y-10 w-[30%] max-w-[480px]">
          <Heading
            Variant={"h3"}
            Txt={"Latest Articles"}
            className="text-primary-light-white font-bold leading-[170%]"
          />
          <div className="flex flex-col gap-y-10">
            {latestArticles.map((article, idx) => (
              <div
                key={idx}
                className="flex cursor-pointer flex-row gap-x-6 w-auto"
              >
                <img
                  src={article.img}
                  alt="not found"
                  className="h-[150px] w-[250px] rounded-[20px] object-cover"
                />
                <div className="flex flex-col gap-y-5 mt-2">
                  <Heading
                    Variant={"h3"}
                    Txt={article.title}
                    className="text-primary-light-white text-base font-bold leading-[170%]"
                  />
                  <div className="flex flex-col gap-y-2">
                    <Paragraph
                      Txt={article.desc}
                      className="text-primary-light-white text-sm font-medium leading-[170%]"
                    />
                    <Link
                      to={article.link}
                      className="text-primary-light-white text-base font-bold leading-[170%] underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
