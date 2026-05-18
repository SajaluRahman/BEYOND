import type { Metadata } from "next";
import PhotographyContent from "@/components/services/PhotographyContent";

export const metadata: Metadata = {
  title: "Professional Photography & Brand Campaigns London",
  description: "High-end photography agency in London. Providing luxury commercial campaigns, executive editorial portraits, fine art shoots, and elite product photography.",
  alternates: {
    canonical: "/services/photography",
  },
};

export default function PhotographyPage() {
  return <PhotographyContent />;
}
