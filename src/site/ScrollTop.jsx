import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdKeyboardArrowUp } from "react-icons/md";

/** A new page (home, privacy policy) opens at its top, unless the address points at a section (#services). */
export function ScrollToTopOnRoute() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

/** The round "back to top" button, shown once the visitor has scrolled down a screen. */
export default function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
      aria-label="Back to top"
      title="Back to top"
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-brand text-3xl ring-2 ring-white/90 dark:ring-bg text-white shadow-[0_14px_34px_-12px_rgb(var(--brand)/.9)] transition duration-300 hover:bg-brand-ink sm:bottom-8 sm:right-8 ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <MdKeyboardArrowUp aria-hidden />
    </button>
  );
}
