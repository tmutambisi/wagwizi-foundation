import { useScrollReveal } from "@/hooks/use-reveal";

const cards = [
  {
    title: "Volunteer",
    desc: "Give your time and skills on the ground or behind the scenes.",
    icon: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" />,
  },
  {
    title: "Donate",
    desc: "Fund a scholarship, a clinic day or clean water for a village.",
    icon: <path d="M12 21c5-3.5 8-7 8-11a8 8 0 0 0-16 0c0 4 3 7.5 8 11Z" />,
  },
  {
    title: "Partner",
    desc: "Join us as an NGO, school or community organisation.",
    icon: (
      <path d="M16 11a4 4 0 1 0-4-4M8 11a4 4 0 1 1 4-4M2 21a6 6 0 0 1 12 0M10 21a6 6 0 0 1 12 0" />
    ),
  },
  {
    title: "Corporate Sponsorship",
    desc: "Align your brand with measurable, transparent impact.",
    icon: <path d="M3 21V9l6-4 6 4v12M9 21v-5h3v5M15 13h6v8" />,
  },
];

export function GetInvolved() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="involved" ref={ref} className="bg-secondary py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div data-reveal className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-terracotta">Join the movement</p>
          <h2 className="mt-3 text-4xl text-foreground lg:text-5xl">Get involved</h2>
          <p className="mt-4 text-muted-foreground">
            There are many ways to be part of the story. Find yours.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <a
              key={c.title}
              href="#donate"
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
              className="reveal group relative overflow-hidden rounded-3xl bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:bg-forest hover:shadow-2xl"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-forest transition-colors group-hover:bg-gold group-hover:text-forest-deep">
                <svg
                  viewBox="0 0 24 24"
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {c.icon}
                </svg>
              </span>
              <h3 className="mt-6 text-2xl text-forest transition-colors group-hover:text-cream">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-cream/80">
                {c.desc}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta transition-colors group-hover:text-gold">
                Learn more
                <svg
                  viewBox="0 0 24 24"
                  className="size-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
