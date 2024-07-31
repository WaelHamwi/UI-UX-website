import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { inspect1Img, inspect2Img, exploreVideo } from "../Utils";
const HighLights = () => {
  const videoRef = useRef();
  useEffect(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
    gsap.fromTo(
      "#highlights_title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.5,
        scrollTrigger: {
          trigger: "#highlights_title",
          start: "top 80%",
          end: "bottom top",
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.to(".g_grow", {
      scale: 1,
      opacity: 1,
      ease: "power1",
      scrollTrigger: {
        trigger: "#exploreVideo",
        start: "top bottom",
        end: "bottom top",
        scrub: 6,
      },
    });
    gsap.to(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1.4,
    });
  }, []);

  return (
    <section className="mutual-padding h-full overflow-hidden relative bg-zinc">
      <div className="scr-mx-w">
        <div className="mb-10 w-full">
          <h1 id="highlights_title" className="heading-section">
            latest highlights
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-30 mb-22 pl-22">
            <h2 className="text-5xl lg:text-6xl font-semibold mb-2">
              GTR LATEST.
            </h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className="w-full flex items-center relative h-[50vh]">
              <video
                playsInline
                id="exploreVideo"
                className="h-full w-full object-center object-cover"
                muted
                autoPlay
                ref={videoRef}
                preload="none"
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={inspect1Img}
                    alt=""
                    className="feature-video g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={inspect2Img}
                    alt=""
                    className="feature-video g_grow"
                  />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Experience ultimate comfort with our luxurious{" "}
                    <span className="text-white">leather seats</span>, designed
                    to provide unparalleled support and elegance.
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    The advanced dashboard features a high-definition{" "}
                    <span className="text-white">kilometer display</span> and
                    intuitive controls, keeping all essential information and
                    functionality within easy reach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighLights;
