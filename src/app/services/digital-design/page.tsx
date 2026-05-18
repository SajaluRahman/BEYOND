import type { Metadata } from "next";
import DigitalDesignContent from "@/components/services/DigitalDesignContent";

export const metadata: Metadata = {
  title: "Brand Identity, Graphic & Digital Design Agency London",
  description: "Elite digital and graphic design agency in London. Designing luxury brand identities, professional print layouts, corporate pitch decks, and motion graphics.",
  alternates: {
    canonical: "/services/digital-design",
  },
};

export default function DigitalDesignPage() {
  return <DigitalDesignContent />;
}
