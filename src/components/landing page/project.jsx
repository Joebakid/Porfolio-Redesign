export default function Projects() {
  const projects = [
    {
  title: "create-bawo-frontend (CLI Tool)",
  description:
    "A zero-configuration command-line tool that scaffolds production-ready React, Vite, and Next.js applications in seconds. Automatically configures Tailwind CSS, Zustand/Redux state management, GSAP and Framer Motion animations, folder structure, linting, and environment setup, significantly reducing developer onboarding and project bootstrap time.",
  stack: "Node.js, JavaScript, TypeScript, Inquirer, Vite, React, Tailwind CSS",
  live: "https://create-bawo-frontend.vercel.app/",
  github: "https://github.com/Joebakid/create-bawo-frontend",
},

    {
      title: "Tetris Game",
      description:
        "A classic Tetris game built using modern web technologies with smooth controls, intuitive UI, and responsive design.",
      stack: "TypeScript, Tailwind CSS, shadcn/ui",
      live: "https://tetris-chuck.vercel.app/",
      github: "https://github.com/Joebakid/tetris-game",
    },
    {
      title: "Ron’s Crypto Therapy",
      description:
        "A crypto payment platform integrated with mentorship services, supporting fiat-to-crypto transactions and real-time wallet updates.",
      stack: "React, TypeScript",
      live: "https://ronscryptotherapy.com/",
      github:
        "https://github.com/Joebakid/Ron-s-Crypto-Therapy---Master-Crypto-Trading",
    },
    {
      title: "PDF House",
      description:
        "An academic resource hub for students to access and download textbooks, solutions, and lecture notes.",
      stack: "React, Tailwind CSS",
      live: "https://pdfhouse.vercel.app/",
      github: "https://github.com/Joebakid/PDFHOUSE",
    },
    {
  title: "Base Wallet Checker",
  description:
    "A comprehensive on-chain wallet analytics platform for the Base blockchain that allows users to analyze wallet balances, transaction history, token holdings, smart contract interactions, and protocol usage. Features automatic detection of routers, NFTs, dApps, and DeFi activity, with seamless wallet connection and Farcaster Mini-App integration for social distribution.",
  stack: "Next.js, React, TypeScript, wagmi, viem, Coinbase OnchainKit, Tailwind CSS",
  live: "https://base-walletchecker.vercel.app/",
  github: "https://github.com/Joebakid/BaseWalletChecker",
},

    {
      title: "ChronoliteNG",
      description:
        "A full e-commerce platform with Paystack integration for selling watches, bags, tees, and caps.",
      stack: "React, Tailwind CSS",
      live: "https://chronolite.com.ng/",
      github: "https://github.com/Joebakid/chronoliteNG",
    },
    {
      title: "NFT Rarity Checker",
      description:
        "A decentralized NFT verification platform for checking rarity, metadata, and authenticity.",
      stack: "Next.js",
      live: "https://www.fronkcartel.com/",
      github: "https://github.com/Fronk-Cartel/front_cartel",
    },
    {
      title: "ChuckBot",
      description:
        "A Telegram trading bot built to automate crypto trading on the Base blockchain with real-time analysis.",
      stack: "TypeScript, Node.js",
      live: "https://chuckbot.xyz/",
      github: "https://github.com/Joebakid/BluBot",
    },
    {
      title: "Tic Tac Toe",
      description:
        "A simple and interactive Tic Tac Toe game built for the web with clean UI and clear game logic.",
      stack: "React",
      live: "https://tic-tac-tan-one.vercel.app/",
      github: "https://github.com/Joebakid/tic-tac",
    },
  ];

  return (
    <section className="container-main mt-12">
      <h2 className="text-[16px] font-extrabold mb-4 uppercase md:text-2xl">
        Projects.
      </h2>

      {/* <p className="py-6">I like building things</p> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex h-full flex-col rounded-xl border border-[color:var(--border)] p-4 md:p-6"
          >
            <h3 className="font-extrabold text-[15px] md:text-lg">
              {project.title}
            </h3>

            <p className="mt-2 text-[14px] leading-relaxed md:text-[16px]">
              {project.description}
            </p>

            <p className="mt-2 text-xs opacity-70">
              {project.stack}
            </p>

            {/* Push links to bottom */}
            <div className="mt-auto pt-4 flex items-center gap-4 text-sm">
              <a
                href={project.live}
                target="_blank"
                className="font-semibold border rounded-xl px-4 flex text-center py-0.5 text-[color:var(--link-accent)]"
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                className="font-semibold border rounded-xl px-4 py-0.5 text-[color:var(--link-accent)]"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
