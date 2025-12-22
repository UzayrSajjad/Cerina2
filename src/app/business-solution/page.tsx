'use client';
"use client";

import HeroSection from "@/components/features/client_side/business_solutions/hero_section";
import HowItSupports from "@/components/features/client_side/business_solutions/HowItSupports";
import BusinessSolutionsGrid from "@/components/features/client_side/business_solutions/BusinessSolutionsGrid";
import BusinessSolutionShowcase from "@/components/features/client_side/business_solutions/BusinessSolutionShowcase";
import BusinessSolutionAudienceHero from "@/components/features/client_side/business_solutions/BusinessSolutionAudienceHero";

export default function BusinessPageHeroSection() {
  return (
    <>
      <section id="business-hero">
        <HeroSection />
      </section>

     
      <HowItSupports />

      <BusinessSolutionsGrid />
      <BusinessSolutionShowcase/>
       <BusinessSolutionAudienceHero />

    </>
  );
}