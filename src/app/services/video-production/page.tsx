import type { Metadata } from "next";
import VideoProductionContent from "@/components/services/VideoProductionContent";

export const metadata: Metadata = {
  title: "Cinematic Video Production & Brand Films",
  description: "Award-winning commercial video production agency in London. Delivering cinematic brand films, high-impact commercials, documentaries, corporate videos, and AI video production.",
  alternates: {
    canonical: "/services/video-production",
  },
};

export default function VideoProductionPage() {
  return <VideoProductionContent />;
}
