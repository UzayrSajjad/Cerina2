"use client";

import { useEffect, useRef } from "react";

type Props = {
  title: string;
  bg: string;
  direction?: 'left' | 'right';
};

export default function IconSlider({ title, bg, direction = 'left' }: Props) {
  const sliderIcons = [
    "medilink.svg",
    "cyber.svg",
    "interreg.svg",
    "iso.svg",
    "medicine.svg",
    "nhs.svg",
    "orcha.svg",
    "dcb.svg",
  ];

  // Duplicate icons multiple times for seamless loop
  const baseIcons = direction === 'right' ? [...sliderIcons].reverse() : sliderIcons;
  const duplicatedIcons = [...baseIcons, ...baseIcons, ...baseIcons, ...baseIcons, ...baseIcons, ...baseIcons];

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId: number;
    let position = -slider.scrollWidth / 6; // Start with icons on the left
    const speed = 0.5; // pixels per frame

    const animate = () => {
      if (direction === 'left') {
        position -= speed;
        if (position <= -slider.scrollWidth / 3) {
          position = -slider.scrollWidth / 6;
        }
      } else {
        position += speed;
        if (position >= 0) {
          position = -slider.scrollWidth / 6;
        }
      }
      slider.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    // Wait for the slider to be rendered and have width
    setTimeout(animate, 100);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [direction]);

  return (
    <section className="relative py-16" style={{ background: bg }}>
      <div className="absolute top-0 left-0 w-[21%] h-full bg-gradient-to-r from-gray-100 to-transparent pointer-events-none z-20"></div>
      <div className="absolute top-0 right-0 w-[21%] h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-20"></div>
      <div className="max-w-[1440px] mx-auto px-4 text-center">
        <h2
          className="mx-auto mb-12"
          style={{
            fontFamily:
              "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto",
            fontWeight: 500,
            fontSize: "clamp(1.4rem, 3.2vw, 2rem)",
            lineHeight: "1.2",
            color: "#121212",
            textAlign: "center",
          }}
        >
          {title}
        </h2>

        <div className="relative overflow-hidden">
          <div ref={sliderRef} className="flex gap-8">
            {duplicatedIcons.map((icon, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={`/slider_icons/${icon}`}
                  alt={icon.replace(".svg", "")}
                  className="w-15"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
