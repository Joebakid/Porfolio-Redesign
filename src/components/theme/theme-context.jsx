import {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // if (typeof window !== "undefined") {
    //   return localStorage.getItem("theme") ?? "gray";
    // }
    return "light";
  });

  // 🔑 Apply theme BEFORE paint (prevents flicker / desync)
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 🔥 Single source of truth
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "gray" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
