import resumeData from ".././../data/resumeData";

export default function Resume() {
  const { personal, education, skills, experience } = resumeData;

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
        <section className="space-y-10">

          {/* Header */}
          <header className="space-y-1 py-3.5 px-3.5">
            <h1 className="text-xl font-extrabold md:text-2xl">
              {personal.name}
            </h1>

            <p className="text-[14px] md:text-[15px] opacity-80">
              <a
                href={`mailto:${personal.email}`}
                className="underline text-[color:var(--link-accent)]"
              >
                {personal.email}
              </a>{" "}
              |{" "}
              <a
                href={personal.github}
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

            {education.map((edu, index) => (
              <div
                key={index}
                className="mt-2 space-y-1 text-[14px] py-3.5 px-3.5 md:text-[15px]"
              >
                <p className="font-semibold">{edu.school}</p>
                <p>{edu.degree}</p>
                <p className="opacity-70">{edu.period}</p>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-[16px] font-extrabold uppercase md:text-xl py-3.5 px-3.5">
              Skills & Technologies
            </h2>

            <div className="mt-2 space-y-2 py-3.5 px-3.5 text-[14px] md:text-[15px]">
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

          {/* Experience */}
          <section>
            <h2 className="text-[16px] font-extrabold uppercase md:text-xl py-3.5 px-3.5">
              Professional Experience
            </h2>

            <div className="mt-4 space-y-10 text-[14px] md:text-[15px]">
              {experience.map((job, index) => (
                <div key={index} className="py-3.5 px-3.5">
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

                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    {job.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}

                    <li className="opacity-70">
                      Technologies: {job.technologies}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </section>

        </section>
      </div>
    </>
  );
}
