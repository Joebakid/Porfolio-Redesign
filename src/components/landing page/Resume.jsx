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
        {/* Experience */}
<section>
  <h2 className="text-[16px] font-extrabold uppercase md:text-xl py-3.5 px-3.5">
    Professional Experience
  </h2>

  <div className="mt-4 space-y-10 text-[14px] md:text-[15px]">

    {/* Base Wallet Checker */}
    <div className="py-3.5 px-3.5">
      <p className="font-semibold">
        Founder & Lead Engineer — Base Wallet Checker (Web3 Analytics Platform)
      </p>
      <p className="opacity-70">2024 | Remote</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          Designed and built a production-grade wallet analytics platform for the Base blockchain,
          enabling users to analyze wallet balances, transaction histories, token holdings, and on-chain activity.
        </li>
        <li>
          Integrated wagmi, viem, Coinbase OnchainKit, and Farcaster Mini-App SDK to support wallet
          connections, signer detection, and embedded social distribution.
        </li>
        <li>
          Implemented smart contract detection logic to identify dApps, routers
          (Uniswap, Aerodrome, Stargate), NFT contracts, and protocol interactions automatically.
        </li>
        <li>
          Built dynamic transaction parsing and formatting pipelines to improve data readability for
          non-technical crypto users.
        </li>
        <li>
          Deployed and optimized builds on Vercel with environment variable management,
          caching strategies, and error monitoring.
        </li>
        <li>
          Designed responsive dashboards with Tailwind CSS, GSAP animations,
          and performance-focused rendering for mobile-first users.
        </li>
        <li className="opacity-70">
          Technologies: Next.js, React, TypeScript, wagmi, viem, OnchainKit, Tailwind CSS, GSAP, Vercel
        </li>
      </ul>
    </div>

    {/* Create Bawo Frontend */}
    <div className="py-3.5 px-3.5">
      <p className="font-semibold">
        Creator & Maintainer — create-bawo-frontend (Open Source CLI Tool)
      </p>
      <p className="opacity-70">2024 – Present | Global Open Source</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          Architected and published a zero-configuration CLI tool that scaffolds production-ready
          React, Vite, and Next.js applications in seconds.
        </li>
        <li>
          Automated project bootstrapping including Tailwind CSS, Zustand/Redux,
          GSAP, Framer Motion, ESLint, folder structure, and environment setup.
        </li>
        <li>
          Built interactive CLI prompts, template generators, and validation logic
          to reduce onboarding friction for developers.
        </li>
        <li>
          Maintained documentation, versioning, release pipelines, and community feedback cycles.
        </li>
        <li>
          Continuously refactored templates to support modern tooling versions and performance optimizations.
        </li>
        <li className="opacity-70">
          Technologies: Node.js, JavaScript, TypeScript, Inquirer, Vite, GitHub Actions
        </li>
      </ul>
    </div>

    {/* ChronoliteNG */}
    <div className="py-3.5 px-3.5">
      <p className="font-semibold">
        Founder & Product Engineer — ChronoliteNG (Watch E-Commerce Platform)
      </p>
      <p className="opacity-70">2023 – Present | Nigeria</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          Built a full e-commerce frontend for a watch retail brand using React and Tailwind,
          supporting dynamic product catalogs driven by JSON feeds.
        </li>
        <li>
          Implemented WhatsApp ordering automation, dynamic pricing logic,
          discount campaigns, promotional rules, and cart state management.
        </li>
        <li>
          Integrated vendor feeds, image optimization pipelines, and lazy-loading
          strategies to improve load performance on low-bandwidth devices.
        </li>
        <li>
          Designed admin-friendly product update workflows without requiring backend engineers.
        </li>
        <li>
          Optimized UX conversion funnels for mobile users and Nigerian payment behaviors.
        </li>
        <li className="opacity-70">
          Technologies: React, Tailwind CSS, JavaScript, ImageKit, WhatsApp API
        </li>
      </ul>
    </div>

    {/* TechJojo */}
    <div className="py-3.5 px-3.5">
      <p className="font-semibold">
       Frontend Engineer — TechJojo (Gadget Commerce Platform)
      </p>
      <p className="opacity-70">2025 | Lagos, Nigeria</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          Built a lightweight commerce platform powered by Google Sheets as a live backend database.
        </li>
        <li>
          Implemented real-time inventory syncing, product updates,
          and WhatsApp checkout flows.
        </li>
        <li>
          Reduced operational overhead by eliminating the need for traditional backend infrastructure.
        </li>
        <li className="opacity-70">
          Technologies: React, Google Sheets API, JavaScript
        </li>
      </ul>
    </div>

    {/* Ron */}
    <div className="py-3.5 px-3.5">
      <p className="font-semibold">
        Frontend Engineer — Ron’s Crypto Therapy (Fintech Platform)
      </p>
      <p className="opacity-70">Dec 2024 | Remote, United States</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          Developed a crypto payment interface integrated with mentorship services and digital product access.
        </li>
        <li>
          Implemented secure fiat-to-crypto transaction flows and wallet integrations.
        </li>
        <li>
          Designed responsive UI architecture with scalable component systems.
        </li>
        <li>
          Collaborated directly with business stakeholders to translate product requirements into features.
        </li>
        <li className="opacity-70">
          Technologies: React, TypeScript, Web3 APIs
        </li>
      </ul>
    </div>

    {/* Engineering Project */}
    <div className="py-3.5 px-3.5">
      <p className="font-semibold">
        Lead Design Engineer — MV Blue Ocean Water Hyacinth Harvester (Academic Engineering Project)
      </p>
      <p className="opacity-70">2025 Oct – 2026 Jan | Nigeria</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          Led the conveyor system design subgroup responsible for biomass intake,
          transport efficiency, and clog resistance.
        </li>
        <li>
          Conducted CAD modelling using SolidWorks and AutoCAD to design conveyor geometry,
          roller alignment, structural supports, and motion studies.
        </li>
        <li>
          Performed mechanical calculations including belt tension, load distribution,
          shaft sizing, bearing selection, and power transmission analysis.
        </li>
        <li>
          Integrated safety, manufacturability, and Nigerian maritime compliance considerations.
        </li>
        <li>
          Produced structured technical documentation, drawings, and validation reports.
        </li>
        <li className="opacity-70">
          Technologies: SolidWorks, AutoCAD, Mechanical Analysis, Technical Documentation
        </li>
      </ul>
    </div>

    {/* Freelance */}
    <div className="py-3.5 px-3.5">
      <p className="font-semibold">
        Software Engineer — Freelance
      </p>
      <p className="opacity-70">2023  | Remote</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          Built crypto dashboards, wallet tools, NFT utilities, landing pages, and internal admin tools.
        </li>
        <li>
          Developed APIs, authentication flows, and database schemas for client projects.
        </li>
        <li>
          Assisted startups with deployment pipelines, bug fixing, optimization, and scalability.
        </li>
        <li className="opacity-70">
          Technologies: Node.js, MongoDB, React, REST APIs
        </li>
      </ul>
    </div>

  </div>
</section>

        </section>
      </div>
    </>
  );
}
