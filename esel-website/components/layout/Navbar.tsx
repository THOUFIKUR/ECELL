"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[rgba(15,15,26,0.8)] backdrop-blur-xl border-b border-[rgba(124,58,237,0.15)]"
            : "bg-transparent"
        )}
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(15,15,26,0.8)" : "transparent",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display font-extrabold text-xl text-[#F8FAFC]">
              ESEL
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
            <span className="font-accent text-sm text-[#94A3B8] tracking-wider">
              PITCH PALOOZA
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-body font-medium uppercase tracking-wider text-sm transition-colors duration-200",
                  pathname === link.href
                    ? "text-[#A855F7] border-b-2 border-[#A855F7] pb-0.5"
                    : "text-[#94A3B8] hover:text-[#A855F7]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <MagneticButton href={SITE_CONFIG.applyLink}>
              Register Now
            </MagneticButton>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-[#F8FAFC]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <RiCloseLine className="w-8 h-8" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <RiMenuLine className="w-8 h-8" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-[rgba(8,8,16,0.95)] backdrop-blur-[40px]"
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 60 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "font-display font-bold text-2xl",
                      pathname === link.href ? "text-[#A855F7]" : "text-[#F8FAFC]"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 60 }}
                transition={{ delay: NAV_LINKS.length * 0.1, duration: 0.3 }}
              >
                <MagneticButton href={SITE_CONFIG.applyLink}>
                  Register Now
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
