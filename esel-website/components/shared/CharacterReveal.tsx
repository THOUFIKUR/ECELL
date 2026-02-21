"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CharacterRevealProps {
  text: string;
  delay?: number;
  className?: string;
}

export function CharacterReveal({ text, delay = 0, className }: CharacterRevealProps) {
  const characters = useMemo(() => text.split(""), [text]);

  return (
    <span className={cn("inline-flex overflow-hidden", className)}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
