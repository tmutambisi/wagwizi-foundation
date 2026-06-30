import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-reveal";

const amounts = [
  { value: 25, impact: "provides school supplies for a child" },
  { value: 100, impact: "supports a healthcare outreach day" },
  { value: 250, impact: "trains a young person in a trade" },
  { value: 500, impact: "sponsors a community development project" },
];

const frequencies = ["One-time", "Monthly"] as const;

export function Donate() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [selected, setSelected] = useState(100);
  const [freq, setFreq] = useState<(typeof frequencies)[number]>("Monthly");
  const [custom, setCustom] = useState("");

  const active = amounts.find((a) => a.value === selected);
  const raised = 184500;
  const goal = 250000;
  const pct = Math.round((raised / goal) * 100);

  return (
    <section id="donate" ref={ref} className="bg-forest py-20 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: message + progress */}
          <div data-reveal className="reveal">
            <p className="eyebrow text-gold">Your gift, their future</p>
            <h2 className="mt-3 text-balance text-4xl leading-tight text-cream lg:text-5xl">
              Every contribution becomes something real.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/80">
              We keep giving simple, fast and transparent. Choose an amount and
              see exactly what it makes possible — then watch the community rise.
            </p>

            <div className="mt-10 rounded-3xl bg-cream/5 p-7 ring-1 ring-cream/10">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-cream/70">Raised this year</p>
                  <p className="font-display text-3xl text-gold">${raised.toLocaleString()}</p>
                </div>
                <p className="text-sm text-cream/70">Goal ${goal.toLocaleString()}</p>
              </div>
              <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-cream/15">
                <div className="h-full rounded-full bg-gold transition-[width] duration-1000" style={{ width: `${pct}%` }} />
              </div>
              <p className="mt-2 text-xs text-cream/60">{pct}% of our annual goal reached</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-cream/75">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="size-5 text-gold" fill="none" stroke="currentColor" strokeWidth={1.6}><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
                Secure payment
              </span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="size-5 text-gold" fill="none" stroke="currentColor" strokeWidth={1.6}><path d="M12 21c5-3.5 8-7 8-11a8 8 0 0 0-16 0c0 4 3 7.5 8 11Z" /><path d="m9 10 2 2 4-4" /></svg>
                Tribute giving available
              </span>
            </div>
          </div>

          {/* Right: donation card */}
          <div data-reveal className="reveal" style={{ transitionDelay: "120ms" }}>
            <div className="rounded-3xl bg-cream p-7 text-foreground shadow-2xl sm:p-9">
              <div className="grid grid-cols-2 gap-2 rounded-full bg-secondary p-1.5">
                {frequencies.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFreq(f)}
                    className={`rounded-full py-2.5 text-sm font-semibold transition-colors ${
                      freq === f ? "bg-forest text-cream" : "text-secondary-foreground"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {amounts.map((a) => (
                  <button
                    key={a.value}
                    onClick={() => { setSelected(a.value); setCustom(""); }}
                    className={`rounded-2xl border-2 py-4 font-display text-2xl transition-all ${
                      selected === a.value && !custom
                        ? "border-forest bg-forest text-cream"
                        : "border-border bg-card text-foreground hover:border-forest/50"
                    }`}
                  >
                    ${a.value}
                  </button>
                ))}
              </div>

              <div className="mt-3">
                <label className="relative block">
                  <span className="sr-only">Custom amount</span>
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-display text-lg text-muted-foreground">$</span>
                  <input
                    type="number"
                    min={1}
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    placeholder="Other amount"
                    className="w-full rounded-2xl border-2 border-border bg-card py-3.5 pl-9 pr-4 text-lg outline-none transition-colors placeholder:text-muted-foreground focus:border-forest"
                  />
                </label>
              </div>

              {active && !custom && (
                <p className="mt-5 rounded-2xl bg-secondary px-4 py-3 text-sm text-secondary-foreground">
                  <span className="font-semibold text-forest">${active.value}</span> {active.impact}.
                </p>
              )}

              <button className="mt-6 w-full rounded-full bg-gold py-4 text-base font-bold text-forest-deep shadow-lg transition-all hover:bg-gold-soft hover:shadow-xl">
                {freq === "Monthly" ? "Give Monthly" : "Donate"} ${custom || selected}
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Corporate & tribute giving options available at checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
