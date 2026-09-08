"use client";

import { useEffect, useState } from "react";

export function ElevationLine() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height <= 0 ? 0 : window.scrollY / height);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-3 z-40 hidden h-full w-px md:left-6 md:block"
    >
      <div className="absolute inset-y-0 w-px bg-border" />
      <div
        className="absolute top-0 w-px origin-top bg-laterite"
        style={{ height: `${progress * 100}%` }}
      />
      <div
        className="absolute left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-laterite"
        style={{ top: `${progress * 100}%` }}
      />
    </div>
  );
}
