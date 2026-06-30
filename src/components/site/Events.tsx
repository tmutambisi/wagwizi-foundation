import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/use-reveal";
import flyer from "@/assets/event-launch-flyer.png";

const event = {
  title: "Wagwizi Community Foundation Launch",
  date: "2026-07-11T18:00:00",
  place: "The Exchange at The Country Club",
  type: "Foundation Launch",
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
    <section id="events" ref={ref} className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div data-reveal className="reveal max-w-xl">
          <p className="eyebrow text-terracotta">Mark your calendar</p>
          <h2 className="mt-3 text-4xl text-foreground lg:text-5xl">Upcoming event</h2>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          {/* Flyer — used as-is, no overlay */}
          <div data-reveal className="reveal overflow-hidden rounded-3xl shadow-xl">
            <img
              src={flyer}
              alt="Wagwizi Community Foundation Launch — Saturday 11 July 2026, The Exchange at The Country Club, with a live performance by Jah Prayzah & 3G the Band"
              loading="lazy"
              className="size-full object-contain"
            />
          </div>

          {/* Details */}
          <div data-reveal className="reveal">
            <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-forest-deep">
              {event.type}
            </span>
            <h3 className="mt-5 font-display text-3xl text-foreground lg:text-4xl">{event.title}</h3>
            <p className="mt-3 flex items-center gap-2 text-muted-foreground">
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.6}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></svg>
              Saturday, {fmt(event.date)} · 6PM–11PM
            </p>
            <p className="mt-2 flex items-center gap-2 text-muted-foreground">
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.6}><path d="M12 21c5-3.5 8-7 8-11a8 8 0 0 0-16 0c0 4 3 7.5 8 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
              {event.place}
            </p>
            <p className="mt-6 max-w-md text-muted-foreground">
              A black-tie launch ceremony with a full live performance by Jah Prayzah &amp; 3G the Band.
              Dinner included. Individual tickets $100 · Priority table (seats 10) $1000.
              All proceeds support the work of the Wagwizi Community Foundation.
            </p>

            <div className="mt-7 flex gap-3">
              {[
                { v: cd.d, l: "Days" },
                { v: cd.h, l: "Hrs" },
                { v: cd.m, l: "Min" },
                { v: cd.s, l: "Sec" },
              ].map((u) => (
                <div key={u.l} className="rounded-xl bg-forest px-4 py-3 text-center text-cream">
                  <p className="font-display text-2xl tabular-nums">{String(u.v).padStart(2, "0")}</p>
                  <p className="text-[0.6rem] uppercase tracking-wider text-cream/70">{u.l}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Tickets at <span className="font-semibold text-foreground">www.sahwigate.com</span> &amp; JP Studios ·
              Bookings: Shylet +263 77 697 1656
            </p>
            <a
              href="https://www.sahwigate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest-deep transition-colors hover:bg-gold-soft"
            >
              Get Tickets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
