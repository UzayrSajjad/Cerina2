"use client";

import React from "react";

type Props = {
  title?: string;
  subtitle?: string;
  body?: string;
  ctaText?: string;
  imageSrc?: string;
};

export default function BusinessSolutionShowcase({
  title = "Lorem ipsum dolor sit ame",
  subtitle = "",
  body =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  ctaText = "Speak to Us",
  imageSrc = "/business_solution_page/ring_design.svg",
}: Props) {
  return (
    <section className="py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left content */}
          <div className="flex flex-col justify-center md:pr-8 lg:pr-12">
            {subtitle ? (
              <p className="text-sm text-neutral-500 mb-2" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)' }}>{subtitle}</p>
            ) : null}

            <h2
              className="font-medium text-[#121212] leading-tight mb-4"
              style={{
                fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto",
                fontSize: 'clamp(1.4rem, 3.5vw, 3rem)'
              }}
            >
              {title}
            </h2>

            <p className="text-neutral-600 mb-6" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.125rem)' }}>{body}</p>

            <div>
              <a
                href="#"
                className="inline-block px-6 py-3 rounded-[12px] bg-[#DDAC7C] border-2 border-[#DDAC7C] text-[#18161A] font-medium hover:bg-[#DDAC7C]/90 transition-colors duration-200"
                style={{ fontSize: 'clamp(0.8rem, 1vw, 0.98rem)' }}
              >
                {ctaText}
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[480px]">
              <img
                src={imageSrc}
                alt="decorative ring"
                className="w-full h-auto block"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
