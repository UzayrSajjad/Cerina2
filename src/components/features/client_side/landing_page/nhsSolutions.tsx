"use client";

import React, { useMemo, useState, useRef, useEffect } from "react";

function formatNumber(n: number) {
  return new Intl.NumberFormat("en-GB").format(n);
}

export default function NhsSolutions() {
  const [activeTab, setActiveTab] = useState<"nhs" | "business">("nhs");
  const [value, setValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Map slider (0-100) to a headline number (0 - 995000)
  const headlineNumber = useMemo(() => Math.round((value / 100) * 995000), [value]);

  // Derived stats (different formulas for NHS and business)
  const statEstimated = useMemo(() => {
    const multiplier = activeTab === "business" ? 0.2 : 0.1667;
    return Math.round(headlineNumber * multiplier);
  }, [headlineNumber, activeTab]);
  const statSaving = useMemo(() => {
    const multiplier = activeTab === "business" ? 5 : 4.3;
    return Math.round(headlineNumber * multiplier);
  }, [headlineNumber, activeTab]);
  const statROI = useMemo(() => {
    const multiplier = activeTab === "business" ? 2000 : 1690;
    return Math.round(headlineNumber * multiplier);
  }, [headlineNumber, activeTab]);

  // Slider background gradient for filled track
  const sliderBackground = `linear-gradient(90deg, #111 0%, #111 ${value}%, #ffffff ${value}%, #ffffff 100%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      if (isDragging && sliderRef.current) {
        setHasDragged(true);
        const rect = sliderRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.min(Math.max(x / rect.width, 0), 1);
        setValue(percentage * 100);
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (!hasDragged && sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.min(Math.max(x / rect.width, 0), 1);
        setValue(percentage * 100);
      }
      setIsDragging(false);
      setHasDragged(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, hasDragged]);

  return (
    <section className="w-full bg-[#D9C28F]/72 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-4 relative">
        {/* Top Toggle */}
        <div className="flex justify-end mb-4 block md:hidden">
          <div className="group relative">
            <button
              aria-label="More information about estimates"
              aria-describedby="nhs-estimates-tooltip-small"
              className="w-10 h-10 rounded-full bg-white/60 border border-white flex items-center justify-center focus:outline-none"
            >
              <img src="/home_page/info.svg" alt="info" className="w-5 h-5" />
            </button>

            <div
              id="nhs-estimates-tooltip-small"
              role="status"
              className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-4 min-w-[200px] sm:min-w-[270px]"
            >
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-opacity duration-150 flex items-center justify-center bg-black text-white rounded-md pl-1 pr-0 py-2 shadow-lg">
                <div className="font-normal" style={{fontSize: "clamp(10px, 1.5vw, 11.38px)", lineHeight: "100%", letterSpacing: "0px", verticalAlign: "middle", color: "#FFFFFF"}}>Estimates based on leading industry and academic data from Deloitte, Health and Safety Executive and peer reviewed studies.</div>
                <div
                  aria-hidden
                  className="w-0 h-0 border-[8px] border-transparent border-l-black"
                  style={{ marginRight: "-6px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-1 bg-white/50 rounded-full p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("nhs")}
              className={`px-4 py-2 rounded-full transition font-medium cursor-pointer ${
                activeTab === "nhs"
                  ? "bg-[#DDC7A3] text-[#111] shadow-inner"
                  : "text-[#6b6b6b] bg-white/0"
              }`}
              style={{fontSize: "clamp(0.875rem, 2vw, 1rem)"}}
            >
              NHS solutions
            </button>

            <button
              onClick={() => setActiveTab("business")}
              className={`px-3 py-1.5 rounded-full transition font-medium cursor-pointer ${
                activeTab === "business"
                  ? "bg-[#DDC7A3] text-[#111] shadow-inner"
                  : "text-[#6b6b6b] bg-white/0"
              }`}
              style={{fontSize: "clamp(0.875rem, 2vw, 1rem)"}}
            >
              Business solutions
            </button>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-6">
          <h3 className="font-medium text-[#111] mb-3" style={{fontSize: "clamp(1.5rem, 4vw, 2.5rem)", lineHeight: "1.26", letterSpacing: "-0.96px", textAlign: "center"}}>
            How much can Cerina save your organisation?
          </h3>

          <div className="font-medium text-[#121212] mb-1" style={{fontSize: "clamp(2.5rem, 6vw, 3rem)", lineHeight: "1.26", textAlign: "center"}}>
            {formatNumber(headlineNumber)}
          </div>

          <p className="font-normal text-[#2b2b2b]" style={{fontSize: "clamp(1rem, 3vw, 1.5rem)", lineHeight: "1.26", letterSpacing: "-0.96px", textAlign: "center"}}>{activeTab === "business" ? "Number of employees" : "Number of patients"}</p>
        </div>

        {/* Slider */}
        <div className="my-8">
          <div className="w-full px-4">
            <div className="relative flex items-center" ref={sliderRef} onMouseDown={() => {
              setIsDragging(true);
              setHasDragged(false);
            }}>
              <input
                aria-label={activeTab === "business" ? "employees slider" : "patients slider"}
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                style={{
                  WebkitAppearance: "none",
                  appearance: "none",
                  width: "100%",
                  height: "12px",
                  borderRadius: 9999,
                  background: sliderBackground,
                }}
                className="range-none pointer-events-none"
              />

              {/* Thumb indicator - positioned absolutely to match current value */}
              <div
                aria-hidden
                style={{ left: `calc(${value}% - 16px)` }}
                className="absolute top-1/2 -translate-y-1/2 w-8 h-8"
              >
                <img src="/home_page/slider.svg" alt="slider" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center">
          <div>
            <div className="font-medium text-[#121212] mb-2" style={{fontSize: "clamp(1.5rem, 4vw, 3rem)", lineHeight: "50.4px", textAlign: "center"}}>
              {formatNumber(statEstimated)}
            </div>
            <div className="font-normal text-[#2b2b2b]" style={{fontSize: "clamp(1rem, 2.5vw, 1.125rem)", lineHeight: "100%", letterSpacing: "0px", textAlign: "center", verticalAlign: "middle"}}>{activeTab === "business" ? "Estimated number of employees affected" : "Estimated number of patients affected"}</div>
          </div>

          <div>
            <div className="font-medium text-[#121212] mb-2" style={{fontSize: "clamp(1.5rem, 4vw, 3rem)", lineHeight: "50.4px", textAlign: "center"}}>
              {new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(statSaving)}
            </div>
            <div className="font-normal text-[#2b2b2b]" style={{fontSize: "clamp(1rem, 2.5vw, 1.125rem)", lineHeight: "100%", letterSpacing: "0px", textAlign: "center", verticalAlign: "middle"}}>Annualised cost saving (GBP)</div>
          </div>

          <div>
            <div className="font-medium text-[#121212] mb-2" style={{fontSize: "clamp(1.5rem, 4vw, 3rem)", lineHeight: "50.4px", textAlign: "center"}}>
              {Intl.NumberFormat("en-GB", { notation: "compact", maximumFractionDigits: 1 }).format(statROI)}
            </div>
            <div className="font-normal text-[#2b2b2b]" style={{fontSize: "clamp(1rem, 2.5vw, 1.125rem)", lineHeight: "100%", letterSpacing: "0px", textAlign: "center", verticalAlign: "middle"}}>Estimated ROI (indicative)</div>
          </div>
        </div>

        {/* small info button top-right with hover tooltip */}
        <div className="absolute right-4 top-4 hidden md:flex">
          <div className="group relative">
            <button
              aria-label="More information about estimates"
              aria-describedby="nhs-estimates-tooltip"
              className="w-10 h-10 rounded-full bg-white/60 border border-white flex items-center justify-center focus:outline-none"
            >
              <img src="/home_page/info.svg" alt="info" className="w-5 h-5" />
            </button>

            <div
              id="nhs-estimates-tooltip"
              role="status"
              className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-4 min-w-[200px] sm:min-w-[270px]"
            >
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-opacity duration-150 flex items-center justify-center bg-black text-white rounded-md pl-1 pr-0 py-2 shadow-lg">
                <div className="font-normal" style={{fontSize: "clamp(10px, 1.5vw, 11.38px)", lineHeight: "100%", letterSpacing: "0px", verticalAlign: "middle", color: "#FFFFFF"}}>Estimates based on leading industry and academic data from Deloitte, Health and Safety Executive and peer reviewed studies.</div>
                <div
                  aria-hidden
                  className="w-0 h-0 border-[8px] border-transparent border-l-black"
                  style={{ marginRight: "-6px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
