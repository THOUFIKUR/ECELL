"use client";

import { useEffect, ReactNode } from "react";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const initLenis = async () => {
      const Lenis = (await import("@studio-freight/lenis")).default;
      const lenis = new Lenis({
        lerp: 0.08,
        duration: window.matchMedia("(max-width: 768px)").matches ? 1.0 : 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    };

    const cleanupPromise = initLenis();
    return () => {
      cleanupPromise.then((cleanup) => cleanup?.());
    };
  }, []);

  return <>{children}</>;
}
