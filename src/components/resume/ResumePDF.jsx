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
        {/* Experience – Page 1 */}
<section>
  <h2 className="text-[16px] font-extrabold uppercase">
    Professional Experience
  </h2>

  <div className="mt-4 space-y-6 text-[14px]">

    {/* Base Wallet Checker */}
    <div>
      <p className="font-semibold">
        Founder & Lead Engineer — Base Wallet Checker (Web3 Analytics Platform)
      </p>
      <p className="opacity-70">2024 – Present | Remote</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          Built a production-grade wallet analytics platform for the Base blockchain,
          enabling balance tracking, transaction analysis, token holdings, and protocol usage insights.
        </li>
        <li>
          Integrated wagmi, viem, and Coinbase OnchainKit for wallet connections,
          signer detection, and secure Web3 interactions.
        </li>
        <li>
          Implemented automatic detection of smart contracts, routers, NFTs, and DeFi protocols.
        </li>
        <li>
          Designed responsive dashboards optimized for mobile performance and clarity.
        </li>
        <li className="opacity-70">
          Stack: Next.js, TypeScript, wagmi, viem, Tailwind CSS, OnchainKit
        </li>
      </ul>
    </div>

    {/* Ron’s Crypto Therapy */}
    <div>
      <p className="font-semibold">
        Frontend Engineer — Ron’s Crypto Therapy (Fintech Platform)
      </p>
      <p className="opacity-70">Dec 2024 | Remote, United States</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          Developed a crypto payment interface integrated with mentorship services and gated content access.
        </li>
        <li>
          Implemented secure fiat-to-crypto transaction workflows and wallet integrations.
        </li>
        <li>
          Built scalable component architecture and responsive layouts.
        </li>
        <li className="opacity-70">
          Stack: React, TypeScript, Web3 APIs
        </li>
      </ul>
    </div>

    {/* create-bawo-frontend */}
    <div>
      <p className="font-semibold">
        Creator & Maintainer — create-bawo-frontend (Open Source CLI Tool)
      </p>
      <p className="opacity-70">2024 – Present | Global Open Source</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          Architected a zero-configuration CLI that scaffolds production-ready React,
          Vite, and Next.js applications in seconds.
        </li>
        <li>
          Automated setup for Tailwind CSS, state management, animations, linting,
          and project structure.
        </li>
        <li>
          Maintained documentation, release pipelines, and template versioning.
        </li>
        <li className="opacity-70">
          Stack: Node.js, JavaScript, TypeScript, Inquirer
        </li>
      </ul>
    </div>

  </div>
</section>


       
       {/* ================= PAGE 2 ================= */}
<section className="space-y-8">

  {/* ChronoliteNG */}
  <div>
    <p className="font-semibold">
      Founder & Product Engineer — ChronoliteNG (E-Commerce Platform)
    </p>
    <p className="opacity-70">2023 – Present | Nigeria</p>
    <ul className="list-disc pl-5 mt-2 space-y-1">
      <li>
        Built a full-featured watch e-commerce platform with dynamic catalog management and mobile-first UX.
      </li>
      <li>
        Implemented WhatsApp ordering automation, discount logic, and cart workflows.
      </li>
      <li className="opacity-70">
        Stack: React, Tailwind CSS, JavaScript
      </li>
    </ul>
  </div>

  {/* TechJojo */}
  <div>
    <p className="font-semibold">
      Founder & Engineer — TechJojo (Gadget Commerce Platform)
    </p>
    <p className="opacity-70">2023 – 2024 | Nigeria</p>
    <ul className="list-disc pl-5 mt-2 space-y-1">
      <li>
        Built a lightweight commerce platform powered by Google Sheets as a real-time backend.
      </li>
      <li>
        Implemented inventory syncing and WhatsApp checkout automation.
      </li>
      <li className="opacity-70">
        Stack: React, Google Sheets API
      </li>
    </ul>
  </div>

  {/* Engineering Project */}
  <div>
    <p className="font-semibold">
      Lead Design Engineer — MV Blue Ocean Water Hyacinth Harvester (Academic Project)
    </p>
    <p className="opacity-70">2024 – Present | Nigeria</p>
    <ul className="list-disc pl-5 mt-2 space-y-1">
      <li>
        Led conveyor system design for biomass intake, transport efficiency, and clog resistance.
      </li>
      <li>
        Performed CAD modelling, mechanical calculations, and system validation.
      </li>
      <li className="opacity-70">
        Stack: SolidWorks, AutoCAD, Mechanical Design
      </li>
    </ul>
  </div>

  {/* Freelance */}
  <div>
    <p className="font-semibold">Software Engineer — Freelance</p>
    <p className="opacity-70">2023 – Present | Remote</p>
    <ul className="list-disc pl-5 mt-2 space-y-1">
      <li>
        Delivered crypto dashboards, APIs, NFT tools, landing pages, and internal platforms.
      </li>
      <li>
        Supported deployment pipelines, performance optimization, and scaling.
      </li>
      <li className="opacity-70">
        Stack: Node.js, MongoDB, React
      </li>
    </ul>
  </div>

</section>

      </div>
    </div>
    
  );
}
