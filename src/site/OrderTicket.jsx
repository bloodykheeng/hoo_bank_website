import { useEffect, useState } from "react";

const STAGES = [
  { label: "Placed", time: "9:41" },
  { label: "On the way", time: "9:52" },
  { label: "Delivered", time: "10:06" },
];

const prefersStill = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * The hero's signature: an order as the app shows it, moving from placed to delivered. The number is in the
 * app's real format (ORD + month and year + counter). With reduced motion it rests on "On the way".
 */
export default function OrderTicket({ className = "" }) {
  const [stage, setStage] = useState(1);

  useEffect(() => {
    if (prefersStill()) return undefined;
    setStage(0);
    const id = setInterval(() => setStage((s) => (s + 1) % (STAGES.length + 1)), 1900);
    return () => clearInterval(id);
  }, []);

  const at = Math.min(stage, STAGES.length - 1);
  const done = stage >= STAGES.length - 1;

  return (
    <div
      className={`w-[min(20rem,calc(100vw-3rem))] rounded-3xl border border-line bg-card/95 p-5 shadow-[0_30px_70px_-30px_rgba(6,78,59,.55)] backdrop-blur ${className}`}
      aria-label="Example order: 13 kg gas refill and two 20 litre water jars, delivered to Bukoto"
      role="img"
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-[13px] font-semibold tracking-wide text-ink">ORD11202642</p>
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${done ? "bg-brand-soft text-brand-ink" : "bg-amber-soft text-amber-ink"}`}>
          <span className="relative flex h-1.5 w-1.5">
            {!done && <span className="absolute inline-flex h-full w-full animate-ping2 rounded-full bg-amber" />}
            <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${done ? "bg-brand-mid" : "bg-amber"}`} />
          </span>
          {done ? "Delivered" : "Live"}
        </span>
      </div>
      <p className="mt-1 text-[13px] text-faint">13 kg gas refill · 2 × 20 L water</p>

      <ol className="mt-4 space-y-0">
        {STAGES.map((s, i) => {
          const reached = i <= at;
          const last = i === STAGES.length - 1;
          return (
            <li key={s.label} className="relative flex gap-3 pb-3 last:pb-0">
              {!last && (
                <span aria-hidden className="absolute left-[7px] top-4 h-[calc(100%-8px)] w-0.5 overflow-hidden rounded bg-line">
                  <span className="block h-full w-full origin-top bg-brand-mid transition-transform duration-700" style={{ transform: `scaleY(${i < at ? 1 : 0})` }} />
                </span>
              )}
              <span className={`relative z-10 mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border-2 transition-colors duration-500 ${reached ? "border-brand-mid bg-brand-mid" : "border-line bg-card"}`}>
                {reached && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
              </span>
              <div className="flex flex-1 items-baseline justify-between gap-2">
                <span className={`text-sm font-semibold transition-colors duration-500 ${reached ? "text-ink" : "text-faint"}`}>
                  {s.label}
                  {last && <span className="font-normal text-faint"> · Bukoto</span>}
                </span>
                <span className={`font-mono text-xs transition-opacity duration-500 ${reached ? "text-muted opacity-100" : "opacity-0"}`}>{s.time}</span>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-4 rounded-2xl bg-bg-deep/70 p-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-amber-ink">Pay later</span>
          <span className="font-mono text-muted">2 of 3 paid</span>
        </div>
        <div className="mt-2 flex gap-1" aria-hidden>
          <span className="h-1.5 flex-1 rounded-full bg-amber" />
          <span className="h-1.5 flex-1 rounded-full bg-amber" />
          <span className="h-1.5 flex-1 rounded-full bg-line" />
        </div>
      </div>
    </div>
  );
}
