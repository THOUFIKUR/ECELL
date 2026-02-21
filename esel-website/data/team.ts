export interface TeamMember {
  id: string;
  name: string;
  role: string;
  dept: "Leadership" | "Operations" | "Marketing" | "Tech" | "Community";
  bio: string;
  linkedin: string;
  instagram: string;
  avatar: string;
}

export const team: TeamMember[] = [
  {
    id: "1",
    name: "THOUFIKUR RAHAMAN Y",
    role: "President & Co-Founder",
    dept: "Leadership",
    bio: "Serial entrepreneur, 2x founder, ESEL architect. She built this from a college room with 4 people and a dream.",
    linkedin: "https://www.linkedin.com/in/thoufikur-rahaman-y-9a66a0388",
    instagram: "#",
    avatar: "/images/team/THOUFIKUR RAHAMAN.png",
  },
  {
    id: "2",
    name: "kavi aura king",
    role: "VP of Events & Operations",
    dept: "Operations",
    bio: "Event architect behind all 6 ESEL events. She runs the chaos so you experience magic.",
    linkedin: "#",
    instagram: "#",
    avatar: "/images/team/kavi aura king.jpg",
  },
  {
    id: "3",
    name: "VISHANT",
    role: "Head of Marketing & Brand",
    dept: "Marketing",
    bio: "Brand strategist with 3 years in growth marketing. She made ESEL a name people recognize.",
    linkedin: "#",
    instagram: "https://www.instagram.com/srinivasvishanth?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    avatar: "/images/team/VISHANT.jpg",
  },
  {
    id: "4",
    name: "Sneha Balaji",
    role: "Tech & Design Lead",
    dept: "Tech",
    bio: "Full-stack engineer + UI designer. She builds the digital infrastructure of everything you see.",
    linkedin: "#",
    instagram: "#",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: "5",
    name: "Priya Nair",
    role: "Finance & Sponsorship Lead",
    dept: "Operations",
    bio: "Raised ₹5L+ in sponsorships for ESEL events. She doesn't ask for money — she makes the case.",
    linkedin: "#",
    instagram: "#",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
  {
    id: "6",
    name: "Lakshmi Venkat",
    role: "Community Manager",
    dept: "Community",
    bio: "The heartbeat of the ESEL community. 300+ connections, 0 awkward silences.",
    linkedin: "#",
    instagram: "#",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
  },
];
