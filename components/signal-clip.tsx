"use client";

import { useEffect, useRef, useState } from "react";
import { PlayMark, StopMark } from "@/components/icons";

type SignalClipProps = {
  src: string;
  poster: string;
  width: number;
  height: number;
  label: string;
};

export function SignalClip({
  src,
  poster,
  width,
  height,
  label,
}: SignalClipProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onEnded = () => setPlaying(false);
    const onError = () => {
      setFailed(true);
      setPlaying(false);
    };

    video.addEventListener("ended", onEnded);
    video.addEventListener("error", onError);
    return () => {
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("error", onError);
      video.pause();
    };
  }, []);

  function toggle() {
    const video = videoRef.current;
    if (!video || failed) return;

    if (video.paused) {
      video.currentTime = 0;
      void video
        .play()
        .then(() => setPlaying(true))
        .catch(() => setFailed(true));
      return;
    }

    video.pause();
    setPlaying(false);
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <p className="label label-bone">SIGNAL / 00R</p>
        <p className="label">{failed ? "UNAVAILABLE" : "MUTED / B&W"}</p>
      </div>

      <div className="mt-3 flex flex-wrap items-end gap-4">
        <div className="relative w-full max-w-[280px] overflow-hidden border border-line bg-surface">
          <div className="relative aspect-[498/370]">
            <video
              aria-hidden="true"
              className="h-full w-full object-cover"
              height={height}
              muted
              onError={() => setFailed(true)}
              playsInline
              poster={poster}
              preload="none"
              ref={videoRef}
              tabIndex={-1}
              width={width}
            >
              <source src={src} type="video/mp4" />
            </video>
            <span className="redaction-tag absolute left-2 top-2">
              {playing ? "PLAYING" : "STILL"}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <button
            aria-label={playing ? "Hentikan klip Rei" : "Putar klip Rei"}
            aria-pressed={playing}
            className="btn"
            disabled={failed}
            onClick={toggle}
            type="button"
          >
            {playing ? (
              <>
                STOP <StopMark className="h-3 w-3" />
              </>
            ) : (
              <>
                SIGNAL <PlayMark className="h-3 w-3" />
              </>
            )}
          </button>
          <p className="max-w-[18ch] text-xs leading-relaxed text-ash">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}
