import React, { useState, useEffect, useRef } from "react";
import "./VideoCarousel.scss";
import { Video } from "../types";

const VideoCarousel: React.FC<{ videos: Video[]; title: string }> = ({
  videos,
  title,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRefs.current[currentIndex]) {
      videoRefs.current[currentIndex]?.play();
    }
  }, []);

  const handleNext = () => {
    pauseCurrentVideo();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePlay = () => {
    if (isPlaying) {
      videoRefs.current[currentIndex]?.pause();
    } else {
      videoRefs.current[currentIndex]?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handlePrev = () => {
    pauseCurrentVideo();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  const pauseCurrentVideo = () => {
    if (videoRefs.current[currentIndex]) {
      videoRefs.current[currentIndex]?.pause();
    }
  };

  const scrollToCurrentVideo = () => {
    if (carouselRef.current) {
      const activeItem = carouselRef.current.querySelector(
        ".carousel-item.active"
      );
      activeItem?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  useEffect(() => {
    if (videoRefs.current[currentIndex]) {
      videoRefs.current[currentIndex]?.play();
      scrollToCurrentVideo();
    }
  }, [currentIndex]);

  return (
    <div className="video-carousel">
      <div className="carousel-header">
        <h2 className="carousel-title">{title}</h2>
        <div className="carousel-buttons">
          <button className="prev" onClick={handlePrev}>
            <img src="/chevron_left.svg" alt="Previous" />
          </button>
          <button className="next" onClick={handleNext}>
            <img src="/chevron_right.svg" alt="Next" />
          </button>
        </div>
      </div>
      <div className="carousel-container" ref={carouselRef}>
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <div className="video-wrapper">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video.src}
                loop
                muted={isMuted}
                playsInline
              />
              {index === currentIndex && (
                <div className="video-controls">
                  <img
                    src={isMuted ? "/sound_on.svg" : "/sound_off.svg"}
                    alt="Mute"
                    onClick={handleMute}
                  />
                  <img
                    src={isPlaying ? "/pause.svg" : "/play.svg"}
                    alt={isPlaying ? "Pause" : "Play"}
                    onClick={handlePlay}
                  />
                </div>
              )}
            </div>
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
