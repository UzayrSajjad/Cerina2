"use client";

import React, { useState, useEffect } from "react";

const Evidence: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 3500); // 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      description:
        "Relaxation techniques are very important to me, and I absolutely loved the breathwork. Being able to do that in my own time and my own space was amazing. You can say exactly how you feel to the AI, which is great. I can't wait to keep using it more and more.",
      author: "Lizzie",
    },
    {
      description:
        "The app has been transformative for my mental health journey. The AI-powered support feels personal and genuinely helpful, making it easy to engage with the content daily.",
      author: "Sarah",
    },
    {
      description:
        "I've tried many mental health apps, but this one stands out. The evidence-based approach combined with the accessibility makes it my go-to resource for managing stress and anxiety.",
      author: "Michael",
    },
  ];

  const evidenceData = [
    {
      mainText: "£120-£210",
      subtitle: "Net saving per user",
      description: "(for NHS expenditure)",
    },
    {
      mainText: "96%",
      subtitle: "ORCHA score",
      description: "(highest among the regulated mental health apps)",
    },
    {
      mainText: "16-20:1",
      subtitle: "ROI in primary care",
      description: "(talking therapies implementation)",
    },
    {
      mainText: "2",
      subtitle: "Peer-reviewed research",
      description: "publications",
    },
  ];

  return (
    <div
      className="bg-[#EEE7DB] overflow-hidden w-full max-w-[1242px] mx-auto"
      style={{
        borderRadius: "40px",
        padding: "30px 40px",
      }}
    >
      <div className="w-full max-w-[1240px] mx-auto px-4 py-16">
        {/* Heading */}
        <h2
          className="font-semibold text-[#121212] text-center mb-12"
          style={{
            fontSize: "clamp(2.025rem, 7.2vw, 2.875rem)",
            lineHeight: "100%",
            letterSpacing: "0px",
          }}
        >
          Our Evidence
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Side - Evidence Data */}
          <div className="flex-1 w-full max-w-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
              {/* Vertical Divider - Hidden on mobile, visible on sm+ */}
              <div
                className="hidden sm:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
                style={{
                  width: "1px",
                  height: "295.5px",
                  borderLeft: "1px solid #B5B5B5",
                }}
              />
              {/* Horizontal Divider - Between top and bottom rows */}
              <div
                className="hidden sm:block absolute left-0 right-0 top-1/2 -translate-y-1/2"
                style={{
                  height: "1px",
                  borderTop: "1px solid #B5B5B5",
                }}
              />
              {evidenceData.map((item, index) => (
                <div key={index} className="text-center relative z-10">
                  <p
                    className="font-semibold text-[#121212] mb-2"
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "clamp(2rem, 5vw, 2.875rem)",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                  >
                    {item.mainText}
                  </p>
                  <p
                    className="font-medium text-[#121212] mb-1"
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                      lineHeight: "31.99px",
                      letterSpacing: "0%",
                    }}
                  >
                    {item.subtitle}
                  </p>
                  <p
                    className="font-normal text-[#121212]"
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "clamp(0.875rem, 2vw, 1rem)",
                      lineHeight: "31.99px",
                      letterSpacing: "0%",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Testimonial Card Slider */}
          <div className="flex-1 w-full max-w-lg flex flex-col items-center">
            <div className="relative overflow-hidden w-full max-w-[355px] mb-6 rounded-[17.9px]">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full bg-white rounded-[17.9px] p-8"
                    style={{
                      minHeight: "395px",
                    }}
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          src="/home_page/star_icon.svg"
                          alt="star"
                          className="w-5 h-5"
                        />
                      ))}
                    </div>

                    {/* Description */}
                    <p
                      className="text-[#0C0407] mb-6"
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: "clamp(0.875rem, 1.8vw, 1rem)",
                        lineHeight: "24.17px",
                        letterSpacing: "0%",
                        fontWeight: 400,
                      }}
                    >
                      {testimonial.description}
                    </p>

                    {/* Author */}
                    <p
                      className="text-[#0C0407] font-bold"
                      style={{
                        fontFamily: "Inter",
                        fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                        lineHeight: "18.8px",
                        letterSpacing: "-0.13px",
                      }}
                    >
                      {testimonial.author}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Bullets */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className="cursor-pointer transition-all duration-300"
                >
                  <img
                    src={
                      index === activeSlide
                        ? "/home_page/filled_slider_icon.svg"
                        : "/home_page/hollo_slider_icon.svg"
                    }
                    alt="slider indicator"
                    className="w-3 h-3"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evidence;
