import React, { useRef, useState } from "react";
import Heading from "../../Heading/Heading";


const serviceArr = [
  "marketing",
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
    <section className="h-auto w-full container flex flex-col 2xl:flex-row justify-between gap-y-0 lg:gap-y-10 pt-20 pb-4 3xl:py-[64px]">
      {/* Video Container */}
      <div className="relative w-full h-[500px] xs:w-[335px] sm:w-full 2xl:w-[450px] 3xl:!w-[555px] sm:h-[350px] lg:h-[500px] 2xl:!h-[832px] rounded-[15px] 3xl:rounded-[24px] overflow-hidden group">
        <video
          ref={videoRef}
          className="!w-full !h-full object-cover rounded-[24px]"
          src={`https://admin.graphfull.com/uploads/portfolio/videos/1761980840.mp4`}
          muted
          loop
          autoPlay
          playsInline
          type="video/mp4"
        />
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            flex items-center justify-center w-14 h-14 rounded-full cursor-pointer
            bg-white/20 backdrop-blur-md border border-white/30 shadow-lg
            transition-opacity duration-300 hover:bg-white/30 hover:scale-110 active:scale-95 focus:outline-none
            ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
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

      {/* Services List */}
      <div className="flex flex-col w-full 2xl:w-[605px] relative gap-y-12 py-[64px] items-center justify-center ">
        <div className="flex flex-col w-full relative gap-y-6 xl:gap-y-8">
          {serviceArr.map((service, idx) => (
            <div
              key={idx}
              className="flex cursor-pointer group ease-in-out duration-500 w-full justify-between items-center flex-row"
            >
              <Heading
                Variant="h6"
                Txt={service}
                className="text-lg xl:text-xl   ease-in-out duration-500 font-bold tracking-[-0.02px] capitalize leading-[140%] text-white  group-hover:text-primary-white"
              />
              <Heading Variant="h4">{service}</Heading>
              <div className="h-[22px] w-[22px] group-hover:w-10 group-hover:h-10 lg:group-hover:w-16 lg:group-hover:h-16  rounded-[8px] ease-in-out duration-500 bg-primary-gray group-hover:bg-primary-yellow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
