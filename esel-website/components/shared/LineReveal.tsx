"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LineRevealProps {
  className?: string;
}

export function LineReveal({ className }: LineRevealProps) {
  return (
    <motion.div
      className={cn("h-px", className)}
      initial={{ width: "0%", opacity: 0 }}
      whileInView={{ width: "100%", opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      style={{
        background: "linear-gradient(90deg, transparent, #A855F7, transparent)",
      }}
    />
  );
}
