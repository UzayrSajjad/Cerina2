"use client";

import { ImageList, ImageListItem } from '@mui/material';

export default function ResourceCaseStudies() {
  const studies = [
    {
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
      image: "/impact_evidence_page/section_3/img1.svg",
      rows: 2,
      cols: 2,
    },
    {
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant",
      image: "/impact_evidence_page/section_3/img2.svg",
      rows: 2,
      cols: 1,
    },
    {
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae. et quausi architecto beatae vitae. otam",
      image: "/impact_evidence_page/section_3/img3.svg",
      rows: 4,
      cols: 1,
    },
    {
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant",
      image: "/impact_evidence_page/section_3/img1.svg",
      rows: 2,
      cols: 1,
    },
    {
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
      image: "/impact_evidence_page/section_3/img2.svg",
      rows: 2,
      cols: 2,
    },
     
  ];

  return (
    <section 
      className="py-12 bg-white"
      style={{
        background: 'linear-gradient(180deg, #faf9f5 0%, #f0ede8ff 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(0deg, #FAF9F5, #FAF9F5)'
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4">
        <h2
          className="mx-auto mb-12 text-center"
          style={{
            fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto",
            fontWeight: 500,
            fontSize: "clamp(1.8rem, 3.6vw, 2.7rem)",
            lineHeight: "1.2",
            color: "#121212",
          }}
        >
          Case Studies
        </h2>

        {/* MUI Quilted ImageList with Custom Cards */}
        <ImageList
          sx={{
            width: '100%',
            height: 'auto',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)', 
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)'
            },
            '@media (max-width: 700px)': {
              gridTemplateColumns: 'repeat(2, 1fr) !important',
            },
            '@media (max-width: 500px)': {
              gridTemplateColumns: 'repeat(1, 1fr) !important',
            },
            '@media (max-width: 480px)': {
              gridTemplateColumns: 'repeat(1, 1fr) !important',
            },
          }}
          variant="quilted"
          cols={4}
          rowHeight={121}
          gap={16}
        >
          {studies.map((study, index) => (
            <ImageListItem
              key={index}
              cols={study.cols || 1}
              rows={study.rows || 1}
              sx={{
                borderRadius: '14px',
                overflow: 'hidden',
                backgroundColor: '#EEE7DB',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                '@media (max-width: 600px)': {
                  gridColumn: 'span 1 !important',
                  gridRow: 'span 1 !important',
                  height: 'auto !important',
                  minHeight: '300px',
                },
              }}
            >
              {/* Image */}
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  marginBottom: '12px',
                  flex: 1,
                  display: 'flex',
                }}
              >
                <img
                  src={study.image}
                  alt={study.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px',
                  }}
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                  lineHeight: "1.3",
                  color: "#000000",
                  marginBottom: "8px",
                  margin: 0,
                }}
              >
                {study.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)",
                  lineHeight: "1.4",
                  color: "#000000",
                  margin: 0,
                }}
              >
                {study.description}
              </p>
            </ImageListItem>
          ))}
        </ImageList>

        {/* Button */}
        <div className="flex justify-center">
          <button
            type="button"
            className="mt-10 w-[176px] h-[48px] px-[30px] py-[15px] rounded-[16px] bg-[#DDAC7C] border-2 border-[#DDAC7C] text-[#18161A] font-medium hover:bg-[#DDAC7C]/90 transition-colors duration-200 whitespace-nowrap text-center cursor-pointer"
            style={{
              fontSize: "clamp(0.74rem, 1.7vw, 0.85rem)",
              lineHeight: "clamp(0.74rem, 1.7vw, 0.85rem)",
              letterSpacing: "-0.136px",
            }}
          >
            Read Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}