"use client";

import Image from "next/image";
import React from "react";

export default function Procurement() {
  const studies = [
    { title: "Tech Overview", image: "/impact_evidence_page/section_3/img1.svg" },
    { title: "IG Checklist", image: "/impact_evidence_page/section_3/img2.svg" },
    { title: "DPIA Template", image: "/impact_evidence_page/section_3/img3.svg" },
    { title: "Lorem ipsum", image: "/impact_evidence_page/section_3/img3.svg" },
    
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
         Everything you need for procurement
in one place
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 justify-items-center">
          {studies.map((study, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center pt-4 pb-2 pl-0 bg-[#EEE7DB] w-full"
              style={{ borderRadius: 10 }}
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
              <div className="flex justify-center items-center p-2">
                <Image src={study.image} alt={study.title} width={340} height={0} className="object-contain" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-[35px] py-[18px] rounded-[16px] border-2 border-[#DDAC7C] text-[#18161A] font-medium hover:bg-[#DDAC7C]/30 transition-colors duration-200 whitespace-nowrap text-center cursor-pointer"
            style={{
              width: "clamp(176px, 20vw, 292px)",
              height: "56px",
              background: "#DDAC7C33",
              fontSize: "clamp(0.74rem, 1.7vw, 0.85rem)",
              lineHeight: "clamp(0.74rem, 1.7vw, 0.85rem)",
              letterSpacing: "-0.136px",
              opacity: 1,
            }}
          >
           Download Buyer Pack
          </button>
        </div>
      </div>
    </section>
  );
}