import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { heroVideo, heroVideo2 } from "../Utils";

const Hero = () => {
  const [videoSource, setVideoSource] = useState(
    window.innerWidth < 767 ? heroVideo2 : heroVideo
  );

  useEffect(() => {
    gsap.to("#hero-title", { opacity: 1, delay: 2.2 });
    gsap.to("#purchase", { opacity: 1, y: -10, delay: 2.2 });
    const handleResize = () => {
      setVideoSource(window.innerWidth < 600 ? heroVideo2 : heroVideo);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative w-full bg-black navbar-height">
      <div className="h-5/6 w-full flex-col flex-center ">
        <p id="hero-title" className="hero-title xl:mt-10">
          GTR
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline
            key={videoSource}
          >
            <source src={videoSource} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="purchase"
        className="flex md:mt-2  flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy a car
        </a>
        <p className="font-normal text-xl">best price to buy 8000$</p>
      </div>
    </section>
  );
};

export default Hero;
