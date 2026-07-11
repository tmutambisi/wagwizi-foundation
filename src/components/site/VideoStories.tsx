import { useScrollReveal } from "@/hooks/use-reveal";

const FB_VIDEO =
  "https://www.facebook.com/plugins/video.php?height=476&href=" +
  encodeURIComponent("https://www.facebook.com/share/r/1BNWWZVrQP/") +
  "&show_text=false&width=560&t=0";

export function VideoStories() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="video" ref={ref} className="bg-forest-deep py-20 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div data-reveal className="reveal max-w-2xl">
          <p className="eyebrow text-gold">Watch</p>
          <h2 className="mt-3 text-4xl text-cream lg:text-5xl">Watch our impact</h2>
          <p className="mt-4 text-cream/75">
            Honest moments from the field — see the Wagwizi Community Foundation and founder Jah
            Prayzah at work in our communities.
          </p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-[1.5fr_1fr]">
          <div data-reveal className="reveal overflow-hidden rounded-3xl bg-charcoal shadow-2xl">
            <div className="aspect-video w-full">
              <iframe
                src={FB_VIDEO}
                title="Jah Prayzah — Wagwizi Community Foundation"
                className="size-full"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                Featured · Jah Prayzah
              </p>
              <h3 className="mt-2 font-display text-2xl text-cream">A message from our founder</h3>
            </div>
          </div>

          <div data-reveal className="reveal overflow-hidden rounded-3xl bg-charcoal shadow-2xl">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/459AOykFLRo?rel=0&modestbranding=1&playsinline=1&showinfo=0"
                title="Wagwizi Community Foundation — Harare Children's Home Christmas Visit"
                className="size-full"
                style={{ border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">Outreach · Christmas Visit</p>
              <h3 className="mt-2 font-display text-2xl text-cream">Harare Children's Home</h3>
              <p className="mt-2 text-sm text-cream/60">
                Wagwizi Community Foundation visits the Harare Children's Home to bring joy and support during the Christmas season.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
