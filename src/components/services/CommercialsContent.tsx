"use client";

import ServiceDetail from "@/components/services/ServiceDetail";

export default function CommercialsContent() {
  return (
    <ServiceDetail
      eyebrow="Commercial Advertising"
      title="PREMIUM"
      titleAccent="BRAND CAMPAIGNS"
      description="Show-stopping commercials that captivate audiences and drive substantial business growth. We blend cinema-grade production with strategic marketing insights to craft advertising campaigns that leave an indelible mark."
      accentColor="#c9a84c"
      heroImage="/assets/home/commercial.png"
      features={[
        { title: "CINEMATIC BRAND FILMS", description: "Narrative-driven visual epics that communicate core brand values and evoke deep audience emotion." },
        { title: "PRODUCT COMMERCIALS", description: "Sleek, visually arresting close-up showcases emphasizing features, quality, and premium placement." },
        { title: "SOCIAL COMMERCE ADS", description: "High-impact, fast-paced vertical and horizontal visual assets engineered specifically for high conversion rates on social media." },
        { title: "TELEVISION CAMPAIGNS", description: "Cinema-grade, television broadcast-compliant visual ads tailored to rigid network specifications." },
        { title: "CORPORATE SHOWCASES", description: "Dynamic corporate identity films showcasing culture, vision, and large-scale industrial assets." },
        { title: "DIRECT RESPONSE PROMOS", description: "Goal-oriented visual sequences crafted to spark immediate customer conversions and action." },
      ]}
      process={[
        { number: "01", title: "STRATEGY & SCRIPT", description: "Developing custom advertising strategy, copywriting, drafting scripts, and drawing out master storyboards." },
        { number: "02", title: "PRE-PRODUCTION", description: "Location scouting, set building, casting actors, scheduling, and aligning production resources." },
        { number: "03", title: "THE FILMING", description: "Executing production utilizing 8K cinema cameras, professional light shapes, and expert director control." },
        { number: "04", title: "POST-PRODUCTION", description: "Masterful video editing, detailed frame adjustments, and state-of-the-art color correction." },
        { number: "05", title: "AUDIO DESIGN & VFX", description: "Integrating custom movie-grade sound designs, licensing premium musical tracks, and compiling CGI/VFX assets." },
      ]}
    />
  );
}
