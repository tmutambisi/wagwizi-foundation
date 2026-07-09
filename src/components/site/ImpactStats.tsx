import { useScrollReveal } from "@/hooks/use-reveal";
import { Counter } from "./Counter";

const stats = [
  { label: "Girls Enrolled in School", end: 510, suffix: "" },
  { label: "Stay-In-School Rate", end: 94, suffix: "%" },
  { label: "Outreach Districts", end: 12, suffix: "" },
  { label: "Funds Raised This Year", end: 184500, prefix: "$", suffix: "" },
];

export function ImpactStats() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="stats" ref={ref} className="bg-forest-deep text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4 lg:px-10">
        {stats.map((s, i) => (
          <div
            key={s.label}
            data-reveal
            style={{ transitionDelay: `${i * 100}ms` }}
            className="reveal border-b border-cream/8 px-2 py-8 text-center lg:border-b-0 lg:border-r lg:border-cream/8 lg:px-8 lg:py-10 last:border-r-0"
          >
            <p className="font-display text-3xl text-gold sm:text-4xl">
              <Counter end={s.end} prefix={s.prefix} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cream/60 sm:text-xs">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
