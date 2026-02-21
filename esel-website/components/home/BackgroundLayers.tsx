"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function BackgroundLayers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const orb1Y = useTransform(scrollY, [0, 800], [0, isMobile ? -100 : -200]);
  const orb2Y = useTransform(scrollY, [0, 800], [0, isMobile ? -60 : -120]);
  const orb3Y = useTransform(scrollY, [0, 800], [0, isMobile ? -40 : -80]);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(124,58,237,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 90%, rgba(236,72,153,0.1) 0%, transparent 55%), radial-gradient(ellipse 40% 40% at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 70%), #080810",
        }}
      />
      <div
        className="absolute inset-0 z-[-9] opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237c3aed' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <motion.div
        className="absolute -top-[100px] -left-[200px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          y: orb1Y,
          background: "radial-gradient(circle, rgba(124,58,237,0.25), transparent 70%)",
          filter: isMobile ? "blur(40px)" : "blur(80px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <motion.div
        className="absolute top-[40%] -right-[150px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          y: orb2Y,
          background: "radial-gradient(circle, rgba(236,72,153,0.2), transparent 70%)",
          filter: isMobile ? "blur(30px)" : "blur(60px)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[30%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          y: orb3Y,
          background: "radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)",
          filter: isMobile ? "blur(25px)" : "blur(50px)",
          animation: "float 12s ease-in-out infinite 2s",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
