import heroImg from "@/assets/founder-baby.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-forest-deep">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="A Zimbabwean student smiling while using a microscope in a science class"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="size-full animate-kenburns object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 lg:px-10 lg:pb-24">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5 flex items-center gap-3 text-gold">
            <span className="h-px w-10 bg-gold" />
            Zimbabwe · Since 2019
          </p>
          <h1 className="text-balance font-display text-[2.7rem] font-extrabold leading-[1.02] text-cream sm:text-6xl lg:text-7xl">
            Wagwizi Community
            <br />
            <span className="text-gold">Foundation</span>
          </h1>
          <p className="mt-6 max-w-2xl font-display text-base font-bold uppercase tracking-[0.18em] text-cream/90 sm:text-lg">
            Kubatirana Kwezvanza, Kururutsa Ndima.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-cream/85">
            Building stronger communities through education, healthcare, youth
            empowerment and sustainable opportunities.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#donate"
              className="rounded-md bg-gold px-7 py-3.5 text-sm font-semibold text-forest-deep shadow-lg transition-all hover:bg-gold-soft hover:shadow-xl"
            >
              Join the Movement
            </a>
            <a
              href="#involved"
              className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream transition-all hover:border-cream hover:bg-cream/10"
            >
              Become a Partner
            </a>
            <a
              href="#video"
              className="group flex items-center gap-3 px-2 py-3.5 text-sm font-semibold text-cream"
            >
              <span className="flex size-10 items-center justify-center rounded-full border border-cream/40 transition-all group-hover:border-gold group-hover:text-gold">
                <svg viewBox="0 0 24 24" className="size-4 translate-x-px" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Watch Our Story
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/60 lg:flex"
        aria-label="Scroll down"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-cream/40" />
      </a>
    </section>
  );
}
