"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const AIIntakeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const intakeImages = [
    "/home_page/intake_images/img01.png",
    "/home_page/intake_images/img02.png",
    "/home_page/intake_images/img03.png",
    "/home_page/intake_images/img04.png",
    "/home_page/intake_images/img05.png",
    "/home_page/intake_images/img06.png",
    "/home_page/intake_images/img07.png",
    "/home_page/intake_images/img08.png",
  ];

  // Indexes to enlarge (0-based): img02,img03,img04,img06,img07,img08
  const enlargeIndices = [1, 2, 3, 5, 6, 7];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % intakeImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [intakeImages.length]);

  return (
    <div className="relative w-full py-6 md:py-9 lg:py-16 px-3 md:px-6 lg:px-12 overflow-hidden mb-12">
      {/* Images positioned absolutely to float above the background on desktop */}
        <div className="hidden lg:flex absolute inset-0 justify-center items-center pointer-events-none z-10">
        {/* Center - Sliding Images */}
        <div className="relative w-[300px] h-[560px]">
          {intakeImages.map((imageSrc, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center overflow-hidden ${
                index === currentIndex
                  ? "opacity-100 translate-x-0"
                  : index < currentIndex
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <Image
                src={imageSrc}
                alt={`Intake screen ${index + 1}`}
                width={300}
                height={560}
                className={
                  enlargeIndices.includes(index)
                    ? "w-[120%] h-[120%] object-center object-cover"
                    : index === 0 || index === 4
                    ? "w-[90%] h-[90%] object-center object-contain"
                    : "w-full h-full object-center object-cover"
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* Background with text sections */}
      <div className="relative z-0 w-full max-w-6xl mx-auto bg-[#F5EFE7] rounded-3xl px-5 md:px-10 lg:px-14 pt-3 pb-3 md:pt-5 md:pb-5 lg:pt-16 lg:pb-16 flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-100">
        
        {/* Left Section */}
        <div className="flex-1 space-y-6 md:space-y-9">
          {/* AI Intake */}
          <div className="space-y-2">
            <img
              src="/home_page/intake_images/ai.svg"
              alt="AI Intake Icon"
              className="w-7 h-7"
            />
            <h3 className="text-base md:text-lg font-bold text-gray-900">AI intake</h3>
            <p className="text-[11px] md:text-xs text-gray-700 leading-relaxed max-w-xs">
              Express yourself naturally - our interactive AI support understands what you are experiencing through an onboarding conversation, and creates a personalised pathway to support your journey.
            </p>
          </div>

          {/* Personalised User Journeys */}
          <div className="space-y-2">
            <img
              src="/home_page/intake_images/personal.svg"
              alt="Personalised User Journeys Icon"
              className="w-7 h-7"
            />
            <h3 className="text-base md:text-lg font-bold text-gray-900">Personalised user journeys</h3>
            <p className="text-[11px] md:text-xs text-gray-700 leading-relaxed max-w-xs">
              With 14 parameters and 55 distinct pathways, Cerina listens to personal scenarios and therapy preferences to build journeys that feel deeply personalised and genuinely resonate.
            </p>
          </div>
        </div>

        {/* Center - Sliding Images - visible on mobile, hidden on desktop */}
        <div className="md:hidden flex justify-center items-center py-6 px-4">
    <div className="relative w-[180px] h-[340px] max-w-full">
            {intakeImages.map((imageSrc, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center overflow-hidden ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <Image
                  src={imageSrc}
                  alt={`Intake screen ${index + 1}`}
                  width={180}
                  height={340}
                  className={
                    enlargeIndices.includes(index)
                      ? "w-[125%] h-[125%] object-center object-cover"
                      : index === 0 || index === 4
                      ? "w-[85%] h-[85%] object-center object-contain"
                      : "w-full h-full object-center object-cover"
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 space-y-6 md:space-y-9">
          {/* Customisable Integration */}
          <div className="space-y-2">
            <img
              src="/home_page/intake_images/custom.svg"
              alt="Customisable Integration Icon"
              className="w-7 h-7"
            />
            <h3 className="text-base md:text-lg font-bold text-gray-900">Customisable integration</h3>
            <p className="text-[11px] md:text-xs text-gray-700 leading-relaxed max-w-xs">
              Cerina co-designs an onboarding process that fits into your existing care pathways and organisational structure with minimal description
            </p>
          </div>

          {/* Voice AI */}
          <div className="space-y-2">
            <img
              src="/home_page/intake_images/voice.svg"
              alt="Voice AI Icon"
              className="w-7 h-7"
            />
            <h3 className="text-base md:text-lg font-bold text-gray-900">Voice AI (in beta)</h3>
            <p className="text-[11px] md:text-xs text-gray-700 leading-relaxed max-w-xs">
              A calm, natural voice interface that is reshaping how digital therapies are delivered, offering psychoeducation through interactive conversations and supporting emotional expression in a near-real-life experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIIntakeSection;