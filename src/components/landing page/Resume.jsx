import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Resume() {
  const resumeRef = useRef(null);

  const downloadPDF = async () => {
    try {
      const pages = resumeRef.current.querySelectorAll(".pdf-page");
      if (!pages.length) return alert("No pages found");

      const bgColor = getComputedStyle(document.body).backgroundColor;
      const pdf = new jsPDF("p", "mm", "a4");

      for (let i = 0; i < pages.length; i++) {
        const canvas = await html2canvas(pages[i], {
          scale: 2,
          backgroundColor: bgColor,
          useCORS: true,
        });

        const imgData = canvas.toDataURL("image/png", 1.0);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        if (i !== 0) pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      }

      pdf.save("Joseph-Bawo-Resume.pdf");
    } catch (err) {
      console.error(err);
      alert("PDF failed to generate");
    }
  };

  return (
    <>
      {/* Download Button */}
      <div className="container-main flex justify-end mb-4">
        <button
          onClick={downloadPDF}
          className="px-4 py-2 rounded-lg text-sm font-semibold border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
        >
          Download Resume (PDF)
        </button>
      </div>

      {/* PDF Wrapper */}
      <div ref={resumeRef} className="container-main space-y-20 ">

        {/* ================= PAGE 1 ================= */}
        <section className="pdf-page space-y-10 ">
          {/* Header */}
       
          <header className="space-y-1 py-3.5 px-3.5">
            <h1 className="text-xl font-extrabold md:text-2xl">
              Joseph Bawo
            </h1>

            <p className="text-[14px] md:text-[15px] opacity-80">
              <a
                href="mailto:josephbawo@gmail.com"
                className="underline text-[color:var(--link-accent)]"
              >
                josephbawo@gmail.com
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/Joebakid"
                target="_blank"
                className="underline text-[color:var(--link-accent)]"
              >
                GitHub
              </a>
            </p>
          </header>

          {/* Education */}
          <section>
            <h2 className="text-[16px] font-extrabold uppercase md:text-xl py-3.5 px-3.5">
              Education
            </h2>

            <div className="mt-2 space-y-1 text-[14px] py-3.5 px-3.5 md:text-[15px]">
              <p className="font-semibold">
                Federal University of Petroleum Resources, Effurun
              </p>
              <p>Bachelor of Engineering (B.Eng), Marine Engineering</p>
              <p className="opacity-70">January 2019 – October 2026</p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-[16px] font-extrabold uppercase md:text-xl py-3.5 px-3.5">
              Skills & Technologies
            </h2>

            <div className="mt-2 space-y-2 py-3.5 px-3.5 text-[14px] md:text-[15px]">
              <p>
                <span className="font-semibold">Proficient:</span>{" "}
                JavaScript, React.js, Next.js, HTML/CSS, Tailwind CSS, MongoDB
              </p>

              <p>
                <span className="font-semibold">Familiar:</span>{" "}
                Blockchain (Ethereum, Base, Solana)
              </p>
            </div>
          </section>

          {/* Experience - PART 1 */}
          <section>
            <h2 className="text-[16px] font-extrabold uppercase md:text-xl py-3.5 px-3.5">
              Professional Experience
            </h2>

            <div className="mt-4 space-y-6 text-[14px] md:text-[15px]">

              {/* MJS Maritime */}
              <div className="py-3.5 px-3.5">
                <p className="font-semibold">Intern, MJS Maritime Limited</p>
                <p className="opacity-70">June 2024 – December 2024 | On-site</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Assisted senior engineers in assessing and mitigating marine corrosion on vessels.</li>
                  <li>Gained hands-on experience in preventive maintenance strategies and vessel machinery support.</li>
                </ul>
              </div>

              {/* Ron */}
              <div className="py-3.5 px-3.5">
                <p className="font-semibold">Ron’s Crypto Therapy</p>
                <p className="opacity-70">December 2024 | Remote, United States</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Built a crypto payment platform integrated with mentorship services.</li>
                  <li>Implemented fiat-to-crypto transaction flows with secure payment handling.</li>
                  <li>Designed responsive and scalable frontend architecture for smooth user experience.</li>
                  <li>Collaborated with stakeholders to align product features with user needs.</li>
                  <li className="opacity-70">Technologies: React, TypeScript</li>
                </ul>
              </div>

              {/* Create Bawo */}
              <div className="py-3.5 px-3.5">
                <p className="font-semibold">Create-Bawo-Frontend (Open Source CLI)</p>
                <p className="opacity-70">2024 | Global, Open Source</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Built and maintained a zero-configuration CLI tool for rapidly scaffolding production-ready React and Vite applications.</li>
                  <li>Automated setup including Tailwind CSS, Zustand/Redux, GSAP and Framer Motion.</li>
                  <li>Implemented interactive CLI prompts and template generation.</li>
                  <li>Reduced project setup time from hours to minutes.</li>
                  <li className="opacity-70">Technologies: Node.js, JavaScript, Vite, React, Tailwind CSS</li>
                </ul>
              </div>

            </div>
          </section>
        </section>

        {/* ================= PAGE 2 ================= */}
        <section className="pdf-page space-y-10">

          {/* TechJojo */}
          <div className="py-3.5 px-3.5">
            <p className="font-semibold">TechJojo (Gadget E-Commerce Platform)</p>
            <p className="opacity-70">2023 | Remote, Nigeria</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Built a lightweight e-commerce platform with WhatsApp order flow.</li>
              <li>Designed a creative data storage system using Google Sheets as backend.</li>
              <li>Integrated Google Sheets API for real-time syncing.</li>
              <li>Enabled non-technical operators to manage inventory easily.</li>
              <li className="opacity-70">Technologies: React, JavaScript, Google Sheets API, Tailwind CSS</li>
            </ul>
          </div>

          {/* Freelance */}
          <div className="py-3.5 px-3.5">
            <p className="font-semibold">Software Engineer (Freelance)</p>
            <p className="opacity-70">December 2023 | Remote, International Clients</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Led a team of three in building and deploying a medium-scale crypto application and admin dashboard.</li>
              <li>Designed and implemented scalable backend architecture, database schemas, and RESTful APIs.</li>
              <li>Developed staking logic to calculate winnings and payout accuracy.</li>
              <li>Built cross-chain NFT data export features.</li>
              <li>Automated user communications via mailing service.</li>
              <li className="opacity-70">Technologies: JavaScript, Node.js, MongoDB</li>
            </ul>
          </div>

          {/* Chucksale */}
          <div className="py-3.5 px-3.5">
            <p className="font-semibold">Core Team Member, Chucksale</p>
            <p className="opacity-70">January 2024 | Remote, International Clients</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Oversaw development of the Chucksale landing page and crypto application for the Base ecosystem.</li>
              <li>Led developers and designers through planning and release cycles.</li>
              <li>Managed deployments and compute resources during high traffic.</li>
              <li className="opacity-70">Technologies: JavaScript, Node.js, Express.js, React.js, PostgreSQL, Travis CI</li>
            </ul>
          </div>

          {/* FrontCartel */}
          <div className="py-3.5 px-3.5">
            <p className="font-semibold">Software Developer, FrontCartel</p>
            <p className="opacity-70">December 2023 | Remote, International Clients</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Built NFT rarity checker tools for verifying digital assets.</li>
              <li>Designed SEO-optimized landing pages to improve web traffic.</li>
              <li className="opacity-70">Technologies: JavaScript, React.js, Tailwind CSS</li>
            </ul>
          </div>

        </section>
      </div>
    </>
  );
}
