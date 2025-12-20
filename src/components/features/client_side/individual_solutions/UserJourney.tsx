"use client";

import Image from "next/image";
import React from "react";

export default function UserJourney() {
  const points = [
    "/individual_solution_page/section_5/point1.svg",
    "/individual_solution_page/section_5/point2.svg",
    "/individual_solution_page/section_5/point3.svg",
    "/individual_solution_page/section_5/point4.svg",
  ];

  return (
    <section className="py-12">
      <div className="max-w-[1240px] mx-auto px-4 text-center">
        <h2
          className="mx-auto"
          style={{
            fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto",
            fontWeight: 500,
            fontSize: "clamp(1.6rem, 2.5vw, 3.5rem)",
            lineHeight: "1.2",
            color: "#121212",
            textAlign: "center",
          }}
        >
          User Journey
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {points.map((point, index) => (
            <div key={index} className="flex justify-center">
              <Image src={point} alt={`Point ${index + 1}`} width={405} height={405} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}