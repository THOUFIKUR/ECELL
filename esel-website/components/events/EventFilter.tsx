"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type EventFilterType = "all" | "upcoming" | "past";

interface EventFilterProps {
  active: EventFilterType;
  onChange: (filter: EventFilterType) => void;
}

const filters: { value: EventFilterType; label: string }[] = [
  { value: "all", label: "All" },
  { value: "upcoming", label: "Upcoming" },
  { value: "past", label: "Past" },
];

export function EventFilter({ active, onChange }: EventFilterProps) {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          onClick={() => onChange(filter.value)}
          className={cn(
            "font-accent text-sm tracking-wider px-6 py-3 rounded-full transition-all duration-300",
            active === filter.value
              ? "bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white shadow-[0_0_30px_rgba(168,85,247,0.4)]"
              : "bg-[rgba(15,15,26,0.7)] backdrop-blur-xl border border-[rgba(124,58,237,0.15)] text-[#94A3B8] hover:text-[#A855F7] hover:border-[rgba(168,85,247,0.3)]"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
