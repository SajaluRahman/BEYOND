"use client";

import ServiceDetail from "@/components/services/ServiceDetail";

export default function WeddingPhotographyContent() {
  return (
    <ServiceDetail
      eyebrow="Wedding Photography & Videography"
      title="TIMELESS"
      titleAccent="WEDDING STORIES"
      description="Your love story deserves to be told with cinematic brilliance. We blend artistry with emotion to create breathtaking wedding films and photographs that you'll treasure for a lifetime."
      accentColor="#e11d48"
      heroImage="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070"
      features={[
        { title: "CINEMATIC FILMS", description: "Hollywood-grade wedding films that capture the raw emotion, laughter, tears, and joy of your special day with breathtaking cinematography." },
        { title: "PHOTOGRAPHY", description: "Timeless wedding photography blending candid moments with artistically composed portraits. Every frame tells a part of your story." },
        { title: "PRE-WEDDING SHOOTS", description: "Romantic pre-wedding sessions at stunning locations. Creative concepts that showcase your unique love story before the big day." },
        { title: "DRONE COVERAGE", description: "Aerial cinematography capturing the grandeur of your venue and celebrations from breathtaking perspectives." },
        { title: "SAME-DAY EDITS", description: "Experience the magic of watching a highlight reel of your wedding day, edited and screened at your reception." },
        { title: "ALBUM DESIGN", description: "Luxurious handcrafted wedding albums with premium materials and elegant layouts that preserve your memories in tangible form." },
      ]}
      showcaseItems={[
        { 
          title: "ETERNAL VOWS", 
          description: "A cinematic destination wedding film capturing an intimate ceremony against the backdrop of golden sunsets and ocean waves.",
          image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&q=80&w=2070"
        },
        { 
          title: "GOLDEN HOUR", 
          description: "A breathtaking pre-wedding shoot at a heritage palace, blending traditional elegance with modern cinematic techniques.",
          image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&q=80&w=2070"
        },
        { 
          title: "FOREVER BEGINS", 
          description: "An elaborate grand wedding celebration captured with multi-camera setups, drone footage, and artistic storytelling.",
          image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=2070"
        },
      ]}
      process={[
        { number: "01", title: "CONSULTATION", description: "We meet to understand your vision, wedding style, and the moments that matter most to you. Every detail is noted." },
        { number: "02", title: "PLANNING & SCOUTING", description: "Location visits, shot lists, timeline coordination with your wedding planner, and creative direction planning." },
        { number: "03", title: "PRE-WEDDING SHOOT", description: "A dedicated pre-wedding session to capture your chemistry in a relaxed, creative environment at a location of your choice." },
        { number: "04", title: "WEDDING DAY COVERAGE", description: "Full-day multi-camera coverage with our expert team. Every ceremony, ritual, emotion, and celebration captured flawlessly." },
        { number: "05", title: "POST-PRODUCTION", description: "Cinematic color grading, audio mixing, and meticulous editing to craft a wedding film and curated photo collection." },
        { number: "06", title: "DELIVERY", description: "Your cinematic wedding film, highlight reel, full photo gallery, and premium album delivered in stunning quality." },
      ]}
    />
  );
}
