import type { Metadata } from "next";
import AnalogToDigitalContent from "@/components/services/AnalogToDigitalContent";

export const metadata: Metadata = {
  title: "Analog to Digital Conversion & Media Archiving London",
  description: "Elite media archiving and digitization agency in London. Converting VHS to MP4, scanning 8mm film reels in 4K, digitizing vintage audio cassettes, slides, and photographs.",
  alternates: {
    canonical: "/services/analog-to-digital",
  },
};

export default function AnalogToDigitalPage() {
  return <AnalogToDigitalContent />;
}
