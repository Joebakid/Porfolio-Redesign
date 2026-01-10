const resumeData = {
  personal: {
    name: "Joseph Bawo",
    email: "josephbawo@gmail.com",
    github: "https://github.com/Joebakid",
  },

  education: [
    {
      school: "Federal University of Petroleum Resources, Effurun",
      degree: "Bachelor of Engineering (B.Eng), Marine Engineering",
      period: "January 2019 – October 2026",
    },
  ],

  skills: {
    proficient: [
      "JavaScript",
      "React.js",
      "Next.js",
      "HTML/CSS",
      "Tailwind CSS",
      "MongoDB",
    ],
    familiar: [
      "Blockchain (Ethereum, Base, Solana)",
    ],
  },

  experience: [
    {
      company: "Base Wallet Checker",
      role: "Founder & Lead Engineer",
      location: "Remote",
      period: "2024",
      description: "Web3 Analytics Platform",
      bullets: [
        "Designed and built a production-grade wallet analytics platform for the Base blockchain, enabling users to analyze wallet balances, transaction histories, token holdings, and on-chain activity.",
        "Integrated wagmi, viem, Coinbase OnchainKit, and Farcaster Mini-App SDK to support wallet connections, signer detection, and embedded social distribution.",
        "Implemented smart contract detection logic to identify dApps, routers (Uniswap, Aerodrome, Stargate), NFT contracts, and protocol interactions automatically.",
        "Built dynamic transaction parsing and formatting pipelines to improve data readability for non-technical crypto users.",
        "Deployed and optimized builds on Vercel with environment variable management, caching strategies, and error monitoring.",
        "Designed responsive dashboards with Tailwind CSS, GSAP animations, and performance-focused rendering for mobile-first users.",
      ],
      technologies:
        "Next.js, React, TypeScript, wagmi, viem, OnchainKit, Tailwind CSS, GSAP, Vercel",
    },

    {
      company: "create-bawo-frontend",
      role: "Creator & Maintainer",
      location: "Global Open Source",
      period: "2024 – Present",
      description: "Open Source CLI Tool",
      bullets: [
        "Architected and published a zero-configuration CLI tool that scaffolds production-ready React, Vite,Vue and Next.js applications in seconds.",
        "Automated project bootstrapping including Tailwind CSS, Zustand/Redux,Pinia[Vue data Management], GSAP, Framer Motion, ESLint, folder structure, and environment setup.",
        "Built interactive CLI prompts, template generators, and validation logic to reduce onboarding friction for developers.",
        "Maintained documentation, versioning, release pipelines, and community feedback cycles.",
        "Continuously refactored templates to support modern tooling versions and performance optimizations.",
      ],
      technologies:
        "Node.js, JavaScript, TypeScript, Inquirer, Vite, GitHub Actions",
    },

    {
      company: "ChronoliteNG",
      role: "Founder & Product Engineer",
      location: "Nigeria",
      period: "2023 – Present",
      description: "Watch E-Commerce Platform",
      bullets: [
        "Built a full e-commerce frontend for a watch retail brand using React and Tailwind, supporting dynamic product catalogs driven by JSON feeds.",
        "Implemented WhatsApp ordering automation, dynamic pricing logic, discount campaigns, promotional rules, and cart state management.",
        "Integrated vendor feeds, image optimization pipelines, and lazy-loading strategies to improve load performance on low-bandwidth devices.",
        "Designed admin-friendly product update workflows without requiring backend engineers.",
        "Optimized UX conversion funnels for mobile users and Nigerian payment behaviors.",
      ],
      technologies:
        "React, Tailwind CSS, JavaScript, ImageKit, WhatsApp API",
    },

    {
      company: "TechJojo",
      role: "Frontend Engineer",
      location: "Lagos, Nigeria",
      period: "2025",
      description: "Gadget Commerce Platform",
      bullets: [
        "Built a lightweight commerce platform powered by Google Sheets as a live backend database.",
        "Implemented real-time inventory syncing, product updates, and WhatsApp checkout flows.",
        "Reduced operational overhead by eliminating the need for traditional backend infrastructure.",
      ],
      technologies: "React, Google Sheets API, JavaScript",
    },

    {
      company: "Ron’s Crypto Therapy",
      role: "Frontend Engineer",
      location: "Remote, United States",
      period: "Dec 2024",
      description: "Fintech Platform",
      bullets: [
        "Developed a crypto payment interface integrated with mentorship services and digital product access.",
        "Implemented secure fiat-to-crypto transaction flows and wallet integrations.",
        "Designed responsive UI architecture with scalable component systems.",
        "Collaborated directly with business stakeholders to translate product requirements into features.",
      ],
      technologies: "React, TypeScript, Web3 APIs",
    },

    {
      company: "MV Blue Ocean Water Hyacinth Harvester",
      role: "Lead Design Engineer",
      location: "Nigeria",
      period: "Oct 2025 – Jan 2026",
      description: "Academic Engineering Project",
      bullets: [
        "Led the conveyor system design subgroup responsible for biomass intake, transport efficiency, and clog resistance.",
        "Conducted CAD modelling using SolidWorks and AutoCAD to design conveyor geometry, roller alignment, structural supports, and motion studies.",
        "Performed mechanical calculations including belt tension, load distribution, shaft sizing, bearing selection, and power transmission analysis.",
        "Integrated safety, manufacturability, and Nigerian maritime compliance considerations.",
        "Produced structured technical documentation, drawings, and validation reports.",
      ],
      technologies:
        "SolidWorks, AutoCAD, Mechanical Analysis, Technical Documentation",
    },

    {
      company: "Freelance",
      role: "Software Engineer",
      location: "Remote",
      period: "2023",
      description: "Independent Contract Work",
      bullets: [
        "Built crypto dashboards, wallet tools, NFT utilities, landing pages, and internal admin tools.",
        "Developed APIs, authentication flows, and database schemas for client projects.",
        "Assisted startups with deployment pipelines, bug fixing, optimization, and scalability.",
      ],
      technologies: "Node.js, MongoDB, React, REST APIs",
    },
  ],
};

export default resumeData;
