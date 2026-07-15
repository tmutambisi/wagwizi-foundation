import { Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-reveal";
import flyer from "@/assets/event-launch-flyer.png";
import jpaddress from "@/assets/jpaddress.jpeg";
import partners from "@/assets/partners.jpeg";

const event = {
  title: "Wagwizi Community Foundation Launch",
  date: "2026-07-11T18:00:00",
  place: "The Exchange at The Country Club",
};

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export function Events() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="events" ref={ref} className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-20">

        {/* ── Header ── */}
        <div
          data-reveal
          className="reveal flex flex-wrap items-end justify-between gap-4 border-b border-border pb-8"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Past Event
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              Foundation Launch
            </h2>
          </div>
          <Link to="/events" className="text-sm font-semibold text-forest hover:underline">
            View All Events →
          </Link>
        </div>

        {/* ── Flyer + basic details ── */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Flyer */}
          <div data-reveal className="reveal overflow-hidden rounded-xl shadow-lg">
            <img
              src={flyer}
              alt="Wagwizi Community Foundation Launch — Saturday 11 July 2026"
              loading="lazy"
              className="size-full object-contain"
            />
          </div>

          {/* Details */}
          <div data-reveal className="reveal space-y-6">
            <h3 className="font-display text-2xl font-bold text-foreground lg:text-3xl">
              {event.title}
            </h3>
            <div className="flex flex-col gap-1 text-muted-foreground">
              <p className="font-semibold text-foreground">
                Saturday, {fmt(event.date)} · 6PM–11PM
              </p>
              <p>{event.place} · Black-Tie Event</p>
            </div>

            {/* About the event */}
            <div className="space-y-3 rounded-2xl border border-border bg-card p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-forest">
                About the Event
              </p>
              <div className="space-y-4 divide-y divide-border text-sm">
                <div className="pt-3">
                  <p className="font-semibold text-foreground">
                    Was this a normal Jah Prayzah show?
                  </p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    No. This was the official Wagwizi Community Foundation Launch — a formal
                    evening with dinner, speeches, and then a full live performance by Jah
                    Prayzah &amp; 3G the Band.
                  </p>
                </div>
                <div className="pt-3">
                  <p className="font-semibold text-foreground">
                    What did the ticket proceeds go towards?
                  </p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    All proceeds support the work of Wagwizi Community Foundation — especially
                    supporting women, vulnerable families, the girl child, and young people
                    affected by drug and substance abuse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Founder's Address + Thank-You Quote ── */}
        <div data-reveal className="reveal grid items-center gap-10 lg:grid-cols-2">
          {/* JP at the podium photo */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={jpaddress}
              alt="Jah Prayzah addressing guests at the Wagwizi Community Foundation Launch"
              loading="lazy"
              className="size-full object-cover object-top"
            />
          </div>

          {/* Founder's quote */}
          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Words from the Founder
            </p>
            <h3 className="font-display text-2xl font-bold text-foreground lg:text-3xl">
              A heartfelt thank you
            </h3>

            {/* Pull-quote */}
            <blockquote className="relative rounded-2xl bg-forest-deep px-8 py-7 text-cream shadow-lg">
              {/* decorative quote mark */}
              <span
                aria-hidden
                className="absolute -top-4 left-6 font-display text-7xl leading-none text-gold/40 select-none"
              >
                "
              </span>
              <p className="relative text-base leading-relaxed italic sm:text-lg">
                Moyo wangu uzere nemufaro nekutenda. Ndinotenda zvikuru kune vose vakauya
                kuzoisa ruoko pakutanga kwerwendo urwu.
              </p>
              <p className="relative mt-4 text-base leading-relaxed italic sm:text-lg">
                Uku ndiko kutanga bedzi, uye ndinovimba kuti ticharamba tichifamba pamwe chete,
                tichishandura hupenyu hwevakawanda.
              </p>
              <p className="relative mt-4 text-base leading-relaxed sm:text-lg">
                Wagwizi Community Foundation is here to stay, and together we will continue
                making a positive difference in the lives of those who need us most.
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-cream/20" />
                <cite className="text-xs font-bold not-italic uppercase tracking-widest text-gold">
                  Jah Prayzah · Founder
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>

        {/* ── Partners Thank-You ── */}
        <div data-reveal className="reveal space-y-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              With Gratitude
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
              Thank you to our partners
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              The Foundation Launch would not have been possible without the generous support
              of our incredible partners. Together we have taken the first step —
              Kubatirana Kwezvanza, Kurerutsa Ndima.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={partners}
              alt="Thank You To Our Partners — Wagwizi Community Foundation Launch"
              loading="lazy"
              className="w-full object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
