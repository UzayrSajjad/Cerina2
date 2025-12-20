"use client";

import Image from "next/image";
import React from "react";

export default function Guides() {
  const studies = [
    { title: "Case Study 1", image: "/resource_page/guide.svg" },
    { title: "Case Study 2", image: "/resource_page/guide.svg" },
    { title: "Case Study 3", image: "/resource_page/guide.svg" },
  ];

  return (
    <section 
      className="py-12"
      style={{
        background: 'linear-gradient(180deg, #faf9f5 0%, #f0ede8ff 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(0deg, #FAF9F5, #FAF9F5)'
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 text-center">
        <h2
          className="mx-auto mb-8 "
          style={{
            fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto",
            fontWeight: 500,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: "1.2",
            color: "#121212",
            textAlign: "center",
          }}
        >
          Guides & White Papers
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
          {studies.map((study, index) => (
            <div
              key={index}
              className="flex flex-col pt-4 pr-2 pb-6 pl-0 bg-white mx-auto"
              style={{ backgroundColor: '#ffffffff', width: 'clamp(300px, 30vw, 359px)', borderRadius: 10 }}
            >
              <div className="flex-1 flex justify-center items-center p-2">
                <Image src={study.image} alt={study.title} width={340} height={290} className="object-contain" />
              </div>
              <h3
                className="text-left mb-2 mt-3 px-4"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  fontSize: "clamp(1.08rem, 2.16vw, 1.35rem)",
                  color: "#121212",
                  textAlign: "left",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                {study.title}
              </h3>
              <p
                className="px-4 pb-4"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "30px",
                  color: "#181A2A",
                  textAlign: "left",
                  margin: "0",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[176px] h-[48px] px-[30px] py-[15px] rounded-[16px] bg-[#DDAC7C] border-2 border-[#DDAC7C] text-[#18161A] font-medium hover:bg-[#DDAC7C]/90 transition-colors duration-200 whitespace-nowrap text-center cursor-pointer"
            style={{
              fontSize: "clamp(0.74rem, 1.7vw, 0.85rem)",
              lineHeight: "clamp(0.74rem, 1.7vw, 0.85rem)",
              letterSpacing: "-0.136px",
            }}
          >
           Access Guides
          </button>
        </div>
      </div>
    </section>
  );
}