import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Our Multimedia Production Team",
  description: "Learn about Beyond The Borders, a premier London-based multimedia production studio. Discover our creative vision, professional crew, and our mission to craft cinematic content and innovative digital solutions.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
