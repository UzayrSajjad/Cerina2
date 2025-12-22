"use client";

import Image from "next/image";
import React from "react";

export default function TrustedProviders() {
  return (
    <section className="py-12">
      <div className="max-w-[1240px] mx-auto px-4 text-center">
        <h2
          className="mx-auto"
          style={{
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "clamp(1.4rem, 2.5vw, 2.125rem)",
            lineHeight: "100%",
            color: "#121212",
            textAlign: "center",
          }}
        >
          Trusted by leading healthcare providers
        </h2>

        <div className="mt-10 flex justify-center">
          <Image src="/individual_solution_page/section_6/companies.svg" alt="Trusted companies" width={1000} height={500} />
        </div>
      </div>
    </section>
  );
}