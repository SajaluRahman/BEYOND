import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — Start Your Next Project",
  description: "Get in touch with London's premier multimedia agency. Let's collaborate on cinematic video production, custom web/app development, or digital marketing campaigns.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
