"use client";

import FeatureHighlights from "@/components/features/client_side/platforms/FeatureHighlights";
import HeroSection from "@/components/features/client_side/platforms/hero_section";
import PlatformAudience from "@/components/features/client_side/platforms/PlatformAudience";
import PlatformSection from "@/components/features/client_side/platforms/PlatformSection";
import SectionWithImage from "@/components/features/client_side/platforms/SectionWithImage";

export default function BusinessPageHeroSection() {
  return (
    <>
      <section id="individual-hero">
        <HeroSection />
      </section>

      <SectionWithImage
        title="Route users to the right pathway every time"
        imageSrc="/platform_page/section_1/box.svg"
      />

      <PlatformSection
        title="AI Chatbot & Triage"
        bullets={["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]}
      />
      <SectionWithImage
        title="Voice AI"
        imageSrc="/platform_page/section_1/voice_ai.svg"
        description="Automates calls, supports 24/7 access, reduces staff workload"
      />
      <SectionWithImage
        title="Configurable
Onboarding"
        imageSrc="/platform_page/section_1/women.svg"
        description="Tailor onboarding to your service in days, not months"
        imagePosition="left"
      />
      <SectionWithImage
        title="Route users to the right pathway every time"
        imageSrc="/platform_page/section_1/ring.svg"
      />

      <SectionWithImage
        title="Reporting & Insights"
        imageSrc="/platform_page/section_1/chart.svg"
        description="Highlight analytics dashboards, outcomes reporting for providers/not-for-profits"
        imagePosition="left"
      />
      <FeatureHighlights/>

      <SectionWithImage
        title="Route users to the right pathway every time"
        imageSrc="/platform_page/section_1/box.svg"
      />

      <PlatformAudience/>
    </>
  );
}
