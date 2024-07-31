import React, { useEffect, useRef } from "react";
import { chippedImg, frameImg, frameVideo } from "../Utils";
import gsap from "gsap";
const ItsFunctionality = () => {
  const videoRef = useRef();
  useEffect(() => {
    gsap.from("#chipped", {
      scrollTrigger: {
        trigger: "#chipped",
        start: "20% bottom",
      },
      opacity: 1,
      scale: 1.4,
      duration: 2,
      ease: "power2.inOut",
    });
    gsap.to(".fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="mutual-padding">
      <div className="scr-mx-w">
        <div id="chipped" className="flex-center w-full my-20">
          <img src={chippedImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="functionality-title">
            Advanced Technology at Your Fingertips.
            <br />
            Intelligent Driving Experience
          </h2>
          <p className="functionality-subtitle text-gray-700">
            Our latest model integrates cutting-edge technology to provide a
            seamless driving experience. The car's advanced processor optimizes
            performance and efficiency, while the intelligent driving system
            offers real-time navigation, adaptive cruise control, and automatic
            safety features. With a sophisticated infotainment system, you can
            stay connected and entertained throughout your journey.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt=""
                className="bg-transparent relative z-20"
              />
            </div>
            <div className="functionality-video">
              <video
                className="pointer-events-none"
                playsInline
                muted
                autoPlay
                preload="none"
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray-500 font-semibold text-center mt-4">
            five stars cars
          </p>
        </div>
        <div className="functionality-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="functionality-text fadeIn">
              Engine Powerful and efficient, {' '}
              <span className="text-white">
                 delivering exceptional performance and
                fuel economy.
              </span>
            </p>
          </div>
          <div className="flex-1 flex-center">
            <p className="feature-text g_text">
              Interior Features {' '}
              <span className="text-white">
                Luxurious leather seats, advanced infotainment system, and
                ambient lighting.
              </span>
            </p>
          </div>
          <div className="flex flex-1 justify-center flex-col">
            <p className="functionality-text fadeIn">
              Safety {' '}
              <span className="text-white">
                Equipped with state-of-the-art safety features, including
                adaptive cruise control and automatic emergency braking.
              </span>
            </p>
          </div>
          <div className="flex-1 flex-center">
            <p className="feature-text g_text">
              Exterior Design {' '} Sleek,
              <span className="text-white">
                 aerodynamic lines with a bold and modern aesthetic.
              </span>
            </p>
          </div>
          <div className="flex-1 flex justify-center flex-col fadeIn">
            <p className="functionality-text">Comfort</p>
            <p className="functionality-bigtext">Technology</p>
            <p className="functionality-text">Performance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItsFunctionality;
