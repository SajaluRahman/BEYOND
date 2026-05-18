import type { Metadata } from "next";
import ExplainersContent from "@/components/services/ExplainersContent";

export const metadata: Metadata = {
  title: "Explainer Video Production & SaaS Motion Graphics London",
  description: "Premier explainer video production company in London. Creating high-converting animated SaaS demos, 2D/3D product walkthroughs, and custom motion graphics.",
  alternates: {
    canonical: "/services/explainers",
  },
};

export default function ExplainersPage() {
  return <ExplainersContent />;
}
