"use client";
import Guides from "@/components/features/client_side/resource/Guides";
import HeroSection from "@/components/features/client_side/resource/hero_section";
import OurBlog from "@/components/features/client_side/resource/OurBlog";
import ResourceAudience from "@/components/features/client_side/resource/ResourceAudience";
import ResourceCaseStudies from "@/components/features/client_side/resource/ResourceCaseStudies";

export default function ResourcePage() {
  return (
    <>
      <section id="individual-hero">
        <HeroSection />
      </section>

      <ResourceCaseStudies/>

      <Guides/>

      <OurBlog/>

      <ResourceAudience/>
 
    </>
  );
}
 