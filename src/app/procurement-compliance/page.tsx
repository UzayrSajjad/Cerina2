"use client";

import BusinessSolutionShowcase from "@/components/features/client_side/business_solutions/BusinessSolutionShowcase";
import AwardsCertifications from "@/components/features/client_side/impact_evidence/AwardsCertifications";
import HeroSection from "@/components/features/client_side/procurement_compliance/hero_section";
import Procurement from "@/components/features/client_side/procurement_compliance/Procurement";
import ProcurementAudience from "@/components/features/client_side/procurement_compliance/ProcurementAudience";
import SafeDeploymentFaq from "@/components/features/client_side/procurement_compliance/SafeDeploymentFaq";

export default function ProcurementComplianceHome() {
  return (
    <>
      <section id="individual-hero">
        <HeroSection />
      </section>

      <BusinessSolutionShowcase/>

      <AwardsCertifications/>

      <SafeDeploymentFaq/>

      <Procurement/>

      <ProcurementAudience/>
 
 
    </>
  );
}