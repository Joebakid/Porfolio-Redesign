import { useEffect } from "react";

export default function ResumePDF() {
  useEffect(() => {
    const timer = setTimeout(() => window.print(), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
  
    <div className="min-h-screen bg-white text-black flex justify-center">
      <div className="w-[794px] px-8 py-10 space-y-16">

        {/* ================= PAGE 1 ================= */}
        <section className="space-y-10 break-after-page">

          {/* Header */}
          <header className="space-y-1">
            <h1 className="text-2xl font-extrabold">
              Joseph Bawo
            </h1>

            <p className="text-[14px] opacity-80">
              josephbawo@gmail.com | GitHub
            </p>
          </header>

          {/* Education */}
          <section>
            <h2 className="text-[16px] font-extrabold uppercase">
              Education
            </h2>

            <div className="mt-2 space-y-1 text-[14px]">
              <p className="font-semibold">
                Federal University of Petroleum Resources, Effurun
              </p>
              <p>Bachelor of Engineering (B.Eng), Marine Engineering</p>
              <p className="opacity-70">January 2019 – October 2026</p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-[16px] font-extrabold uppercase">
              Skills & Technologies
            </h2>

            <div className="mt-2 space-y-2 text-[14px]">
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

          {/* Experience – Page 1 */}
          <section>
            <h2 className="text-[16px] font-extrabold uppercase">
              Professional Experience
            </h2>

            <div className="mt-4 space-y-6 text-[14px]">

              {/* MJS */}
              <div>
                <p className="font-semibold">Intern, MJS Maritime Limited</p>
                <p className="opacity-70">June 2024 – December 2024 | On-site</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Assisted senior engineers in assessing and mitigating marine corrosion.</li>
                  <li>Gained hands-on experience in preventive maintenance strategies.</li>
                </ul>
              </div>

              {/* Ron */}
              <div>
                <p className="font-semibold">Ron’s Crypto Therapy</p>
                <p className="opacity-70">December 2024 | Remote, United States</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Built crypto payment platform integrated with mentorship services.</li>
                  <li>Implemented fiat-to-crypto transaction flows.</li>
                  <li>Designed scalable frontend architecture.</li>
                  <li className="opacity-70">Technologies: React, TypeScript</li>
                </ul>
              </div>

              {/* Create Bawo */}
              <div>
                <p className="font-semibold">
                  Create-Bawo-Frontend (Open Source CLI)
                </p>
                <p className="opacity-70">2024 | Global, Open Source</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Zero-config CLI for React and Vite projects.</li>
                  <li>Automated Tailwind, GSAP and state tooling.</li>
                  <li className="opacity-70">Technologies: Node.js, JavaScript</li>
                </ul>
              </div>

            </div>
          </section>
        </section>

        {/* ================= PAGE 2 ================= */}
        <section className="space-y-10">

          {/* TechJojo */}
          <div>
            <p className="font-semibold">TechJojo (Gadget E-Commerce Platform)</p>
            <p className="opacity-70">2023 | Remote, Nigeria</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Built WhatsApp e-commerce flow.</li>
              <li>Google Sheets used as backend.</li>
              <li className="opacity-70">Stack: React, Google Sheets API</li>
            </ul>
          </div>

          {/* Freelance */}
          <div>
            <p className="font-semibold">Software Engineer (Freelance)</p>
            <p className="opacity-70">December 2023 | Remote</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Built crypto dashboards and backend systems.</li>
              <li>Cross-chain NFT tooling.</li>
              <li className="opacity-70">Stack: Node.js, MongoDB</li>
            </ul>
          </div>

          {/* Chucksale */}
          <div>
            <p className="font-semibold">Core Team Member, Chucksale</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Base ecosystem crypto platform.</li>
              <li>Deployment management.</li>
            </ul>
          </div>

          {/* FrontCartel */}
          <div>
            <p className="font-semibold">Software Developer, FrontCartel</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>NFT rarity checker tools.</li>
              <li>SEO optimized landing pages.</li>
            </ul>
          </div>

        </section>
      </div>
    </div>
    
  );
}
