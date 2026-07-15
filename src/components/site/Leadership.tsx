import { useScrollReveal } from "@/hooks/use-reveal";
import JP from "@/assets/fouunder-jp.jpg";
import BM from "@/assets/brian.jpeg";
import NM from "@/assets/nigel.jpg";
import SN from "@/assets/shylett.jpeg";
import KM from "@/assets/keen.jpeg";



type Leader = {
  name: string;
  role: string;
  bio?: string;
  photo?: string; // future: import actual photo here
  badge?: string; // short accent tag e.g. "Founder"
};

const leaders: Leader[] = [
  {
    name: "Mukudzeyi Mukombe",
    role: "Founder & Donor",
    badge: "Jah Prayzah",
    photo: JP,
    bio: "Zimbabwean recording artist and humanitarian Mukudzeyi Mukombe — known worldwide as Jah Prayzah — founded the Wagwizi Community Foundation in 2025 with the belief that every community deserves the opportunity to thrive. His vision and generosity continue to drive every programme the foundation delivers.",
  },
  {
    name: "Brian Mataruka",
    role: "Chairman",
    photo: BM,

  },
  {
    name: "Nigel Mushapaidze",
    role: "Vice Chairman",
    photo: NM,

  },
  {
    name: "Shylet Ndarambwa",
    role: "Secretary",
    photo: SN,
  },
  {
    name: "Keen Mushapaidze",
    role: "Treasurer",
    photo: KM,
  },
];

/** Placeholder shown when no photo is supplied */
function PhotoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-forest/20 via-forest-deep/50 to-forest-deep/80">
      {/* Camera icon */}
      <svg
        viewBox="0 0 24 24"
        className="size-12 text-gold/40"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
      >
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
      <span className="px-4 text-center text-[0.65rem] font-bold uppercase tracking-widest text-cream/40">
        Photo Coming Soon
      </span>
      {/* Subtle initials watermark */}
      <span className="font-display text-6xl font-extrabold text-cream/5 select-none absolute">
        {name
          .split(" ")
          .map((w) => w[0])
          .slice(0, 2)
          .join("")}
      </span>
    </div>
  );
}

export function Leadership() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="leadership" ref={ref} className="bg-forest-deep py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div data-reveal className="reveal mb-14 text-center lg:mb-20">
          <p className="eyebrow text-gold">Stewardship</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-cream lg:text-5xl">
            Our Leadership
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/70">
            A dedicated board of trustees who uphold the foundation's values of
            dignity, transparency, and community-first service.
          </p>
        </div>

        {/* Founder — full-width spotlight card */}
        <div
          data-reveal
          className="reveal mb-10 overflow-hidden rounded-3xl border border-gold/20 bg-white/5 backdrop-blur-sm"
        >
          <div className="grid lg:grid-cols-[360px_1fr]">
            {/* Photo holder — 360 x 440 px recommended */}
            <div className="relative h-80 w-full overflow-hidden lg:h-[440px]">
              {leaders[0].photo ? (
                <img
                  src={leaders[0].photo}
                  alt={leaders[0].name}
                  className="size-full object-cover object-top"
                  width={360}
                  height={440}
                  loading="lazy"
                />
              ) : (
                <PhotoPlaceholder name={leaders[0].name} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center px-8 py-10 lg:px-12 lg:py-14">
              <span className="inline-flex w-fit items-center rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold">
                {leaders[0].badge}
              </span>
              <h3 className="mt-4 font-display text-3xl font-extrabold text-cream lg:text-4xl">
                {leaders[0].name}
              </h3>
              <p className="mt-2 text-lg font-semibold text-gold">
                {leaders[0].role}
              </p>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/70">
                {leaders[0].bio}
              </p>
            </div>
          </div>
        </div>

        {/* Board grid — remaining 4 members */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.slice(1).map((leader, i) => (
            <div
              key={leader.name}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10"
            >
              {/* Photo holder — 400 x 480 px recommended (5:6 ratio) */}
              <div className="relative aspect-[5/6] w-full overflow-hidden bg-forest/40">
                {leader.photo ? (
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    width={400}
                    height={480}
                    loading="lazy"
                  />
                ) : (
                  <PhotoPlaceholder name={leader.name} />
                )}
                {/* Gradient for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/10 to-transparent" />

                {/* Role pill */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                  <span className="inline-block rounded-full border border-gold/40 bg-gold/15 px-3 py-0.5 text-[0.65rem] font-bold uppercase tracking-widest text-gold backdrop-blur-sm">
                    {leader.role}
                  </span>
                </div>
              </div>

              {/* Name + bio */}
              <div className="px-5 py-4">
                <p className="font-display text-lg font-bold leading-tight text-cream">
                  {leader.name}
                </p>
                {leader.bio && (
                  <p className="mt-1.5 text-xs leading-relaxed text-cream/50">{leader.bio}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
