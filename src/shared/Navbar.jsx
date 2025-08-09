import React, { useRef, useState, useEffect } from "react";
import logo from "../assets/logo/logo.svg";
import Button from "../components/Buttons/Button";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Dropdown } from "../SvgContainer/SvgContainer";

const navLinks = [
  {
    label: "work",
    redirectLink: "/demo",
  },
  {
    label: "about",
    redirectLink: "/demo",
  },
  {
    label: "service",
    redirectLink: "/demo",
    subItems: [
      {
        label: "demo",
        redirectLink: "/demo",
      },
      {
        label: "demo",
        redirectLink: "/demo",
      },
    ],
  },
  {
    label: "industries",
    redirectLink: "/demo",
    subItems: [
      {
        label: "demo",
        redirectLink: "/demo",
      },
    ],
  },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef();

  const toggleDropdown = idx => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  // Close dropdown when clicking outside navRef
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="h-auto w-full bg-primary-color py-4.5 ">
      <div className="container flex flex-row items-center justify-between ">
        <Link to={"/"} className="cursor-pointer">
          <img src={logo} alt="site logo" className="w-[127px] h-[25px]" />
        </Link>
        <div className="flex flex-row gap-x-12 items-center ">
          <ul ref={navRef} className="flex flex-row gap-x-8">
            {navLinks.map((item, idx) => (
              <li key={idx} className="relative">
                {item.subItems ? (
                  <div className="flex flex-row gap-x-2 items-center">
                    <NavLink
                      to={item.redirectLink || "#"}
                      className={({ isActive }) =>
                        `text-xs font-extrabold leading-[150%] tracking-[1.92px] uppercase hover:text-primary-yellow ease-in-out duration-300 ${
                          isActive
                            ? "text-primary-yellow"
                            : "text-primary-light-white"
                        }`
                      }
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.label}
                    </NavLink>
                    <div
                      className="cursor-pointer"
                      onClick={() => toggleDropdown(idx)}
                      aria-expanded={openDropdown === idx}
                      aria-haspopup="true"
                    >
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
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.label}
                  </NavLink>
                )}

                {/* Dropdown */}
                {item.subItems && openDropdown === idx && (
                  <ul
                    className=" absolute top-full left-0 mt-8 w-48 rounded-[8px]
    bg-white/10 backdrop-blur-2xl
    border border-white/25
    ring-1 ring-white/30
    shadow-[0_8px_24px_rgba(255,255,255,0.05)]
    z-20
    text-gray-100 font-medium"
                  >
                    {item.subItems.map((subitem, subIdx) => (
                      <li key={subIdx} className="px-5 py-3">
                        <NavLink
                          to={subitem.redirectLink || "#"}
                          className={({ isActive }) =>
                            `block uppercase text-xs font-semibold tracking-wide leading-[150%] transition-colors duration-300 ${
                              isActive
                                ? "text-primary-yellow"
                                : "text-primary-light-white hover:text-primary-yellow"
                            }`
                          }
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subitem.label}
                        </NavLink>

                        {/* hr line except after last item */}
                        {subIdx !== item.subItems.length - 1 && (
                          <hr className="border-t border-white/20 mt-3" />
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <Button btnTxt={"Book a call"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
