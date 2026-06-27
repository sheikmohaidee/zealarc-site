import React, { useRef, useEffect, useState } from 'react';

export default function DeviceVideo({
  videoSrc,
  posterSrc = '',
  deviceType = 'Phone', // 'Phone', 'Tablet', 'Desktop'
  autoplay = true,
  loop = true,
  muted = true,
  className = ''
}) {
  const videoRef = useRef(null);

  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            if (autoplay && videoRef.current) {
              videoRef.current.play().catch(error => {
                console.log("Autoplay was prevented:", error);
              });
            }
          } else {
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [autoplay]);

  const deviceStyles = {
    Phone: {
      container: "relative mx-auto max-w-[290px] p-3.5 bg-black rounded-[48px] border-[6px] border-[#222] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden",
      videoWrapper: "rounded-[34px] overflow-hidden w-full h-full relative bg-apple-gray",
      video: "w-full h-auto object-cover"
    },
    Tablet: {
      container: "w-[85%] mx-auto p-2.5 bg-black rounded-[32px] border-[6px] border-[#222] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden",
      videoWrapper: "rounded-[20px] overflow-hidden w-full h-full relative bg-apple-gray",
      video: "w-full object-cover aspect-[16/10]"
    },
    Desktop: {
      container: "p-2 bg-apple-gray rounded-[32px] border border-black/[0.04] shadow-sm overflow-hidden",
      videoWrapper: "rounded-[28px] overflow-hidden w-full h-full relative bg-white",
      video: "w-full object-cover aspect-[4/3]"
    }
  };

  const style = deviceStyles[deviceType] || deviceStyles.Phone;

  return (
    <div ref={containerRef} className={`${style.container} ${className}`}>
      <div className={style.videoWrapper}>
        <video
          ref={videoRef}
          src={shouldLoad ? videoSrc : ''}
          poster={posterSrc}
          autoPlay={autoplay}
          loop={loop}
          muted={muted}
          playsInline
          controls={false}
          className={style.video}
          preload="metadata"
        />
      </div>
    </div>
  );
}
