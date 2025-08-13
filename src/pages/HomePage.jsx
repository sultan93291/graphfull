import React from "react";
import Hero from "../components/Pages/Home/Hero";
import BrandSection from "../components/Pages/Home/BrandSection";
import ProjectSection from "../components/Pages/Home/ProjectSection";
import ServiceSection from "../components/Pages/ServiceSection";


const HomePage = () => {
  return (
    <section className="h-auto w-full  bg-primary-color  ">
      <Hero />
      <BrandSection />
      <ProjectSection />
      <ServiceSection/>
    </section>
  );
};

export default HomePage;
