"use client";

import ServiceDetail from "@/components/services/ServiceDetail";

export default function PhotographyContent() {
  return (
    <ServiceDetail
      eyebrow="Photography Services"
      title="CAPTURING"
      titleAccent="VISUAL STORIES"
      description="Professional high-end photography that elevates your brand and captures your most important moments. From commercial campaigns to editorial portraits, we blend technical mastery with creative vision."
      accentColor="#c9a84c"
      heroImage="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=2070"
      features={[
        { title: "COMMERCIAL CAMPAIGNS", description: "High-impact visual assets for advertising, marketing campaigns, and product launches." },
        { title: "EDITORIAL & PORTRAITS", description: "Bespoke editorial photography and executive portraits that project professionalism and character." },
        { title: "PRODUCT PHOTOGRAPHY", description: "Prismatic studio product shoots emphasizing details, textures, and luxury appeal." },
        { title: "EVENT COVERAGE", description: "Comprehensive corporate event and major exhibition coverage capturing vital moments seamlessly." },
        { title: "FASHION & LIFESTYLE", description: "Cinematic, visually rich fashion editorial shoots and premium lifestyle imagery." },
        { title: "ARCHITECTURAL SHOOTS", description: "Interior and exterior photography showcasing properties and spaces in their best light." },
      ]}
      process={[
        { number: "01", title: "CONCEPT & MOODBOARD", description: "Collaborating on visual direction, style sheets, moodboarding, and planning the shoot." },
        { number: "02", title: "PRODUCTION", description: "Securing locations, booking talent, preparing equipment, and professional styling." },
        { number: "03", title: "THE SHOOT", description: "Executing the shoot using world-class cameras, professional lighting design, and creative direction." },
        { number: "04", title: "CURATION", description: "Reviewing all captured media and curating the absolute best frames for delivery." },
        { number: "05", title: "RETOUCHING", description: "High-end post-production, color correction, and artistic grading to deliver final pristine assets." },
      ]}
    />
  );
}
