import Link from "next/link";
import { FiLinkedin, FiInstagram } from "react-icons/fi";
import { NAV_LINKS, SITE_CONFIG, SOCIAL_LINKS, CONTACT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#0F0F1A] border-t border-[rgba(124,58,237,0.15)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="inline-block">
              <span className="font-display font-extrabold text-2xl text-[#F8FAFC]">
                ESEL
              </span>
            </Link>
            <p className="mt-4 font-body text-[#94A3B8] text-sm leading-relaxed max-w-xs">
              Empowering women entrepreneurs through community, competition, and
              connection.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#A855F7] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#A855F7] transition-colors duration-200"
                aria-label="Instagram"
              >
                <FiInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-accent text-sm uppercase tracking-[0.15em] text-[#A855F7] mb-4">
              Navigate
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-[#94A3B8] hover:text-[#A855F7] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={SITE_CONFIG.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[#A855F7] hover:text-[#EC4899] transition-colors duration-200"
                >
                  Apply to Pitch
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-accent text-sm uppercase tracking-[0.15em] text-[#A855F7] mb-4">
              Contact
            </h3>
            <ul className="space-y-3 font-body text-[#94A3B8] text-sm">
              <li>📍 {CONTACT.location}</li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-[#A855F7] transition-colors"
                >
                  📧 {CONTACT.email}
                </a>
              </li>
              <li>📱 {CONTACT.handle}</li>
              <li className="pt-2 text-[#A855F7]">
                Next Event: {SITE_CONFIG.mainEventDate}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[rgba(124,58,237,0.2)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#475569] font-body">
            <p>© 2026 ESEL – {SITE_CONFIG.fullName}</p>
            <p>Made with 💜 by the ESEL Tech Team</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
