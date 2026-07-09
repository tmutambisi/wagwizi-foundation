import { useMemo, useState } from "react";
import { useScrollReveal } from "@/hooks/use-reveal";
import g1 from "@/assets/founder-baby.jpg";
import g2 from "@/assets/student-microscope.png";
import g3 from "@/assets/mother-child.jpg";
import g4 from "@/assets/food-distribution.jpg";
import g5 from "@/assets/outreach-wheelchair.jpg";
import g6 from "@/assets/founder-portrait.jpg";

const photos = [
  {
    src: g1,
    cat: "Community",
    alt: "Jah Prayzah greeting a mother and her baby at a foundation event",
  },
  { src: g2, cat: "Education", alt: "A student using a microscope in science class" },
  { src: g3, cat: "Community", alt: "A volunteer sharing a joyful moment with a mother and child" },
  { src: g4, cat: "Events", alt: "The team handing over food and supplies to a community" },
  {
    src: g5,
    cat: "Health",
    alt: "Volunteers delivering a wheelchair and supplies to a rural home",
  },
  { src: g6, cat: "Volunteers", alt: "Foundation members at a community outreach" },
];

const filters = ["All", "Community", "Education", "Health", "Events", "Volunteers"];

export function Gallery() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const shown = useMemo(
    () => (filter === "All" ? photos : photos.filter((p) => p.cat === filter)),
    [filter],
  );

  return (
    <section id="gallery" ref={ref} className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div data-reveal className="reveal max-w-2xl">
          <p className="eyebrow text-terracotta">Through the lens</p>
          <h2 className="mt-3 text-4xl text-foreground lg:text-5xl">Moments that matter</h2>
        </div>

        <div data-reveal className="reveal mt-8 flex flex-wrap gap-2.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-forest text-cream"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-2 gap-4 [column-fill:_balance] sm:columns-3 lg:columns-4">
          {shown.map((p) => (
            <button
              key={p.alt}
              onClick={() => setLightbox(p.src)}
              className="group mb-4 block w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 p-6 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute right-6 top-6 flex size-11 items-center justify-center rounded-full bg-cream/10 text-cream"
            aria-label="Close image"
            onClick={() => setLightbox(null)}
          >
            <svg
              viewBox="0 0 24 24"
              className="size-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
