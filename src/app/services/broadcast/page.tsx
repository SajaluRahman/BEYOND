import type { Metadata } from "next";
import BroadcastContent from "@/components/services/BroadcastContent";

export const metadata: Metadata = {
  title: "Television Production & Live Streaming Broadcast Agency London",
  description: "Elite television and broadcast video production agency in London. Providing multi-camera studio shoots, live event streaming, OB trucks, and high-end broadcast graphics.",
  alternates: {
    canonical: "/services/broadcast",
  },
};

export default function BroadcastPage() {
  return <BroadcastContent />;
}
