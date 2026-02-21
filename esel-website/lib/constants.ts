export const SITE_CONFIG = {
  name: "ESEL",
  fullName: "Entrepreneurship & Startup Excellence League",
  tagline: "Where Ideas Become Empires",
  subTagline: "An exclusive pitching arena for the women who build the future",
  eventName: "Pitch Palooza 2026",
  mainEventDate: "March 29, 2026",
  mainEventVenue: "Innovation Hub, Chennai",
  applyLink: "https://forms.gle/YOURLINK",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/gallery", label: "Gallery" },
] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/esel",
  instagram: "https://instagram.com/esel_official",
} as const;

export const CONTACT = {
  email: "contact@esel.in",
  location: "Chennai, Tamil Nadu",
  handle: "@esel_official",
} as const;
