"use client";

import Image from "next/image";
import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alfie Johnson",
      role: "Sky Groups",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/individual_solution_page/section_7/profile.svg",
    },
    {
      name: "Alfie Johnson",
      role: "Sky Groups",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/individual_solution_page/section_7/profile.svg",
    },
    {
      name: "Alfie Johnson",
      role: "Sky Groups",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/individual_solution_page/section_7/profile.svg",
    },
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
          Testimonials
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12 justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-[16px] p-8 bg-[#EEE7DB] border border-[#7982BA] min-h-[305px]"
            >
              <div className="flex items-start mb-4">
                <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} className="mr-4" />
              </div>

              <div className="text-left">
                <h3
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: "clamp(16px, 2vw, 18px)",
                    lineHeight: "18.8px",
                    letterSpacing: "-0.13px",
                    color: "#0C0407",
                  }}
                >
                  {testimonial.name}
                </h3>

                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "clamp(12px, 1.5vw, 14px)",
                    lineHeight: "24.17px",
                    color: "#0C0407",
                    marginTop: "4px",
                  }}
                >
                  {testimonial.role}
                </p>

                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "clamp(14px, 1.8vw, 16px)",
                    lineHeight: "24.17px",
                    color: "#0C0407",
                    marginTop: "16px",
                  }}
                >
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}