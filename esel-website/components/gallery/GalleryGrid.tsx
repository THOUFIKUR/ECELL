"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { GalleryImage } from "@/data/gallery";

const Lightbox = dynamic(() => import("./Lightbox").then((m) => m.Lightbox), {
  ssr: false,
});

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <>
      <div
        className="columns-1 md:columns-2 lg:columns-3 gap-4"
        style={{ contain: "layout paint" }}
      >
        {images.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: i * 0.05,
            }}
            className="break-inside-avoid mb-4"
          >
            <button
              type="button"
              onClick={() => setSelectedId(img.id)}
              className="block w-full text-left overflow-hidden rounded-xl border border-[rgba(124,58,237,0.15)] hover:border-[rgba(168,85,247,0.45)] hover:shadow-[0_0_40px_rgba(124,58,237,0.25)] transition-all duration-300 cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="font-body text-sm text-[#94A3B8] p-3 truncate">
                {img.event}
              </p>
            </button>
          </motion.div>
        ))}
      </div>

      {selectedId && (
        <Lightbox
          images={images}
          initialId={selectedId}
          onClose={() => setSelectedId(null)}
        />
      )}
    </>
  );
}
