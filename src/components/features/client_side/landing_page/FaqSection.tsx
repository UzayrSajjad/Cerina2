"use client";

import React, { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "What is Cerina Health?",
    answer:
      "Cerina Health is a digital mental health platform offering personalised support through guided CBT sessions, structured programmes, AI-assisted tools, self-care exercises, and evidence-based therapeutic content.",
  },
  { question: "What Method does Cerina’s Digital Therapy Use?", answer: "" },
  { question: "What is Cognitive Behavioural Therapy?", answer: "" },
  { question: "What is anxiety?", answer: "" },
  { question: "What is Generalised Anxiety Disorder (GAD)", answer: "" },
  { question: "Who can use Cerina Health?", answer: "" },
  { question: "On which platforms is Cerina available?", answer: "" },
  { question: "How does Cerina protect user privacy and data?", answer: "" },
  { question: "How is AI used safely in Cerina?", answer: "" },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        <div
          className="py-8 px-4 md:py-16 md:px-12 lg:px-24"
          style={{
            width: "1388px",
            maxWidth: "100%",
            minHeight: "838px",
            borderRadius: "16px",
            background: "rgba(238,231,219,0.63)",
            opacity: 1,
            boxSizing: "border-box",
          }}
        >
          <div className="flex flex-col md:flex-row gap-[10px]">
            {/* Left column */}
            <div className="md:w-1/3 flex-shrink-0">
              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  fontSize: "clamp(2rem, 2rem + 2vw, 3rem)",
                  lineHeight: "52.8px",
                  color: "#121212",
                }}
                className="mb-6"
              >
                Frequently Asked
                <br />
                Questions
              </h2>

              <h3
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  fontSize: "clamp(1rem, 1rem + 1vw, 1.5rem)",
                  lineHeight: "28.8px",
                  color: "#121212",
                }}
                className="mb-2"
              >
                Still have a question?
              </h3>

              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  fontSize: "clamp(0.7rem, 0.7rem + 0.5vw, 1rem)",
                  lineHeight: "26px",
                  color: "#121212",
                }}
                className="mb-2"
              >
                Reach out to us.
              </p>

              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontSize: "clamp(0.7rem, 0.7rem + 0.5vw, 1rem)",
                  lineHeight: "26px",
                  color: "#121212",
                }}
              >
                Our team is happy to provide any
                <br />
                additional details.
              </p>

              <div className="mt-6 flex items-center gap-3 mb-4 md:mb-0">
                <img
                  src="/home_page/group_people.svg"
                  alt="group"
                  className="w-42 object-contain rounded-full"
                />
              </div>
            </div>

            {/* Right column: accordion */}
            <div className="md:w-2/3">
              <div className="flex flex-col gap-4">
                {faqs.map((f, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <div
                      key={i}
                      className={`bg-white rounded-lg p-6 shadow-sm transition-all duration-200 w-full ${
                        isOpen ? "ring-2 ring-[#EAE2D8]" : ""
                      }`}
                      style={{ minHeight: "68px", borderRadius: "8px", opacity: 1 }}
                    >
                      <button
                        className="w-full flex items-start justify-between gap-4 text-left"
                        onClick={() => toggle(i)}
                        aria-expanded={isOpen}
                      >
                        <div>
                          <div
                            style={{
                              fontFamily: "Montserrat",
                              fontWeight: 500,
                              fontSize: "clamp(1rem, 1rem + 1vw, 1.5rem)",
                              lineHeight: "28.8px",
                              color: "#121212",
                              overflowWrap: "break-word",
                            }}
                          >
                            {f.question}
                          </div>

                          {isOpen && f.answer && (
                            <p
                              className="mt-4"
                              style={{
                                fontFamily: "Montserrat",
                                fontWeight: 400,
                                fontSize: "clamp(0.7rem, 0.7rem + 0.5vw, 1rem)",
                                lineHeight: "26px",
                                color: "#121212",
                                overflowWrap: "break-word",
                              }}
                            >
                              {f.answer}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center">
                          <div style={{ width: "24px", height: "24px", flexShrink: 0 }}>
                            <img
                            src="/cross_icon.svg"
                            alt="toggle"
                            width={24}
                            height={24}
                            />
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
