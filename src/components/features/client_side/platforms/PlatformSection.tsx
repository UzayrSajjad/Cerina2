"use client";

import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  bullets: string[];
  imagePosition?: 'left' | 'right';
};

export default function PlatformSection({ title, bullets, imagePosition = 'left' }: Props) {
  return (
    <section className="py-12">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left image */}
          <div className={`flex ${imagePosition === 'left' ? 'justify-center md:justify-start' : 'justify-center md:justify-end'} ${imagePosition === 'left' ? 'md:order-1' : 'md:order-2'}`}>
            <Image 
              src="/platform_page/section_2/phone.svg" 
              alt="Phone" 
              width={400} 
              height={600} 
              style={{ width: 'clamp(250px, 40vw, 400px)', height: 'auto' }}
            />
          </div>

          {/* Right content */}
          <div className={`flex flex-col justify-center ${imagePosition === 'left' ? 'md:order-2' : 'md:order-1'}`}>
            <h2
              style={{
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: "100%",
                color: "#121212",
                textAlign: "left",
                marginBottom: "24px",
              }}
            >
              {title}
            </h2>

            <ul className="space-y-4 mb-8">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-center">
                  <Image src="/platform_page/section_2/bullet.svg" alt="Bullet" width={54} height={24} className="mr-4" />
                  <span
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: 500,
                      fontSize: "clamp(1.2rem, 2.4vw, 24px)",
                      lineHeight: "26px",
                      color: "#121212",
                    }}
                  >
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-2">
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
        </div>
      </div>
    </section>
  );
}