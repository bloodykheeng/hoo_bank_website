import { FaWhatsapp } from "react-icons/fa";
import { MdDownload, MdCall, MdPlace, MdAndroid } from "react-icons/md";
import appHome from "../assets/photos/app-home.webp";
import appSend from "../assets/photos/app-send.webp";
import customer from "../assets/photos/customer-phone.webp";
import { SERVICES, STEPS, APK_LINK, APK_SIZE, WHATSAPP_LINK, PHONE, PHONE_LINK, PLACE } from "../content";

function Heading({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-[1.05]">{title}</h2>
      {text && <p className="mt-4 text-lg leading-relaxed text-muted">{text}</p>}
    </div>
  );
}

/** The four things we bring; gas and water lead (most orders), packages and fuel follow. */
export function Services() {
  return (
    <section id="services" className="mx-auto max-w-page px-4 py-20 sm:px-6 lg:py-28">
      <Heading eyebrow="Services" title="What we bring to you" text="One app for the things a home or a small business runs out of." />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <article
            key={s.id}
            className={`group relative isolate flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-[1.75rem] border border-line ${i < 2 ? "lg:min-h-[27rem]" : "lg:mt-16"}`}
          >
            <img src={s.photo} alt={s.alt} loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
            <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#04140f] via-[#04140f]/55 to-transparent" />
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
  { label: "First instalment", date: "3 Nov", amount: "40,000", paid: true },
  { label: "Second instalment", date: "17 Nov", amount: "40,000", paid: true },
  { label: "Last instalment", date: "1 Dec", amount: "40,000", paid: false },
];

export function PayLater() {
  return (
    <section id="pay-later" className="mx-auto max-w-page px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid items-center gap-12 overflow-hidden rounded-[2rem] bg-amber-soft p-7 sm:p-12 lg:grid-cols-2 lg:p-16">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-amber-ink">Buy now, pay later</p>
          <h2 className="mt-3 text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-[1.05]">Take it today. Pay in instalments.</h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
            Choose pay later when you order. Clear the balance in parts, and the app shows every payment you have
            made, with its receipt, and what is left.
          </p>
          <a href={APK_LINK} download className="btn mt-8 bg-ink text-bg hover:opacity-90">
            <MdDownload className="text-lg" aria-hidden /> Get the app to start
          </a>
        </div>

        <div className="rounded-3xl border border-line bg-card p-6 shadow-[0_30px_60px_-34px_rgba(120,53,15,.5)] sm:p-7" role="img" aria-label="Example: two of three instalments paid">
          <div className="flex items-baseline justify-between">
            <p className="font-semibold">Order ORD11202642</p>
            <span className="text-xs font-semibold uppercase tracking-wider text-faint">Example</span>
          </div>
          <p className="mt-6 text-sm text-faint">Left to pay</p>
          <p className="font-mono text-4xl font-semibold tracking-tight">UGX 40,000</p>
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
      <img src={src} alt={alt} loading="lazy" width="560" height="1124" className="w-full rounded-[1.9rem]" />
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
            Gas, water, a package or a word with customer care: all from the first screen. Your orders and payments
            stay in one place.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={APK_LINK} download className="btn bg-white text-brand-deep hover:bg-[#ecfdf5]">
              <MdAndroid className="text-xl" aria-hidden /> Download for Android
            </a>
            <span className="font-mono text-sm text-white/60">APK · {APK_SIZE}</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
            Your phone may ask you to allow installs from this browser the first time. On an iPhone? Order on{" "}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">WhatsApp</a>.
          </p>
        </div>
        <div className="mx-auto flex w-full max-w-md items-start justify-center gap-5">
          <Phone src={appHome} alt="The app's first screen: gas, water, deliver a package, customer care" className="w-1/2" />
          <Phone src={appSend} alt="The app's send-a-package screen" className="mt-16 w-1/2" />
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
          <Heading eyebrow="Contact" title="Talk to a person" text="Order, ask about a delivery or a payment. We answer on the phone and on WhatsApp." />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a href={PHONE_LINK} className="group rounded-2xl border border-line p-5 transition hover:border-brand-mid/60">
              <MdCall className="text-2xl text-brand-ink" aria-hidden />
              <p className="mt-3 text-sm text-faint">Call</p>
              <p className="font-mono font-semibold group-hover:text-brand-ink">{PHONE}</p>
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-line p-5 transition hover:border-brand-mid/60">
              <FaWhatsapp className="text-2xl text-[#25D366]" aria-hidden />
              <p className="mt-3 text-sm text-faint">WhatsApp</p>
              <p className="font-semibold group-hover:text-brand-ink">Chat with us</p>
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
