"use client";

export default function IndividualSolutionGrid() {
  const cards = [
    {
      title: "Evidence-Based\nChatbot",
      image: "/individual_solution_page/evidence.svg",
    },
    {
      title: "Breathing &\nwellbeing tools",
      image: "/individual_solution_page/breathing.svg",
    },
   
    {
      title: "Personalised\nonboarding",
      image: "/individual_solution_page/personalized.svg",
    },
  ];  return (
    <section className="py-12">
      <div className="max-w-[1240px] mx-auto px-4 text-center">
        <h2
          className="mx-auto mb-6"
          style={{
            fontFamily:
              "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto",
            fontWeight: 500,
            fontSize: "clamp(1.6rem, 2.5vw, 3.5rem)",
            lineHeight: "1.2",
            color: "#121212",
            whiteSpace: "pre-line",
          }}
        >
          Why Choose Cerina
          <br />
          as an Individual?
        </h2>

        <p
          className="mx-auto mb-16 max-w-2xl"
          style={{
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "30px",
            letterSpacing: "0%",
            color: "#121212",
          }}
        >
          The same platform trusted by NHS providers is also available directly to you
        </p>

        <div className="grid grid-cols-1 gap-12 space-y-15 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6">
          {cards.map((c, index) => (
            <div key={c.title} className="relative">
              <div
                className="absolute -top-6 sm:-top-10 left-0 bg-[#EEE7DB] rounded-[10px] text-left z-10"
                style={{
                  width: '90%',
                  fontFamily: "Montserrat, system-ui",
                  fontWeight: 500,
                  fontSize: "clamp(1rem, 2.2vw, 1.4rem)",
                  lineHeight: "1.4",
                  color: "#121212",
                  whiteSpace: "pre-line",
                  padding: "12px",
                }}
              >
                {c.title}
              </div>

              <article
                className="bg-[#EEE7DB] rounded-[14px] p-0 pt-12 flex flex-col justify-end items-start relative"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-[70%] sm:w-[75%] md:w-[80%] lg:w-[85%] xl:w-[90%] h-auto object-contain rounded-bl-[14px]"
                />
              </article>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="inline-block px-6 py-2 rounded-[12px] bg-[#DDAC7C] border-2 border-[#DDAC7C] text-[#18161A] font-medium hover:bg-[#DDAC7C]/90 transition-colors duration-200"
            style={{
              fontFamily: "Montserrat, system-ui",
              fontSize: "clamp(0.7rem, 1vw, 0.95rem)",
            }}
          >
            Download the App
          </a>
        </div>
      </div>
    </section>
  );
}
