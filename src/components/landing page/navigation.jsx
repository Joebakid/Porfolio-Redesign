import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../theme/theme-context";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { gsap } from "gsap";

const LANGS = [
  // 🌍 Global
  { code: "en", label: "EN" }, // English
  { code: "fr", label: "FR" }, // French
  { code: "es", label: "ES" }, // Spanish
  { code: "de", label: "DE" }, // German
  { code: "pt", label: "PT" }, // Portuguese
  { code: "it", label: "IT" }, // Italian
  { code: "nl", label: "NL" }, // Dutch
  { code: "sv", label: "SV" }, // Swedish
  { code: "no", label: "NO" }, // Norwegian
  { code: "da", label: "DA" }, // Danish
  { code: "fi", label: "FI" }, // Finnish
  { code: "pl", label: "PL" }, // Polish
  { code: "cs", label: "CS" }, // Czech
  { code: "sk", label: "SK" }, // Slovak
  { code: "hu", label: "HU" }, // Hungarian
  { code: "ro", label: "RO" }, // Romanian
  { code: "bg", label: "BG" }, // Bulgarian
  { code: "el", label: "EL" }, // Greek
  { code: "tr", label: "TR" }, // Turkish
  { code: "uk", label: "UK" }, // Ukrainian
  { code: "ru", label: "RU" }, // Russian

  // 🌍 Asia
  { code: "zh-CN", label: "CN" }, // Chinese Simplified
  { code: "zh-TW", label: "TW" }, // Chinese Traditional
  { code: "ja", label: "JP" }, // Japanese
  { code: "ko", label: "KR" }, // Korean
  { code: "hi", label: "HI" }, // Hindi
  { code: "bn", label: "BN" }, // Bengali
  { code: "ur", label: "UR" }, // Urdu
  { code: "ta", label: "TA" }, // Tamil
  { code: "te", label: "TE" }, // Telugu
  { code: "th", label: "TH" }, // Thai
  { code: "vi", label: "VI" }, // Vietnamese
  { code: "id", label: "ID" }, // Indonesian
  { code: "ms", label: "MS" }, // Malay
  { code: "tl", label: "TL" }, // Filipino

  // 🌍 Middle East
  { code: "ar", label: "AR" }, // Arabic
  { code: "fa", label: "FA" }, // Persian
  { code: "he", label: "HE" }, // Hebrew

  // 🌍 Africa
  { code: "sw", label: "SW" }, // Swahili
  { code: "yo", label: "YO" }, // Yoruba
  { code: "ig", label: "IG" }, // Igbo
  { code: "ha", label: "HA" }, // Hausa
  { code: "am", label: "AM" }, // Amharic
  { code: "zu", label: "ZU" }, // Zulu
  { code: "xh", label: "XH" }, // Xhosa
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
  className={`print:hidden fixed inset-x-0 z-50 flex justify-center transition-all duration-300
    ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"}
  `}
  style={{ top: "2.5rem" }}   // ← THIS replaces my-12
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
