"use client";

export default function HeroSection() {

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <main className="relative">
          {/* Background Container */}
          <div
            className="relative h-screen min-h-[600px] overflow-hidden flex flex-col"
            style={{
              background:
                "linear-gradient(180deg, #D7C7E2 0%, #FAE9D6 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(0deg, #FAF9F5, #FAF9F5)",
            }}
          >
            {/* Content Container - Centered */}
            <div className="relative z-10 flex flex-col items-center justify-center lg:justify-end text-center flex-1 pb-4 px-4 pt-16 lg:pt-24">
              {/* Main Heading */}
              <h1
                className="-mb-4 md:mb-6 font-semibold max-w-[700px]"
                style={{
                  color: "#121212",
                  fontSize: "clamp(1.8rem, 5vw, 3rem)",
                  lineHeight: "120%",
                  letterSpacing: "0%",
                }}
              >
                Resources for your <br /> organisation
              </h1>

              {/* Subtitle */}
              <p
                className="text-[#121212] mb-6 md:mb-8 font-medium max-w-[500px]"
                style={{
                  fontSize: "clamp(0.9rem, 2vw, 1rem)",
                  lineHeight: "1.5",
                  letterSpacing: "0%",
                }}
              >
                Case studies, guides, and insights to support procurement <br /> and
                implementation
              </p>

              {/* Button */}
              <button
                type="button"
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

            {/* Hero Image - Full Width at Bottom */}
            <div className="w-full flex justify-center mt-auto">
              <img
                src="/resource_page/hero_image.svg"
                alt="Hero Image"
                className="w-full max-w-[1200px] h-auto object-contain"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
