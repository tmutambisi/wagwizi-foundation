import { useScrollReveal } from "@/hooks/use-reveal";
import education from "@/assets/student-microscope.png";
import healthcare from "@/assets/mother-child.jpg";
import youth from "@/assets/founder-portrait.jpg";
import culture from "@/assets/founder-baby.jpg";
import community from "@/assets/outreach-wheelchair.jpg";
import food from "@/assets/food-distribution.jpg";

const programmes = [
  { title: "Education", img: education, desc: "Scholarships, school supplies and learning resources that open doors for underprivileged children.", tag: "Schools · Scholarships" },
  { title: "Healthcare & Welfare", img: healthcare, desc: "Support for vulnerable children, mothers, the elderly and disadvantaged community members.", tag: "Care · Outreach" },
  { title: "Youth Empowerment", img: youth, desc: "Helping young artists and producers start music careers while fighting drug and substance abuse.", tag: "Arts · Mentorship" },
  { title: "Arts & Culture", img: culture, desc: "Using music and the arts to build confidence and life skills, and to preserve our heritage.", tag: "Heritage · Talent" },
  { title: "Community Development", img: community, desc: "Mobility aids, essentials and locally-led projects that bring lasting change.", tag: "Relief · Mobility" },
  { title: "Food Security", img: food, desc: "Food hampers and essentials for families and communities facing hardship.", tag: "Relief · Support" },
];

export function Programmes() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="programmes" ref={ref} className="bg-secondary py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div data-reveal className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-terracotta">What we do</p>
          <h2 className="mt-3 text-4xl text-foreground lg:text-5xl">Our programmes</h2>
          <p className="mt-4 text-muted-foreground">
            Six interconnected pillars, each shaped by the communities we serve.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p, i) => (
            <article
              key={p.title}
              data-reveal
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
              className="reveal group overflow-hidden rounded-3xl bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 to-transparent opacity-70" />
                <span className="absolute left-5 top-5 rounded-full bg-cream/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-cream backdrop-blur-sm">
                  {p.tag}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl text-forest">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta">
                  Explore programme
                  <svg viewBox="0 0 24 24" className="size-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
