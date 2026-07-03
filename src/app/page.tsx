import type { Metadata } from "next";
import { ReadingProgressBar } from "@/components/ui/ReadingProgressBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import OpenSourceSection from "@/components/sections/OpenSourceSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import { structuredData, siteConfig } from "@/data/content";

export const metadata: Metadata = {
  openGraph: {
    type: "website",
  },
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": "https://rishabhsingh.me/#website",
  name: "Rishabh Singh Portfolio",
  url: "https://rishabhsingh.me",
  description: siteConfig.description,
  author: { "@id": "https://rishabhsingh.me/#person" },
};

const profilePageSchema = {
  "@type": "ProfilePage",
  "@id": "https://rishabhsingh.me/#profilepage",
  url: "https://rishabhsingh.me/",
  name: "Rishabh Singh - Data Scientist Portfolio",
  dateCreated: "2025-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  about: { "@id": "https://rishabhsingh.me/#person" },
  mainEntity: { "@id": "https://rishabhsingh.me/#person" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [structuredData.person, websiteSchema, profilePageSchema],
};

export default function Home() {
  return (
    <>
      <ReadingProgressBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <OpenSourceSection />
        <BlogSection />
        <ContactSection />
      </main>
    </>
  );
}
