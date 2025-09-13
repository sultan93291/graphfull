import Brands from "@/components/CommonComponents/Brands";
import BrandSection from "@/components/CommonComponents/BrandSection";
import CommonHero from "@/components/CommonComponents/CommonHero";
import ImageTagLine from "@/components/CommonComponents/ImageTagLine";
import Testimonial from "@/components/CommonComponents/Testimonial";
import Portfolio from "@/components/Pages/AboutUs/Portfolio";
import BreakDown from "@/components/Pages/Home/BreakDown";
import Branding from "@/components/Pages/Industry/Branding";
import ClientSpeaks from "@/components/Pages/Industry/ClientSpeaks";
import brand_img from "../../assets/img/slider-img/illusion.png";

const Presentations = () => {
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
      <Portfolio />
      <Branding />
      <BreakDown />
      <Testimonial />
      <Brands bgImg={brand_img} />
    </section>
  );
};

export default Presentations;
