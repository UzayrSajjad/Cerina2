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
    'cyber.svg',
    'dcb.svg',
    'interreg.svg',
    'iso.svg',
    'medicine.svg',
    'medilink.svg',
    'nhs.svg',
    'orcha.svg'
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
          <div className="relative h-screen min-h-[600px] overflow-hidden" style={{ background: "linear-gradient(180deg, #D7C7E2 0%, #FAE9D6 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(0deg, #FAF9F5, #FAF9F5)" }}>
            {/* Hero Image */}
            
            {/* Content Container */}
            <div className="relative z-10 flex items-center min-h-full">
              <div className="ml-4 md:ml-8 lg:ml-20 xl:ml-28 flex items-center gap-8 w-full max-w-7xl mx-auto">
                <div
                  className="flex-1 pt-6 pr-6 pb-6 md:pt-8 md:pr-8 md:pb-8 lg:pt-10 lg:pr-10 lg:pb-10 max-w-[634px] pl-0"
                  style={{
                    borderColor: "#D4D4D4",
                   
                    maxHeight: "348px",
                  }}
                >
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
                Compliance you
                 <br/>
can trust
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
                   
                Built to meet NHS and enterprise standards for information governance
and data security.   </p>

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
                <div className=" hidden lg:flex justify-center items-center mt-30">
                  <img 
                  style={
                    {
                      maxWidth: "80%",
                      marginTop: "40px",
                    }
                  }
                    src="/compilance_page/hero_image.svg"
                    alt="Hero Image"                    className="max-w-[25%] "
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
