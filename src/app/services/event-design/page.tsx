import type { Metadata } from "next";
import EventDesignContent from "@/components/services/EventDesignContent";

export const metadata: Metadata = {
  title: "Premium Stage & Event Design Agency London",
  description: "Elite stage design and event production agency in London. Designing scenic sets, immersive lighting, large-scale projection mapping, and professional venue branding.",
  alternates: {
    canonical: "/services/event-design",
  },
};

export default function EventDesignPage() {
  return <EventDesignContent />;
}
