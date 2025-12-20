"use client";

import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  imageSrc: string;
  description?: string;
  imagePosition?: 'left' | 'right';
};

export default function SectionWithImage({ title, imageSrc, description, imagePosition = 'right' }: Props) {
  return (
    <section className="py-12">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left content */}
          <div className={`flex flex-col justify-center ${imagePosition === 'left' ? 'md:order-2' : 'md:order-1'}`}>
            <h2
              style={{
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: "clamp(1.8rem, 4.5vw, 3.15rem)",
                lineHeight: "100%",
                color: "#121212",
                textAlign: "left",
              }}
            >
              {title}
            </h2>
            {description && (
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontSize: "clamp(0.9rem, 2vw, 18px)",
                  lineHeight: "25.2px",
                  color: "#121212",
                  marginTop: "16px",
                }}
              >
                {description}
              </p>
            )}
          </div>

          {/* Right image */}
          <div className={`flex ${imagePosition === 'left' ? 'justify-center md:justify-start' : 'justify-center md:justify-end'} ${imagePosition === 'left' ? 'md:order-1' : 'md:order-2'}`}>
            <Image src={imageSrc} alt={title} width={400} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
}