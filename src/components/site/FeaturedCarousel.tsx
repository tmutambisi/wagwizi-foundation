import { useRef } from "react";
import { useScrollReveal } from "@/hooks/use-reveal";
import school from "@/assets/student-microscope.png";
import medical from "@/assets/mother-child.jpg";
import food from "@/assets/food-distribution.jpg";
import youth from "@/assets/founder-portrait.jpg";
import borehole from "@/assets/outreach-wheelchair.jpg";
import girls from "@/assets/founder-baby.jpg";

const slides = [
  {
    img: school,
    name: "Education Support",
    location: "Zimbabwe",
    desc: "Scholarships, school supplies and learning resources so children learn with dignity.",
    beneficiaries: "Learners supported",
  },
  {
    img: medical,
    name: "Healthcare & Welfare",
    location: "Harare",
    desc: "Caring for vulnerable children, mothers and the elderly across communities.",
    beneficiaries: "Families reached",
  },
  {
    img: borehole,
    name: "Mobility & Relief",
    location: "Rural Zimbabwe",
    desc: "Wheelchairs, essentials and home deliveries for those who need them most.",
    beneficiaries: "Homes served",
  },
  {
    img: youth,
    name: "Youth Empowerment",
    location: "Harare",
    desc: "Helping young artists and producers launch careers and fighting drug abuse.",
    beneficiaries: "Young people",
  },
  {
    img: food,
    name: "Food & Supplies Distribution",
    location: "Zimbabwe",
    desc: "Food hampers and essentials shared with disadvantaged communities.",
    beneficiaries: "Communities",
  },
  {
    img: girls,
    name: "Children & the Girl Child",
    location: "Zimbabwe",
    desc: "Protecting the rights of children and supporting the girl child.",
    beneficiaries: "Children",
  },
];

export function FeaturedCarousel() {
  const ref = useScrollReveal<HTMLDivElement>();
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * (track.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="impact" ref={ref} className="bg-forest-deep py-20 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div data-reveal className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow text-gold">Featured work</p>
            <h2 className="mt-3 text-4xl text-cream lg:text-5xl">Stories of transformation</h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous projects"
              className="flex size-12 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next projects"
              className="flex size-12 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-4 lg:px-10"
      >
        {slides.map((s) => (
          <article
            key={s.name}
            className="group relative aspect-3/4 w-[80vw] shrink-0 snap-start overflow-hidden rounded-3xl sm:w-[58vw] lg:aspect-4/5 lg:w-[40%] xl:w-[32%]"
          >
            <img
              src={s.img}
              alt={s.name}
              width={1280}
              height={1600}
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                <svg
                  viewBox="0 0 24 24"
                  className="size-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M12 21c5-3.5 8-7 8-11a8 8 0 0 0-16 0c0 4 3 7.5 8 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                {s.location}
              </p>
              <h3 className="mt-2 font-display text-2xl text-cream">{s.name}</h3>
              <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-cream/80 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                {s.desc}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-cream/15 px-3 py-1 text-xs font-medium text-cream backdrop-blur-sm">
                  {s.beneficiaries}
                </span>
                <span className="flex items-center gap-1 text-sm font-semibold text-gold">
                  Read Story
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
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
