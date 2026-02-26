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
          html2canvas: {
            scale: 2,
            useCORS: true,
          },
          jsPDF: {
            unit: "px",
            format: [794, 1123], // Exact A4 in px
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
        background: "#f3f4f6",
        minHeight: "100vh",
        padding: "60px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* CLICKABLE BUTTON WRAPPER */}
      <div
        onClick={handleDownload}
        style={{
          marginBottom: "40px",
            marginTop: "100px",
          padding: "16px 28px",
          backgroundColor: "#2563eb",
          color: "white",
          fontWeight: 600,
          fontSize: "16px",
          borderRadius: "8px",
          cursor: "pointer",
          userSelect: "none",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#1e40af")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#2563eb")
        }
      >
        Download Resume (PDF)
      </div>

      {/* PDF CONTENT */}
      <div
        ref={pdfRef}
        style={{
          width: "794px",          // A4 width
          minHeight: "1123px",     // A4 height
          padding: "60px",
          background: "#ffffff",
          color: "#000000",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          lineHeight: "1.6",
          boxSizing: "border-box",
        }}
      >
        {/* HEADER */}
        <div style={{ borderBottom: "2px solid #000", paddingBottom: 10, marginBottom: 30 }}>
          <h1 style={{ margin: 0, fontSize: "24px" }}>{personal.name}</h1>
          <p style={{ margin: "5px 0 0", color: "#444" }}>
            {personal.email} | {personal.github}
          </p>
        </div>

        {/* EDUCATION */}
        <Section title="Education">
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 600 }}>{edu.school}</div>
              <div>{edu.degree}</div>
              <div style={{ color: "#555" }}>{edu.period}</div>
            </div>
          ))}
        </Section>

        {/* SKILLS */}
        <Section title="Skills">
          <p>
            <strong>Proficient:</strong> {skills.proficient.join(", ")}
          </p>
          <p>
            <strong>Familiar:</strong> {skills.familiar.join(", ")}
          </p>
        </Section>

        {/* EXPERIENCE */}
        <Section title="Experience">
          {experience.map((job, i) => (
            <div
              key={i}
              style={{
                marginBottom: 25,
                pageBreakInside: "avoid",
              }}
            >
              <div style={{ fontWeight: 600 }}>
                {job.role} — {job.company}
              </div>
              <div style={{ color: "#555", marginBottom: 6 }}>
                {job.period}
              </div>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                {job.bullets.map((b, index) => (
                  <li key={index}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>
      </div>
    </div>
  );
}

/* SECTION COMPONENT */
function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 35 }}>
      <h2
        style={{
          marginBottom: 15,
          borderBottom: "1px solid #000",
          paddingBottom: 6,
          fontSize: "18px",
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}