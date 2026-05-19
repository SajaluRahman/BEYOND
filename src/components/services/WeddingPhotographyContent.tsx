"use client";

import ServiceDetail from "@/components/services/ServiceDetail";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";

export default function WeddingPhotographyContent() {
  const packages = [
    {
      id: "basic",
      name: "Basic Package",
      tagline: "Perfect for intimate weddings & small ceremonies",
      popular: false,
      includes: [
        "1 Professional Photographer",
        "1 Professional Videographer",
        "Full Ceremony Coverage",
        "Bridal & Groom Portrait Session",
        "High-Resolution Edited Photos",
        "Highlight Video (3–5 Minutes)",
        "Online Delivery",
        "Basic Color Grading"
      ],
      addons: [
        "Drone Footage",
        "Live Streaming",
        "Extra Coverage Hours",
        "Spot Editing for Social Media"
      ]
    },
    {
      id: "standard",
      name: "Standard Package",
      tagline: "Ideal for traditional weddings & full-day events",
      popular: true,
      includes: [
        "2 Professional Photographers",
        "2 Professional Videographers",
        "Full-Day Coverage",
        "Bridal & Groom Prep Coverage",
        "Cinematic Wedding Film",
        "Professional Audio Recording",
        "Drone Footage",
        "Social Media Highlight Reel",
        "Professionally Edited High-Res Images",
        "USB / Digital Delivery"
      ],
      addons: [
        "Live Streaming Services",
        "Same-Day Spot Editing",
        "LED Wall Display Support",
        "Pre-Wedding Shoot",
        "Couple Interview Session"
      ]
    },
    {
      id: "premium",
      name: "Premium Package",
      tagline: "Luxury cinematic wedding experience",
      popular: false,
      includes: [
        "3+ Professional Photographers",
        "3+ Professional Videographers",
        "Full Cinematic Wedding Production",
        "Multi-Camera Coverage",
        "Drone Coverage",
        "Live Streaming Setup",
        "Same-Day Spot Editing",
        "Wedding Trailer Film",
        "Full Documentary Wedding Film",
        "Couple Love Story Shoot",
        "Premium Retouching & Color Grading",
        "LED Screen Visual Support",
        "Luxury Album Design",
        "Social Media Reels & Teasers",
        "Priority Delivery"
      ],
      complimentary: [
        "Pre-Wedding Consultation",
        "Customized Wedding Timeline Planning",
        "Dedicated Creative Director",
        "Customized Wedding Packages"
      ]
    }
  ];

  const additionalServices = [
    "Live Streaming",
    "Drone Cinematography",
    "Spot Editing",
    "Same-Day Edits",
    "LED Wall Visuals",
    "Couple Shoots",
    "Save-the-Date Videos",
    "Pre-Wedding Shoots",
    "Reception Highlights",
    "Traditional & Cinematic Edits",
    "Multi-Day Event Coverage",
    "Destination Wedding Coverage"
  ];

  const whyChooseUs = [
    { title: "Experienced Creative Team", desc: "Award-winning storytellers, filmmakers, and digital artists specializing in emotional high-end narratives." },
    { title: "Cinematic Storytelling", desc: "We don't just capture scenes; we compose cinematic stories of your love, details, and atmosphere." },
    { title: "Professional Gear & Safety", desc: "Rigged with industry-grade cinema cameras, custom lenses, drone backups, and redundant audio systems." },
    { title: "Premium Color Grading", desc: "Exquisite visual post-production that gives your photos and films a rich, timeless cinematic color palette." },
    { title: "Reliable Event Coverage", desc: "Flawless and detailed event timeline management that ensures not a single precious memory is missed." },
    { title: "Fast & Priority Delivery", desc: "Optimized professional pipelines ensuring that you get to share highlight frames and trailers within days." }
  ];

  return (
    <ServiceDetail
      eyebrow="Wedding Photography & Videography"
      title="TIMELESS"
      titleAccent="WEDDING STORIES"
      description="Your love story deserves to be told with cinematic brilliance. Beyond the Borders Ltd. creates timeless wedding memories with artistic photography, creative storytelling, and professional live event coverage. Whether you are planning an intimate ceremony or a grand celebration, our team delivers high-quality wedding photography and videography tailored to your special day."
      accentColor="#c9a84c"
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
    >
      {/* Wedding Packages Section */}
      <section className="py-24 bg-[#050505] relative overflow-hidden border-y border-white/5" id="wedding-packages">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="text-[0.65rem] tracking-[0.4em] text-[#c9a84c] uppercase font-bold block mb-4">Invest in Memories</span>
              <h2 className="text-4xl md:text-6xl tracking-widest font-display text-white uppercase mb-6">
                WEDDING <span className="text-gradient-gold">PACKAGES</span>
              </h2>
              <p className="text-xs md:text-sm text-[#888] max-w-2xl mx-auto leading-relaxed">
                Every wedding is unique, and we offer fully customized packages based on your requirements, venue size, event duration, and production needs. Select a package below to discuss your dream coverage.
              </p>
            </div>
          </ScrollReveal>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.id} delay={i * 0.15}>
                <div 
                  className={`relative h-full flex flex-col p-8 rounded-2xl border transition-all duration-500 group ${
                    pkg.popular 
                      ? "bg-white/[0.02] border-[#c9a84c]/30 shadow-[0_0_50px_rgba(201,168,76,0.05)]" 
                      : "bg-white/[0.01] border-white/5 hover:border-white/10"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#c9a84c] text-[0.55rem] tracking-[0.2em] font-bold text-black uppercase">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-xl tracking-widest font-display text-white uppercase mb-2">{pkg.name}</h3>
                    <p className="text-xs text-[#888] leading-relaxed">{pkg.tagline}</p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-white/5 mb-8" />

                  {/* Inclusions */}
                  <div className="flex-1 mb-8">
                    <span className="text-[0.55rem] tracking-[0.2em] text-[#c9a84c] font-bold uppercase block mb-4">What's Included</span>
                    <ul className="space-y-3">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs text-white/70 leading-relaxed">
                          <svg className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Add-ons / Complimentary */}
                    {pkg.addons && (
                      <>
                        <span className="text-[0.55rem] tracking-[0.2em] text-[#c9a84c] font-bold uppercase block mt-6 mb-4">Optional Add-ons</span>
                        <ul className="space-y-2 opacity-60">
                          {pkg.addons.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-xs text-white/60">
                              <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {pkg.complimentary && (
                      <>
                        <span className="text-[0.55rem] tracking-[0.2em] text-[#c9a84c] font-bold uppercase block mt-6 mb-4">Complimentary Features</span>
                        <ul className="space-y-2">
                          {pkg.complimentary.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-xs text-white/70">
                              <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  {/* Booking CTA */}
                  <Link
                    href={`/contact?package=${pkg.id}`}
                    className={`w-full py-4 text-center text-[0.65rem] tracking-[0.3em] font-bold uppercase transition-all duration-300 rounded ${
                      pkg.popular 
                        ? "bg-[#c9a84c] hover:bg-[#c9a84c]/90 text-black shadow-lg" 
                        : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                    }`}
                  >
                    Book Experience
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        
        {/* Background Ambient Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a84c]/2 rounded-full blur-[140px]" style={{ zIndex: 0 }} />
      </section>

      {/* Additional Services Section */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="additional-wedding-services">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[0.65rem] tracking-[0.4em] text-[#c9a84c] uppercase font-bold block mb-4">Flexibility & Scaling</span>
              <h2 className="text-3xl md:text-5xl tracking-widest font-display text-white uppercase mb-6">
                ADDITIONAL <span className="text-gradient-gold">SERVICES</span>
              </h2>
              <p className="text-xs text-[#888] max-w-xl mx-auto leading-relaxed">
                Add any of these specialized services to your package or configure a fully bespoke multimedia solution.
              </p>
            </div>
          </ScrollReveal>

          {/* Tags Layout */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {additionalServices.map((service, idx) => (
                <div 
                  key={idx}
                  className="px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 hover:border-[#c9a84c]/30 hover:bg-[#c9a84c]/5 text-xs text-white/80 transition-all duration-300 font-display tracking-wider uppercase"
                >
                  {service}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5" id="why-choose-wedding">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="text-[0.65rem] tracking-[0.4em] text-[#c9a84c] uppercase font-bold block mb-4">Our Commitment</span>
              <h2 className="text-3xl md:text-5xl tracking-widest font-display text-white uppercase mb-6">
                WHY CHOOSE <span className="text-gradient-gold">BEYOND</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {whyChooseUs.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-xl bg-white/[0.01] border border-white/5 hover:border-[#c9a84c]/20 hover:bg-white/[0.02] transition-all duration-500">
                  <div className="text-[#c9a84c] text-lg font-bold font-display tracking-widest uppercase mb-4">
                    {item.title}
                  </div>
                  <p className="text-xs text-[#888] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </ServiceDetail>
  );
}
