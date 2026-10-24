"use client";

import { useEffect, useRef, useState } from "react";
import { PlayMark, StopMark } from "@/components/icons";

type WorkbenchVideoProps = {
  src: string;
  poster: string;
  width: number;
  height: number;
  label: string;
};

export function WorkbenchVideo({
  src,
  poster,
  width,
  height,
  label,
}: WorkbenchVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPausedRef = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPausedRef.current) {
          void video.play().catch(() => {
            // If the browser blocks playback, the poster remains visible.
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      userPausedRef.current = false;
      void video.play().catch(() => {
        // Keep the poster visible if playback is blocked.
      });
      return;
    }

    userPausedRef.current = true;
    video.pause();
  }

  return (
    <>
      <video
        aria-label={label}
        className="h-full w-full object-cover"
        height={height}
        loop
        muted
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        playsInline
        poster={poster}
        preload="none"
        ref={videoRef}
        tabIndex={-1}
        width={width}
      >
        <source src={src} type="video/mp4" />
      </video>
      <button
        aria-label={playing ? "Jeda video workbench" : "Putar video workbench"}
        aria-pressed={playing}
        className="btn absolute right-3 top-3 z-10 bg-void/75 px-2.5 py-2 hover:bg-bone hover:text-void"
        onClick={toggle}
        type="button"
      >
        {playing ? (
          <>
            PAUSE <StopMark className="h-2.5 w-2.5" />
          </>
        ) : (
          <>
            PLAY <PlayMark className="h-2.5 w-2.5" />
          </>
        )}
      </button>
    </>
  );
}
