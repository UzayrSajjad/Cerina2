"use client";

import AwardsCertifications from "@/components/features/client_side/impact_evidence/AwardsCertifications";
import CaseStudies from "@/components/features/client_side/impact_evidence/CaseStudies";
import HeroSection from "@/components/features/client_side/impact_evidence/hero_section";
import ImpactAudience from "@/components/features/client_side/impact_evidence/ImpactAudience";
import ImpactCard from "@/components/features/client_side/impact_evidence/ImpactCard";
import TransparencySection from "@/components/features/client_side/impact_evidence/TransparencySection";
import TrustedProvidersSlider from "@/components/features/client_side/impact_evidence/TrustedProvidersSlider";
import SectionWithImage from "@/components/features/client_side/platforms/SectionWithImage";

export default function BusinessPageHeroSection() {
  return (
    <>
      <section id="individual-hero">
        <HeroSection />
      </section>

      <ImpactCard />

      <SectionWithImage
        title="Lorem ipsum dolor 
amet, consectetur"
        imageSrc="/impact_evidence_page/box.svg"
      />

      <CaseStudies />

      <AwardsCertifications />
      <TrustedProvidersSlider />

      <TransparencySection />

      <ImpactAudience/>
    </>
  );
}
