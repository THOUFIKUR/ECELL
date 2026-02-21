"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/shared/GlassCard";
import { TiltCard } from "@/components/shared/TiltCard";
import type { Event } from "@/data/events";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <TiltCard>
        <Link href={`/events/${event.slug}`}>
          <GlassCard hover>
            <div className="overflow-hidden rounded-t-[20px]">
              <div className="relative aspect-video w-full bg-[#161625]">
                <Image
                  src={event.poster}
                  alt={event.title}
                  width={600}
                  height={340}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`font-accent text-xs tracking-wider px-3 py-1 rounded-full ${
                      event.status === "upcoming"
                        ? "bg-[rgba(34,197,94,0.3)] text-green-400"
                        : "bg-[rgba(148,163,184,0.2)] text-[#94A3B8]"
                    }`}
                  >
                    {event.status === "upcoming"
                      ? "LIVE APPLICATIONS OPEN"
                      : "EVENT CONCLUDED"}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display font-bold text-xl text-[#F8FAFC] mb-2">
                {event.title}
              </h3>
              <p className="font-mono text-xs text-[#A78BFA] mb-2">
                {event.date} · {event.venue}
              </p>
              <p className="font-body text-[#94A3B8] text-sm line-clamp-2">
                {event.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {event.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="font-accent text-[10px] tracking-wider text-[#94A3B8] bg-[rgba(124,58,237,0.15)] px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </Link>
      </TiltCard>
    </motion.div>
  );
}
