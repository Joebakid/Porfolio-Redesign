import { useEffect, useCallback, useRef } from "react";

export default function AutoTranslate() {
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const initializedRef = useRef(false);

  // 🌐 Global translator function (used by Navigation)
  const setSiteLanguage = useCallback((lang) => {
    const cookieValue = `/auto/${lang}`;

    // Set cookies for Google Translate
    document.cookie = `googtrans=${cookieValue};path=/`;
    document.cookie = `googtrans=${cookieValue};domain=${window.location.hostname};path=/`;

    // Persist language preference
    localStorage.setItem("lang", lang);

    // Apply translation if Google Translate widget is ready
    const select = document.querySelector(".goog-te-combo");
    if (select && select.value !== lang) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }

    console.log("🌐 Language set:", lang);
  }, []);

  // Expose globally for Navigation component
  useEffect(() => {
    window.setSiteLanguage = setSiteLanguage;
    return () => {
      window.setSiteLanguage = null;
    };
  }, [setSiteLanguage]);

  // Apply translation when Google Translate is ready
  const applyTranslation = useCallback((lang) => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    setSiteLanguage(lang);
    console.log("✅ Translation applied:", lang);
  }, [setSiteLanguage]);

  useEffect(() => {
    let mounted = true;

    async function detectAndTranslate() {
      let lang = localStorage.getItem("lang") || "en";

      // Try IP-based language detection if no preference saved
      if (!localStorage.getItem("lang")) {
        try {
          const res = await fetch("https://ipwho.is/", {
            signal: AbortSignal.timeout?.(3000)
          });
          const data = await res.json();

          if (!data.success) throw new Error("IP lookup failed");

          const country = data.country_code;
          console.log("🌍 Detected country:", country);

          const countryToLang = {
            // Europe
            FR: "fr", BE: "fr", CH: "de", AT: "de", DE: "de",
            ES: "es", IT: "it", PT: "pt", NL: "nl",
            SE: "sv", NO: "no", DK: "da", FI: "fi",
            PL: "pl", CZ: "cs", SK: "sk", HU: "hu",
            RO: "ro", BG: "bg", GR: "el",
            UA: "uk", RU: "ru", BY: "ru", KZ: "ru",
            TR: "tr", IE: "en", GB: "en",

            // Asia
            CN: "zh-CN", TW: "zh-TW", HK: "zh-TW",
            JP: "ja", KR: "ko", IN: "hi",
            PK: "ur", BD: "bn", TH: "th", VN: "vi",
            ID: "id", MY: "ms", PH: "tl", SG: "en",

            // Middle East
            SA: "ar", AE: "ar", QA: "ar", KW: "ar", OM: "ar",
            IL: "he", IR: "fa", IQ: "ar", JO: "ar", LB: "ar",
            KH: "km", MM: "my", NP: "ne", LK: "si",

            // Africa
            NG: "en", GH: "en", KE: "en", UG: "en",
            TZ: "sw", ZA: "en", EG: "ar", MA: "ar",
            DZ: "ar", TN: "ar", ET: "am", RW: "rw",
            SN: "fr", CI: "fr", CM: "fr", ML: "fr",

            // Americas
            US: "en", CA: "en", MX: "es", AR: "es", CL: "es",
            CO: "es", PE: "es", VE: "es", BO: "es", PY: "es",
            UY: "es", BR: "pt",

            // Oceania
            AU: "en", NZ: "en", FJ: "en", PG: "en"
          };

          lang = countryToLang[country] || navigator.language?.split("-")[0] || "en";
        } catch (err) {
          console.warn("⚠️ IP detection failed, using browser language:", err.message);
          lang = navigator.language?.split("-")[0] || "en";
        }
      }

      if (!mounted) return;

      // Wait for Google Translate widget to be ready
      const checkReady = () => {
        const googleReady = window.google?.translate?.TranslateElement;
        const domReady = document.querySelector(".goog-te-combo");

        if (googleReady && domReady) {
          applyTranslation(lang);
          return true;
        }
        return false;
      };

      // Try immediately
      if (checkReady()) return;

      // Poll for readiness with timeout
      let attempts = 0;
      const maxAttempts = 25; // 10 seconds max

      intervalRef.current = setInterval(() => {
        attempts++;
        if (checkReady() || attempts >= maxAttempts) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          if (attempts >= maxAttempts) {
            console.warn("⚠️ Google Translate not ready after 10s");
          }
        }
      }, 400);

      // Also listen for the custom event from index.html
      const onGoogleReady = () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        // Small delay to ensure DOM is updated
        setTimeout(() => applyTranslation(lang), 100);
      };

      window.addEventListener('googleTranslateReady', onGoogleReady);

      // Fallback timeout
      timeoutRef.current = setTimeout(() => {
        if (!initializedRef.current) {
          console.warn("⚠️ Google Translate timeout, applying anyway");
          applyTranslation(lang);
        }
      }, 12000);
    }

    detectAndTranslate();

    return () => {
      mounted = false;
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [applyTranslation]);

  return null; // This component renders nothing
}
