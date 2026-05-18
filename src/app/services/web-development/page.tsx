import type { Metadata } from "next";
import WebDevContent from "@/components/services/WebDevContent";

export const metadata: Metadata = {
  title: "Bespoke Web Development & E-Commerce Solutions",
  description: "High-performance web development services in London. Specializing in custom responsive websites, Headless e-commerce stores, secure web applications, and premium CMS solutions.",
  alternates: {
    canonical: "/services/web-development",
  },
};

export default function WebDevelopmentPage() {
  return <WebDevContent />;
}
