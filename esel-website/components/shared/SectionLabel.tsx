import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "font-accent uppercase tracking-[0.15em] text-[#A855F7] text-sm flex items-center gap-3",
        className
      )}
    >
      <div className="w-8 h-0.5 bg-gradient-to-r from-[#A855F7] to-transparent" />
      {children}
    </div>
  );
}
