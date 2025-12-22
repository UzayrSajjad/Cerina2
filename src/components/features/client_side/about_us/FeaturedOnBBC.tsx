"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VideoCard, VideoModal } from "@/components/ui/VideoComponents";

const video = {
  name: "BBC Spotlight",
  role: "Featured Segment",
  videoUrl: "https://www.youtube.com/embed/pIwfRuNw5tE",
  thumbnailUrl: "https://img.youtube.com/vi/pIwfRuNw5tE/maxresdefault.jpg",
};

export default function FeaturedOnBBC() {
  const [selectedVideo, setSelectedVideo] = useState<{
    videoUrl: string;
    name: string;
    role: string;
  } | null>(null);

  const handlePlay = () => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <section className="py-16 px-4">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-8 items-center">
            {/* Left side */}
            <div className="md:w-1/2 justify-start flex flex-col items-start md:items-start pl-4 md:pl-0">
              <h2
                className="text-left mb-6"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  fontSize: "clamp(1.275rem, 2.55vw, 2.125rem)",
                  lineHeight: "1.2",
                  color: "#121212",
                }}
              >
                Featured on BBC Spotlight for our innovative work in digital
                <br />
                mental health
              </h2>

              <div className="flex justify-start">
                <Image
                  src="/about_us_page/section_1/news_icons.svg"
                  alt="News Icons"
                  width={330}
                  height={0}
                  className="object-contain w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
                />
              </div>
            </div>

            {/* Right side: Video Card */}
            <div className="md:w-1/2 flex justify-center items-center w-full">
              <div
                className="relative"
                style={{
                  width: "clamp(16.875rem, 45vw, 34.5625rem)",
                  height: "clamp(11.25rem, 30vw, 22.5625rem)",
                  borderRadius: "1.25rem",
                  opacity: 1,
                }}
              >
                <VideoCard
                  name={video.name}
                  role={video.role}
                  videoUrl={video.videoUrl}
                  thumbnailUrl={video.thumbnailUrl}
                  isCenter={true}
                  opacity={1}
                  onPlay={handlePlay}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          videoUrl={selectedVideo.videoUrl}
          name={selectedVideo.name}
          role={selectedVideo.role}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}