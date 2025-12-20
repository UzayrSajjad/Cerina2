"use client";

import Image from "next/image";
import React from "react";

export default function ContactForm() {
  return (
    <section className="py-12">
      <div className="max-w-[1100px]   mx-auto px-6">
        <div className="  p-6 rounded-[12px]"
        style={{
          backgroundColor: "#EEE7DB"
        }}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column */}
            <div className="flex-1 lg:w-1/2 flex flex-col justify-start text-center lg:text-left">
              <h2
                className="text-[#121212] font-medium"
                style={{
                  fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto",
                  fontWeight: 500,
                  fontSize: "clamp(24px, 3vw, 32px)",
                  lineHeight: "100%",
                }}
              >
                Fill out the form and our
                <br />
                team will be in touch to
                <br />
                schedule your demo
              </h2>

              <div className="mt-6 flex items-center gap-4">
                <Image src="/contact_page/section_2/email_icon.svg" alt="email" width={20} height={20} />
                <span
                  className="text-[#121212]"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "clamp(18px, 2.5vw, 22px)",
                    lineHeight: "25.2px",
                  }}
                >
                  contact@cerina.co
                </span>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <Image src="/contact_page/section_2/phone_icon.svg" alt="phone" width={20} height={20} />
                <span
                  className="text-[#121212]"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "clamp(18px, 2.5vw, 22px)",
                    lineHeight: "25.2px",
                  }}
                >
                  +44 740 471 7777
                </span>
              </div>

              <div className="mt-6 w-full max-w-[420px] rounded-[12px] overflow-hidden">
                <Image src="/contact_page/section_2/contact_photo.svg" alt="contact" width={420} height={280} className="object-cover" />
              </div>
            </div>

            {/* Right column - form card */}
            <div className="  flex-1 lg:w-1/2 flex justify-center">
              <div
                className="   w-full max-w-[641px] rounded-[15px]"
                style={{ padding: "45px 40px" ,
                background: "#F8F5F1",
                }}
              >
                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      "First Name",
                      "Last Name",
                      "Organisation",
                      "Role",
                      "Work Email",
                      "Phone",
                    ].map((ph) => (
                      <input
                        key={ph}
                        placeholder={ph}
                        className="w-full h-[59px] rounded-sm px-4"
                        style={{
                          background: "#FCFCFB",
                          border: "0.5px solid #B6B6B6",
                          padding: "20px",
                          fontFamily: "Montserrat",
                          fontSize: "16px",
                          textAlign: "left",
                        }}
                      />
                    ))}

                    <textarea
                      placeholder="Message"
                      className="w-full rounded-sm px-4"
                      style={{
                        height: 120,
                        background: "#FCFCFB",
                        border: "0.5px solid #B6B6B6",
                        padding: "20px",
                        fontFamily: "Montserrat",
                        fontSize: "16px",
                        textAlign: "left",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-[48px] rounded-[8px] text-[#121212] font-medium"
                    style={{ background: "#DDAC7C", border: "2px solid #DDAC7C" }}
                  >
                    Book a Demo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
