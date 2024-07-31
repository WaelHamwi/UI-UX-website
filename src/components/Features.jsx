import React, { useEffect } from "react";
import gsap from "gsap";
import { rightImg, watchImg } from "../Utils";
import Carousel from "./Carousel";
const Features = () => {
  useEffect(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration:1.2, stagger:0.5 });
  }, []);
  return (
    <section
      id="features"
      className="w-screen mx-12 mt-5 md:mt-9 mutual-padding bg-zinc-900 overflow-hidden h-full"
    >
      <div className="scr-mx-w ">
        <div className="mb-12 md:flex w-full justify-between items-end">
          <h1 id="title" className="heading-section">
            get the latest features.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              watch the movie
              <img src={watchImg} alt="" className="ml-2" />
            </p>
            <p className="link">
              access the event
              <img src={rightImg} alt="" className="ml-2" />
            </p>
          </div>
        </div>
        <Carousel/>
      </div>
    </section>
  );
};

export default Features;
