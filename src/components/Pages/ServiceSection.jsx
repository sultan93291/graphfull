import React, { useRef, useState } from "react";
import Heading from "../Heading/Heading";

const serviceArr = [
  "marketing ",
  "email marketing",
  "web design",
  "ui/ux",
  "creatives",
  "Print & Packaging",
  "Video Editing",
  "Presentations",
  "Landing Pages",
];

const ServiceSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="h-auto w-full container  flex flex-col-reverse 2xl:flex-row justify-between gap-y-8 lg:gap-y-10  py-10  3xl:py-[64px] ">
      <div className="relative w-full h-[500px] xs:w-[335px]  sm:w-full 2xl:w-[450px] 3xl:!w-[555px] sm:h-[350px] lg:h-[500px]  2xl:!h-[832px] rounded-[15px] 3xl:rounded-[24px] overflow-hidden">
        <video
          ref={videoRef}
          className="!w-full !h-full object-cover rounded-[24px]"
          src="https://firebasestorage.googleapis.com/v0/b/alap-b18ad.appspot.com/o/Graphfull-Mascot%2Bresize.mp4?alt=media&token=9860e4fd-09d7-4b7b-a567-cbae8b858841"
          muted
          loop
          autoPlay
          playsInline
          type="video/mp4"
        />
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            flex items-center justify-center w-14 h-14 rounded-full cursor-pointer
            bg-white/20 backdrop-blur-md border border-white/30 shadow-lg 
            transition-transform hover:bg-white/30 hover:scale-110 active:scale-95 focus:outline-none"
          style={{ zIndex: 10 }}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </button>
      </div>

      <div className="flex flex-col w-full 2xl:w-[605px] relative gap-y-12 py-[64px] ">
        <div className="flex flex-col gap-y-4 3xl:gap-y-8 ">
          <Heading
            Variant={"h6"}
            Txt={"SERVICES"}
            className={
              "text-xs uppercase  text-metal-white font-extrabold leading-[150%] tracking-[1.92px] "
            }
          />
          <Heading
            Variant={"h3"}
            Txt={"Creative work we’re built to handle"}
            className={
              "md:text-[32px] text-[24px] lg:text-[28px] xl:text-[36px] 3xl:text-[40px]  text-primary-white font-bold leading-[120%] tracking-[-0.4px] max-w-[450px]  "
            }
          />
        </div>
        <div className="flex flex-col w-full relative gap-y-6 xl:gap-y-8 ">
          {serviceArr.map((service, idx) => {
            console.log(service);

            return (
              <div
                key={idx}
                className="flex cursor-pointer group ease-in-out duration-500 w-full justify-between items-center flex-row"
              >
                <Heading
                  Variant={"h6"}
                  Txt={service}
                  className={
                    " text-lg xl:text-xl group-hover:text-[32px] xl:group-hover:text-[48px] ease-in-out duration-500 font-bold tracking-[-0.02px] capitalize leading-[140%] text-primary-gray "
                  }
                />
                <Heading Variant={"h4"}>{service}</Heading>
                <div className=" h-[22px] w-[22px] group-hover:w-10 group-hover:h-10  lg:group-hover:w-16 lg:group-hover:h-16 xl:group-hover:w-20 xl:group-hover:h-20 rounded-[8px] ease-in-out duration-500 bg-primary-gray group-hover:bg-primary-yellow "></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
