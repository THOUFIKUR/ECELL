"use client";

export function ScrollTicker() {
  const text =
    "PITCH PALOOZA 2026  ✦  WOMEN ENTREPRENEURS  ✦  MARCH 29  ✦  INNOVATION HUB CHENNAI  ✦  APPLY NOW  ✦  ";
  const repeatedText = Array(4).fill(text).join("  ");

  return (
    <div className="h-12 bg-gradient-to-r from-[rgba(124,58,237,0.2)] via-[rgba(168,85,247,0.3)] to-[rgba(124,58,237,0.2)] overflow-hidden">
      <div
        className="h-full flex items-center whitespace-nowrap animate-ticker hover:[animation-play-state:paused]"
        style={{
          width: "max-content",
        }}
      >
        <span className="font-accent text-[#A78BFA] tracking-[0.2em] text-lg px-4">
          {repeatedText}
        </span>
        <span className="font-accent text-[#A78BFA] tracking-[0.2em] text-lg px-4">
          {repeatedText}
        </span>
      </div>
    </div>
  );
}
