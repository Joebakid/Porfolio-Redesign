import { useRef } from "react";
import html2pdf from "html2pdf.js";
import resumeData from "../../data/resumeData";

export default function Resume() {
  const { personal, education, skills, experience } = resumeData;
  const pdfRef = useRef(null);

  const handleDownload = async () => {
    if (!pdfRef.current) return;

    try {
      await html2pdf()
        .from(pdfRef.current)
        .set({
          margin: 0,
          filename: `${personal.name.replace(/\s+/g, "_")}_Resume.pdf`,
          pagebreak: { mode: ["css", "legacy"] },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: {
            unit: "px",
            format: [794, 1123],
            orientation: "portrait",
          },
        })
        .save();
    } catch (err) {
      console.error("PDF error:", err);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #eef2ff, #f8fafc)",
        minHeight: "100vh",
        padding: "80px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* BUTTON */}
      <button
        onClick={handleDownload}
        style={{
          marginBottom: "50px",
           marginTop: "50px",
          padding: "14px 28px",
          background: "#4f46e5",
          color: "#fff",
          fontWeight: 600,
          fontSize: "15px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(79,70,229,0.25)",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-2px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        Download Resume (PDF)
      </button>

      {/* RESUME CARD */}
      <div
        ref={pdfRef}
        style={{
          width: "100%",
          maxWidth: "794px",
          minHeight: "1123px",
          padding: "clamp(30px, 5vw, 60px)",
          background: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          color: "#1f2937",
          fontFamily: "Inter, Arial, sans-serif",
          fontSize: "14px",
          lineHeight: "1.7",
          boxSizing: "border-box",
        }}
      >
        {/* HEADER */}
        <div style={{ marginBottom: 40 }}>
          <h1
            style={{
              margin: 0,
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "-0.5px",
            }}
          >
            {personal.name}
          </h1>

          <div
            style={{
              marginTop: 8,
              fontSize: "14px",
              color: "#6b7280",
            }}
          >
            {personal.email} • {personal.github}
          </div>

          <div
            style={{
              height: "3px",
              width: "60px",
              background: "#4f46e5",
              marginTop: "20px",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* EDUCATION */}
        <Section title="Education">
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: 16 }}>
              <div style={{ fontWeight: 600 }}>{edu.school}</div>
              <div style={{ color: "#374151" }}>{edu.degree}</div>
              <div style={{ fontSize: "13px", color: "#6b7280" }}>
                {edu.period}
              </div>
            </div>
          ))}
        </Section>

        {/* SKILLS */}
        <Section title="Skills">
          <div style={{ marginBottom: 8 }}>
            <strong>Proficient:</strong>{" "}
            <span style={{ color: "#374151" }}>
              {skills.proficient.join(", ")}
            </span>
          </div>
          <div>
            <strong>Familiar:</strong>{" "}
            <span style={{ color: "#6b7280" }}>
              {skills.familiar.join(", ")}
            </span>
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section title="Experience">
          {experience.map((job, i) => (
            <div
              key={i}
              style={{
                marginBottom: 28,
                pageBreakInside: "avoid",
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "15px",
                }}
              >
                {job.role} — {job.company}
              </div>

              <div
                style={{
                  fontSize: "13px",
                  color: "#6b7280",
                  marginBottom: 10,
                }}
              >
                {job.period}
              </div>

              <ul
                style={{
                  paddingLeft: 20,
                  margin: 0,
                  color: "#374151",
                }}
              >
                {job.bullets.map((b, index) => (
                  <li key={index} style={{ marginBottom: 6 }}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2
        style={{
          fontSize: "16px",
          fontWeight: 600,
          marginBottom: 16,
          color: "#111827",
          letterSpacing: "0.3px",
        }}
      >
        {title}
      </h2>

      {children}
    </div>
  );
}