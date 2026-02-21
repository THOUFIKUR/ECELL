"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import type { GalleryImage } from "@/data/gallery";

interface LightboxProps {
  images: GalleryImage[];
  initialId: string;
  onClose: () => void;
}

export function Lightbox({ images, initialId, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(() => {
    const idx = images.findIndex((img) => img.id === initialId);
    return idx >= 0 ? idx : 0;
  });

  const current = images[currentIndex];

  useEffect(() => {
    const idx = images.findIndex((img) => img.id === initialId);
    if (idx >= 0) setCurrentIndex(idx);
  }, [initialId, images]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrentIndex((i) => (i > 0 ? i - 1 : images.length - 1));
      if (e.key === "ArrowRight") setCurrentIndex((i) => (i < images.length - 1 ? i + 1 : 0));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, images.length]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-lg"
        onClick={onClose}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 text-white hover:text-[#A855F7] transition-colors"
          aria-label="Close"
        >
          <RiCloseLine className="w-10 h-10" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex((i) => (i > 0 ? i - 1 : images.length - 1));
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:text-[#A855F7] transition-colors"
          aria-label="Previous"
        >
          <RiArrowLeftSLine className="w-12 h-12" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex((i) => (i < images.length - 1 ? i + 1 : 0));
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:text-[#A855F7] transition-colors"
          aria-label="Next"
        >
          <RiArrowRightSLine className="w-12 h-12" />
        </button>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-[90vw] max-h-[90vh]"
        >
          {current && (
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain"
              sizes="90vw"
            />
          )}
          <p className="text-center font-body text-[#94A3B8] mt-4">
            {current?.event}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
