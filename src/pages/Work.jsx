import React from "react";
import Portfolio from "../components/Pages/Work/Portfolio";
import Brands from "../components/CommonComponents/Brands";
import brand_img from "../assets/img/slider-img/illusion.png"

const Work = () => {
  return (
    <>
      <Portfolio />
      <Brands bgImg={brand_img} />
    </>
  );
};

export default Work;
