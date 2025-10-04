import React, { useRef, useEffect, useState } from "react";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import Button from "../../Buttons/Button";
import {
  ArrowSvgRight,
  ArrowSvgRightWhite,
  WebFlow,
} from "../../../SvgContainer/SvgContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import reviw_girl from "../../../assets/img/review.avif";


const testimonials = [
  {
    id: 1,
    companyLogo: WebFlow,
    quote: `
      Working with this team was a fantastic experience. They were professional, 
      attentive, and really understood our needs. 
   
    `,
    name: "John Doe",
    position: "CEO, Webflow",
    image: reviw_girl,
  },
  {
    id: 2,
    companyLogo: WebFlow,
    quote:
      "This is another amazing testimonial from a satisfied client. They loved the work and service provided.",
    name: "Jane Smith",
    position: "Marketing Manager, CompanyX",
    image: reviw_girl,
  },
  {
    id: 3,
    companyLogo: WebFlow,
    quote:
      "Great experience working with the team. Highly recommend their services!",
    name: "Alice Johnson",
    position: "Product Lead, CompanyY",
    image: reviw_girl,
  },
  {
    id: 4,
    companyLogo: WebFlow,
    quote:
      "Exceptional service and great communication throughout the project.",
    name: "Robert Brown",
    position: "CTO, CompanyZ",
    image: reviw_girl,
  },
];

const Testimonial = () => {
  const swiperRef = useRef(null);
  const [paginationEl, setPaginationEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section className="h-auto w-full py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[120px] overflow-hidden">
      <div className="container flex flex-col 3xl:flex-row justify-between items-start gap-x-20">
        {/* Left Section */}
        <div className="flex flex-col gap-y-4 lg:gap-y-8 mb-12 3xl:mb-0">
          <Heading
            Variant="h6"
            Txt="Feedback"
            className={"small-heading !text-[#62707D]"}
          />
          <Heading
            Variant="h3"
            Txt="Clients say it better than we could"
            className="md:text-[32px] text-[24px] lg:text-[28px] xl:text-[36px] font-filson 3xl:text-[40px] text-primary-white font-bold leading-[120%] tracking-[-0.4px] max-w-[424px]"
          />
          <Paragraph
            Txt="We take pride in the feedback from our clients and partners."
            className="text-sm text-metal-white font-medium leading-[150%]  max-w-[450px]"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-y-8 xl:gap-y-12 w-full 3xl:max-w-[808px]">
          <Swiper
            ref={swiperRef}
            slidesPerView="auto"
            centeredSlides={false}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1.4 },
              1024: { slidesPerView: 2 },
              1200: {
                slidesPerView: "auto",
              },
            }}
            spaceBetween={42}
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true, el: paginationEl }}
            navigation={{ prevEl, nextEl }}
            className="w-full"
          >
            {testimonials.map(item => {
              const Svg = item.companyLogo;
              return (
                <SwiperSlide
                  key={item.id}
                  className="flex justify-center w-auto xl:!w-[600px]  3xl:w-[616px]  "
                >
                  <div className="h-auto cursor-pointer w-full flex flex-col gap-y-6 2xl:gap-y-12 bg-extra-blue rounded-[8px] lg:rounded-[16px] lg:p-8 p-6 text-white">
                    <Svg />
                    <Paragraph
                      Txt={item.quote}
                      className={
                        " text-base lg:text-lg text-metal-white italic font-normal leading-[150%] "
                      }
                    />
                    <div className="flex items-center gap-5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-[12px]"
                      />
                      <div className="flex flex-col gap-y-1 ">
                        <Paragraph
                          Txt={item.name}
                          className={
                            " text-sm lg:text-base font-[600] leading-[150%] text-metal-white"
                          }
                        />
                        <Paragraph
                          Txt={item.position}
                          className={
                            " text-sm lg:text-base font-normal leading-[150%] text-metal-gray"
                          }
                        />
                      </div>
                    </div>
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
                className="h-auto w-auto p-2 lg:p-3 ease-in-out duration-300 group hover:bg-light-blue bg-extra-blue rounded-[8px] cursor-pointer"
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
                className="h-auto w-auto ease-in-out duration-300 p-2 lg:p-3  group hover:bg-light-blue bg-extra-blue rounded-[8px] cursor-pointer rotate-[180deg]"
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

export default Testimonial;
