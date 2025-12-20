"use client";

import Image from "next/image";
import React from "react";

export default function ImpactCard() {
  return (
    <section className="py-12">
      <div className="max-w-[1242px] mx-auto px-4">
        <div
          className="bg-[#EEE7DB] p-7 md:p-5  flex flex-col justify-center items-center"
          style={{ minHeight: '464px', borderRadius: '36px' }}
        >
          <h2
            className="text-center mb-8 "
            style={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "clamp(1.8rem, 3.6vw, 36px)",
              lineHeight: "45.36px",
              color: "#121212",
              textAlign: "center",
            }}
          >
            Lorem Ipsum
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8 w-full">
            <div className="flex justify-center" style={{ width: 'clamp(200px, 25vw, 270px)' }}>
              <Image src="/impact_evidence_page/placeholder_image.svg" alt="Placeholder 1" width={270} height={180} className="w-full h-auto" />
            </div>
            <div className="flex justify-center" style={{ width: 'clamp(200px, 25vw, 270px)' }}>
              <Image src="/impact_evidence_page/placeholder_image.svg" alt="Placeholder 2" width={270} height={180} className="w-full h-auto" />
            </div>
            <div className="flex justify-center" style={{ width: 'clamp(200px, 25vw, 270px)' }}>
              <Image src="/impact_evidence_page/placeholder_image.svg" alt="Placeholder 3" width={270} height={180} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}