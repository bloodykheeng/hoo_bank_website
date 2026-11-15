import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { Brand } from "./Header";
import { NAV, ORDER_LINES, OFFICE, WHATSAPP_LINK, PLACE } from "../content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-page gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Brand />
          <p className="mt-4 max-w-xs leading-relaxed text-muted">Elevate Pesa gas, Shell, Total and other brands, and fuel, delivered in Kampala. Pay now or in instalments.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">On this page</p>
          <ul className="mt-3 space-y-2">
            {NAV.map((n) => (
              <li key={n.href}><a href={`/${n.href}`} className="text-muted hover:text-brand-ink">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Reach us</p>
          <ul className="mt-3 space-y-2 text-muted">
            {ORDER_LINES.map((l) => (
              <li key={l.link}><a href={l.link} className="font-mono hover:text-brand-ink">{l.label}</a> <span className="text-faint">orders</span></li>
            ))}
            <li><a href={OFFICE.link} className="font-mono hover:text-brand-ink">{OFFICE.label}</a> <span className="text-faint">office</span></li>
            <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-brand-ink"><FaWhatsapp aria-hidden /> WhatsApp</a></li>
            <li>{PLACE}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-faint sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Elevate Pesa</p>
          <Link to="/privacy-policy" className="hover:text-brand-ink">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
