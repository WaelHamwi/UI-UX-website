import React, { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";
import gsap from "gsap";
import { pauseImg, playImg, replayImg } from "../Utils";

const Carousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);
  const [video, setVideo] = useState({
    isFinished: false,
    isStart: false,
    videoId: 0,
    isLastVideo: false,
    isPlay: false,
  });
  const { isFinished, isLastVideo, videoId, isPlay, isStart } = video;

  useEffect(() => {
    gsap.to("#slide", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 3,
      ease: "power2.inOut",
    });
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prevVideo) => ({
          ...prevVideo,
          isStart: true,
          isPlay: true,
        }));
      },
    });
  }, [videoId]);

  const [loadInfo, setLoadInfo] = useState([]);
  useEffect(() => {
    if (loadInfo.length >= hightlightsSlides.length) {
      if (!isPlay) {
        videoRef.current[videoId].pause();
      } else {
        isStart && videoRef.current[videoId].play();
      }
    }
  }, [isStart, videoId, isPlay, loadInfo]);

  const handleLoadedMetaData = (i, e) => setLoadInfo((pre) => [...pre, e]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;
    if (span[videoId]) {
      let animate = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(animate.progress() * 100);
          if (progress !== currentProgress) {
            currentProgress = progress;
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "8vw"
                  : window.innerWidth < 1200
                  ? "8vw"
                  : "4vw",
            });
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              background: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlay) {
            gsap.to(videoDivRef.current[videoId], {
              width: "8px",
            });
            gsap.to(span[videoId], {
              background: "#afafaf",
            });
          }
        },
      });
      if (videoId === 0) {
        animate.restart();
      }
      const animateUpdate = () => {
        animate.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };
      if (isPlay) {
        gsap.ticker.add(animateUpdate);
      } else {
        gsap.ticker.remove(animateUpdate);
      }
    }
  }, [videoId, isStart]);

  const handleVideoProcess = (type, i) => {
    switch (type) {
      case "video-finish":
        setVideo((prevVideo) => {
          const nextVideoId = i + 1;
          const isLastVideo = nextVideoId >= hightlightsSlides.length;
          return {
            ...prevVideo,
            isFinished: true,
            videoId: isLastVideo ? i : nextVideoId,
            isLastVideo: isLastVideo,
          };
        });
        break;
      case "video-last":
        setVideo((prevVideo) => ({ ...prevVideo, isLastVideo: true }));
        break;
      case "reset":
        setVideo((prevVideo) => ({
          ...prevVideo,
          isLastVideo: false,
          videoId: 0,
          isPlay: true,
        }));
        break;
      case "play":
        setVideo((prevVideo) => ({ ...prevVideo, isPlay: true }));
        break;
      case "pause":
        setVideo((prevVideo) => ({ ...prevVideo, isPlay: false }));
        break;
      default:
        return;
    }
  };

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slide" className="pr-10 sm:pr-20">
            <div className="carousel_container">
              <div className="w-full h-full flex-center bg-zinc-1200 overflow-hidden rounded-3xl">
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  style={{ maxWidth: "140%" }}
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() => {
                    handleVideoProcess("video-finish", i);
                  }}
                  onPlay={() => {
                    setVideo((prevVideo) => ({
                      ...prevVideo,
                      isPlay: true,
                    }));
                  }}
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-3 left-[5%] z-10">
                {list.textLists.map((text) => (
                  <p key={text} className="md:text-2xl">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-center mt-12">
        <div className="flex-center py-5 px-7 bg-zinc-700 rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={(el) => {
                videoDivRef.current[i] = el;
              }}
              className="mx-2 w-2 h-2 bg-gray-300 rounded-full relative cursor-pointer"
            >
              <span
                className="absolute w-full h-full rounded-full"
                ref={(el) => {
                  videoSpanRef.current[i] = el;
                }}
              ></span>
            </span>
          ))}
        </div>
        <button
          className="control-btn"
          onClick={() => {
            if (isLastVideo) {
              handleVideoProcess("reset");
            } else {
              handleVideoProcess(isPlay ? "pause" : "play");
            }
          }}
        >
          <img
            width={15}
            src={isLastVideo ? replayImg : !isPlay ? playImg : pauseImg}
            alt=""
          />
        </button>
      </div>
    </>
  );
};

export default Carousel;
