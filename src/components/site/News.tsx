import { useScrollReveal } from "@/hooks/use-reveal";
import a from "@/assets/founder-baby.jpg";
import b from "@/assets/student-microscope.png";
import c from "@/assets/mother-child.jpg";

const articles = [
  { title: "How a single classroom changed an entire village", cat: "Education", date: "12 June 2026", read: "6 min read", img: a, lead: true },
  { title: "Inside our largest medical outreach yet", cat: "Healthcare", date: "28 May 2026", read: "4 min read", img: c },
  { title: "Meet the young carpenters building their futures", cat: "Youth", date: "9 May 2026", read: "5 min read", img: b },
];

export function News() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="news" ref={ref} className="bg-secondary py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div data-reveal className="reveal flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="eyebrow text-terracotta">From the field</p>
            <h2 className="mt-3 text-4xl text-foreground lg:text-5xl">Latest stories</h2>
          </div>
          <a href="#" className="text-sm font-semibold text-terracotta hover:underline">All articles →</a>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {/* Lead */}
          <a
            href="#"
            data-reveal
            className="reveal group block overflow-hidden rounded-3xl bg-card shadow-sm transition-shadow hover:shadow-2xl"
          >
            <div className="aspect-16/10 overflow-hidden">
              <img src={articles[0].img} alt={articles[0].title} width={1280} height={800} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider">
                <span className="rounded-full bg-forest px-3 py-1 text-cream">{articles[0].cat}</span>
                <span className="text-muted-foreground">{articles[0].date} · {articles[0].read}</span>
              </div>
              <h3 className="mt-4 font-display text-3xl leading-tight text-foreground transition-colors group-hover:text-terracotta">
                {articles[0].title}
              </h3>
              <p className="mt-3 text-muted-foreground">
                A look at how investing in one community ripples outward — from
                attendance to harvests to hope.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta">
                Read more
                <svg viewBox="0 0 24 24" className="size-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </div>
          </a>

          {/* Secondary stack */}
          <div className="flex flex-col gap-7">
            {articles.slice(1).map((art, i) => (
              <a
                key={art.title}
                href="#"
                data-reveal
                style={{ transitionDelay: `${i * 100}ms` }}
                className="reveal group flex flex-1 gap-5 overflow-hidden rounded-3xl bg-card p-4 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="w-36 shrink-0 overflow-hidden rounded-2xl sm:w-44">
                  <img src={art.img} alt={art.title} width={400} height={500} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center py-2 pr-3">
                  <div className="flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-wider">
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-forest">{art.cat}</span>
                    <span className="text-muted-foreground">{art.read}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl leading-snug text-foreground transition-colors group-hover:text-terracotta">
                    {art.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">{art.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
