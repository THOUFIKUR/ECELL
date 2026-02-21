"use client";

import { CharacterReveal } from "@/components/shared/CharacterReveal";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { PageTransition } from "@/components/layout/PageTransition";
import { galleryImages } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display font-extrabold text-5xl md:text-6xl text-[#F8FAFC] mb-4">
            <CharacterReveal text="Moments That Moved Us" delay={0.1} />
          </h1>
          <p className="font-body text-[#94A3B8] text-lg max-w-2xl mb-16">
            A visual diary of ambition, connection, and growth.
          </p>

          <GalleryGrid images={galleryImages} />
        </div>
      </main>
    </PageTransition>
  );
}
