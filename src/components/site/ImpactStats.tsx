import { useScrollReveal } from "@/hooks/use-reveal";
import { Counter } from "./Counter";

const stats = [
  { label: "Communities Served", end: 64, suffix: "+" },
  { label: "Lives Impacted", end: 48000, suffix: "+" },
  { label: "Projects Completed", end: 120, suffix: "+" },
  { label: "Volunteers", end: 850, suffix: "+" },
];

export function ImpactStats() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="stats" ref={ref} className="relative z-10 -mt-px bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-cream/10 px-6 lg:grid-cols-4 lg:divide-x lg:px-10">
        {stats.map((s, i) => (
          <div
            key={s.label}
            data-reveal
            style={{ transitionDelay: `${i * 110}ms` }}
            className="reveal border-b border-cream/10 px-2 py-10 text-center lg:border-b-0 lg:px-8 lg:py-14"
          >
            <p className="font-display text-4xl text-gold sm:text-5xl lg:text-6xl">
              <Counter end={s.end} suffix={s.suffix} />
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-cream/70 sm:text-sm">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
