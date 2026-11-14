import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode, MdMenu, MdClose, MdDownload } from "react-icons/md";
import { NAV, APK_LINK } from "../content";
import { useTheme } from "../theme";

export function Brand({ className = "" }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Elevate Pesa home">
      <img src="/mark.png" alt="" width="36" height="36" className="h-9 w-9 rounded-[22%]" />
      <span className="font-display text-[19px] font-bold tracking-tight">Elevate Pesa</span>
    </Link>
  );
}

export function ThemeButton() {
  const { dark, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card text-lg text-muted transition hover:text-brand-ink"
    >
      {dark ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
}

/** Sticky bar: the brand, the sections, light/dark, and the app download. A sheet on phones. */
export default function Header({ sections = true }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-xl" : "border-b border-transparent"}`}>
      <div className="mx-auto flex h-[72px] max-w-page items-center justify-between gap-4 px-4 sm:px-6">
        <Brand />

        {sections && (
          <nav aria-label="Sections" className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="rounded-full px-3.5 py-2 text-[15px] font-medium text-muted transition hover:bg-card hover:text-ink">
                {n.label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-2">
          <ThemeButton />
          <a href={APK_LINK} download className="btn-brand hidden !py-2.5 sm:inline-flex">
            <MdDownload className="text-lg" aria-hidden /> Get the app
          </a>
          {sections && (
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card text-xl md:hidden"
            >
              {open ? <MdClose /> : <MdMenu />}
            </button>
          )}
        </div>
      </div>

      {sections && open && (
        <nav id="mobile-nav" aria-label="Sections" className="border-t border-line px-4 pb-5 pt-2 md:hidden">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-card">
              {n.label}
            </a>
          ))}
          <a href={APK_LINK} download className="btn-brand mt-3 w-full">
            <MdDownload className="text-lg" aria-hidden /> Get the Android app
          </a>
        </nav>
      )}
    </header>
  );
}
