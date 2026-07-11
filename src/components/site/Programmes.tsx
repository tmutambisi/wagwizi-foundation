import { Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-reveal";
import education from "@/assets/education.jpg";
import healthcare from "@/assets/healthcare.jpg";
import youth from "@/assets/youth-empowerment.jpg";
import culture from "@/assets/arts-and-ent.jpg";
import community from "@/assets/outreach-wheelchair.jpg";
import food from "@/assets/food-distribution.jpg";

const programmes = [
  {
    title: "Education & The Girl Child",
    img: education,
    desc: "Securing scholarships, school uniforms, and learning supplies to ensure the girl child and children from vulnerable families stay in school.",
  },
  {
    title: "Healthcare & Supporting Women",
    img: healthcare,
    desc: "Providing essential medical care, maternal health support, and wellness services to empower women and mothers in rural areas.",
  },
  {
    title: "Youth & Substance Abuse Support",
    img: youth,
    desc: "Actively combating drug and substance abuse among young people through mentorship, counseling, and positive rehabilitation paths.",
  },
  {
    title: "Arts, Culture & Youth Mentorship",
    img: culture,
    desc: "Engaging young people in creative arts and cultural heritage to build life skills, confidence, and steer them away from drug abuse.",
  },
  {
    title: "Community Development for Families",
    img: community,
    desc: "Providing clean water borehole installations and wheelchair distribution to uplift vulnerable families and children.",
  },
  {
    title: "Food Security for Vulnerable Families",
    img: food,
    desc: "Distributing critical food hampers and nutritional provisions to vulnerable families experiencing extreme hardship.",
  },
];

export function Programmes() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="programmes" ref={ref} className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Clean header with action link */}
        <div
          data-reveal
          className="reveal flex flex-wrap items-end justify-between gap-4 border-b border-border pb-8"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              What We Do
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              Our Programmes
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
              Supporting women, vulnerable families, the girl child, and young people affected by drug and substance abuse.
            </p>
          </div>
          <Link
            to="/programmes"
            className="text-sm font-semibold text-forest hover:underline"
          >
            View All Programmes →
          </Link>
        </div>

        {/* Clean 3×2 grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p, i) => (
            <article
              key={p.title}
              data-reveal
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              className="reveal group"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={p.img}
                  alt={p.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
