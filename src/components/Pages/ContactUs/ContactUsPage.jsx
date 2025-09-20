import React from "react";
import Heading from "../../Heading/Heading";
import Button from "../../Buttons/Button";
import ImageTrail from "../../Animations/ImageTrail";

import blue1 from "../../../assets/img/smile-faces/blue-confiedence.png"
import blue2 from "../../../assets/img/smile-faces/blue-decnt.png";
import blue3 from "../../../assets/img/smile-faces/blue-smile.png";
import green1 from "../../../assets/img/smile-faces/green-smile.png";
import green2 from "../../../assets/img/smile-faces/green-tharki.png";
import orange1 from "../../../assets/img/smile-faces/orange-decent.png";
import yellow1 from "../../../assets/img/smile-faces/yellow-confiedence.png";




const ContactUsPage = () => {
  return (
    <section className="w-full relative overflow-hidden bg-primary-color py-[64px] xl:py-[80px] 2xl:py-[164px] ">
      {/* ImageTrail as background */}
      <div className="absolute inset-0 z-0">
        <ImageTrail
          items={[blue1, blue2, blue3, green1, green2, orange1, yellow1]}
          variant={2}
        />
      </div>

      <div className="container relative z-10">
        <div className="flex justify-center">
          <div className="flex flex-col gap-y-12 max-w-xl w-full">
            <Heading
              Txt="Let’s talk design"
              Variant="h2"
              className="text-[28px] md:text-[40px] font-bold leading-[120%] tracking-[-0.4px] text-primary-white"
            />
            <div className="flex flex-col gap-y-6 w-full max-w-[584px] relative">
              <input
                placeholder="Enter your email"
                type="email"
                style={{
                  backgroundColor: "rgba(159, 173, 185, 0.05)",
                  border: "1px solid rgba(159, 173, 185, 0.00)",
                }}
                className="w-full py-2 px-3  lg:p-4 rounded-[12px] outline-none text-base shadow-md text-primary-light-white font-normal leading-[150%]"
              />
              <textarea
                placeholder="Enter your message"
                style={{
                  backgroundColor: "rgba(159, 173, 185, 0.05)",
                  border: "1px solid rgba(159, 173, 185, 0.00)",
                }}
                className="w-full py-2 px-3  lg:p-4 rounded-[12px] outline-none text-base shadow-md text-primary-light-white font-normal leading-[150%] h-[180px]"
              ></textarea>
              <Button
                className=" w-full px-6 py-2.5 lg:px-5 lg:py-2 bg-primary-green text-primary-dark-blue font-bold rounded-[8px] cursor-pointer transition ease-in-out duration-500 hover:bg-transparent border border-transparent hover:border-primary-green hover:text-primary-green xs:w-fit"
                btnTxt="Submit"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
