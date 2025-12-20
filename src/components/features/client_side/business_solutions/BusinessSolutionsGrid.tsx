"use client";

export default function BusinessSolutionsGrid() {
  const cards = [
    { title: "Brandable\nApp", image: "/business_solution_page/brandable_app.svg" },
    { title: "Measurable\nimpact", image: "/business_solution_page/measurable_impact.svg" },
    { title: "Reduced\nAdmin load", image: "/business_solution_page/reduced_admin.svg" },
  ];

  return (
    <section className="py-12">
      <div className="max-w-[1240px] mx-auto px-4 text-center">
        <h2
          className="mx-auto mb-10"
          style={{
            fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto",
            fontWeight: 500,
            fontSize: "clamp(1.6rem, 2.5vw, 3.5rem)",
            lineHeight: "100%",
            color: "#121212",
            whiteSpace: "pre-line",
          }}
        >
          Private Healthcare Providers &<br />Not for Profits
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, index) => (
            <article
              key={c.title}
              className="bg-[#EEE7DB] rounded-[14px] p-4 flex flex-col items-start relative min-h-[320px] sm:min-h-[380px] md:min-h-[430px]"
            >
              <div
                className="bg-[#FAF1E2] rounded-[10px] text-left w-full"
                style={{
                  fontFamily: 'Montserrat, system-ui',
                  fontWeight: 500,
                  fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
                  lineHeight: '1',
                  color: '#121212',
                  whiteSpace: 'pre-line',
                  padding: '12px',
                }}
              >
                {c.title}
              </div>

              <div className="flex-1 w-full relative mt-4">
                <img
                  src={c.image}
                  alt={c.title}
                  className="absolute -bottom-4 -left-4 w-[70%] sm:w-[75%] md:w-[80%] lg:w-[85%] xl:w-[90%] h-auto object-contain rounded-bl-[14px]"
                />
              </div>
            </article>
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
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
