"use client";

import AppDownloadButtons from "@/components/ui/AppDownloadButtons";
import React from "react";

const avatars = [
  "/business_solution_page/people_group.svg",
];

export default function IndividualAudience() {
  return (
    <section className="py-12 bg-[#FBF7F3]">
      <div className="max-w-[1100px] mx-auto px-4 text-center">
        <h3
          className="mx-auto mb-8"
          style={{
            fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto",
            fontWeight: 500,
            fontSize: 'clamp(1.05rem, 2.4vw, 1.6rem)',
            lineHeight: 1.2,
            color: '#121212',
            maxWidth: '980px'
          }}
        >
         Start your wellbeing journey today
        </h3>

        <div className="w-full flex justify-center mb-8">
          <div className="w-full max-w-[880px] px-2">
            <img
              src="/business_solution_page/people_group.svg"
              alt="people group"
              className="w-full h-auto block mx-auto"
              style={{ display: 'block' }}
            />
          </div>
        </div>

       <AppDownloadButtons/>
      </div>
    </section>
  );
}
