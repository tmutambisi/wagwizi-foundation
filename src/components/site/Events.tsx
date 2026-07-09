import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-reveal";
import flyer from "@/assets/event-launch-flyer.png";

const event = {
  title: "Wagwizi Community Foundation Launch",
  date: "2026-07-11T18:00:00",
  place: "The Exchange at The Country Club",
};

function useCountdown(target: string) {
  const [left, setLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, new Date(target).getTime() - Date.now());
      setLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return left;
}

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export function Events() {
  const ref = useScrollReveal<HTMLDivElement>();
  const cd = useCountdown(event.date);

  return (
    <section id="events" ref={ref} className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div
          data-reveal
          className="reveal flex flex-wrap items-end justify-between gap-4 border-b border-border pb-8"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Upcoming Event
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              Foundation Launch
            </h2>
          </div>
          <Link
            to="/events"
            className="text-sm font-semibold text-forest hover:underline"
          >
            View All Events →
          </Link>
        </div>

        {/* Event card — horizontal layout */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
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
              <p className="font-semibold text-foreground">Saturday, {fmt(event.date)} · 6PM–11PM</p>
              <p>{event.place} · Black-Tie Event</p>
            </div>

            {/* Countdown */}
            <div className="flex gap-3">
              {[
                { v: cd.d, l: "Days" },
                { v: cd.h, l: "Hrs" },
                { v: cd.m, l: "Min" },
                { v: cd.s, l: "Sec" },
              ].map((u) => (
                <div
                  key={u.l}
                  className="rounded-lg bg-forest-deep px-4 py-3 text-center text-cream"
                >
                  <p className="font-display text-xl tabular-nums">
                    {String(u.v).padStart(2, "0")}
                  </p>
                  <p className="text-[0.6rem] uppercase tracking-wider text-cream/60">{u.l}</p>
                </div>
              ))}
            </div>

            {/* FAQ cards */}
            <div className="space-y-3 rounded-2xl border border-border bg-card p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-forest">
                Frequently Asked Questions
              </p>
              <div className="space-y-4 divide-y divide-border text-sm">
                <div className="pt-3">
                  <p className="font-semibold text-foreground">Is this a normal Jah Prayzah show?</p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    No. This is the official Wagwizi Community Foundation Launch — a formal evening
                    with dinner, speeches, and then a full live performance by Jah Prayzah &amp; 3G
                    the Band.
                  </p>
                </div>
                <div className="pt-3">
                  <p className="font-semibold text-foreground">
                    What do the ticket proceeds go towards?
                  </p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    All proceeds support the work of Wagwizi Community Foundation, whose focus is
                    community impact — especially supporting women, vulnerable families, the girl
                    child, and young people affected by drug and substance abuse.
                  </p>
                </div>
                <div className="pt-3">
                  <p className="font-semibold text-foreground">
                    How do I buy tickets or book a table?
                  </p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    Individual tickets ($100) are available on{" "}
                    <a
                      href="https://www.sahwigate.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-forest hover:underline"
                    >
                      SahwiGate
                    </a>{" "}
                    and at JP Studios. Priority tables (seats 10) at $1,000 are available
                    exclusively at JP Studios.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://www.sahwigate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-forest-deep transition-colors hover:bg-gold-soft"
              >
                Get Tickets on SahwiGate
              </a>
              <a
                href="tel:+263776971656"
                className="text-sm font-semibold text-forest hover:underline"
              >
                Enquiries: +263 77 697 1656
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
