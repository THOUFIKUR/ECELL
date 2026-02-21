import { Hero } from "@/components/home/Hero";
import { ScrollTicker } from "@/components/home/ScrollTicker";
import { AboutSection } from "@/components/home/AboutSection";
import { EventHighlights } from "@/components/home/EventHighlights";
import { LeadershipPreview } from "@/components/home/LeadershipPreview";
import { AchievementsSection } from "@/components/home/AchievementsSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ScrollTicker />
      <AboutSection />
      <EventHighlights />
      <LeadershipPreview />
      <AchievementsSection />
      <CTASection />
    </main>
  );
}
