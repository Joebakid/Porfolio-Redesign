export default function Resume() {
  return (
    <section className="container-main mt-12 space-y-10">
      {/* Header */}
      <header className="space-y-1">
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
        <h2 className="text-[16px] font-extrabold uppercase md:text-xl">
          Education
        </h2>

        <div className="mt-2 space-y-1 text-[14px] md:text-[15px]">
          <p className="font-semibold">
            Federal University of Petroleum Resources, Effurun
          </p>
          <p>Bachelor of Engineering (B.Eng), Marine Engineering</p>
          <p className="opacity-70">January 2019 – October 2026</p>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-[16px] font-extrabold uppercase md:text-xl">
          Skills & Technologies
        </h2>

        <div className="mt-2 space-y-2 text-[14px] md:text-[15px]">
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
        <h2 className="text-[16px] font-extrabold uppercase md:text-xl">
          Professional Experience
        </h2>

        <div className="mt-4 space-y-6 text-[14px] md:text-[15px]">
          {/* MJS Maritime */}
          <div>
            <p className="font-semibold">
              Intern, MJS Maritime Limited
            </p>
            <p className="opacity-70">
              June 2024 – December 2024 | On-site
            </p>

            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                Assisted senior engineers in assessing and mitigating marine
                corrosion on vessels.
              </li>
              <li>
                Gained hands-on experience in preventive maintenance strategies
                and vessel machinery support.
              </li>
            </ul>
          </div>

          {/* Freelance */}
          <div>
            <p className="font-semibold">
              Software Engineer (Freelance)
            </p>
            <p className="opacity-70">
              December 2023  | Remote, Nigeria
            </p>

            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                Led a team of three in building and deploying a medium-scale
                crypto application and admin dashboard.
              </li>
              <li>
                Designed and implemented scalable backend architecture,
                database schemas, and RESTful APIs.
              </li>
              <li>
                Developed staking logic to calculate winnings and payout accuracy.
              </li>
              <li>
                Built cross-chain NFT data export features for efficient swaps
                and sales.
              </li>
              <li>
                Automated user communications via a mailing service.
              </li>
              <li className="opacity-70">
                Technologies: JavaScript, Node.js, MongoDB
              </li>
            </ul>
          </div>

          {/* Chucksale */}
          <div>
            <p className="font-semibold">
              Core Team Member, Chucksale
            </p>
            <p className="opacity-70">
              January 2024  | Remote, Nigeria
            </p>

            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                Oversaw development of the Chucksale landing page and crypto
                application for the Base ecosystem.
              </li>
              <li>
                Led developers and designers through planning and release cycles.
              </li>
              <li>
                Managed deployments and compute resources during high traffic.
              </li>
              <li className="opacity-70">
                Technologies: JavaScript, Node.js, Express.js, React.js,
                PostgreSQL, Travis CI
              </li>
            </ul>
          </div>

          {/* FrontCartel */}
          <div>
            <p className="font-semibold">
              Software Developer, FrontCartel
            </p>
            <p className="opacity-70">
              December 2023  | Remote, Nigeria
            </p>

            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                Built NFT rarity checker tools for verifying digital assets.
              </li>
              <li>
                Designed SEO-optimized landing pages to improve web traffic.
              </li>
              <li className="opacity-70">
                Technologies: JavaScript, React.js, Tailwind CSS
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
