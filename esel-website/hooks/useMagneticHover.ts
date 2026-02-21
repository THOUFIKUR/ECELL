"use client";

import { useCallback, useRef } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

export function useMagneticHover(strength = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const maxOffset = 12;
      const offsetX = Math.max(-maxOffset, Math.min(maxOffset, distanceX * strength));
      const offsetY = Math.max(-maxOffset, Math.min(maxOffset, distanceY * strength));
      x.set(offsetX);
      y.set(offsetY);
    },
    [strength, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return {
    ref,
    x: xSpring,
    y: ySpring,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  } as {
    ref: React.RefObject<HTMLDivElement | null>;
    x: MotionValue<number>;
    y: MotionValue<number>;
    onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseLeave: () => void;
  };
}
