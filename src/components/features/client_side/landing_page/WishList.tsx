import React from "react";

function WishList() {
  return (
    <>
      <div className="relative space-y-15 mx-auto max-w-[1240px] lg:overflow-visible">
        <div className="flex flex-col md:flex-row items-center justify-between w-full bg-[#E6DAF1]/60 backdrop-blur-lg rounded-2xl py-8 px-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]">
          {/* Heading */}
          <h2
            className="font-[Geist] font-semibold text-[#262626] tracking-normal text-center md:text-left mb-6 md:mb-0 md:max-w-[50%]"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)", // 28px–48px
              lineHeight: "clamp(1.1, 3vw, 1.2)",
            }}
          >
            Ready to start planning <br className="hidden sm:block" />
            your special day?
          </h2>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row md:flex-row w-full md:w-auto gap-3 items-stretch">
            <input
              type="email"
              placeholder="Join our waitlist"
              className="w-full sm:w-[320px] h-[40px] px-3 py-2 rounded-md border border-transparent 
              text-[#71717A] font-normal bg-white outline-none focus:border-[#4A044E] transition"
              style={{
                fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                lineHeight: "clamp(1rem, 2.5vw, 1.25rem)",
              }}
            />

            <button
              className="w-full sm:w-[181px] h-[40px] px-4 py-2 rounded-md 
              bg-[#4A044E] text-[#FAFAFA] font-medium font-[Geist] hover:bg-[#3a033f] transition cursor-pointer"
              style={{
                fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                lineHeight: "clamp(1rem, 2.5vw, 1.25rem)",
              }}
            >
              Join our waitlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishList;
