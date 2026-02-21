"use client";

import { motion } from "framer-motion";
import {
  RiPresentationLine,
  RiUserVoiceLine,
  RiUserCommunityLine,
  RiTrophyLine,
} from "react-icons/ri";
import { GlassCard } from "@/components/shared/GlassCard";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { TiltCard } from "@/components/shared/TiltCard";

const highlights = [
  {
    icon: RiPresentationLine,
    title: "Open Pitching Arena",
    tag: "MAIN EVENT",
    tagColor: "gold",
    description:
      "Face a live panel of investors and industry veterans. You get 5 minutes. Make them count.",
    stat: "12 Finalists · ₹2L Prize Pool",
  },
  {
    icon: RiUserVoiceLine,
    title: "Mentor Sprint Sessions",
    tag: "EXCLUSIVE",
    tagColor: "violet",
    description:
      "Back-to-back 20-minute deep dives with founders who've built and scaled across industries.",
    stat: "8 Mentors · 1:1 Format",
  },
  {
    icon: RiUserCommunityLine,
    title: "Founder Networking Lounge",
    tag: "OPEN ACCESS",
    tagColor: "violet",
    description:
      "Leave with co-founders, collaborators, and investors who believe in your vision as much as you do.",
    stat: "300+ Attendees Expected",
  },
  {
    icon: RiTrophyLine,
    title: "Grand Finale & Awards",
    tag: "CLOSING",
    tagColor: "pink",
    description:
      "The top 3 pitches receive seed funding access, ESEL Hall of Fame entry, and national media coverage.",
    stat: "Top 3 Win. All 12 Grow.",
  },
];

export function EventHighlights() {
  return (
    <section className="py-24 px-6 bg-[#0F0F1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center mb-4">
            What Awaits You
          </SectionLabel>
          <p className="font-body text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Four pillars of an experience you won&apos;t stop talking about.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          style={{ contain: "layout paint" }}
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: "easeOut",
              }}
            >
              <TiltCard>
                <GlassCard hover>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 rounded-xl bg-[rgba(124,58,237,0.2)] flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.2)]">
                        <item.icon className="w-8 h-8 text-[#A855F7]" />
                      </div>
                      <span
                        className={`font-accent text-xs tracking-wider px-3 py-1 rounded-full ${
                          item.tagColor === "gold"
                            ? "bg-[rgba(245,158,11,0.2)] text-[#F59E0B]"
                            : item.tagColor === "pink"
                            ? "bg-[rgba(236,72,153,0.2)] text-[#EC4899]"
                            : "bg-[rgba(124,58,237,0.2)] text-[#A855F7]"
                        }`}
                      >
                        [{item.tag}]
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#F8FAFC] mb-3">
                      {item.title}
                    </h3>
                    <p className="font-body text-[#94A3B8] leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <p className="font-body text-sm text-[#A855F7]">
                      {item.stat}
                    </p>
                  </div>
                </GlassCard>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
