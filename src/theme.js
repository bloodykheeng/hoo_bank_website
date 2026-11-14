import { useEffect, useState } from "react";

const KEY = "ep-theme";

/** Light by default; dark only when the visitor picks it (saved). index.html applies it before paint. */
export function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggle = () =>
    setDark((d) => {
      try { localStorage.setItem(KEY, d ? "light" : "dark"); } catch { /* private mode */ }
      return !d;
    });

  return { dark, toggle };
}
