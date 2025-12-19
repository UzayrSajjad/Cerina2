"use client";

export default function HowItSupports() {
  const items = [
    { icon: "/business_solution_page/iapt.svg", label: "IAPT/ICS pathways" },
    { icon: "/business_solution_page/triage.svg", label: "Triage and referral" },
    { icon: "/business_solution_page/customization.svg", label: "Emphasise customisation" },
    { icon: "/business_solution_page/readiness.svg", label: "IG/compliance readiness" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left content */}
          <div className="flex-1">
            <h2
              style={{
                fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto",
                fontWeight: 500,
                fontSize: "clamp(2rem, calc(1rem + 3vw), 3.15rem)",
                lineHeight: "100%",
                color: "#121212",
              }}
              className="mb-8"
            >
              How Cerina supports
              <br />
              Talking Therapies
            </h2>

            <div className="space-y-4 mb-8">
              {items.map((it) => (
                <div key={it.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                    <img src={it.icon} alt={it.label} className="w-8 h-8" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "Montserrat, system-ui",
                        fontWeight: 500,
                        fontSize: "clamp(0.8rem, calc(0.8rem + 1vw), 1.35rem)",
                        lineHeight: "1.1",
                        color: "#121212",
                      }}
                    >
                      {it.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <a
                href="#"
                className="inline-flex w-[160px] h-[44px] px-4 rounded-[12px] bg-[#DDAC7C] border-2 border-[#DDAC7C] text-[#18161A] font-medium hover:bg-[#DDAC7C]/90 transition-colors duration-200 items-center justify-center"
                style={{
                  fontSize: "clamp(0.6rem, 0.765rem, 0.8rem)",
                  lineHeight: "1",
                }}
              >
                Book a Demo
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative max-w-[520px] w-full">
              <img
                src="/business_solution_page/therapy.svg"
                alt="Therapy"
                className="w-full h-auto"
              />

              {/* floating icon */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <img src="/business_solution_page/iapt.svg" alt="icon" className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
