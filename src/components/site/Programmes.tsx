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
    title: "Education",
    img: education,
    desc: "Scholarships, school uniforms, and supplies. 510 girls enrolled with a 94% retention rate across 12 districts.",
  },
  {
    title: "Healthcare & Welfare",
    img: healthcare,
    desc: "Essential medical care and welfare outreach to vulnerable children, mothers, and the elderly in 10 rural districts.",
  },
  {
    title: "Youth Empowerment",
    img: youth,
    desc: "Vocational skills academies for young artists and carpenters, while actively combating drug and substance abuse.",
  },
  {
    title: "Arts & Culture",
    img: culture,
    desc: "Preserving Zimbabwean cultural heritage, building confidence and critical life skills for youths through art forms.",
  },
  {
    title: "Community Development",
    img: community,
    desc: "Borehole clean water installations, wheelchair distribution, and community-led infrastructure.",
  },
  {
    title: "Food Security",
    img: food,
    desc: "Critical food hampers and nutritional provisions to families experiencing extreme economic hardship.",
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
