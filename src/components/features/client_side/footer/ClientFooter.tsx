"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [selectedVideo, setSelectedVideo] = useState<{
    videoUrl: string;
    name: string;
    role: string;
  } | null>(null);

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const videos = [
    {
      name: "Casey Lebron",
      role: "PATIENT",
      videoUrl: "https://www.youtube.com/embed/pIwfRuNw5tE",
      thumbnailUrl: "https://img.youtube.com/vi/pIwfRuNw5tE/maxresdefault.jpg",
    },
    {
      name: "Katie Foden",
      role: "JOONAS",
      videoUrl: "https://www.youtube.com/embed/2sUWlhWH_kc",
      thumbnailUrl: "https://img.youtube.com/vi/2sUWlhWH_kc/maxresdefault.jpg",
    },
  ];
  return (
    <footer className="w-full bg-[#FBF9F6] border-t border-[#EFEFEF] py-12">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Hero + Cards (span 6) */}
          <div className="lg:col-span-5">
            <h3
              className="font-medium text-black align-middle tracking-normal mb-4"
              style={{
                fontFamily: "Montserrat",
                lineHeight: "48px",
                fontSize: "clamp(24px, 2.25vw, 36px)",
              }}
            >
              Explore how Cerina adapts to your pathway
            </h3>

            <div className="mb-6">
              <Link
                href="/waitlist"
                className="inline-block bg-[#1A140E] text-white border-2 border-[#1A140E] rounded-[16px] px-[32px] py-[16px] font-medium leading-[18px] tracking-[-0.16px] text-center hover:opacity-100 cursor-pointer"
                style={{
                  width: "186px",
                  height: "50px",
                  opacity: 1,
                  fontFamily: "Montserrat",
                  fontSize: "clamp(13px, 1vw, 16px)",
                }}
              >
                Book a Demo
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-6">
              <div
                className="bg-[#ECEFF3]/70 rounded-[15px] p-4 shadow-sm border border-[#F1F1F3] flex flex-col justify-between cursor-pointer"
                style={{ width: "217px", height: "172px" }}
                onClick={() => setSelectedVideo(videos[0])}
              >
                <div className="mb-2 flex justify-between items-center">
                  <span
                    className="text-[18px] font-medium text-[#121212] leading-[17px] tracking-normal align-middle"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    BBC Spotlight
                  </span>
                  <img
                    src="/home_page/footer_video.svg"
                    alt="video icon"
                    className="w-3.5 h-3.5"
                  />
                </div>
                <p
                  className="text-[13px] font-normal text-[#121212] leading-[17px] tracking-normal"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Discover how Cerina is transforming access to mental health
                  care, as featured on BBC Spotlight.
                </p>
              </div>

              <div
                className="bg-[#ECEFF3]/70 rounded-[15px] p-4 shadow-sm border border-[#F1F1F3] flex flex-col justify-between cursor-pointer"
                style={{ width: "217px", height: "172px" }}
                onClick={() => setSelectedVideo(videos[1])}
              >
                <div className="mb-2 flex justify-between items-center">
                  <span
                    className="text-[18px] font-medium text-[#121212] leading-[17px] tracking-normal align-middle"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Quick demo
                  </span>
                  <img
                    src="/home_page/footer_video.svg"
                    alt="video icon"
                    className="w-3.5 h-3.5"
                  />
                </div>
                <p
                  className="text-[13px] font-normal text-[#121212] leading-[17px] tracking-normal"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Take a 2-minute tour of Cerina’s platform and see how easily
                  it adapts to your service pathway.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Links columns (span 6) */}
          <div className="lg:col-span-7 lg:ml-10 flex flex-col justify-start">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-30">
              <div>
                <h4
                  className="font-semibold text-black align-middle tracking-normal mb-3"
                  style={{
                    fontFamily: "Montserrat",
                    lineHeight: "25px",
                    fontSize: "clamp(14.4px, 1.2375vw, 19.8px)",
                  }}
                >
                  Company
                </h4>
                <ul
                  className="space-y-2 text-[16px] font-medium text-black leading-[18px] tracking-normal align-middle"
                  style={{ fontFamily: "Montserrat" }}
                >
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/how-it-works">How it Works</Link>
                  </li>
                  <li>
                    <Link href="/business-solution">Business Solutions</Link>
                  </li>
                  <li>
                    <Link href="/individual-solution">Individual Solutions</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4
                  className="font-semibold text-black align-middle tracking-normal mb-3"
                  style={{
                    fontFamily: "Montserrat",
                    lineHeight: "25px",
                    fontSize: "clamp(14.4px, 1.2375vw, 19.8px)",
                  }}
                >
                  Resources
                </h4>
                <ul
                  className="space-y-2 text-[16px] font-medium text-black leading-[18px] tracking-normal align-middle"
                  style={{ fontFamily: "Montserrat" }}
                >
                  <li>
                    <Link href="/case-studies">Case Studies</Link>
                  </li>
                  <li>
                    <Link href="/resource">Research</Link>
                  </li>
                  <li>
                    <Link href="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link href="/testimonials">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4
                  className="font-semibold text-black align-middle tracking-normal mb-3"
                  style={{
                    fontFamily: "Montserrat",
                    lineHeight: "25px",
                    fontSize: "clamp(14.4px, 1.2375vw, 19.8px)",
                  }}
                >
                  Policies
                </h4>
                <ul
                  className="space-y-2 text-[16px] font-medium text-black leading-[18px] tracking-normal align-middle"
                  style={{ fontFamily: "Montserrat" }}
                >
                  <li>
                    <Link href="/privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/cookie">Cookie Policy</Link>
                  </li>
                  <li>
                    <Link href="/risk">Risk Management</Link>
                  </li>
                  <li>
                    <Link
                      href="/accessibility"
                    >
                      Accessibility Management
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social & badges row */}
            <div className="flex items-center justify-between gap-4 mt-8 flex-wrap">
              <div className="flex items-center gap-3">
                <img
                  src="/home_page/footer_social_icons.svg"
                  alt="social icons"
                  className="w-full max-w-[605px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mt-8">
          <span className="text-sm text-gray-600 text-center sm:text-left">NoSuffering Ltd. Copyright 2024. All rights reserved.</span>
          <div className="flex items-center justify-center sm:justify-end gap-3">
            <img
              src="/home_page/footer_instagram.svg"
              alt="Instagram"
              className="h-5 w-5"
            />
            <img
              src="/home_page/footer_linkedin.svg"
              alt="Linkedin"
              className="h-5 w-5"
            />
            <img
              src="/home_page/footer_youtube.svg"
              alt="YouTube"
              className="h-5 w-5"
            />
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
            onClick={handleBackdropClick}
          >
            <div className="relative w-full max-w-4xl">
              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-gray-200 transition-colors z-10"
                aria-label="Close video"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L5 15M5 5L15 15"
                    stroke="#121212"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* Video Container */}
              <div
                className="relative bg-black rounded-lg overflow-hidden"
                style={{
                  borderRadius: "13.79px",
                }}
              >
                <iframe
                  src={`${selectedVideo.videoUrl}?autoplay=1&mute=1`}
                  className="w-full h-auto"
                  style={{
                    maxHeight: "80vh",
                    aspectRatio: "16/9",
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {/* Name tag */}
                <div
                  className="absolute flex items-center bg-white"
                  style={{
                    width: "141.29px",
                    height: "48.92px",
                    bottom: "60px",
                    left: "20px",
                    gap: "8.82px",
                    borderRadius: "4.07px",
                    paddingLeft: "6.78px",
                  }}
                >
                  <img
                    src="/home_page/video_tag_icon.svg"
                    alt="tag icon"
                    className="w-6 h-6"
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        fontSize: "12.68px",
                        lineHeight: "16.07px",
                        letterSpacing: "0px",
                        color: "#121212",
                      }}
                    >
                      {selectedVideo.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "5.76px",
                        lineHeight: "16.07px",
                        letterSpacing: "0px",
                        color: "#121212",
                      }}
                    >
                      {selectedVideo.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}
