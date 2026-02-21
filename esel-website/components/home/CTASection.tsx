"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MagneticButton } from "@/components/shared/MagneticButton";

const TARGET_DATE = new Date("2026-03-29T10:00:00");

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = TARGET_DATE.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

export function CTASection() {
  const { days, hours, minutes, seconds } = useCountdown();

  const units = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];

  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.3) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(236,72,153,0.2) 0%, transparent 50%), #080810",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[#F8FAFC] mb-4">
          Your Idea Deserves a Stage.
        </h2>
        <p className="font-body text-[#94A3B8] text-lg max-w-2xl mx-auto mb-12">
          Pitch Palooza 2026 is accepting applications. 500 women will watch. 12
          will pitch. One will win.
        </p>

        <div className="grid grid-cols-4 gap-4 mb-12">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="bg-[rgba(15,15,26,0.7)] backdrop-blur-xl border border-[rgba(124,58,237,0.15)] rounded-[20px] p-6"
            >
              <div className="font-accent text-4xl md:text-5xl text-[#A855F7]">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="font-body text-sm text-[#94A3B8] mt-1">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        <MagneticButton
          href="https://forms.gle/YOURLINK"
          className="px-14 py-5 text-lg"
        >
          Apply to Pitch →
        </MagneticButton>

        <p className="mt-6">
          <Link
            href="/events/pitch-palooza-2026"
            className="font-body text-[#94A3B8] hover:text-[#A855F7] transition-colors"
          >
            Learn more about the event ↓
          </Link>
        </p>
      </div>
    </section>
  );
}
