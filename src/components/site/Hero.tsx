import { useEffect, useState } from "react";
import heroImg1 from "@/assets/jp30K.jpg";
//import heroImg2 from "@/assets/hero3.jpeg";
import heroImg3 from "@/assets/hero2.jpg";

const slides = [
  {
    src: heroImg1,
    alt: "Wagwizi foundation getting a donation of 30K",
  },

  {
    src: heroImg3,
    alt: "Wagwizi Foundation offering help",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative w-full overflow-hidden">
      {/* Full-width hero slideshow */}
      <div className="relative h-[65svh] w-full lg:h-[80svh] overflow-hidden">
        {/* Slides Wrapper for sliding animation */}
        <div
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={slide.src} className="relative h-full w-full shrink-0">
              <img
                src={slide.src}
                alt={slide.alt}
                width={1920}
                height={1280}
                fetchPriority={i === 0 ? "high" : "auto"}
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
            </div>
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

        {/* Slide indicator dots */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 lg:bottom-20 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                setCurrent(i);
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
            <h1 className="max-w-[720px] font-display text-[1.35rem] font-extrabold uppercase leading-[0.95] text-white sm:text-[2.5rem] sm:leading-[1.08] lg:text-[3.25rem]">
              <span className="block sm:inline">Empowering communities</span>{" "}
              <span className="mt-1 block sm:mt-0 sm:inline">across Zimbabwe</span>
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
              Founded by Jah Prayzah — transforming lives through education,
              healthcare &amp; sustainable development since 2025.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#donate"
                className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-forest-deep shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                Donate Now
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
