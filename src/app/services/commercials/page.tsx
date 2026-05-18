import type { Metadata } from "next";
import CommercialsContent from "@/components/services/CommercialsContent";

export const metadata: Metadata = {
  title: "Cinematic Commercial Video Production & Brand Campaigns London",
  description: "Award-winning commercial video production agency in London. Designing high-impact television commercials, cinematic social media ads, and premium brand films.",
  alternates: {
    canonical: "/services/commercials",
  },
};

export default function CommercialsPage() {
  return <CommercialsContent />;
}
