"use client";

import ContactAudience from "@/components/features/client_side/contact/ContactAudience";
import ContactFaq from "@/components/features/client_side/contact/ContactFaq";
import HeroSection from "@/components/features/client_side/contact/hero_section";
import ContactForm from "@/components/features/client_side/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <section id="individual-hero">
        <HeroSection />
      </section>

      <ContactForm/>
      <ContactFaq />
      <ContactAudience />
    </>
  );
}
