"use client";

import { useState, useMemo } from "react";
import { CharacterReveal } from "@/components/shared/CharacterReveal";
import { TeamCard } from "@/components/team/TeamCard";
import { PageTransition } from "@/components/layout/PageTransition";
import { team } from "@/data/team";
import { cn } from "@/lib/utils";

const departments = ["All", "Leadership", "Operations", "Marketing", "Tech", "Community"];

export default function TeamPage() {
  const [activeDept, setActiveDept] = useState("All");

  const filteredTeam = useMemo(() => {
    if (activeDept === "All") return team;
    return team.filter((m) => m.dept === activeDept);
  }, [activeDept]);

  return (
    <PageTransition>
      <main className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display font-extrabold text-5xl md:text-6xl text-[#F8FAFC] mb-4">
            <CharacterReveal text="The ESEL Family" delay={0.1} />
          </h1>
          <p className="font-body text-[#94A3B8] text-lg max-w-2xl mb-12">
            A team of builders, dreamers, and doers.
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => setActiveDept(dept)}
                className={cn(
                  "font-accent text-sm tracking-wider px-4 py-2 rounded-full transition-all duration-300",
                  activeDept === dept
                    ? "bg-[#A855F7] text-white"
                    : "bg-[rgba(15,15,26,0.7)] border border-[rgba(124,58,237,0.15)] text-[#94A3B8] hover:text-[#A855F7]"
                )}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
