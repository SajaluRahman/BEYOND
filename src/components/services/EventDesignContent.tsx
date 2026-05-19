"use client";

import ServiceDetail from "@/components/services/ServiceDetail";

export default function EventDesignContent() {
  return (
    <ServiceDetail
      eyebrow="Event Design & Production"
      title="SPECTACULAR"
      titleAccent="IMMERSIVE SPACES"
      description="Creating breathtaking physical experiences through innovative spatial and stage design. We merge structural architecture, cinematic lighting, and state-of-the-art multimedia elements to curate unforgettable corporate and private events."
      accentColor="#c9a84c"
      heroImage="/assets/home/eventdesign.png"
      features={[
        { title: "SCENIC STAGE DESIGN", description: "Bespoke stage blueprint design, premium backing structures, custom speaker podiums, and performance sets." },
        { title: "IMMERSIVE LIGHTING SYSTEMS", description: "Designing complex, mood-aligned dynamic lighting sequences and architectural spotlights." },
        { title: "PROJECTION MAPPING", description: "Projecting jaw-dropping motion visuals and custom digital animations onto 3D buildings and custom stage shapes." },
        { title: "EVENT MULTIMEDIA BRANDING", description: "Full digital screen graphics, entrance brand assets, photo-backdrop arrays, and signage." },
        { title: "SPATIAL 3D RENDERING", description: "Creating detailed 3D digital walkthroughs of the venue before starting stage construction." },
        { title: "AUDIO & VIDEO INTEGRATION", description: "High-grade line array speaker systems, massive LED screen setups, and synchronized live broadcast controls." },
      ]}
      process={[
        { number: "01", title: "VENUE BRIEFING", description: "Visiting physical event halls, checking power limits, measuring dimensions, and defining layouts." },
        { number: "02", title: "3D CAD PRE-VISUAL", description: "Building highly detailed 3D spatial renders illustrating textures, furniture, lighting shapes, and angles." },
        { number: "03", title: "SCENIC BUILDUP", description: "Constructing stage backing panels, placing structures, and installing modular LED walls." },
        { number: "04", title: "SOUND & LIGHT CHECKS", description: "Rigorous audio tuning, programming lighting consoles, and testing projection mappings." },
        { number: "05", title: "LIVE SHOW DIRECTION", description: "Managing live audio cues, visual screen graphics, dynamic light changes, and cameras during the event." },
      ]}
    />
  );
}
