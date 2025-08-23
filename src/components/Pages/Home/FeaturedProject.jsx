import React, { useRef, useState } from "react";
import {
  ArrowSvgRight,
  ArrowSvgRightWhite,
  Dope,
  FigmaIcon,
  Illusion,
  SmileFace,
} from "../../../SvgContainer/SvgContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import Heading from "../../Heading/Heading";
import medicine from "../../../assets/img/slider-img/medicine.png";
import illusion from "../../../assets/img/slider-img/illusion.png";
import cookie from "../../../assets/img/slider-img/cookie.png";
import jar from "../../../assets/img/slider-img/jar.jpg";
import coffee from "../../../assets/img/slider-img/coffe.png";
import dope from "../../../assets/img/slider-img/dope.png";
import Button from "../../Buttons/Button";

const colorCodes = [
  { id: 1, name: "green", color: "#21694A" },
  { id: 2, name: "purple", color: "#7D5B94" },
  { id: 3, name: "yellow", color: "#D8EA68" },
  { id: 4, name: "red", color: "#21694A" },
  { id: 5, name: "orange", color: "#F26129" },
];

const itemsArr = [
  {
    id: 1,
    img: medicine,
    svg: FigmaIcon,
    colorSlug: "green",
    videoUrl:
      "https://res.cloudinary.com/dfogl3n5q/video/upload/v1754562722/full_stack_app/videos/company_overview/1.mp4",
  },
  {
    id: 2,
    img: illusion,
    colorSlug: "purple",
    videoUrl:
      "https://res.cloudinary.com/dfogl3n5q/video/upload/v1754562722/full_stack_app/videos/company_overview/1.mp4",
  },
  {
    id: 3,
    img: cookie,
    colorSlug: "yellow",
    videoUrl:
      "https://res.cloudinary.com/dfogl3n5q/video/upload/v1754562722/full_stack_app/videos/company_overview/1.mp4",
  },
  {
    id: 4,
    img: jar,
    colorSlug: "yellow",
    videoUrl:
      "https://res.cloudinary.com/dfogl3n5q/video/upload/v1754562722/full_stack_app/videos/company_overview/1.mp4",
  },
  {
    id: 5,
    img: medicine,
    svg: FigmaIcon,
    colorSlug: "green",
    videoUrl:
      "https://res.cloudinary.com/dfogl3n5q/video/upload/v1754562722/full_stack_app/videos/company_overview/1.mp4",
  },
  {
    id: 6,
    img: coffee,
    colorSlug: "green",
    videoUrl:
      "https://res.cloudinary.com/dfogl3n5q/video/upload/v1754562722/full_stack_app/videos/company_overview/1.mp4",
  },
  {
    id: 7,
    img: dope,
    colorSlug: "red",
    videoUrl:
      "https://res.cloudinary.com/dfogl3n5q/video/upload/v1754562722/full_stack_app/videos/company_overview/1.mp4",
  },
];

const FeaturedProject = () => {
  const swiperRef = useRef(null);
  const [paginationEl, setPaginationEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [videoReady, setVideoReady] = useState({});

  const handleVideoCanPlay = key => {
    setVideoReady(prev => ({ ...prev, [key]: true }));
  };

  return (
    <section className="h-auto w-full py-[112px] overflow-hidden">
      <div className="container flex flex-col gap-y-20">
        {/* Titles */}
        <div className="flex flex-col gap-y-6">
          <Heading
            Variant="h6"
            Txt="Projects"
            className={
              "text-xs uppercase  text-metal-white font-extrabold leading-[150%] tracking-[1.92px] "
            }
          />
          <Heading
            Variant="h3"
            Txt="take a look"
            className={
              "text-[40px]  text-primary-white capitalize font-bold leading-[120%] tracking-[-0.4px] max-w-[450px]  "
            }
          />
        </div>

        {/* Swiper */}
        <div className="flex flex-col gap-y-12 w-full">
          <Swiper
            ref={swiperRef}
            slidesPerView={2.6}
            centeredSlides={false}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={32}
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true, el: paginationEl }}
            navigation={{ prevEl, nextEl }}
            className="w-full"
          >
            {itemsArr.map((item, idx) => {
              const key = `slide-${idx}`;
              const isHovered = hoveredIndex === key;
              const isReady = videoReady[key] === true;
              return (
                <SwiperSlide key={key} className="flex justify-center">
                  <div
                    className="relative w-[520px] shadow-md h-[780px] rounded-[16px] overflow-hidden cursor-pointer"
                    onMouseEnter={() => {
                      setHoveredIndex(key);
                      setVideoReady(prev => ({ ...prev, [key]: false }));
                    }}
                    onMouseLeave={() => {
                      setHoveredIndex(null);
                      setVideoReady(prev => ({ ...prev, [key]: false }));
                    }}
                  >
                    <img
                      src={item.img}
                      alt={`slide-${idx}`}
                      className="absolute inset-0 h-full w-full object-cover z-10 transition-opacity duration-700"
                      style={{ opacity: isHovered && isReady ? 0 : 1 }}
                    />
                    {isHovered && (
                      <video
                        src={item.videoUrl}
                        autoPlay
                        muted
                        loop
                        preload="auto"
                        playsInline
                        onCanPlay={() => handleVideoCanPlay(key)}
                        className="absolute inset-0 h-full w-full object-cover z-20 transition-opacity duration-700"
                        style={{
                          opacity: isReady ? 1 : 0,
                          pointerEvents: "none",
                        }}
                      />
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="flex justify-between items-center ">
            <div ref={setPaginationEl} className="my-pagination"></div>
            <div className="flex gap-x-4">
              <Button
                ref={setPrevEl}
                className="h-auto w-auto p-3 ease-in-out duration-300 group hover:bg-light-blue bg-extra-blue rounded-[8px] cursor-pointer"
                btnTxt={
                  <>
                    <div className="block ease-in-out duration-300 group-hover:hidden">
                      <ArrowSvgRight />
                    </div>
                    <div className="hidden ease-in-out duration-300 group-hover:block rotate-[180deg]">
                      <ArrowSvgRightWhite />
                    </div>
                  </>
                }
                onClick={() => swiperRef.current.swiper.slidePrev()}
              />
              <Button
                ref={setNextEl}
                className="h-auto w-auto ease-in-out duration-300 p-3 group hover:bg-light-blue bg-extra-blue rounded-[8px] cursor-pointer rotate-[180deg]"
                btnTxt={
                  <>
                    <div className="block ease-in-out duration-300 group-hover:hidden">
                      <ArrowSvgRight />
                    </div>
                    <div className="hidden ease-in-out duration-300 group-hover:block rotate-[180deg]">
                      <ArrowSvgRightWhite />
                    </div>
                  </>
                }
                onClick={() => swiperRef.current.swiper.slideNext()}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
