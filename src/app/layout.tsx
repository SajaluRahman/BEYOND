import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import LoadingScreen from "@/components/layout/LoadingScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beyondtheborders.co.uk"),
  title: {
    default: "Beyond The Borders — Creative Video Production, Web & App Development London",
    template: "%s | Beyond The Borders"
  },
  description:
    "London's premier full-service multimedia production company. Specializing in cinematic video production, custom web & app development, UI/UX design, digital marketing, and luxury wedding videography & photography.",
  keywords: [
    "multimedia production London",
    "video production company London",
    "custom web development UK",
    "mobile app development London",
    "creative UI/UX design agency",
    "digital marketing services London",
    "wedding videography and photography London",
    "cinematic brand films",
    "explainers and animations",
    "analog to digital conversion"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Beyond The Borders — Creative Video Production, Web & App Development London",
    description:
      "London's premier full-service multimedia production company. Crafting stunning cinematic visual content, high-performance web experiences, and bespoke mobile apps.",
    url: "https://beyondtheborders.co.uk",
    siteName: "Beyond The Borders",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/assets/home/multimediahero.jpg",
        width: 1200,
        height: 630,
        alt: "Beyond The Borders Creative Multimedia Studio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond The Borders — Unlimited Multimedia Solutions",
    description: "London's premier full-service multimedia production company crafting show-stopping content.",
    images: ["/assets/home/multimediahero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: "technology & media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Beyond The Borders",
              "image": "https://beyondtheborders.co.uk/assets/home/logo.png",
              "url": "https://beyondtheborders.co.uk",
              "logo": "https://beyondtheborders.co.uk/assets/home/logo.png",
              "telephone": "+447767956510",
              "email": "beyondthebordersvfx@gmail.com",
              "description": "London's premier full-service multimedia company specializing in video production, custom web & app development, UI/UX design, digital marketing, and premium wedding coverage.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "115 Crocus Way",
                "addressLocality": "Chelmsford",
                "addressRegion": "Essex",
                "postalCode": "CM1 5XH",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.7337",
                "longitude": "0.4789"
              },
              "priceRange": "$$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/beyondtheborders",
                "https://www.instagram.com/beyondtheborders",
                "https://www.linkedin.com/company/beyondtheborders"
              ]
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-[#0a0a0a] text-white font-body selection:bg-[#c9a84c] selection:text-[#0a0a0a]">
        <LoadingScreen />
        <CustomCursor />
        <SmoothScroll>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full overflow-x-hidden">
              {children}
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
