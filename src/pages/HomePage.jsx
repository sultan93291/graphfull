import React from "react";
import Hero from "../components/Pages/Home/Hero";
import ProjectSection from "../components/Pages/Home/ProjectSection";
import ServiceSection from "../components/Pages/Projects/ServiceSection";
import Testimonial from "../components/Pages/Home/Testimonial";
import FeaturedProject from "../components/Pages/Home/FeaturedProject";
import Overview from "../components/Pages/Home/Overview";
import Insights from "../components/Pages/Home/Insights";
import BreakDown from "../components/Pages/Home/BreakDown";
import BrandSection from "../components/CommonComponents/BrandSection";

const HomePage = () => {
  return (
    <section className="h-auto w-full  bg-primary-color  ">
      <Hero />
      <BrandSection />
      <ProjectSection />
      <ServiceSection />
      <Testimonial />
      <FeaturedProject />
      <Overview />
      <BreakDown />
      <Insights />
    </section>
  );
};

export default HomePage;
