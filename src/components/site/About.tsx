import { useScrollReveal } from "@/hooks/use-reveal";
import aboutImg from "@/assets/founder-baby.jpg";
import cultureImg from "@/assets/mother-child.jpg";

const timeline = [
  { year: "2019", text: "Wagwizi is founded with a first school feeding programme." },
  { year: "2021", text: "Healthcare outreach reaches its first ten rural districts." },
  { year: "2023", text: "Youth skills academies and borehole projects expand nationwide." },
  { year: "2025", text: "Programmes expand nationwide, transforming communities across Zimbabwe." },
];

const values = [
  { title: "Dignity", text: "We serve every person with respect, never charity for its own sake." },
  { title: "Community First", text: "Local voices lead every project from design to delivery." },
  { title: "Transparency", text: "Every dollar is accounted for and every outcome measured." },
  { title: "Sustainability", text: "We build capacity that outlives any single programme." },
];

export function About() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="about" ref={ref} className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Intro */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-reveal className="reveal relative">
            <img
              src={aboutImg}
              alt="Foundation founder Jah Prayzah greeting a mother and her baby"
              width={1280}
              height={1600}
              loading="lazy"
              className="aspect-4/5 w-full rounded-3xl object-cover shadow-2xl"
            />
            <img
              src={cultureImg}
              alt="A volunteer sharing a joyful moment with a mother and child"
              width={1280}
              height={1600}
              loading="lazy"
              className="absolute -bottom-10 -right-4 hidden w-44 rounded-2xl border-4 border-background object-cover shadow-xl sm:block lg:w-56"
            />
          </div>

          <div data-reveal className="reveal" style={{ transitionDelay: "120ms" }}>
            <p className="eyebrow text-terracotta">Who we are</p>
            <h2 className="mt-4 text-balance text-4xl leading-tight text-foreground lg:text-5xl">
              A foundation born from a simple belief — that no community should rise alone.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Founded by Zimbabwean musician Jah Prayzah and originally registered
              as the Mukudzeyi Mukombe Foundation, we rebranded to the Wagwizi
              Community Foundation to reflect a shift from a founder-centred
              identity to a broader, community-driven movement. Our guiding motto
              is "Kubatirana kwezvanza, kurerutsa ndima" — working together
              lightens the load.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5">
                <h3 className="text-lg text-forest">Our Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To transform lives through education, healthcare, and
                  sustainable opportunity — delivered with dignity.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <h3 className="text-lg text-forest">Our Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Thriving, self-reliant Zimbabwean communities where every child
                  can dream without limits.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24 lg:mt-32">
          <div data-reveal className="reveal mb-12 max-w-xl">
            <p className="eyebrow text-terracotta">Our journey</p>
            <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
              Years of patient, faithful work.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <div
                key={t.year}
                data-reveal
                style={{ transitionDelay: `${i * 90}ms` }}
                className="reveal bg-card p-7"
              >
                <p className="font-display text-3xl text-gold">{t.year}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-24 grid gap-10 lg:mt-32 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal className="reveal">
            <p className="eyebrow text-terracotta">What guides us</p>
            <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">Core values</h2>
            <p className="mt-4 text-muted-foreground">
              Founded by Zimbabwean musician and philanthropist Jah Prayzah, the
              foundation keeps people — not headlines — at the centre of every
              decision.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <div
                key={v.title}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className="reveal rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-xl text-forest">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
