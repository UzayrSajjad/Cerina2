"use client";

import Image from "next/image";
import React from "react";

export default function FeaturesForIndividuals() {
  const features = [
    { titleTop: "Chatbot", titleBottom: "support", image: "/individual_solution_page/section_3/chatbot.svg" },
    { titleTop: "Guided", titleBottom: "breathing", image: "/individual_solution_page/section_3/guided.svg" },
    { titleTop: "Wellbeing", titleBottom: "exercises", image: "/individual_solution_page/section_3/wellbeing.svg" },
    { titleTop: "Quick", titleBottom: "signposting", image: "/individual_solution_page/section_3/quick.svg" },
  ];

  return (
    <section className="pt-12 pb-0">
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
          Features for Individuals
        </h2>

        <p
          className="mx-auto mt-4 max-w-2xl"
          style={{
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "30px",
            color: "#121212",
          }}
        >
          The same platform trusted by NHS providers is also available directly to you
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {features.map((f) => (
            <div
              key={f.titleTop + f.titleBottom}
              className="flex items-center justify-start rounded-[10px] pl-3 pr-6 pt-0 pb-0 bg-[#EEE7DB] min-h-[161px]"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#DDAC7C] rounded-[8px] flex-shrink-0 mr-4">
                <Image src={f.image} alt={`${f.titleTop} ${f.titleBottom}`} width={40} height={40} />
              </div>

              <div className="text-left flex-1">
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    fontSize: "clamp(20px, 2.5vw, 29px)",
                    lineHeight: "100%",
                    color: "#121212",
                    whiteSpace: "pre-line",
                  }}
                >
                  {f.titleTop}
                  <br />
                  <span style={{ fontSize: "clamp(20px, 2.5vw, 29px)" }}>{f.titleBottom}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="-mt-8 flex justify-center">
          <Image src="/individual_solution_page/section_3/phone.svg" alt="phone" width={820} height={420} className="h-auto w-auto" />
        </div>
      </div>
    </section>
  );
}
