import React from "react";
import CommonHero from "../components/CommonComponents/CommonHero";
import BrandSection from "../components/CommonComponents/BrandSection";
import brand_img from "../assets/img/slider-img/illusion.png";
import Brands from "../components/CommonComponents/Brands";
import Testimonial from "../components/Pages/Home/Testimonial";
import BreakDown from "../components/Pages/Home/BreakDown";
import Portfolio from "../components/Pages/AboutUs/Portfolio";
import ImageTagLine from "../components/CommonComponents/ImageTagLine";
import ClientSpeaks from "../components/Pages/Industry/ClientSpeaks";

const Service = () => {
  return (
    <section className=" bg-primary-color">
      <CommonHero />
      <BrandSection isBgColr={false} />
      <ImageTagLine
        isReverse={true}
        title="CREATIVE SYSTEMS THAT WORK"
        subTitle="Branding built on archetypes: starts with why, scales everywhere"
        short_descreption="Define the archetype, and every touchpoint, from logo to landing page, speaks the same language."
        descreption="How does your brand talk, walk, and look? When every answer tracks back to one clear archetype, the result is instant recognition."
      />
      <ClientSpeaks />
      <BreakDown />
      <Portfolio />
      <Testimonial />
      <Brands bgImg={brand_img} />
    </section>
  );
};

export default Service;
