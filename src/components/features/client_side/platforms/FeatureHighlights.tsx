"use client";

import Image from "next/image";
import React from "react";

export default function FeatureHighlights() {
  const points = [
    "/platform_page/section_7/point1.svg",
    "/platform_page/section_7/point2.svg",
    "/platform_page/section_7/point3.svg",
  ];

  return (
    <section className="py-12">
      <div className="max-w-[1240px] mx-auto px-4 text-center">
        <h2
          className="mx-auto max-w-2xl"
          style={{
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "clamp(2.5rem, 5vw, 2.5rem)",
            lineHeight: "100%",
            color: "#121212",
            textAlign: "center",
          }}
        >
          Short feature highlights beyond core modules
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {points.map((point, index) => (
            <div key={index} className="flex justify-center">
              <Image src={point} alt={`Point ${index + 1}`} width={300} height={300} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}