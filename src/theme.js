import { useEffect, useState } from "react";

const KEY = "ep-theme";

/** Light or dark: the visitor's choice (saved), else the phone's setting. index.html applies it before paint. */
export function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Follow the phone's setting until the visitor picks one.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const follow = (e) => {
      let saved = null;
      try { saved = localStorage.getItem(KEY); } catch { /* private mode */ }
      if (!saved) setDark(e.matches);
    };
    mq.addEventListener("change", follow);
    return () => mq.removeEventListener("change", follow);
  }, []);

  const toggle = () =>
    setDark((d) => {
      try { localStorage.setItem(KEY, d ? "light" : "dark"); } catch { /* private mode */ }
      return !d;
    });

  return { dark, toggle };
}
