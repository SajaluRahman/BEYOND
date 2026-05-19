"use client";

import ServiceDetail from "@/components/services/ServiceDetail";

export default function ExplainersContent() {
  return (
    <ServiceDetail
      eyebrow="Explainer Video Production"
      title="SIMPLIFYING"
      titleAccent="COMPLEX IDEAS"
      description="Engaging and easy-to-understand explainer videos that convert prospects into clients. We demystify complex technologies, SaaS applications, and enterprise services through creative motion design."
      accentColor="#c9a84c"
      heroImage="/assets/home/explainers.png"
      features={[
        { title: "SAAS PRODUCT DEMOS", description: "Bespoke walkthroughs showcasing app interfaces, core workflows, and direct software user benefits." },
        { title: "2D & 3D MOTION GRAPHICS", description: "Vibrant custom vectors and animated scenes visualizing abstract data with absolute clarity." },
        { title: "CHARACTER ANIMATION", description: "Relatable, storyboarded characters navigating a customized storyline to evoke empathy and resolve pain points." },
        { title: "WHITEBOARD EXPLAINERS", description: "Sleek, drawing-style animations perfect for corporate presentations, classrooms, and educational programs." },
        { title: "INFOGRAPHIC SUMMARIES", description: "Data-heavy animation layouts turning dry stats and graphs into highly engaging visual masterpieces." },
        { title: "HELP CENTER GUIDES", description: "Short, micro-tutorials answering vital questions and guiding new users during onboarding cycles." },
      ]}
      process={[
        { number: "01", title: "THE BRIEF", description: "Gathering documentation, understanding product mechanics, and formulating the core educational script." },
        { number: "02", title: "SCRIPT WRITING", description: "Developing a highly persuasive voiceover script highlighting major features and solutions." },
        { number: "03", title: "STORYBOARD & DESIGN", description: "Drawing layout drafts and establishing custom characters, backgrounds, and brand-aligned assets." },
        { number: "04", title: "VOICEOVER & SOUND", description: "Recording high-quality voiceover lines using elite international voice talents." },
        { number: "05", title: "ANIMATION DESIGN", description: "Combining script, graphics, and voice tracks with dynamic motion design, transitions, and audio grading." },
      ]}
    />
  );
}
