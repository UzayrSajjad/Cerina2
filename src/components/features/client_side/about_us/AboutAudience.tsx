"use client";

import React from "react";

const avatars = ["/business_solution_page/people_group.svg"];

export default function AboutAudience() {
  return (
    <section className="py-12 bg-[#FBF7F3]">
      <div className="max-w-[1100px] mx-auto px-4 text-center">
        <h3
          className="mx-auto mb-8"
          style={{
            fontFamily:
              "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto",
            fontWeight: 500,
            fontSize: "clamp(1.05rem, 2.4vw, 1.6rem)",
            lineHeight: 1.2,
            color: "#121212",
            maxWidth: "980px",
          }}
        >
            Partner with Cerina to transform mental health support
        </h3>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-[880px] px-2">
            <img
              src="/business_solution_page/people_group.svg"
              alt="people group"
              className="w-full h-auto block mx-auto"
              style={{ display: "block" }}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="inline-block px-6 py-2 rounded-[12px] bg-[#DDAC7C] border-2 border-[#DDAC7C] text-[#18161A] font-medium hover:bg-[#DDAC7C]/90 transition-colors duration-200"
            style={{
              fontSize: "clamp(0.8rem, 1vw, 1rem)",
              fontFamily: "Montserrat, system-ui",
            }}
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
