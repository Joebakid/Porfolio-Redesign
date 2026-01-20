import { useEffect, useRef } from "react";
import html2pdf from "html2pdf.js";
import resumeData from "../../data/resumeData";

export default function ResumePDF() {
  const { personal, education, skills, experience } = resumeData;
  const pdfRef = useRef(null);

  useEffect(() => {
    // ⏳ Give Google Translate enough time to fully translate all pages
    const timer = setTimeout(() => {
      generatePDF();
    }, 4000); // 4 seconds is much more reliable

    return () => clearTimeout(timer);
  }, []);

  function generatePDF() {
    if (!pdfRef.current) return;

    // Force reflow to ensure final DOM snapshot
    pdfRef.current.style.transform = "scale(1)";
    pdfRef.current.offsetHeight;

    html2pdf()
      .from(pdfRef.current)
      .set({
        margin: 8,
        filename: `${personal.name.replace(/\s+/g, "_")}_Resume.pdf`,
        html2canvas: {
          scale: 2.5,
          useCORS: true,
          windowWidth: pdfRef.current.scrollWidth,
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
        pagebreak: {
          mode: ["avoid-all", "css", "legacy"],
        },
      })
      .save();
  }

  return (
    <div className="min-h-screen bg-white text-black flex justify-center">
      {/* PDF CAPTURE AREA */}
      <div
        ref={pdfRef}
        id="resume-pdf"
        className="w-[794px] px-8 py-10 space-y-10"
      >
        {/* ================= HEADER ================= */}
        <header className="space-y-1">
          <h1 className="text-2xl font-extrabold">
            {personal.name}
          </h1>

          <p className="text-[14px] opacity-80">
            {personal.email} | GitHub
          </p>
        </header>

        {/* ================= EDUCATION ================= */}
        <section>
          <h2 className="text-[16px] font-extrabold uppercase">
            Education
          </h2>

          {education.map((edu, index) => (
            <div key={index} className="mt-2 space-y-1 text-[14px]">
              <p className="font-semibold">{edu.school}</p>
              <p>{edu.degree}</p>
              <p className="opacity-70">{edu.period}</p>
            </div>
          ))}
        </section>

        {/* ================= SKILLS ================= */}
        <section>
          <h2 className="text-[16px] font-extrabold uppercase">
            Skills & Technologies
          </h2>

          <div className="mt-2 space-y-2 text-[14px]">
            <p>
              <span className="font-semibold">Proficient:</span>{" "}
              {skills.proficient.join(", ")}
            </p>

            <p>
              <span className="font-semibold">Familiar:</span>{" "}
              {skills.familiar.join(", ")}
            </p>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section className="space-y-6">
          <h2 className="text-[16px] font-extrabold uppercase">
            Professional Experience
          </h2>

          {experience.map((job, index) => (
            <div key={index} className="break-inside-avoid">
              <p className="font-semibold">
                {job.role} — {job.company}{" "}
                {job.description && (
                  <span className="opacity-70">
                    ({job.description})
                  </span>
                )}
              </p>

              <p className="opacity-70">
                {job.period} | {job.location}
              </p>

              <ul className="list-disc pl-5 mt-2 space-y-1 text-[14px]">
                {job.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}

                <li className="opacity-70">
                  Stack: {job.technologies}
                </li>
              </ul>
            </div>
          ))}
        </section>
      </div>

      {/* PRINT SAFETY */}
      <style>
        {`
          .break-inside-avoid {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        `}
      </style>
    </div>
  );
}
