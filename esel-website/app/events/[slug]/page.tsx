import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { RiCalendarLine, RiTimeLine, RiMapPinLine } from "react-icons/ri";
import { FiCheck } from "react-icons/fi";
import { events } from "@/data/events";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { GlassCard } from "@/components/shared/GlassCard";
import { ShareButton } from "@/components/shared/ShareButton";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return {};
  return {
    title: `${event.title} – ${event.date}`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      images: [event.poster],
    },
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  return (
    <main className="min-h-screen">
      <div className="relative pt-24">
        <div className="relative aspect-[21/9] w-full">
          <Image
            src={event.poster}
            alt={event.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 30%, #080810 100%)",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="max-w-7xl mx-auto">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 font-body text-[#94A3B8] hover:text-[#A855F7] mb-6 transition-colors"
              >
                ← All Events
              </Link>
              <h1 className="font-display font-extrabold text-4xl md:text-6xl text-[#F8FAFC] mb-4">
                {event.title}
              </h1>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="font-mono text-sm text-[#A78BFA]">
                  {event.date}
                </span>
                <span className="font-mono text-sm text-[#A78BFA]">
                  {event.venue}
                </span>
                <span
                  className={`font-accent text-xs tracking-wider px-3 py-1 rounded-full ${
                    event.status === "upcoming"
                      ? "bg-[rgba(34,197,94,0.3)] text-green-400"
                      : "bg-[rgba(148,163,184,0.2)] text-[#94A3B8]"
                  }`}
                >
                  {event.status === "upcoming"
                    ? "LIVE APPLICATIONS OPEN"
                    : "EVENT CONCLUDED"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="font-display font-bold text-2xl text-[#F8FAFC] mb-6">
              About This Event
            </h2>
            <p className="font-body text-[#94A3B8] text-lg leading-relaxed">
              {event.fullDescription}
            </p>

            <h3 className="font-display font-bold text-xl text-[#F8FAFC] mt-12 mb-4">
              Event Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {event.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-2 font-body text-[#94A3B8]"
                >
                  <FiCheck className="w-5 h-5 text-[#A855F7] flex-shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {event.status === "upcoming" && event.registerLink && (
              <div className="mt-12">
                <MagneticButton href={event.registerLink}>
                  Register Now →
                </MagneticButton>
              </div>
            )}
            {event.status === "past" && (
              <p className="mt-12 font-body text-[#94A3B8]">
                Applications for this event are now closed.
              </p>
            )}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <GlassCard>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <RiCalendarLine className="w-6 h-6 text-[#A855F7]" />
                  <span className="font-body text-[#94A3B8]">{event.date}</span>
                </div>
                <div className="flex items-center gap-4">
                  <RiTimeLine className="w-6 h-6 text-[#A855F7]" />
                  <span className="font-body text-[#94A3B8]">{event.time}</span>
                </div>
                <div className="flex items-center gap-4">
                  <RiMapPinLine className="w-6 h-6 text-[#A855F7]" />
                  <span className="font-body text-[#94A3B8]">{event.venue}</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="font-accent text-sm uppercase tracking-wider text-[#A855F7] mb-3">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-accent text-xs tracking-wider text-[#94A3B8] bg-[rgba(124,58,237,0.15)] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <h3 className="font-accent text-sm uppercase tracking-wider text-[#A855F7] mb-3">
                  Share This Event
                </h3>
                <ShareButton />
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </main>
  );
}
