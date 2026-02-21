"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { CharacterReveal } from "@/components/shared/CharacterReveal";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  const { scrollY } = useScroll();
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  const scrollToExplore = () => {
    const aboutSection = document.getElementById("about-section");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-50"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,8,16,0.4) 0%, rgba(8,8,16,0.85) 100%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(124,58,237,0.15)] border border-[rgba(168,85,247,0.3)] mb-8"
        >
          <span className="font-mono text-[11px] text-[#A78BFA]">
            ✦ APPLICATIONS OPEN · MARCH 2026
          </span>
        </motion.div>

        <div className="space-y-2">
          <h1 className="font-display font-extrabold text-[52px] sm:text-[72px] md:text-[96px] leading-[1.05] tracking-[-0.03em] text-[#F8FAFC]">
            <CharacterReveal text="PITCH" delay={0.3} />
          </h1>
          <h1
            className="font-display font-extrabold text-[52px] sm:text-[72px] md:text-[96px] leading-[1.05] tracking-[-0.03em] bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #A855F7, #EC4899)",
            }}
          >
            <CharacterReveal text="PALOOZA" delay={0.5} />
          </h1>
          <h1 className="font-accent text-[44px] sm:text-[60px] md:text-[80px] leading-none text-[#A78BFA] tracking-[0.15em]">
            <CharacterReveal text="2026" delay={0.7} />
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-body text-[#94A3B8] text-xl md:text-xl max-w-[560px] mx-auto mt-8"
        >
          An exclusive pitching arena for women who dare to build, lead, and
          disrupt.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="font-mono text-[13px] text-[#A78BFA]/70 mt-6"
        >
          29.03.2026 // INNOVATION HUB, CHENNAI // 10:00 HRS
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
        >
          <MagneticButton href={SITE_CONFIG.applyLink}>
            Apply to Pitch →
          </MagneticButton>
          <button
            type="button"
            onClick={scrollToExplore}
            className="font-display font-bold uppercase tracking-[0.02em] px-11 py-4 rounded-full bg-transparent border border-[#7C3AED] text-[#A855F7] hover:border-[#A855F7] hover:text-[#EC4899] transition-all duration-300"
          >
            Explore Event ↓
          </button>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#94A3B8]/50 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#A855F7]"
          />
        </div>
        <span className="font-mono text-xs text-[#94A3B8]">scroll</span>
      </motion.div>
    </section>
  );
}
