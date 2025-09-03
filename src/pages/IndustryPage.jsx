import React from "react";
import Hero from "../components/Pages/Industry/Hero";
import BrandSection from "../components/CommonComponents/BrandSection";
import brand_img from "../assets/img/slider-img/illusion.png";
import Brands from "../components/CommonComponents/Brands";
import Testimonial from "../components/CommonComponents/Testimonial";
import Portfolio from "../components/Pages/AboutUs/Portfolio";
import ImageTagLine from "../components/CommonComponents/ImageTagLine";
import ImageGallery from "../components/CommonComponents/ImageGallery";

const IndustryPage = () => {
  return (
    <section className="bg-primary-color">
      <Hero />
      <BrandSection />
      <ImageGallery />
      <ImageTagLine />
      <div className="pt-[60px]">
        <Testimonial />
      </div>
      <Portfolio />
      <Brands bgImg={brand_img} />
    </section>
  );
};

export default IndustryPage;
