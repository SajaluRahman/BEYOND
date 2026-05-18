import type { Metadata } from "next";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Bespoke Multimedia & Production Services",
  description: "Discover our full suite of professional services: cinematic video production, responsive web design, robust app development, custom UI/UX design, digital marketing, and luxury wedding videography & photography.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
