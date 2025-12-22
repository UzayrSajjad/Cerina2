"use client";

import Image from "next/image";
import React from "react";

export default function CaseStudies() {
  const studies = [
    { title: "Case Study 1", image: "/impact_evidence_page/section_3/img1.svg" },
    { title: "Case Study 2", image: "/impact_evidence_page/section_3/img2.svg" },
    { title: "Case Study 3", image: "/impact_evidence_page/section_3/img3.svg" },
  ];

  return (
    <section className="py-12">
      <div className="max-w-[1240px] mx-auto px-4 text-center">
        <h2
          className="mx-auto mb-8 "
          style={{
            fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto",
            fontWeight: 500,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: "1.2",
            color: "#121212",
            textAlign: "center",
          }}
        >
          Case Studies
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
          {studies.map((study, index) => (
            <div
              key={index}
              className="flex flex-col pt-4 pr-2 pb-2 pl-0 bg-[#EEE7DB] mx-auto"
              style={{ width: 'clamp(300px, 30vw, 359px)', borderRadius: 10 }}
            >
              <h3
                className="text-center mb-4 mt-3"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  fontSize: "clamp(1.2rem, 2.4vw, 1.5rem)",
                  color: "#121212",
                  textAlign: "center",
                }}
              >
                {study.title}
              </h3>
              <div className="flex-1 flex justify-center items-center p-2">
                <Image src={study.image} alt={study.title} width={340} height={290} className="object-contain" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[176px] h-[48px] px-[30px] py-[15px] rounded-[16px] bg-[#DDAC7C] border-2 border-[#DDAC7C] text-[#18161A] font-medium hover:bg-[#DDAC7C]/90 transition-colors duration-200 whitespace-nowrap text-center cursor-pointer"
            style={{
              fontSize: "clamp(0.74rem, 1.7vw, 0.85rem)",
              lineHeight: "clamp(0.74rem, 1.7vw, 0.85rem)",
              letterSpacing: "-0.136px",
            }}
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}