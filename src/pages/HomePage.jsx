import React from "react";
import Hero from "../components/Pages/Home/Hero";
import BrandSection from "../components/Pages/Home/BrandSection";

const HomePage = () => {
  return (
    <section className="h-auto w-full  bg-primary-color  ">
      <Hero />
      <BrandSection />
    </section>
  );
};

export default HomePage;
