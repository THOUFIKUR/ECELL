"use client";

import { motion } from "framer-motion";
import { RiRocketLine, RiLeafLine, RiMicLine } from "react-icons/ri";
import { GlassCard } from "@/components/shared/GlassCard";
import { LineReveal } from "@/components/shared/LineReveal";
import { TiltCard } from "@/components/shared/TiltCard";
import { cn } from "@/lib/utils";

const cards = [
  {
    icon: RiRocketLine,
    title: "She Builds",
    description:
      "From napkin sketch to MVP — ESEL members ship products, not just ideas.",
    x: -60,
  },
  {
    icon: RiLeafLine,
    title: "She Leads",
    description:
      "Leadership isn't given. Our founders claim it, chapter by chapter.",
    x: 60,
  },
  {
    icon: RiMicLine,
    title: "She Pitches",
    description:
      "Pitch Palooza is the arena. Your idea is the weapon. The stage is yours.",
    x: -60,
  },
];

export function AboutSection() {
  return (
    <section
      id="about-section"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <LineReveal className="mb-8" />
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="font-display font-bold text-[52px] leading-tight text-[#F8FAFC]"
            >
              We Don&apos;t Train Entrepreneurs.
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-[52px] leading-tight bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #A855F7, #EC4899)",
              }}
            >
              We Unleash Them.
            </motion.h2>
          </div>

          <div className="space-y-6">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: card.x }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: "easeOut",
                }}
              >
                <TiltCard>
                  <GlassCard hover>
                    <div className="p-8 flex gap-6">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[rgba(124,58,237,0.2)] flex items-center justify-center">
                        <card.icon className="w-7 h-7 text-[#A855F7]" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-[#F8FAFC] mb-2">
                          {card.title}
                        </h3>
                        <p className="font-body text-[#94A3B8] leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
