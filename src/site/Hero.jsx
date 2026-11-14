import { FaWhatsapp } from "react-icons/fa";
import { MdDownload, MdCall } from "react-icons/md";
import rider from "../assets/photos/rider-delivery.webp";
import OrderTicket from "./OrderTicket";
import { APK_LINK, WHATSAPP_LINK, PHONE, PHONE_LINK } from "../content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* A soft green and amber glow, as on the admin's sign-in page. */}
      <div aria-hidden className="pointer-events-none absolute -left-60 -top-60 h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(circle,rgb(var(--brand-mid)/.20),transparent_68%)]" />
      <div aria-hidden className="pointer-events-none absolute -right-60 -top-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgb(var(--amber)/.13),transparent_68%)]" />

      <div className="relative mx-auto grid max-w-page items-center gap-12 px-4 pb-20 pt-10 sm:px-6 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-28">
        <div className="animate-rise">
          <p className="eyebrow">Delivered across Kampala</p>
          <h1 className="mt-4 text-[clamp(2.6rem,7vw,5.1rem)] font-extrabold leading-[0.98]">
            Gas, water <br className="hidden sm:block" />
            and more,{" "}
            <span className="relative whitespace-nowrap text-brand-ink">
              at your door.
              <svg aria-hidden viewBox="0 0 300 14" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full text-amber">
                <path d="M2 10 C 70 2, 150 2, 298 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-7 max-w-[34rem] text-lg leading-relaxed text-muted">
            Order cooking gas, drinking water and accessories in the Elevate Pesa app, or send a package across town.
            Pay at once, or take it today and pay in instalments.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={APK_LINK} download className="btn-brand">
              <MdDownload className="text-lg" aria-hidden /> Get the Android app
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <FaWhatsapp className="text-lg text-[#25D366]" aria-hidden /> Order on WhatsApp
            </a>
          </div>
          <p className="mt-5 flex items-center gap-2 text-[15px] text-faint">
            <MdCall aria-hidden className="text-brand-ink" /> Or call us on{" "}
            <a href={PHONE_LINK} className="font-mono font-semibold text-ink hover:text-brand-ink">{PHONE}</a>
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] animate-rise [animation-delay:.15s] lg:mx-0 lg:ml-auto">
          <div className="relative overflow-hidden rounded-[2rem] border border-line shadow-[0_40px_90px_-40px_rgba(6,78,59,.6)]">
            <img
              src={rider}
              alt="A delivery rider carrying an order box on a motorcycle"
              width="1400"
              height="1051"
              fetchpriority="high"
              className="aspect-[4/4.4] w-full object-cover object-[60%_center] sm:aspect-[4/3.6]"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-brand-deep/45 via-transparent to-transparent" />
          </div>
          <OrderTicket className="relative -mt-28 ml-auto mr-2 sm:absolute sm:-bottom-10 sm:-left-8 sm:mt-0 sm:ml-0 lg:-left-16" />
        </div>
      </div>
    </section>
  );
}
