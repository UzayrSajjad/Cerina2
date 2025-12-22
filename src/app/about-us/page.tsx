'use client';

import AboutAudience from "@/components/features/client_side/about_us/AboutAudience";
import FeaturedOnBBC from "@/components/features/client_side/about_us/FeaturedOnBBC";
import HeroSection from "@/components/features/client_side/about_us/hero_section";
import OurTeamSection from "@/components/features/client_side/about_us/OurTeamSection";
import Testimonials from "@/components/features/client_side/about_us/Testimonials";
import AwardsCertifications from "@/components/features/client_side/impact_evidence/AwardsCertifications";
import SectionWithImage from "@/components/features/client_side/platforms/SectionWithImage";

export default function AboutUsPage() {
  return (
    <>
      <section id="business-hero">
        <HeroSection />
      </section>
    
    <FeaturedOnBBC/>
    <Testimonials/>
     <AwardsCertifications/>
    
<SectionWithImage
        title="Mission & Story"
        imageSrc="about_us_page/section_4/meeting.svg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    <OurTeamSection/>
      <AboutAudience/>
    </>
  );
}