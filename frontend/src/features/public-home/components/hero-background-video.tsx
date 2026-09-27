"use client";

import { useEffect, useState } from "react";

export function HeroBackgroundVideo({ device }: { device: "desktop" | "mobile" }) {
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const viewportQuery = window.matchMedia(device === "desktop" ? "(min-width: 1024px)" : "(max-width: 1023px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePlayback = () => setShouldPlay(viewportQuery.matches && !reducedMotionQuery.matches);

    updatePlayback();
    viewportQuery.addEventListener("change", updatePlayback);
    reducedMotionQuery.addEventListener("change", updatePlayback);

    return () => {
      viewportQuery.removeEventListener("change", updatePlayback);
      reducedMotionQuery.removeEventListener("change", updatePlayback);
    };
  }, [device]);

  if (!shouldPlay) return null;

  return (
    <video
      aria-hidden="true"
      autoPlay
      className="absolute inset-0 h-full w-full object-cover"
      height={device === "desktop" ? 1080 : 1920}
      loop
      muted
      playsInline
      preload="metadata"
      width={device === "desktop" ? 1920 : 1080}
    >
      <source
        src={device === "desktop" ? "/videos/Video%20Project.mp4" : "/videos/video-movil.mp4"}
        type="video/mp4"
      />
    </video>
  );
}