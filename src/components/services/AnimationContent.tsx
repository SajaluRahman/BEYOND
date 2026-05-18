"use client";

import ServiceDetail from "@/components/services/ServiceDetail";

export default function AnimationContent() {
  return (
    <ServiceDetail
      eyebrow="3D & 2D Animation"
      title="BREATHING LIFE"
      titleAccent="INTO IMAGINATION"
      description="Elite 3D and 2D animation solutions pushing visual boundaries. We create spectacular CGI assets, narrative character animations, and cutting-edge visual effects for brand campaigns and films."
      accentColor="#c9a84c"
      heroImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2070"
      features={[
        { title: "3D CHARACTER MODELING", description: "Bespoke digital character creation, custom texture mappings, and full skeletal rig configurations." },
        { title: "CGI & VISUAL EFFECTS (VFX)", description: "Adding movie-grade visual effects, particles, fluids, and virtual assets seamlessly into real-world video frames." },
        { title: "MOTION GRAPHICS & LOOPS", description: "Sleek, fluid transitions, title sequences, logo intros, and dynamic social media loops." },
        { title: "3D PRODUCT VISUALIZATIONS", description: "Stunning, high-end 3D CAD modeling rendering products with luxury textures, lighting, and camera pans." },
        { title: "ARCHITECTURAL FLY-THROUGHS", description: "Interactive and cinematic architectural 3D simulations detailing floor plans and residential interiors." },
        { title: "TITLE & INTRO SEQUENCES", description: "Creating professional intro title structures, custom kinetic styles, and cinematic movie titles." },
      ]}
      process={[
        { number: "01", title: "MODEL & TEXTURE", description: "Creating base 3D polygons, wrapping custom realistic textures, and configuring physics parameters." },
        { number: "02", title: "RIGGING & BONES", description: "Designing skeleton joints and controllers for character movements." },
        { number: "03", title: "KEYFRAMING & ANIMATION", description: "Animating character movements and camera positions frame-by-frame with absolute timing precision." },
        { number: "04", title: "COMPOSITING & LIGHTS", description: "Arranging custom studio lights, rendering frames, and integrating real-world plate assets." },
        { number: "05", title: "AUDIO GRADE & EXPORTS", description: "Compiling final renders, applying advanced noise reductions, and sound grading the video output." },
      ]}
    />
  );
}
