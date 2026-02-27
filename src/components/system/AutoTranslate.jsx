import { useEffect } from "react";

export default function AutoTranslate() {
  useEffect(() => {
    let interval;

    // 🌐 Global translator (used by Navigation)
    window.setSiteLanguage = function (lang) {
      const cookieValue = `/auto/${lang}`;

      document.cookie = `googtrans=${cookieValue};path=/`;
      document.cookie = `googtrans=${cookieValue};domain=${window.location.hostname};path=/`;

      localStorage.setItem("lang", lang);

      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
      }

      console.log("🌐 Language set:", lang);
    };

    async function detectAndTranslate() {
      let lang = localStorage.getItem("lang") || "en";

      try {
        if (!localStorage.getItem("lang")) {
          const res = await fetch("https://ipwho.is/");
          const data = await res.json();
          if (!data.success) throw new Error("IP lookup failed");

          const country = data.country_code;
          console.log("🌍 Detected country:", country);

          const countryToLang = {
            FR: "fr", BE: "fr", CH: "de", AT: "de", DE: "de",
            ES: "es", IT: "it",
            PT: "pt", BR: "pt",
            NL: "nl",
            SE: "sv", NO: "no", DK: "da", FI: "fi",
            PL: "pl", CZ: "cs", SK: "sk", HU: "hu",
            RO: "ro", BG: "bg", GR: "el",
            UA: "uk", RU: "ru", BY: "ru", KZ: "ru",
            TR: "tr",
            IE: "en", GB: "en",

            CN: "zh-CN", TW: "zh-TW", HK: "zh-TW",
            JP: "ja", KR: "ko", IN: "hi",
            PK: "ur", BD: "bn",
            TH: "th", VN: "vi", ID: "id",
            MY: "ms", PH: "tl", SG: "en",
            SA: "ar", AE: "ar", QA: "ar", KW: "ar", OM: "ar",
            IL: "he", IR: "fa", IQ: "ar", JO: "ar", LB: "ar",
            KH: "km", MM: "my", NP: "ne", LK: "si",

            NG: "en", GH: "en", KE: "en", UG: "en",
            TZ: "sw", ZA: "en",
            EG: "ar", MA: "ar", DZ: "ar", TN: "ar",
            ET: "am", RW: "rw",
            SN: "fr", CI: "fr", CM: "fr", ML: "fr",

            US: "en", CA: "en",
            MX: "es", AR: "es", CL: "es", CO: "es", PE: "es",
            VE: "es", BO: "es", PY: "es", UY: "es",
            BR: "pt",

            AU: "en", NZ: "en",
            FJ: "en", PG: "en"
          };

          lang =
            countryToLang[country] ||
            navigator.language?.split("-")[0] ||
            "en";
        }
      } catch (err) {
        console.warn("⚠️ IP detection failed, using browser language.");
        lang = navigator.language?.split("-")[0] || "en";
      }

      interval = setInterval(() => {
        const ready =
          window.google &&
          window.google.translate &&
          document.querySelector(".goog-te-combo");

        if (ready) {
          window.setSiteLanguage(lang);
          clearInterval(interval);
          console.log("✅ Translation applied:", lang);
        }
      }, 400);
    }

    detectAndTranslate();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return null; // This component renders nothing
}