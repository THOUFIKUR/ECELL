export interface Event {
  slug: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  status: "upcoming" | "past";
  description: string;
  fullDescription: string;
  highlights: string[];
  registerLink: string;
  poster: string;
  tags: string[];
}

export const events: Event[] = [
  {
    slug: "pitch-palooza-2026",
    title: "Pitch Palooza 2026",
    date: "March 29, 2026",
    time: "10:00 AM – 5:00 PM",
    venue: "Innovation Hub, Chennai",
    status: "upcoming",
    description:
      "The flagship pitching competition by ESEL for women entrepreneurs.",
    fullDescription:
      "Pitch Palooza 2026 is ESEL's most ambitious event yet — a full-day competition where 12 selected women entrepreneurs pitch their startups to a panel of 6 investors, mentors, and industry veterans. Designed to give founders a real platform, real feedback, and real funding opportunities. Preceded by a mentor sprint and followed by a networking gala, this is more than a competition — it's a career-defining day.",
    highlights: [
      "Live Investor Panel",
      "12 Finalist Pitches",
      "₹2L Prize Pool",
      "Mentor Sprint Sessions",
      "Networking Gala",
      "Hall of Fame Entry",
    ],
    registerLink: "https://forms.gle/YOURLINK",
    poster: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=630&fit=crop",
    tags: ["Pitching", "Funding", "Competition"],
  },
  {
    slug: "startup-sprint-2025",
    title: "Startup Sprint 2025",
    date: "November 12, 2025",
    time: "9:00 AM – 4:00 PM",
    venue: "SRM Institute of Science and Technology, Chennai",
    status: "past",
    description:
      "A 6-hour ideathon where student founders built and pitched MVPs.",
    fullDescription:
      "Startup Sprint 2025 brought together 80 student founders across 20 teams for a pressure-cooker 6-hour build challenge. Teams had to validate an idea, build an MVP prototype, and pitch it — all in one day. The winner received ₹50,000 and direct mentorship from an ESEL advisor for 3 months.",
    highlights: [
      "20 Teams",
      "6-Hour Build",
      "₹50K Prize",
      "Peer Pitching",
      "Rapid Prototyping",
    ],
    registerLink: "",
    poster: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=630&fit=crop",
    tags: ["Ideathon", "Student", "MVP"],
  },
  {
    slug: "founders-conclave-2025",
    title: "Founder's Conclave 2025",
    date: "August 5, 2025",
    time: "3:00 PM – 7:00 PM",
    venue: "The Hub Co-Working, Anna Nagar, Chennai",
    status: "past",
    description:
      "An intimate evening with 5 successful women founders sharing unfiltered startup stories.",
    fullDescription:
      "The Founder's Conclave was ESEL's most intimate format — a curated evening where 5 women who built and scaled companies across healthcare, fashion, fintech, and SaaS shared raw, unfiltered stories of failure, comeback, and scale. 120 attendees. 4 hours. Zero corporate speak.",
    highlights: [
      "5 Founders",
      "Fireside Chat Format",
      "Q&A Sessions",
      "Networking Dinner",
      "120 Attendees",
    ],
    registerLink: "",
    poster: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&h=630&fit=crop",
    tags: ["Fireside", "Inspiration", "Networking"],
  },
];
