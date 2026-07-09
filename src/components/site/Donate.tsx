import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-reveal";

const amounts = [
  { value: 25, impact: "provides school supplies for a child" },
  { value: 100, impact: "supports a healthcare outreach day" },
  { value: 250, impact: "trains a young person in a trade" },
  { value: 500, impact: "sponsors a community development project" },
];

const frequencies = ["One-time", "Monthly"] as const;

const allocation = [
  { label: "Education & Scholarships", pct: 40, color: "#C9A84C" }, // gold
  { label: "Healthcare Outreach & Welfare", pct: 25, color: "#4ade80" }, // green
  { label: "Youth Empowerment & Training", pct: 20, color: "#8A9E6E" }, // sage
  { label: "Water Projects & Community Relief", pct: 10, color: "#6B9080" }, // teal
  { label: "Administrative & Audit Compliance", pct: 5, color: "#A89F8C" }, // muted
];

// Build SVG donut segments
function buildDonutSegments(
  items: typeof allocation,
  radius = 56,
  stroke = 18,
) {
  const cx = 80;
  const cy = 80;
  const circumference = 2 * Math.PI * radius;
  let offset = 0; // Start from top (-90deg = -circumference/4)
  const gap = 0.012; // fractional gap between segments

  return items.map((item) => {
    const fraction = item.pct / 100;
    const dashLen = (fraction - gap) * circumference;
    const dashGap = circumference - dashLen;
    const startOffset = circumference - offset * circumference + circumference / 4;
    const seg = {
      ...item,
      dashLen,
      dashGap,
      startOffset,
    };
    offset += fraction;
    return seg;
  });
}

