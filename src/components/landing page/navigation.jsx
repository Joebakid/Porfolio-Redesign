import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../theme/theme-context";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { gsap } from "gsap";

const LANGS = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "es", label: "ES" },
  { code: "de", label: "DE" },
  { code: "ru", label: "RU" },
  { code: "zh-CN", label: "CN" },
  { code: "ja", label: "JP" },
  { code: "ko", label: "KR" },
];

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [lang, setLang] = useState(
    () => localStorage.getItem("lang") || "en"
  );

  const navRef = useRef(null);

  /* -------- Scroll hide / show -------- */
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

  /* -------- Language Change -------- */
  function changeLang(e) {
    const value = e.target.value;
    setLang(value);

    if (window.setSiteLanguage) {
      window.setSiteLanguage(value);
    }
  }

  return (
    <nav
      ref={navRef}
      className={`print:hidden fixed top-4 inset-x-0 z-50 flex justify-center transition-all duration-300 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className="
          flex items-center gap-3
          px-4 py-2
          max-w-max
          rounded-full
          backdrop-blur-xl
          shadow-lg
          border border-white/10
        "
        style={{ background: "var(--nav-bg)" }}
      >
        <NavItem to="/" text="Home" />
        <NavItem to="/resume" text="Resume" />
        <NavItem to="/bloglist" text="Blog" />

        <IconLink href="https://github.com/Joebakid" label="GitHub">
          <FaGithub />
        </IconLink>

        <IconLink
          href="https://www.linkedin.com/in/josephbawo/"
          label="LinkedIn"
        >
          <FaLinkedin />
        </IconLink>

        <IconLink href="https://x.com/dogexdrc20" label="Twitter / X">
          <FaXTwitter />
        </IconLink>

        {/* 🌍 Language Selector */}
        <select
          value={lang}
          onChange={changeLang}
          className="
            ml-1
            text-[11px] md:text-xs
            px-2 py-1
            rounded-full
            border border-white/20
            bg-transparent
            backdrop-blur
            hover:opacity-80
            transition
            cursor-pointer
          "
        >
          {LANGS.map((l) => (
            <option key={l.code} value={l.code} className="bg-black">
              {l.label}
            </option>
          ))}
        </select>

        {/* 🌗 Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="
            ml-1
            text-[11px] md:text-xs
            px-2 py-1
            rounded-full
            border border-white/20
            hover:opacity-70
            transition-opacity
            cursor-pointer
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
        transition-all duration-200
        hover:font-bold
        ${isActive ? "font-bold opacity-100" : "opacity-80"}
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
      className="text-sm md:text-base hover:opacity-70 transition-opacity flex items-center"
    >
      {children}
    </a>
  );
}
