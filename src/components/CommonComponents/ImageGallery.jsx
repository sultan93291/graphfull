import React from "react";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import img1 from "../../assets/img/slider-img/coffe.png";
import img2 from "../../assets/img/slider-img/cookie.png";
import img3 from "../../assets/img/slider-img/illusion.png";
import img4 from "../../assets/img/slider-img/dope.png";

const ImageGallery = () => {
  const imgArr = [img1, img2, img3, img4];

  return (
    <section className="h-auto w-auto py-[112px] bg-primary-color  ">
      <div className="flex flex-col gap-y-20 items-center container  ">
        <div className="flex flex-col items-center gap-y-8  ">
          <Heading
            Variant="h3"
            Txt="Image Gallery"
            className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 3xl:text-[48px] text-primary-white font-bold leading-[120%] tracking-[-0.4px]"
          />
          <Paragraph
            Txt={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            className={
              "text-lg text-primary-light-white font-normal leading-[150%] max-w-[616px]  "
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-8 w-full  ">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            <div className="h-[640px] w-full">
              <img
                src={imgArr[0]}
                alt="image-0"
                className="w-full h-[640px] object-cover rounded-[16px] transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer "
              />
            </div>
            <div className="h-[426px] w-full">
              <img
                src={imgArr[1]}
                alt="image-1"
                className="w-full h-[426px] object-cover rounded-[16px] transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer "
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-8">
            <div className=" h-[426px] w-full">
              <img
                src={imgArr[2]}
                alt="image-2"
                className="w-full h-full object-cover rounded-[16px] transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer "
              />
            </div>
            <div className="h-[640px] w-full">
              <img
                src={imgArr[3]}
                alt="image-3"
                className="w-full h-full object-cover rounded-[16px] transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
