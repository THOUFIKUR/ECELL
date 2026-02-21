"use client";

import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CharacterReveal } from "@/components/shared/CharacterReveal";
import { EventCard } from "@/components/events/EventCard";
import { EventFilter, type EventFilterType } from "@/components/events/EventFilter";
import { PageTransition } from "@/components/layout/PageTransition";
import { events } from "@/data/events";

export default function EventsPage() {
  const [filter, setFilter] = useState<EventFilterType>("all");

  const filteredEvents = useMemo(() => {
    if (filter === "all") return events;
    return events.filter((e) => e.status === filter);
  }, [filter]);

  return (
    <PageTransition>
      <main className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-[#94A3B8] hover:text-[#A855F7] mb-8 transition-colors"
          >
            ← Back to Home
          </Link>

          <h1 className="font-display font-extrabold text-5xl md:text-6xl text-[#F8FAFC] mb-4">
            <CharacterReveal text="All Events" delay={0.1} />
          </h1>

          <div className="mb-12">
            <EventFilter active={filter} onChange={setFilter} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </AnimatePresence>
          </div>

          {filteredEvents.length === 0 && (
            <p className="font-body text-[#94A3B8] text-center py-16">
              No events found for this filter.
            </p>
          )}
        </div>
      </main>
    </PageTransition>
  );
}
