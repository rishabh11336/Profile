import { ReadingProgressBar } from "@/components/ui/ReadingProgressBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import OpenSourceSection from "@/components/sections/OpenSourceSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import VisitorsSection from "@/components/sections/VisitorsSection";
import { structuredData, siteConfig } from "@/data/content";

const websiteSchema = {
  "@type": "WebSite",
  "@id": "https://singhrishabh.com/#website",
  name: "Rishabh Singh Portfolio",
  url: "https://singhrishabh.com",
  description: siteConfig.description,
  author: { "@id": "https://singhrishabh.com/#person" },
};

const profilePageSchema = {
  "@type": "ProfilePage",
  "@id": "https://singhrishabh.com/#profilepage",
  url: "https://singhrishabh.com/",
  name: "Rishabh Singh - Data Scientist Portfolio",
  dateCreated: "2025-01-01T00:00:00Z",
  dateModified: new Date().toISOString(),
  about: { "@id": "https://singhrishabh.com/#person" },
  mainEntity: { "@id": "https://singhrishabh.com/#person" },
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
        <VisitorsSection />
        <ContactSection />
      </main>
    </>
  );
}
