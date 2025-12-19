"use client";

import React from "react";

type CardProps = {
  title: string;
  description: string; 
  image: string;
  gradient: string;
  width?: number;
  height?: number;
};

const InfoCard: React.FC<CardProps> = ({
  title,
  description, 
  image,
  gradient,
  width = 609,
  height = 457,
}) => {
  return (
    <div
      className="rounded-[14.53px] border overflow-hidden"
      style={{
        width: Math.min(width, 9999) + "px",
        maxWidth: "100%",
        height: height + "px",
        borderRadius: "14.53px",
        border: "0.91px solid #898989",
        background: gradient,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-4">
          
          <h3
            className="font-semibold text-[#121212]"
            style={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "32px",
              lineHeight: "45.77px",
            }}
          >
            {title}
          </h3>
        </div>

        <p
          className="text-[#121212] mt-4 whitespace-pre-line"
          style={{
            fontFamily: "Montserrat",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "23.61px",
          }}
        >
          {description}
        </p>

        <div className="mt-auto">
          {image ? (
            <img
              src={image}
              alt="card visual"
              className="w-full mt-6"
              style={{
                height: "260px",
                objectFit: "cover",
                borderBottomLeftRadius: "14.53px",
                borderBottomRightRadius: "14.53px",
                borderRadius: "14.53px",
              }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

const CaseResearch: React.FC = () => {
  return (
    <div className="w-full max-w-[1242px] mx-auto px-4 py-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-6">
        <InfoCard
          title="Case Studies"
          description={`From pilots to scaled services, Cerina adapts to different pathways\nwhile keeping support effective and human.`}
          image="/home_page/case_study_icon.svg"
          
          gradient="linear-gradient(180deg, #D7C7E2 0%, #FAE9D6 100%), linear-gradient(0deg, #D4C7E3, #D4C7E3)"
        />

        <InfoCard
          title="Research"
          description={`Our platform is developed with clinical experts and evaluated using\nRCTs to ensure safety and real-world effectiveness`}
          image="/home_page/research_icon.svg"
          
          gradient="linear-gradient(180deg, #DDAC7C 0%, #FAE9D6 100%), linear-gradient(0deg, #DDAC7C, #DDAC7C)"
          width={608}
          height={456}
        />
      </div>
    </div>
  );
};

export default CaseResearch;
