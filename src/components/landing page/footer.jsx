import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="container-main mt-20 pb-10">
      <div
        className="
          flex flex-col gap-4
          border-t border-white/10
          pt-6
          text-[13px] md:text-sm
        "
      >
        {/* Top row */}
        <div className="flex items-center justify-between">
          <p className="opacity-70">
            © {new Date().getFullYear()} Joseph Bawo
          </p>

          <div className="flex items-center gap-4">
            <SocialLink
              href="https://github.com/Joebakid"
              label="GitHub"
            >
              <FaGithub />
            </SocialLink>

            <SocialLink
              href="https://www.linkedin.com/in/josephbawo/"
              label="LinkedIn"
            >
              <FaLinkedin />
            </SocialLink>

            <SocialLink
              href="https://x.com/josephbawo2"
              label="Twitter / X"
            >
              <FaXTwitter />
            </SocialLink>
          </div>
        </div>

        {/* Bottom row */}
        <p className="opacity-50">
          Software developer building practical, scalable systems.
        </p>
      </div>
    </footer>
  );
}

/* ---------------- Helpers ---------------- */

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      aria-label={label}
      className="
        text-base
        hover:opacity-70
        transition-opacity
      "
    >
      {children}
    </a>
  );
}
