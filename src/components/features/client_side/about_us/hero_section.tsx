"use client";

import AppDownloadButtons from "@/components/ui/AppDownloadButtons";
import { useState, useRef, useEffect } from "react";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const trackRef = useRef<HTMLDivElement>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
  };

  const sliderIcons = [
    "cyber.svg",
    "dcb.svg",
    "interreg.svg",
    "iso.svg",
    "medicine.svg",
    "medilink.svg",
    "nhs.svg",
    "orcha.svg",
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    const speed = 1; // pixels per frame, adjust for speed
    let animationId: number;

    const animate = () => {
      position -= speed;
      const halfWidth = track.scrollWidth / 2;
      if (position <= -halfWidth) {
        position += halfWidth; // instead of = 0, add halfWidth to continue seamlessly
      }
      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div className=" min-h-screen  ">
        {/* Hero Section */}
        <main className="relative ">
          {/* Background Image Container */}
          <div
            className="relative h-screen min-h-[600px] overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, #D7C7E2 0%, #FAE9D6 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(0deg, #FAF9F5, #FAF9F5)",
            }}
          >
            {/* Hero Image */}

            {/* Content Container */}
            <div className="relative z-10 flex items-center min-h-full">
              <div className="ml-4 md:ml-8 lg:ml-20 xl:ml-28 flex items-center gap-8 w-full max-w-7xl mx-auto">
                <div
                  className="flex-1 pt-5 pr-5 pb-5 md:pt-7 md:pr-7 md:pb-7 lg:pt-9 lg:pr-9 lg:pb-9 pl-0"
                  style={{
                    borderColor: "#D4D4D4",
                    maxWidth: "clamp(400px, 60vw, 634px)",
                    maxHeight: "348px",
                  }}
                >
                  {/* Mission Button */}
                  <div
                    className=""
                    style={{
                      width: "181.34px",
                      height: "40.11px",
                      borderRadius: "14.21px",
                      border: "0.71px solid #DDAC7C",
                      background: "linear-gradient(0deg, #EEE7DB, #EEE7DB), linear-gradient(132.82deg, rgba(255, 255, 255, 0.235) 14.64%, rgba(255, 255, 255, 0) 85.8%), radial-gradient(45.18% 45.18% at 37.65% 25.18%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)",
                      boxShadow: "9.9px 19.79px 28.01px 0px #DDAC7C66",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "clamp(16px, 3vw, 18.22px)",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#121212",
                      }}
                    >
                      Our mission
                    </span>
                  </div>

                  {/* Main Heading */}
                  <h1
                    className="mb-4 md:mb-6 font-semibold"
                    style={{
                      color: "#121212",
                      fontSize: "clamp(1.62rem, 8vw, 2.835rem)",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                  >
                    Transforming mental health support with technology{" "}
                  </h1>

                  {/* Subtitle */}
                  <p
                    className="text-[#121212] mb-6 md:mb-8 font-medium"
                    style={{
                      fontSize: "clamp(0.81rem, 3vw, 0.911rem)",
                      lineHeight: "clamp(1.5rem, 3vw, 1.6875rem)",
                      letterSpacing: "0%",
                    }}
                  >
                    Agile, evidence-based, and trusted by healthcare providers
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2 ">
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
                <div className=" flex-1 hidden lg:flex justify-center items-center">
                  <img
                    src="about_us_page/hero_image.svg"
                    alt="Hero Image"
                    className="w-100 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
