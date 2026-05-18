"use client";

import ServiceDetail from "@/components/services/ServiceDetail";

export default function DigitalDesignContent() {
  return (
    <ServiceDetail
      eyebrow="Digital & Graphic Design"
      title="CRAFTING"
      titleAccent="DIGITAL IDENTITY"
      description="Innovative digital design solutions that establish powerful brand identities. We merge striking graphic artistry with strategic brand communication to help you stand out across all mediums."
      accentColor="#c9a84c"
      heroImage="https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&q=80&w=2070"
      features={[
        { title: "BRAND IDENTITY & SYSTEM", description: "Creating complete identity suites including logos, custom color schemes, typography, and brand assets." },
        { title: "PRINT & EDITORIAL", description: "Bespoke print design layouts, high-end magazines, brochures, corporate stationery, and annual reports." },
        { title: "MARKETING COLLATERAL", description: "Dynamic digital ad assets, social media design frameworks, banners, and digital graphics." },
        { title: "PITCH DECKS & KEYNOTES", description: "High-end corporate presentations and startup investor pitch decks tailored for conversions." },
        { title: "PACKAGING & MERCHANDISE", description: "Luxury packaging designs, custom product box structures, and premium apparel branding." },
        { title: "MOTION BRANDING", description: "Adding movement to graphics with animated logos, kinetic typography, and motion transitions." },
      ]}
      process={[
        { number: "01", title: "RESEARCH & STRATEGY", description: "Analyzing target audiences, studying competitors, and defining the creative design blueprint." },
        { number: "02", title: "IDENTITY DESIGN", description: "Developing visual assets, custom logo options, and primary color systems." },
        { number: "03", title: "COLLATERAL EXPANSION", description: "Extending the chosen design direction to stationery, brochures, print materials, and digital assets." },
        { number: "04", title: "SYSTEM ARCHITECTURE", description: "Creating detailed style guides, brand guidelines, and asset package systems." },
        { number: "05", title: "FINAL HANDOFF", description: "Exporting all print-ready vector formats, digital layout formats, and interactive templates." },
      ]}
    />
  );
}
