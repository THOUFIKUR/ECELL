"use client";

import { useCallback, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "./useMediaQuery";

const THROTTLE_MS = 16;

export function useTilt(maxTilt = 8) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const lastRun = useRef(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isMobile) return;
      const now = performance.now();
      if (now - lastRun.current < THROTTLE_MS) return;
      lastRun.current = now;

      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const percentX = (e.clientX - centerX) / (rect.width / 2);
      const percentY = (e.clientY - centerY) / (rect.height / 2);
      const tiltX = -percentY * maxTilt;
      const tiltY = percentX * maxTilt;
      rotateX.set(tiltX);
      rotateY.set(tiltY);
    },
    [isMobile, maxTilt, rotateX, rotateY]
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return {
    ref,
    rotateX: rotateXSpring,
    rotateY: rotateYSpring,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    isMobile,
  };
}
