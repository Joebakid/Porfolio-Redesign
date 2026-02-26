import { useRef } from "react";
import html2pdf from "html2pdf.js";
import resumeData from "../../data/resumeData";

export default function ResumePDF() {
  const { personal, education, skills, experience } = resumeData;
  const pdfRef = useRef(null);

  const handleDownload = () => {
    const element = pdfRef.current;
    if (!element) return;

    const opt = {
      margin: 0,
      filename: `${personal.name.replace(/\s+/g, "_")}_Resume.pdf`,
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 3, // higher quality
        useCORS: true,
        scrollY: 0,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">
      
      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="px-8 py-3 mb-6 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Download PDF
      </button>

      {/* Resume Layout */}
      <div
        ref={pdfRef}
        className="w-[210mm] min-h-[297mm] bg-white text-black p-[15mm] text-[13px]"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {/* HEADER */}
        <h1 className="text-[22px] font-bold uppercase">
          {personal.name}
        </h1>
        <p className="mb-6 text-sm">
          {personal.email} | {personal.github}
        </p>

        {/* EDUCATION */}
        <h2 className="font-bold uppercase border-b pb-1 mb-3">
          Education
        </h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-3">
            <p className="font-semibold">{edu.school}</p>
            <p>{edu.degree}</p>
            <p className="text-gray-500 italic">{edu.period}</p>
          </div>
        ))}

        {/* SKILLS */}
        <h2 className="font-bold uppercase border-b pb-1 mt-6 mb-3">
          Skills
        </h2>
        <p>
          <strong>Proficient:</strong> {skills.proficient.join(", ")}
        </p>
        <p>
          <strong>Familiar:</strong> {skills.familiar.join(", ")}
        </p>

        {/* EXPERIENCE */}
        <h2 className="font-bold uppercase border-b pb-1 mt-6 mb-3">
          Experience
        </h2>
        {experience.map((job, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold">
              {job.role} — {job.company}
            </p>
            <p className="text-gray-500 text-sm">{job.period}</p>
            <ul className="list-disc pl-5 mt-2">
              {job.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}