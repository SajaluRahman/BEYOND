import type { Metadata } from "next";
import AppDevContent from "@/components/services/AppDevContent";

export const metadata: Metadata = {
  title: "Bespoke Mobile App Development — iOS & Android",
  description: "Innovative iOS, Android, and cross-platform mobile app development services in London. Building secure, high-performance native applications with flawless user experiences.",
  alternates: {
    canonical: "/services/app-development",
  },
};

export default function AppDevelopmentPage() {
  return <AppDevContent />;
}
