"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiLinkedin, FiInstagram } from "react-icons/fi";
import { GlassCard } from "@/components/shared/GlassCard";
import { TiltCard } from "@/components/shared/TiltCard";
import type { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <TiltCard>
        <GlassCard hover>
          <div className="overflow-hidden rounded-[20px] group">
            <div className="relative aspect-square w-full bg-[#161625] overflow-hidden">
              <Image
                src={member.avatar}
                alt={member.name}
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display font-bold text-xl text-[#F8FAFC]">
                {member.name}
              </h3>
              <p className="font-body text-[#A855F7] mt-1">{member.role}</p>
              <span className="inline-block mt-2 font-accent text-xs tracking-wider text-[#94A3B8] bg-[rgba(124,58,237,0.15)] px-2 py-1 rounded">
                {member.dept}
              </span>
              <p className="font-body text-sm text-[#94A3B8] mt-3 line-clamp-2">
                {member.bio}
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-[#A855F7] transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-[#A855F7] transition-colors"
                  aria-label={`${member.name} Instagram`}
                >
                  <FiInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </GlassCard>
      </TiltCard>
    </motion.div>
  );
}
