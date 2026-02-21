import Link from "next/link";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function GlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
}: GlowButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-display font-bold uppercase tracking-[0.02em] transition-all duration-300 cursor-pointer rounded-full";

  const variantClasses = {
    primary:
      "bg-gradient-to-br from-[#7C3AED] via-[#A855F7] to-[#EC4899] text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.7),0_0_120px_rgba(236,72,153,0.3)] hover:scale-[1.04] hover:-translate-y-0.5",
    ghost:
      "bg-transparent border border-[#7C3AED] text-[#A855F7] hover:border-[#A855F7] hover:text-[#EC4899] hover:bg-[rgba(124,58,237,0.1)]",
    outline:
      "bg-transparent border border-white/40 text-white hover:border-white hover:bg-white/5",
  };

  const sizeClasses = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-11 py-4 text-base",
    lg: "px-14 py-5 text-lg",
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
