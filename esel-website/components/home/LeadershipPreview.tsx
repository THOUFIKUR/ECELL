"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiLinkedin, FiInstagram } from "react-icons/fi";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { GlassCard } from "@/components/shared/GlassCard";
import { TiltCard } from "@/components/shared/TiltCard";
import { team } from "@/data/team";

const previewMembers = team.slice(0, 4);

export function LeadershipPreview() {
  const router = useRouter();

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center mb-4">
            The Minds Behind ESEL
          </SectionLabel>
          <p className="font-body text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Builders. Strategists. Believers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
            >
              <TiltCard>
                <GlassCard hover>
                  <div className="group overflow-hidden rounded-[20px]">
                    <button
                      type="button"
                      onClick={() => router.push("/team")}
                      className="w-full text-left block"
                    >
                      <div className="relative aspect-square w-full bg-[#161625]">
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
                        <h3 className="font-display font-bold text-lg text-[#F8FAFC]">
                          {member.name}
                        </h3>
                        <p className="font-body text-sm text-[#A855F7] mt-1">
                          {member.role}
                        </p>
                        <span className="inline-block mt-2 font-accent text-xs tracking-wider text-[#94A3B8] bg-[rgba(124,58,237,0.15)] px-2 py-1 rounded">
                          {member.dept}
                        </span>
                      </div>
                    </button>
                    <div
                      className="flex gap-3 px-6 pb-6 pt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#94A3B8] hover:text-[#A855F7]"
                        aria-label={`${member.name} LinkedIn`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiLinkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#94A3B8] hover:text-[#A855F7]"
                        aria-label={`${member.name} Instagram`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiInstagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 font-body font-medium text-[#A855F7] hover:text-[#EC4899] transition-colors"
          >
            Meet the Full Team →
          </Link>
        </div>
      </div>
    </section>
  );
}
