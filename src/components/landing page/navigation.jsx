import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../theme/theme-context";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300
      ${hidden ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <div
        className="
          flex items-center gap-4
          px-5 py-2
          rounded-full
          backdrop-blur-xl
          shadow-lg
          border border-white/10
        "
        style={{ background: "var(--nav-bg)" }}
      >
        {/* Internal routes */}
        <NavItem to="/" text="Home" />
        <NavItem to="/bloglist" text="Blog" />
        <NavItem to="/resume" text="Resume" />

        {/* External icons */}
        <IconLink href="https://github.com/Joebakid" label="GitHub">
          <FaGithub />
        </IconLink>

        <IconLink
          href="https://www.linkedin.com/in/josephbawo/"
          label="LinkedIn"
        >
          <FaLinkedin />
        </IconLink>

        <IconLink
          href="https://x.com/dogexdrc20"
          label="Twitter / X"
        >
          <FaXTwitter />
        </IconLink>

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === "light" ? "gray" : "light")}
          className="
            ml-1
            text-[11px] md:text-xs
            px-2 py-1
            rounded-full
            border border-white/20
            hover:opacity-70
          "
        >
          {theme === "light" ? "Gray" : "Light"}
        </button>
      </div>
    </nav>
  );
}

/* ---------------- Helpers ---------------- */

function NavItem({ to, text }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        text-[11px] md:text-sm
        font-medium
        transition-opacity
        hover:opacity-70
        ${isActive ? "opacity-100" : "opacity-80"}
        `
      }
    >
      {text}
    </NavLink>
  );
}

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="
        text-sm md:text-base
        hover:opacity-70
        transition-opacity
        flex items-center
      "
    >
      {children}
    </a>
  );
}
