"use client";

import React from "react";
import Image from "next/image";

interface TestimonialData {
  id: number;
  name: string;
  role: string;
  description: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: TestimonialData;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg border border-gray-300 overflow-visible">
      <div className="flex gap-0">
        {/* Left side - Image (extends above card, touches bottom) */}
        <div className="relative flex-shrink-0 w-48 md:w-40 lg:w-32 ml-4 md:ml-3 lg:ml-2">
          <div 
            className="rounded-l-lg overflow-hidden bg-gray-200 h-64 md:h-52 lg:h-40 -mt-8 md:-mt-6 lg:-mt-4"
          >
            <Image
              src="/about_us_page/section_3/profile.svg"
              alt="Profile"
              width={192}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 p-4 flex flex-col justify-center space-y-3">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/about_us_page/section_3/rating_star.svg"
                  alt="Star"
                  width={16}
                  height={16}
                />
              ))}
            </div>
            <span
              style={{
                fontFamily: "Manrope",
                fontWeight: 400,
                fontSize: "clamp(8px, 1.5vw, 10px)",
                lineHeight: "clamp(9px, 1.5vw, 11px)",
                color: "#1B0C25",
              }}
            >
              {testimonial.rating} rating
            </span>
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "clamp(9px, 2vw, 11.5px)",
              lineHeight: "clamp(13px, 2.5vw, 16px)",
              color: "#1B0C25",
            }}
          >
            {testimonial.description}
          </p>

          {/* Author Name */}
          <p
            style={{
              fontFamily: "Montserrat",
              fontWeight: 700,
              fontSize: "clamp(10px, 2.5vw, 13px)", 
              lineHeight: "clamp(13px, 2.5vw, 16px)",
              color: "#1B0C25", 
              marginTop: "0px",
            }}
          >
            {testimonial.name}
          </p>

          {/* Role */}
          <p
            style={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "clamp(8px, 1.5vw, 10px)", 
              lineHeight: "clamp(12px, 2vw, 16px)",
              color: "#1B0C25",
              marginTop: "-10px",
            }}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
};

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Mark Tudor",
    role: "Spencers",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    rating: 5.0,
  },
  {
    id: 2,
    name: "Mark Tudor",
    role: "Spencers",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    rating: 5.0,
  },
  {
    id: 3,
    name: "Mark Tudor",
    role: "Spencers",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    rating: 5.0,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        <h2
          className="text-center mb-16"
          style={{
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "clamp(1.278rem, 2.555vw, 2.128rem)",
            lineHeight: "1.2",
            color: "#121212",
          }}
        >
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}