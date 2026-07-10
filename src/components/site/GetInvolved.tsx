import { useScrollReveal } from "@/hooks/use-reveal";

const cards = [
  {
    title: "Volunteer",
    desc: "Give your time and skills on the ground or behind the scenes.",
  },
  {
    title: "Donate",
    desc: "Fund a scholarship, a clinic day or clean water for a village.",
  },
  {
    title: "Partner",
    desc: "Join us as an NGO, school or community organisation.",
  },
  {
    title: "Corporate Sponsorship",
    desc: "Align your brand with measurable, transparent impact.",
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
              className="reveal group relative overflow-hidden rounded-3xl bg-forest p-8 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:bg-forest-deep hover:shadow-2xl"
            >
              <h3 className="text-2xl text-cream transition-colors">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/80 transition-colors">
                {c.desc}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors group-hover:text-gold-soft">
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
