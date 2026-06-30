import { useScrollReveal } from "@/hooks/use-reveal";
import portrait from "@/assets/student-microscope.png";

export function ImpactStory() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-reveal className="reveal order-2 lg:order-1">
            <p className="eyebrow text-terracotta">An impact story</p>
            <h2 className="mt-4 text-balance text-4xl leading-tight text-foreground lg:text-5xl">
              "I used to walk past the school. Now I walk into it."
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Rumbidzai is thirteen. A year ago, her family could no longer afford
              fees and she stayed home, fetching water before sunrise. Through the
              Girls Education Programme she received a scholarship, uniform and a
              mentor who believed in her.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Today she is top of her class and dreams of becoming a nurse — so she
              can return to the very outreach days that once cared for her grandmother.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-display text-3xl text-forest">510</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Girls enrolled</p>
              </div>
              <div>
                <p className="font-display text-3xl text-forest">94%</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Stayed in school</p>
              </div>
              <div>
                <p className="font-display text-3xl text-forest">12</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Districts reached</p>
              </div>
            </div>
          </div>

          <div data-reveal className="reveal order-1 lg:order-2" style={{ transitionDelay: "120ms" }}>
            <figure className="relative">
              <img
                src={portrait}
                alt="A student smiling while using a microscope in science class"
                width={1280}
                height={1280}
                loading="lazy"
                className="aspect-square w-full rounded-3xl object-cover shadow-2xl"
              />
              <figcaption className="absolute -left-4 bottom-8 max-w-[15rem] rounded-2xl bg-forest p-5 text-cream shadow-xl sm:bottom-12">
                <svg viewBox="0 0 24 24" className="size-7 text-gold" fill="currentColor"><path d="M9 7H5v6h4v-2H7c0-2 .8-3 2-3V7Zm10 0h-4v6h4v-2h-2c0-2 .8-3 2-3V7Z" /></svg>
                <p className="mt-2 font-display text-lg leading-snug">
                  Education gave me back my future.
                </p>
                <p className="mt-2 text-xs text-cream/70">— Rumbidzai, Mutoko</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
