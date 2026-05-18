import type { Metadata } from "next";
import AnimationContent from "@/components/services/AnimationContent";

export const metadata: Metadata = {
  title: "3D Character Animation & CGI Visual Effects London",
  description: "Top-tier 3D animation studio in London. Providing movie-grade CGI, visual effects (VFX), 3D product visualizations, and fluid 2D motion graphics.",
  alternates: {
    canonical: "/services/animation",
  },
};

export default function AnimationPage() {
  return <AnimationContent />;
}
