import type { Metadata } from "next";
import UIUXContent from "@/components/services/UIUXContent";

export const metadata: Metadata = {
  title: "User-Centered UI/UX Design & Branding Agency",
  description: "Expert UI/UX design studio in London. Delivering data-driven user research, high-fidelity interactive prototyping, beautiful interface designs, and complete branding guidelines.",
  alternates: {
    canonical: "/services/ui-ux-design",
  },
};

export default function UIUXPage() {
  return <UIUXContent />;
}
