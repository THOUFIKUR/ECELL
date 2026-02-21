import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({ children, className, hover = true, glow = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "bg-[rgba(15,15,26,0.7)] backdrop-blur-[20px] saturate-[180%] border border-[rgba(124,58,237,0.15)] rounded-[20px] transition-all duration-300",
        hover &&
          "hover:-translate-y-2 hover:border-[rgba(168,85,247,0.45)] hover:shadow-[0_0_40px_rgba(124,58,237,0.25),0_20px_60px_rgba(0,0,0,0.5)]",
        glow && "hover:shadow-[0_0_40px_rgba(124,58,237,0.25),0_20px_60px_rgba(0,0,0,0.5)]",
        className
      )}
      style={
        {
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
