import type { Metadata } from "next";
import PortfolioContent from "@/components/portfolio/PortfolioContent";

export const metadata: Metadata = {
  title: "Our Portfolio — Selected Case Studies & Creative Works",
  description: "Explore our featured showcase of cinematic brand films, high-performance web development projects, bespoke mobile apps, and stunning UI/UX visual designs.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
