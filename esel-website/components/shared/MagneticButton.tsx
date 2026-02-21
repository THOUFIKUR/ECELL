"use client";

import { motion } from "framer-motion";
import { useMagneticHover } from "@/hooks/useMagneticHover";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
}: MagneticButtonProps) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagneticHover(0.35);

  const baseClasses =
    "inline-flex items-center justify-center font-display font-bold uppercase tracking-[0.02em] transition-all duration-300 cursor-pointer rounded-full";

  const variantClasses = {
    primary:
      "bg-gradient-to-br from-[#7C3AED] via-[#A855F7] to-[#EC4899] text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.7),0_0_120px_rgba(236,72,153,0.3)] px-11 py-4",
    ghost:
      "bg-transparent border border-[#7C3AED] text-[#A855F7] hover:border-[#A855F7] px-11 py-4",
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x, y }}
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {children}
    </motion.div>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button type="button" onClick={onClick}>
      {content}
    </button>
  );
}
