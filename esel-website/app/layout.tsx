import type { Metadata } from "next";
import {
  Syne,
  Bebas_Neue,
  DM_Sans,
  JetBrains_Mono,
} from "next/font/google";
import { AnimatePresence } from "framer-motion";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { BackgroundLayers } from "@/components/home/BackgroundLayers";
import { PageLoader } from "@/components/layout/PageLoader";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ESEL – Pitch Palooza 2026 | Women Entrepreneur Pitching Arena",
    template: "%s | ESEL",
  },
  description:
    "Join Pitch Palooza 2026 by ESEL — the most ambitious pitching competition for women entrepreneurs in India. Compete. Collaborate. Conquer.",
  keywords: [
    "women entrepreneurs",
    "startup pitch India",
    "ESEL",
    "Pitch Palooza 2026",
    "women in business",
    "startup competition Chennai",
    "pitch competition",
  ],
  authors: [{ name: "ESEL", url: "https://esel.in" }],
  creator: "ESEL Tech Team",
  metadataBase: new URL("https://esel.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://esel.in",
    title: "Pitch Palooza 2026 – Where Ideas Become Empires",
    description:
      "An exclusive pitching arena for women who dare to build, lead, and disrupt.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ESEL Pitch Palooza 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pitch Palooza 2026 – ESEL",
    description: "Where Ideas Become Empires.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${bebasNeue.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased">
        <PageLoader />
        <SmoothScrollProvider>
          <BackgroundLayers />
          <Navbar />
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
