export default function Resume() {
  return (
    <>
      {/* Download Button */}
      <div className="container-main flex justify-end mb-4">
        <button
          onClick={() => window.open("/resume/pdf", "_blank")}
          className="
            px-1 py-1 text-sm font-semibold rounded-lg border border-blue-600 text-blue-600
            transition hover:bg-blue-600 hover:text-white
            sm:px-4 sm:py-2 sm:text-[14px]
          "
        >
          Download Resume (PDF)
        </button>
      </div>

      {/* ================= NORMAL UI RESUME ================= */}
      <div className="container-main space-y-20">

        {/* ================= PAGE 1 ================= */}
        <section className="space-y-10">

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

          {/* Experience */}
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
                  <li>Designed responsive and scalable frontend architecture.</li>
                  <li>Collaborated with stakeholders.</li>
                  <li className="opacity-70">Technologies: React, TypeScript</li>
                </ul>
              </div>

              {/* Create Bawo */}
              <div className="py-3.5 px-3.5">
                <p className="font-semibold">Create-Bawo-Frontend (Open Source CLI)</p>
                <p className="opacity-70">2024 | Global, Open Source</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Zero-configuration CLI for React and Vite.</li>
                  <li>Automated Tailwind, Zustand/Redux, GSAP.</li>
                  <li>Template generation.</li>
                  <li>Reduced setup time drastically.</li>
                  <li className="opacity-70">Technologies: Node.js, JavaScript</li>
                </ul>
              </div>

              {/* TechJojo */}
              <div className="py-3.5 px-3.5">
                <p className="font-semibold">TechJojo (Gadget E-Commerce Platform)</p>
                <p className="opacity-70">2023 | Remote, Nigeria</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>WhatsApp ordering flow.</li>
                  <li>Google Sheets backend.</li>
                  <li>Real-time syncing.</li>
                  <li className="opacity-70">Technologies: React, Google Sheets API</li>
                </ul>
              </div>

              {/* Freelance */}
              <div className="py-3.5 px-3.5">
                <p className="font-semibold">Software Engineer (Freelance)</p>
                <p className="opacity-70">December 2023 | Remote</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Crypto dashboards and APIs.</li>
                  <li>Cross-chain NFT tools.</li>
                  <li className="opacity-70">Technologies: Node.js, MongoDB</li>
                </ul>
              </div>

              {/* Chucksale */}
              <div className="py-3.5 px-3.5">
                <p className="font-semibold">Core Team Member, Chucksale</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Base ecosystem crypto platform.</li>
                  <li>Deployment management.</li>
                </ul>
              </div>

              {/* FrontCartel */}
              <div className="py-3.5 px-3.5">
                <p className="font-semibold">Software Developer, FrontCartel</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>NFT rarity checker tools.</li>
                  <li>SEO landing pages.</li>
                  <li className="opacity-70">Technologies: React, Tailwind</li>
                </ul>
              </div>

            </div>
          </section>
        </section>
      </div>
    </>
  );
}
