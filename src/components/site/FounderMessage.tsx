import { useScrollReveal } from "@/hooks/use-reveal";
import founderImg from "@/assets/fouunder-jp.jpg";

export function FounderMessage() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section
      id="founder-message"
      ref={ref}
      className="bg-card py-20 lg:py-32 border-y border-border"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left: Founder Portrait */}
          <div data-reveal className="reveal lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/5] bg-forest-deep">
              <img
                src={founderImg}
                alt="Founder Mukudzeyi Mukombe (Jah Prayzah)"
                width={800}
                height={1000}
                loading="lazy"
                className="size-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-cream">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Founder &amp; Donor
                </p>
                <h3 className="text-xl font-display mt-1">Mukudzeyi Mukombe</h3>
                <p className="text-sm opacity-80">(Jah Prayzah)</p>
              </div>
            </div>
            {/* Decorative border accent */}
            <div className="absolute -inset-3 -z-10 rounded-[2.25rem] border border-gold/30 pointer-events-none hidden sm:block" />
          </div>

          {/* Right: Message Content */}
          <div data-reveal className="reveal lg:col-span-7" style={{ transitionDelay: "150ms" }}>
            <p className="eyebrow text-terracotta">Founder's Message</p>
            <h2 className="mt-4 text-balance text-4xl leading-tight text-foreground lg:text-5xl">
              Kubatirana Kwezvanza, Kurerutsa Ndima.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Music has always been my way of connecting with people. But early on, I realized
                that the real work is about the communities that inspired my songs. When we started
                in 2019, it was about school feeding programs. Over the years, we've expanded to
                healthcare academies and borehole projects across Zimbabwe.
              </p>
              <p>
                Rebranding to the{" "}
                <span className="font-semibold text-foreground">Wagwizi Community Foundation</span>{" "}
                in 2026 represents a shift towards an inclusive, community-driven movement. I am
                just a founder and donor, but it is your hands that build the future.
              </p>
              <p className="font-medium text-forest-deep italic">
                &ldquo;Working together lightens the load.&rdquo; Let us walk this path together,
                hand in hand, to build self-reliant communities.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="font-display text-lg text-foreground font-semibold">
                    Mukudzeyi Mukombe
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Founder, Wagwizi Community Foundation
                  </p>
                </div>
                {/* Stylized digital signature */}
                <div className="font-serif text-3xl font-bold tracking-wider text-gold select-none transform -rotate-3 border-b-2 border-gold/40 pb-1 w-fit">
                  JPrayzah
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
