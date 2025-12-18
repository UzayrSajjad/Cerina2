import React from "react";

const PromessePrinciples = () => {
  const principles = [
    {
      title: "Simplicity",
      subtitle: "One clean dashboard instead of six open tabs.",
    },
    {
      title: "Personalisation",
      subtitle:
        "Timelines, budgets, and moodboards shaped to your style—never a cookie-cutter template.",
    },
    {
      title: "Collaboration",
      subtitle:
        "Real-time sync so partners, family, and vendors stay on the same page—literally.",
    },
  ];

  return (
    <>
      <div className="min-h-full bg-gradient-to-br from-[#B7CEED] via-[#C8D4F0] to-[#DDB9DF] py-10 px-4 overflow-hidden">
        <div className="relative mx-auto max-w-[1240px] overflow-hidden">
          <div className="flex flex-col lg:flex-row-reverse 2xl:flex-row gap-12 2xl:gap-16 items-center 2xl:items-start justify-between">
            {/* Right side - Logo & Callout*/}
            <div className="min-h-full relative w-full max-w-[550px] flex flex-col items-center 2xl:items-end">
              <img
                src="/main/p_remisses_logo.svg"
                alt="Promesse Logo"
                className="lg:ml-10 w-full max-w-[340px] sm:max-w-[400px] md:max-w-[434px] 2xl:max-w-[480px]"
              />

              {/* Callout Card */}
              <div
                className="
                  w-[90%] sm:w-[469px] h-[77px]
                  bg-white/40 backdrop-blur-[16px] rounded-xl
                  shadow-[1px_2px_4px_#00000033,3px_7px_8px_#0000002B,6px_17px_11px_#0000001A,11px_30px_13px_#00000008,17px_46px_14px_#00000000]
                  p-4 sm:p-6 flex items-center justify-center
                  -mt-10 sm:-mt-12 2xl:mt-0
                  2xl:absolute 2xl:top-75 2xl:left-13
                  lg:absolute lg:top-75 lg:-left-10
                  md:absolute md:top-75 md:-left-10
                "
              >
                <p
                  className="text-fuchsia-950 font-normal text-left 2xl:text-left font-[Geist]"
                  style={{
                    fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
                    lineHeight: "clamp(1.25rem, 3vw, 1.5rem)",
                  }}
                >
                  Join our waitlist and get free access to new features before
                  everyone gets it
                </p>
              </div>
            </div>

            {/* Left side - Content */}
            <div className="flex-1 w-full order-2 2xl:order-1 mt-12 2xl:mt-0 px-2 sm:px-4">
              <p
                className="text-[#262626] font-medium mb-4"
                style={{
                  fontSize: "clamp(0.9rem, 2vw, 1rem)",
                  lineHeight: "clamp(1.4, 2vw, 1.5)",
                }}
              >
                What drives us
              </p>

              <h1
                className="text-[#262626] font-semibold leading-tight mb-8 2xl:mb-12"
                style={{
                  fontSize: "clamp(1.75rem, 5vw, 3rem)",
                }}
              >
                The Promesse Principles.
              </h1>

              <div className="space-y-4 mb-8">
                {principles.map((principle, index) => (
                  <div
                    key={index}
                    className="w-full lg:max-w-[516px] px-4 sm:px-6 py-4 bg-white/20 rounded-xl shadow-sm hover:shadow-[0px_4px_6px_-2px_#0000000D,0px_10px_15px_-3px_#0000001A] hover:border-[0.5px] hover:border-[#4A044E] hover:scale-[1.01] will-change-transform transition-all duration-200"
                  >
                    <h3
                      className="text-[#262626] font-medium mb-2"
                      style={{
                        fontSize: "clamp(1.1rem, 4vw, 1.5rem)",
                        lineHeight: "clamp(1.3, 3vw, 1.4)",
                      }}
                    >
                      {principle.title}
                    </h3>
                    <p
                      className="text-[#525252] font-normal"
                      style={{
                        fontSize: "clamp(0.85rem, 2.5vw, 0.9rem)",
                        lineHeight: "clamp(1.3, 2.5vw, 1.4)",
                      }}
                    >
                      {principle.subtitle}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className="text-[#262626] font-normal max-w-[616px] font-[Geist]"
                style={{
                  fontSize: "clamp(0.9rem, 3vw, 1rem)",
                  lineHeight: "clamp(1.4, 3vw, 1.5)",
                }}
              >
                These three principles power every tool we've built. Ready to
                see them in action? Scroll down to explore each feature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromessePrinciples;
