import { useScrollReveal } from "@/hooks/use-reveal";

const partners = [
  "Gill, Godlonton & Gerrans",
  "Willdale Limited",
  "Ministry of Public Service, Labour & Social Welfare",
  "JP Studios",
  "Sahwigate Ticketing",
  "Econet Foundation",
  "UNICEF Zimbabwe",
  "Harare Children's Home",
];

export function Partners() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div data-reveal className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-terracotta">In good company</p>
          <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">Our partners</h2>
          <p className="mt-4 text-muted-foreground">
            Government, corporate, NGO and community partners who make the work possible.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-4">
          {partners.map((p, i) => (
            <div
              key={p}
              data-reveal
              style={{ transitionDelay: `${(i % 4) * 70}ms` }}
              className="reveal group flex h-28 items-center justify-center bg-card px-4 text-center transition-colors hover:bg-secondary"
            >
              <span className="font-display text-lg text-muted-foreground transition-colors group-hover:text-forest">
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
