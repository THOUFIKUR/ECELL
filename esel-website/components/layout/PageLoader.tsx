"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080810]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="font-display font-extrabold text-4xl md:text-6xl text-[#F8FAFC] tracking-tight">
              ESEL
            </h1>
            <p
              className="font-accent text-lg md:text-xl tracking-[0.3em] mt-2 bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #A855F7, #EC4899)",
              }}
            >
              PITCH PALOOZA 2026
            </p>
          </motion.div>
          <motion.div
            className="mt-12 w-48 h-1 bg-[rgba(124,58,237,0.2)] rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#EC4899] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-mono text-xs text-[#94A3B8] mt-4"
          >
            Where Ideas Become Empires
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
