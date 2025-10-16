import React from "react";
import Brands from "../components/CommonComponents/Brands";
import brand_img from "../assets/img/slider-img/illusion.png";
import BrandSection from "../components/CommonComponents/BrandSection";
import Portfolio from "../components/Pages/AboutUs/Portfolio";
import Hero from "../components/Pages/AboutUs/Hero";

const AboutUs = () => {
  return (
    <section className=" bg-primary-color">
      <Hero/>
      <BrandSection isBgColr={false} />
      <Portfolio isBtn={true} />
      <Brands bgImg={brand_img} />
    </section>
  );
};

export default AboutUs;
