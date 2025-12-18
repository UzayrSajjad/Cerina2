"use client";

export default function WhyWeBuilt() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-[#B7CEED] via-[#C8D4F0] to-[#DDB9DF] overflow-hidden px-4 py-10 lg:gap-8 gap-12">
        {/* SVG Container */}
        <div className="w-[220px] md:w-[320px] lg:w-[500px] xl:w-[560px]">
          <img
            src="/landing_page/group.svg"
            alt="Decorative SVG"
            className="w-full object-contain opacity-80"
          />
        </div>

        {/* Content Container */}
        <div className="max-w-2xl text-center lg:text-left px-4">
          {/* Label */}
          <p
            className="text-[#525252] font-[Geist] font-medium mb-4"
            style={{
              fontSize: "clamp(0.875rem, 2vw, 1rem)",
              lineHeight: "clamp(1.25rem, 2.5vw, 1.5rem)",
              letterSpacing: "0",
            }}
          >
            Planning Made Personal
          </p>

          {/* Heading */}
          <h2
            className="mb-6 font-semibold text-[#262626] font-[Geist] tracking-normal"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: "clamp(2.5rem, 5vw, 3rem)",
            }}
          >
            Why We Built Promesse.
          </h2>

          {/* Description */}
          <p
            className="text-[#262626] font-[Geist] font-normal max-w-lg mx-auto lg:mx-0"
            style={{
              fontSize: "clamp(0.875rem, 2vw, 1rem)",
              lineHeight: "clamp(1.25rem, 2.5vw, 1.5rem)",
              letterSpacing: "0",
            }}
          >
            We started Promesse after watching friends drown in spreadsheets,
            email chains, and late-night "What did we forget?" panic. Our
            mission is simple: give every couple an intuitive space where
            planning feels as exciting as the day itself.
          </p>
        </div>
      </div>
    </>
  );
}
