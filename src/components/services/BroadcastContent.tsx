"use client";

import ServiceDetail from "@/components/services/ServiceDetail";

export default function BroadcastContent() {
  return (
    <ServiceDetail
      eyebrow="Broadcast Production"
      title="TELEVISION &"
      titleAccent="BROADCAST QUALITY"
      description="Professional high-definition broadcast services engineered for media networks and global streaming events. We deliver absolute technical reliability and stellar visual production quality under rigid broadcast parameters."
      accentColor="#c9a84c"
      heroImage="/assets/home/broadcastdesign.png"
      features={[
        { title: "TELEVISION ADVERTISING", description: "Designing cinema-grade commercials that completely comply with TV network broadcast standards and Clearcast certifications." },
        { title: "LIVE BROADCAST EVENTS", description: "Seamless multi-camera live broadcast setups for international concerts, sporting events, and corporate keynotes." },
        { title: "MULTI-CAM STUDIO SHOOTS", description: "Studio-based productions utilizing high-grade teleprompters, synchronized multi-cameras, and green screen integrations." },
        { title: "OB TRUCK SERVICES", description: "Elite outside broadcast trucks equipped with high-frequency satellite link systems for instant field delivery." },
        { title: "BROADCAST GRAPHICS", description: "Developing network graphics packages, lower thirds, bumpers, tickers, and visual title layouts." },
        { title: "SATELLITE & IP TRANSMISSION", description: "Highly reliable high-bandwidth IP pipelines and satellite links ensuring seamless live streams worldwide." },
      ]}
      process={[
        { number: "01", title: "NETWORK SPECS", description: "Analyzing target network delivery profiles, frame rates, color systems, and legal audio barriers." },
        { number: "02", title: "PRE-FLIGHT SYSTEMS", description: "Rigorous testing of synchronized cameras, multi-audio boards, satellite pipelines, and system fallbacks." },
        { number: "03", title: "LIVE PRODUCTION", description: "Executing the broadcast using real-time video switchers, instant replays, and professional director commands." },
        { number: "04", title: "REAL-TIME VFX", description: "Injecting live graphic titles, sports stats overlays, and screen tickers instantly." },
        { number: "05", title: "TRANSMISSION HANDOFF", description: "Direct satellite or high-grade web stream distribution to targeted network servers globally." },
      ]}
    />
  );
}
