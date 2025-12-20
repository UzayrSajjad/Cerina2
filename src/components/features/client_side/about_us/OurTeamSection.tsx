"use client";

import React from "react";
import Image from "next/image";

interface TeamMemberData {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedInUrl: string;
}

interface TeamMemberCardProps {
  member: TeamMemberData;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div
      className="relative rounded-[10px] overflow-hidden shadow-md mx-auto"
      style={{
        background: "#E2D1AB",
        border: "1px solid #9B7CBE",
        opacity: 1,
        maxWidth: "280px",
      }}
    >
      {/* Image - fully stuck to the bottom side of the card */}
      <div className="w-full aspect-[3/4] bg-[#E2D1AB]" style={{ position: "relative", zIndex: 0 }}>
        <Image
          src={member.image}
          alt={member.name}
          width={300}
          height={400}
          className="w-full h-full object-cover"
          style={{ position: "relative", zIndex: 0 }}
        />
      </div>

      {/* Card title - stuck to the bottom side of the card, a little bit left side */}
      <div
        className="absolute  bg-white rounded-[10px]"
        style={{
          width: "75%",
          height: "60px",
          padding: "6px 10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
          zIndex: 1001,
          position: "absolute",
          left: "0.5rem",
          bottom: "0.5rem",

        }}
      >
        <div style={{ overflow: "hidden" }}>
          <h3
            style={{
              fontFamily: "Montserrat",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "20px",
              color: "#000000",
              margin: 0,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {member.name}
          </h3>
          <p
            style={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "18px",
              color: "#666666",
              margin: 0,
            }}
          >
            {member.role}
          </p>
        </div>
      </div>

      {/* Social icon - placed on the right side of the tag card */}
      <a
        href={member.linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute  rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
        style={{ 
          zIndex: 1002, 
          position: "absolute",
          right: "1rem",
          bottom: "1.5rem", 
          width: "32px",

        }}
      >
        <Image
          src="/about_us_page/section_5/linkedIn.svg"
          alt="LinkedIn"
          width={44}
          height={0}
        />
      </a>
    </div>
  );
};

const teamMembers: TeamMemberData[] = [
  {
    id: 1,
    name: "Prasannajeet Mane",
    role: "Founder",
    image: "/about_us_page/section_5/profile.png",
    linkedInUrl: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Prasannajeet Mane",
    role: "Founder",
    image: "/about_us_page/section_5/profile.png",
    linkedInUrl: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Prasannajeet Mane",
    role: "Founder",
    image: "/about_us_page/section_5/profile.png",
    linkedInUrl: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Prasannajeet Mane",
    role: "Founder",
    image: "/about_us_page/section_5/profile.png",
    linkedInUrl: "https://linkedin.com",
  },
  {
    id: 5,
    name: "Prasannajeet Mane",
    role: "Founder",
    image: "/about_us_page/section_5/profile.png",
    linkedInUrl: "https://linkedin.com",
  },
  {
    id: 6,
    name: "Prasannajeet Mane",
    role: "Founder",
    image: "/about_us_page/section_5/profile.png",
    linkedInUrl: "https://linkedin.com",
  },
  {
    id: 7,
    name: "Prasannajeet Mane",
    role: "Founder",
    image: "/about_us_page/section_5/profile.png",
    linkedInUrl: "https://linkedin.com",
  },
  {
    id: 8,
    name: "Prasannajeet Mane",
    role: "Founder",
    image: "/about_us_page/section_5/profile.png",
    linkedInUrl: "https://linkedin.com",
  },
];

export default function OurTeamSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Title */}
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: "Montserrat",
            fontWeight: 600,
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            lineHeight: "1.2",
            color: "#000000",
          }}
        >
          Our Team
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
