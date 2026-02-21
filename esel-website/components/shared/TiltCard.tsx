"use client";

import { motion } from "framer-motion";
import { useTilt } from "@/hooks/useTilt";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className }: TiltCardProps) {
  const {
    ref,
    rotateX,
    rotateY,
    onMouseMove,
    onMouseLeave,
    isMobile,
  } = useTilt(8);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn("perspective-[1000px]", className)}
      style={
        isMobile
          ? undefined
          : {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }
      }
    >
      {children}
    </motion.div>
  );
}
