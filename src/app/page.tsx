import { AboutSection } from "@/components/about-section";
import { EngineeringSection } from "@/components/engineering-section";
import { Hero } from "@/components/hero";
import { SelectedWorkSection } from "@/components/selected-work-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WritingSection } from "@/components/writing-section";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only-focusable">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Hero />
        <SelectedWorkSection />
        <EngineeringSection />
        <WritingSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </>
  );
}
