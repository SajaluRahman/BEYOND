"use client";

import ServiceDetail from "@/components/services/ServiceDetail";

export default function AnalogToDigitalContent() {
  return (
    <ServiceDetail
      eyebrow="Media Preservation"
      title="PRESERVING HISTORY"
      titleAccent="ANALOG TO DIGITAL"
      description="State-of-the-art media digitization services breathing new life into vintage archives. We convert VHS tapes, 8mm film reels, audio cassettes, slides, and photographs into pristine, high-fidelity digital formats."
      accentColor="#c9a84c"
      heroImage="https://images.unsplash.com/photo-1542204172-e7052809f85e?auto=format&fit=crop&q=80&w=2070"
      features={[
        { title: "VHS & TAPE DIGITIZATION", description: "Converting VHS, Betamax, Hi8, and MiniDV tapes into modern MP4 or ProRes formats using high-end decks." },
        { title: "8MM & 16MM FILM SCANNING", description: "Bespoke frame-by-frame 2K/4K scanning of vintage film reels to capture deep contrast and grain details." },
        { title: "AUDIO CASSETTE & VINYL RECOVERY", description: "Capturing retro magnetic audio tapes and vinyl records with premium pre-amps, exporting to FLAC or MP3." },
        { title: "PHOTO & SLIDE SCANNING", description: "High-resolution flatbed scanning of paper photos, negatives, and slides with advanced dust and scratch removals." },
        { title: "AI RESOLUTION UPSCALING", description: "Employing advanced neural networks to upscale historical video frames to crisp 1080p or 4K resolution." },
        { title: "ARCHIVAL CLOUD DELIVERY", description: "Providing organized, metadata-tagged file catalogs in secure cloud environments or high-speed drives." },
      ]}
      process={[
        { number: "01", title: "MEDIA ASSESSMENT", description: "Inspecting physical media for mold, damage, or degradation and conducting specialized physical cleanings." },
        { number: "02", title: "PREMIUM CAPTURE", description: "Playing back assets on studio-grade retro decks connected to high-end digital audio/video capture hardware." },
        { number: "03", title: "RESTORATION & RECOVERY", description: "Removing hiss, correcting tape jitters, repairing dropouts, and performing balance corrections." },
        { number: "04", title: "ENHANCEMENT & UPSCALING", description: "Using artificial intelligence tools to sharpen historical details, restore faded colors, and double frame rates." },
        { number: "05", title: "DIGITAL DISTRIBUTION", description: "Compiling pristine files into structured directories and deploying directly to secure download servers." },
      ]}
    />
  );
}
