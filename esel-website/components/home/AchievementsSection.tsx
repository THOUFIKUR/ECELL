"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { SectionLabel } from "@/components/shared/SectionLabel";

const achievements = [
  { value: 6, suffix: "+", label: "Flagship Events" },
  { value: 300, suffix: "+", label: "Women Entrepreneurs" },
  { value: 10, suffix: "+", label: "Industry Partners" },
  { value: 5, prefix: "₹", suffix: "L+", label: "Prize Value Distributed" },
];

export function AchievementsSection() {
  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(245,158,11,0.08) 0%, transparent 70%), #080810",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center mb-4">
            Our Impact. Unfiltered.
          </SectionLabel>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ contain: "layout paint" }}
        >
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              className="text-center"
            >
              <div
                className="font-accent text-[88px] leading-none bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #A855F7, #EC4899)",
                }}
              >
                <AnimatedCounter
                  target={item.value}
                  prefix={item.prefix || ""}
                  suffix={item.suffix || ""}
                  duration={2000}
                />
              </div>
              <p className="font-body font-medium text-[#94A3B8] mt-2">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
