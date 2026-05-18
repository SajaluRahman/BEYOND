import type { Metadata } from "next";
import DigitalMarketingContent from "@/components/services/DigitalMarketingContent";

export const metadata: Metadata = {
  title: "Data-Driven Digital Marketing & SEO Services",
  description: "Scale your business with London's leading digital marketing agency. Offering comprehensive SEO, highly optimized PPC management, social media growth, and conversion rate optimization.",
  alternates: {
    canonical: "/services/digital-marketing",
  },
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingContent />;
}