export function Donate() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [selected, setSelected] = useState(100);
  const [freq, setFreq] = useState<(typeof frequencies)[number]>("Monthly");
  const [custom, setCustom] = useState("");
  const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const active = amounts.find((a) => a.value === selected);
  const raised = 184500;
  const goal = 250000;
  const pct = Math.round((raised / goal) * 100);

  const segments = buildDonutSegments(allocation);
  const radius = 56;
  const stroke = 18;
  const cx = 80;
  const cy = 80;
  const size = 160;

  return (
    <section id="donate" ref={ref} className="bg-forest py-20 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: message + progress + donut */}
          <div data-reveal className="reveal">
            <p className="eyebrow text-gold">Your gift, their future</p>
            <h2 className="mt-3 text-balance text-4xl leading-tight text-cream lg:text-5xl">
              Every contribution becomes something real.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/80">
              We keep giving simple, fast and transparent. Choose an amount and see exactly what it
              makes possible — then watch the community rise.
            </p>

            {/* Progress bar and Donut chart commented out until stats are set up */}
            {/*
            <div className="mt-10 rounded-3xl bg-cream/5 p-7 ring-1 ring-cream/10">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-cream/70">Raised this year</p>
                  <p className="font-display text-3xl text-gold">${raised.toLocaleString()}</p>
                </div>
                <p className="text-sm text-cream/70">Goal ${goal.toLocaleString()}</p>
              </div>
              <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-cream/15">
                <div
                  className="h-full rounded-full bg-gold transition-[width] duration-1000"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-cream/60">{pct}% of our annual goal reached</p>
            </div>

            <div className="mt-8 rounded-3xl bg-cream/5 p-7 ring-1 ring-cream/10">
              <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-6">
                Financial Transparency — Where Your Donation Goes
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="relative shrink-0">
                  <svg
                    width={size}
                    height={size}
                    viewBox={`0 0 ${size} ${size}`}
                    className="drop-shadow-lg"
                    aria-label="Fund allocation donut chart"
                  >
                    {segments.map((seg, i) => (
                      <circle
                        key={seg.label}
                        cx={cx}
                        cy={cy}
                        r={radius}
                        fill="none"
                        stroke={seg.color}
                        strokeWidth={hoveredSlice === i ? stroke + 3 : stroke}
                        strokeDasharray={`${seg.dashLen} ${seg.dashGap}`}
                        strokeDashoffset={seg.startOffset}
                        strokeLinecap="butt"
                        className="transition-all duration-300 cursor-pointer"
                        onMouseEnter={() => setHoveredSlice(i)}
                        onMouseLeave={() => setHoveredSlice(null)}
                      />
                    ))}
                    <text
                      x={cx}
                      y={cy - 8}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="22"
                      fontWeight="700"
                      fill={
                        hoveredSlice !== null
                          ? allocation[hoveredSlice].color
                          : "#C9A84C"
                      }
                    >
                      {hoveredSlice !== null ? `${allocation[hoveredSlice].pct}%` : "100%"}
                    </text>
                    <text
                      x={cx}
                      y={cy + 14}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="7"
                      fill="rgba(255,255,255,0.55)"
                      letterSpacing="1.5"
                    >
                      {hoveredSlice !== null
                        ? allocation[hoveredSlice].label.toUpperCase().slice(0, 16) + "…"
                        : "ALLOCATED"}
                    </text>
                  </svg>
                </div>

                <div className="flex-1 w-full space-y-3">
                  {allocation.map((item, i) => (
                    <div
                      key={item.label}
                      className={`flex items-center justify-between text-xs cursor-pointer rounded-xl px-3 py-2 transition-all duration-200 ${
                        hoveredSlice === i ? "bg-cream/10" : "hover:bg-cream/5"
                      }`}
                      onMouseEnter={() => setHoveredSlice(i)}
                      onMouseLeave={() => setHoveredSlice(null)}
                    >
                      <span className="text-cream/80 flex items-center gap-2.5">
                        <span
                          className="inline-block size-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        {item.label}
                      </span>
                      <span
                        className="font-bold ml-3 shrink-0"
                        style={{ color: item.color }}
                      >
                        {item.pct}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-cream/10 flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold/20 ring-1 ring-gold/40">
                  <svg viewBox="0 0 24 24" className="size-5 text-gold" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gold">Officially Registered NGO</p>
                  <p className="text-[0.7rem] text-cream/60">
                    Private Voluntary Organisation · PVO Act [Chapter 17:05] · Reg. No. PVO 123/26
                  </p>
                </div>
              </div>
            </div>
            */}

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-cream/75">
              <span className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 text-gold"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                >
                  <rect x="4" y="10" width="16" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
                Secure payment
              </span>
              <span className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 text-gold"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                >
                  <path d="M12 21c5-3.5 8-7 8-11a8 8 0 0 0-16 0c0 4 3 7.5 8 11Z" />
                  <path d="m9 10 2 2 4-4" />
                </svg>
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
                    onClick={() => {
                      setSelected(a.value);
                      setCustom("");
                    }}
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
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-display text-lg text-muted-foreground">
                    $
                  </span>
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
                  <span className="font-semibold text-forest">${active.value}</span> {active.impact}
                  .
                </p>
              )}

              <button
                onClick={() => {
                  const amount = custom || selected;
                  setMessage(`Hello Shylet, I would like to make a ${freq.toLowerCase()} donation of $${amount} to the Wagwizi Community Foundation. Please share the bank details with me so I can complete my donation.`);
                  setShowModal(true);
                }}
                className="mt-6 w-full rounded-full bg-gold py-4 text-base font-bold text-forest-deep shadow-lg transition-all hover:bg-gold-soft hover:shadow-xl cursor-pointer"
              >
                {freq === "Monthly" ? "Give Monthly" : "Donate"} ${custom || selected}
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Registered PVO No. 123/26 &middot; Corporate &amp; tribute options available at
                checkout.
              </p>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-7 text-foreground shadow-2xl animate-in fade-in-50 zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Title & Subtitle */}
            <h3 className="text-xl font-bold text-zinc-900 pr-8">
              Contact Wagwizi Community Foundation
            </h3>
            <p className="mt-1.5 text-sm text-zinc-500 leading-normal">
              Send a WhatsApp message to our team to get more information about your donation.
            </p>

            {/* Select Contact Dropdown */}
            <div className="mt-5">
              <label className="text-xs font-semibold text-zinc-700 block mb-1.5">
                Select Contact
              </label>
              <div className="relative">
                <select
                  disabled
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 appearance-none outline-none cursor-not-allowed"
                >
                  <option>Shylet Ndarambwa — Wagwizi Foundation</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message Area */}
            <div className="mt-4">
              <label className="text-xs font-semibold text-zinc-700 block mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-forest focus:ring-1 focus:ring-forest transition-colors resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  const url = `https://wa.me/263776971656?text=${encodeURIComponent(message)}`;
                  window.open(url, "_blank");
                  setShowModal(false);
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-forest px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-forest-deep hover:shadow-lg cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-4 fill-current text-white"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
                Send via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
