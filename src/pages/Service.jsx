import React from "react";
import CommonHero from "../components/CommonComponents/CommonHero";
import BrandSection from "../components/CommonComponents/BrandSection";
import brand_img from "../assets/img/slider-img/illusion.png";
import Brands from "../components/CommonComponents/Brands";
import Testimonial from "../components/Pages/Home/Testimonial";
import BreakDown from "../components/Pages/Home/BreakDown";
import Portfolio from "../components/Pages/AboutUs/Portfolio";

const Service = () => {
  return (
    <section className=" bg-primary-color">
      <CommonHero />
      <BrandSection isBgColr={false} />
      <BreakDown />
      <Portfolio />
      <Testimonial />
      <Brands bgImg={brand_img} />
    </section>
  );
};

export default Service;
