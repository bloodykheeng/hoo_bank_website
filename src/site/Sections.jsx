import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdDownload, MdCall, MdPlace, MdAndroid, MdClose } from "react-icons/md";
import appHome from "../assets/photos/app-home.webp";
import appSupport from "../assets/photos/app-support.webp";
import customer from "../assets/photos/customer-phone.webp";
import cylinder6 from "../assets/photos/elevate-cylinder-6kg.webp";
import { SERVICES, STEPS, REFILLS, OFFERS, APK_LINK, APK_SIZE, WHATSAPP_LINK, ORDER_LINES, OFFICE, PLACE } from "../content";

function Heading({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-[1.05]">{title}</h2>
      {text && <p className="mt-4 text-lg leading-relaxed text-muted">{text}</p>}
    </div>
  );
}

/** What we sell: Elevate Pesa's own gas first, then the other brands, then fuel (the client, 15 Nov 2026). */
export function Services() {
  return (
    <section id="services" className="mx-auto max-w-page px-4 py-20 sm:px-6 lg:py-28">
      <Heading eyebrow="What we sell" title="Gas and fuel, brought to you" text="Everything a kitchen or a small business runs on, ordered from your phone." />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {SERVICES.map((s, i) => (
          <article
            key={s.id}
            className={`group relative isolate flex min-h-[24rem] flex-col justify-end overflow-hidden rounded-[1.75rem] border border-line ${i === 0 ? "md:min-h-[28rem]" : "md:mt-12"}`}
          >
            <img
              src={s.photo}
              alt={s.alt}
              loading="lazy"
              className={`absolute inset-0 -z-10 h-full w-full transition duration-700 group-hover:scale-[1.04] ${s.light ? "bg-[#ececec] object-contain object-top pt-2" : "object-cover"}`}
            />
            <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#04140f] via-[#04140f]/50 to-transparent" />
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/80">{s.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/** Elevate Pesa refill prices: one table, from the client's pricelist. Full sets are in the offers below. */
export function Prices() {
  return (
    <section id="prices" className="border-y border-line bg-bg-deep/60">
      <div className="mx-auto grid max-w-page items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:py-24">
        <div>
          <Heading eyebrow="Prices" title="Elevate Pesa gas refills" text="Bring your Elevate Pesa cylinder back for a refill, or order one delivered." />
          <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-card">
            <table className="w-full text-left">
              <caption className="sr-only">Elevate Pesa gas refill prices in Uganda shillings</caption>
              <thead className="bg-brand text-white">
                <tr>
                  <th scope="col" className="px-6 py-3.5 text-sm font-semibold">Cylinder</th>
                  <th scope="col" className="px-6 py-3.5 text-right text-sm font-semibold">Refill price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {REFILLS.map((r) => (
                  <tr key={r.size}>
                    <th scope="row" className="px-6 py-4 font-display text-xl font-bold">{r.size}</th>
                    <td className="px-6 py-4 text-right font-mono text-xl font-semibold">
                      <span className="mr-1.5 text-sm text-faint">UGX</span>{r.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-faint">Full sets (cylinder, gas, burner and grill) and today&apos;s discounts are in the offers below.</p>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute inset-6 rounded-full bg-[radial-gradient(circle,rgb(var(--brand-mid)/.25),transparent_70%)]" />
          <img src={cylinder6} alt="A 6 kg Elevate Pesa gas cylinder" loading="lazy" width="573" height="620" className="relative w-full rounded-[2rem] mix-blend-multiply dark:mix-blend-normal dark:rounded-[2rem]" />
        </div>
      </div>
    </section>
  );
}

/** The client's posters. A click opens one at full size; Escape or the button closes it. */
export function Offers() {
  const [open, setOpen] = useState(null);
  const closeRef = useRef(null);
  const current = OFFERS.find((o) => o.id === open) ?? null;

  useEffect(() => {
    if (!current) return undefined;
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [current]);

  return (
    <section id="offers" className="mx-auto max-w-page px-4 py-20 sm:px-6 lg:py-28">
      <Heading eyebrow="Offers" title="This season at Elevate Pesa" text="Call one of our order lines, or order in the app, and we deliver." />
      <ul className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {OFFERS.map((o) => (
          <li key={o.id} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpen(o.id)}
              className="group block w-full overflow-hidden rounded-3xl border border-line bg-card text-left transition hover:border-brand-mid/60 hover:shadow-[0_24px_50px_-30px_rgba(6,78,59,.6)]"
            >
              <img src={o.src} alt={o.alt} loading="lazy" className="w-full transition duration-500 group-hover:scale-[1.02]" />
              <span className="block px-5 py-4 font-semibold">{o.title}</span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div role="dialog" aria-modal="true" aria-label={current.title} className="fixed inset-0 z-[70] grid place-items-center bg-[#04140f]/85 p-4 backdrop-blur-sm" onClick={() => setOpen(null)}>
          <figure className="relative max-h-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.alt} className="max-h-[85vh] w-auto rounded-2xl" />
            <figcaption className="mt-3 text-center font-semibold text-white">{current.title}</figcaption>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute -right-2 -top-2 grid h-11 w-11 place-items-center rounded-full bg-white text-2xl text-ink shadow-lg sm:-right-5 sm:-top-5"
            >
              <MdClose />
            </button>
          </figure>
        </div>
      )}
    </section>
  );
}

/** A real sequence, so numbered. */
export function Steps() {
  return (
    <section id="how" className="border-y border-line bg-bg-deep/60">
      <div className="mx-auto max-w-page px-4 py-20 sm:px-6 lg:py-24">
        <Heading eyebrow="How it works" title="From your phone to your door" center />
        <ol className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative">
              {i < STEPS.length - 1 && <span aria-hidden className="absolute left-14 right-0 top-6 hidden h-px border-t-2 border-dashed border-brand-mid/40 md:block" />}
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-brand font-display text-xl font-bold text-white shadow-[0_12px_30px_-12px_rgb(var(--brand)/.8)]">{i + 1}</span>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 max-w-xs leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const INSTALMENTS = [
  { label: "First instalment", date: "3 Nov", amount: "50,000", paid: true },
  { label: "Second instalment", date: "17 Nov", amount: "50,000", paid: true },
  { label: "Last instalment", date: "1 Dec", amount: "50,000", paid: false },
];

export function PayLater() {
  return (
    <section id="pay-later" className="mx-auto max-w-page px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid items-center gap-12 overflow-hidden rounded-[2rem] bg-amber-soft p-7 sm:p-12 lg:grid-cols-2 lg:p-16">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-amber-ink">Buy now, pay later</p>
          <h2 className="mt-3 text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-[1.05]">Take your gas today. Pay in instalments.</h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
            Choose pay later when you order. Clear the balance in parts, and the app shows every payment you have
            made, with its receipt, and what is left.
          </p>
          <a href={APK_LINK} download className="btn mt-8 bg-ink text-bg hover:opacity-90">
            <MdDownload className="text-lg" aria-hidden /> Get the app to start
          </a>
        </div>

        <div className="rounded-3xl border border-line bg-card p-6 shadow-[0_30px_60px_-34px_rgba(120,53,15,.5)] sm:p-7" role="img" aria-label="Example: a 6 kg full set, two of three instalments paid">
          <div className="flex items-baseline justify-between">
            <p className="font-semibold">6 kg full set · ORD11202642</p>
            <span className="text-xs font-semibold uppercase tracking-wider text-faint">Example</span>
          </div>
          <p className="mt-6 text-sm text-faint">Left to pay</p>
          <p className="font-mono text-4xl font-semibold tracking-tight">UGX 50,000</p>
          <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-line">
            <div className="h-full w-2/3 rounded-full bg-amber" />
          </div>
          <ul className="mt-6 divide-y divide-line">
            {INSTALMENTS.map((x) => (
              <li key={x.label} className="flex items-center justify-between py-3 text-sm">
                <span className="flex items-center gap-3">
                  <span className={`grid h-6 w-6 place-items-center rounded-full text-xs font-bold ${x.paid ? "bg-brand-soft text-brand-ink" : "border border-dashed border-faint text-faint"}`}>{x.paid ? "✓" : ""}</span>
                  <span>
                    <span className="font-medium">{x.label}</span>
                    <span className="block text-xs text-faint">{x.paid ? `Paid ${x.date}` : `Due ${x.date}`}</span>
                  </span>
                </span>
                <span className={`font-mono ${x.paid ? "text-muted" : "font-semibold"}`}>{x.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Phone({ src, alt, className = "" }) {
  return (
    <div className={`rounded-[2.4rem] border border-line bg-[#0b1210] p-2.5 shadow-[0_40px_80px_-40px_rgba(6,78,59,.7)] ${className}`}>
      <img src={src} alt={alt} loading="lazy" width="560" height="1182" className="w-full rounded-[1.9rem]" />
    </div>
  );
}

export function TheApp() {
  return (
    <section id="app" className="relative overflow-hidden bg-brand-deep text-white dark:bg-bg-deep">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgb(var(--brand-mid)/.35),transparent_65%)]" />
      <div className="relative mx-auto grid max-w-page items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#6ee7b7]">The app</p>
          <h2 className="mt-3 text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-[1.05]">Order, follow and pay from your phone</h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/75">
            Gas, Elevate Pesa gas, fuel or a word with customer care: all from the first screen, with today&apos;s
            offers under them. Your orders and payments stay in one place.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={APK_LINK} download className="btn bg-white text-brand-deep hover:bg-[#ecfdf5]">
              <MdAndroid className="text-xl" aria-hidden /> Download for Android
            </a>
            <span className="font-mono text-sm text-white/60">APK · {APK_SIZE}</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
            Your phone may ask you to allow installs from this browser the first time. On an iPhone? Call an order
            line or message us on{" "}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">WhatsApp</a>.
          </p>
        </div>
        <div className="mx-auto flex w-full max-w-md items-start justify-center gap-5">
          <Phone src={appHome} alt="The app's first screen: gas, Elevate Pesa gas, fuel, customer care, and an Elevate Pesa gas offer" className="w-1/2" />
          <Phone src={appSupport} alt="The app's customer support screen: WhatsApp or a phone call" className="mt-16 w-1/2" />
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-page px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid overflow-hidden rounded-[2rem] border border-line bg-card lg:grid-cols-[1fr_1.1fr]">
        <img src={customer} alt="A smiling customer holding her phone" loading="lazy" className="h-64 w-full object-cover object-[center_30%] sm:h-80 lg:h-full" />
        <div className="p-7 sm:p-12">
          <Heading eyebrow="Contact" title="Order by phone, or talk to us" text="Call an order line for delivery. For anything else, WhatsApp or call the office." />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-line p-5 sm:col-span-2">
              <MdCall className="text-2xl text-brand-ink" aria-hidden />
              <p className="mt-3 text-sm text-faint">Orders and delivery</p>
              <p className="mt-1 flex flex-wrap gap-x-5 gap-y-1">
                {ORDER_LINES.map((l) => (
                  <a key={l.link} href={l.link} className="font-mono text-lg font-semibold hover:text-brand-ink">{l.label}</a>
                ))}
              </p>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-line p-5 transition hover:border-brand-mid/60">
              <FaWhatsapp className="text-2xl text-[#25D366]" aria-hidden />
              <p className="mt-3 text-sm text-faint">WhatsApp</p>
              <p className="font-semibold group-hover:text-brand-ink">Chat with us</p>
            </a>
            <a href={OFFICE.link} className="group rounded-2xl border border-line p-5 transition hover:border-brand-mid/60">
              <MdCall className="text-2xl text-brand-ink" aria-hidden />
              <p className="mt-3 text-sm text-faint">Office</p>
              <p className="font-mono font-semibold group-hover:text-brand-ink">{OFFICE.label}</p>
            </a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-muted">
            <MdPlace className="text-xl text-brand-ink" aria-hidden /> {PLACE}
          </p>
        </div>
      </div>
    </section>
  );
}
