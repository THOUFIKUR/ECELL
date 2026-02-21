"use client";

import { useEffect, useState } from "react";

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function useCountUp(
  target: number,
  duration = 2000,
  trigger = true
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    const startTime = performance.now();

    function updateCount(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const currentCount = Math.floor(easedProgress * target);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    }

    const frame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, trigger]);

  return count;
}
