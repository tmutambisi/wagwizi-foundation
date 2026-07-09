import { useEffect, useState } from "react";
import heroImg1 from "@/assets/hero.jpeg";
import heroImg2 from "@/assets/hero3.jpg";
import heroImg3 from "@/assets/hero2.jpg";

const slides = [
  {
    src: heroImg1,
    alt: "Founder Jah Prayzah greeting community members at an outreach event",
  },
  {
    src: heroImg2,
    alt: "A young Zimbabwean student focused at a microscope, supported by the foundation",
  },
  {
    src: heroImg3,
    alt: "Mukudzeyi Mukombe (Jah Prayzah), Founder of the Wagwizi Community Foundation",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFading(false);
      }, 600);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative w-full overflow-hidden">
      {/* Full-width hero slideshow */}
      <div className="relative h-[65svh] w-full lg:h-[80svh]">
        {/* Slides */}
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width={1920}
            height={1280}
            fetchPriority={i === 0 ? "high" : "auto"}
            decoding="async"
            className={`absolute inset-0 size-full object-cover object-top transition-opacity duration-700 ${i === current && !fading ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Slide indicator dots */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 lg:bottom-20 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                setFading(true);
                setTimeout(() => {
                  setCurrent(i);
                  setFading(false);
                }, 300);
              }}
              className={`h-1.5 rounded-full transition-all duration-400 ${i === current ? "bg-gold w-6" : "bg-white/40 w-1.5 hover:bg-white/60"
                }`}
            />
          ))}
        </div>

        {/* Headline — bottom-left */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-10 lg:px-10 lg:pb-14">
            <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold sm:text-xs">
              Kubatirana Kwezvanza, Kurerutsa Ndima
            </p>
            <h1 className="max-w-[720px] font-display text-[1.75rem] font-extrabold uppercase leading-[1.08] text-white sm:text-[2.5rem] lg:text-[3.25rem]">
              Empowering communities
              <br className="hidden sm:block" />
              across Zimbabwe
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
              Founded by Jah Prayzah — transforming lives through education,
              healthcare &amp; sustainable development since 2019.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#donate"
                className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-forest-deep shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                Donate Now
              </a>
              <a
                href="#about"
                className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-gold hover:bg-white/20"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gold bar — PVO registration + mission */}
      <div className="bg-gold">
        <p className="mx-auto max-w-7xl px-6 py-4 text-center text-[0.8rem] font-bold uppercase tracking-wide text-forest-deep sm:text-sm lg:px-10">
          The Wagwizi Community Foundation (PVO 123/26) was founded by Jah Prayzah to transform
          lives through education, healthcare &amp; sustainable development.
        </p>
      </div>
    </section>
  );
}
