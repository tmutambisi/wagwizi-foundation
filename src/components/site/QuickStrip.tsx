import { useScrollReveal } from "@/hooks/use-reveal";
import { Counter } from "./Counter";

const items = [
  {
    label: "Children Supported",
    end: 12500,
    icon: (
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" />
    ),
  },
  {
    label: "Scholarships",
    end: 1800,
    icon: <path d="M3 9l9-5 9 5-9 5-9-5Zm3 2v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />,
  },
  {
    label: "Medical Outreach",
    end: 340,
    icon: <path d="M12 7v10M7 12h10M5 5h14v14H5z" />,
  },
  {
    label: "Food Assistance",
    end: 9600,
    icon: <path d="M6 3v8a3 3 0 0 0 6 0V3M9 3v18M16 3c-1.5 1-2 3-2 5s.5 4 2 5v8" />,
  },
  {
    label: "Youth Trained",
    end: 4200,
    icon: <path d="M4 7l8-4 8 4-8 4-8-4Zm16 0v5M8 10v5c0 1.7 1.8 3 4 3s4-1.3 4-3v-5" />,
  },
  {
    label: "Community Projects",
    end: 120,
    icon: <path d="M3 21V8l9-5 9 5v13M9 21v-6h6v6" />,
  },
];

export function QuickStrip() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow text-terracotta">By the numbers</p>
          <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
            Measurable impact, rooted in community.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((it, i) => (
            <div
              key={it.label}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal flex flex-col items-center text-center"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-forest">
                <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  {it.icon}
                </svg>
              </span>
              <p className="mt-4 font-display text-3xl text-forest">
                <Counter end={it.end} suffix="+" />
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {it.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
