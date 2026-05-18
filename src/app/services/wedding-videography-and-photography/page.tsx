import type { Metadata } from "next";
import WeddingPhotographyContent from "@/components/services/WeddingPhotographyContent";

export const metadata: Metadata = {
  title: "Luxury Wedding Videography & Cinematic Photography",
  description: "Capture your most precious moments with London's luxury wedding videographers and photographers. Beautiful pre-wedding shoots, cinematic films, aerial drone footage, and custom physical album designs.",
  alternates: {
    canonical: "/services/wedding-videography-and-photography",
  },
};

export default function WeddingPhotographyPage() {
  return <WeddingPhotographyContent />;
}
