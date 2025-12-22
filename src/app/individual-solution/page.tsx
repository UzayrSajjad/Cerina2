"use client";

import HeroSection from "@/components/features/client_side/individual_solutions/hero_section";
import FeaturesForIndividuals from "@/components/features/client_side/individual_solutions/FeaturesForIndividuals";
import IndividualSolutionGrid from "@/components/features/client_side/individual_solutions/IndividualSolutionGrid";
import IndividualSolutionShowcase from "@/components/features/client_side/individual_solutions/IndividualSolutionShowcase";
import UserJourney from "@/components/features/client_side/individual_solutions/UserJourney";
import TrustedProviders from "@/components/features/client_side/individual_solutions/TrustedProviders";
import Testimonials from "@/components/features/client_side/individual_solutions/Testimonials";
import IndividualAudience from "@/components/features/client_side/individual_solutions/IndividualAudience";
export default function BusinessPageHeroSection() {
  return (
    <>
      <section id="individual-hero">
        <HeroSection />
      </section>
 

      <IndividualSolutionGrid />
       <FeaturesForIndividuals />
        <IndividualSolutionShowcase/>
        <UserJourney/>
        <TrustedProviders/>
        <Testimonials/>
        <IndividualAudience/>
    </>
  );
}