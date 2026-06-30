const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Programmes", href: "#programmes" },
  { label: "Impact Stories", href: "#impact" },
  { label: "Events", href: "#events" },
  { label: "News", href: "#news" },
  { label: "Get Involved", href: "#involved" },
];

import logo from "@/assets/logo.jpg";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/Wagwizifoundation" },
  { label: "Instagram", href: "https://www.instagram.com/wagwizifoundation/" },
];

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      {/* Newsletter band */}
      <div className="border-b border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <h3 className="font-display text-2xl text-cream">Stay close to the work.</h3>
            <p className="mt-1 text-sm text-cream/70">Stories from the field, delivered monthly. No noise.</p>
          </div>
          <form
            className="flex w-full max-w-md gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              aria-label="Email address"
              className="w-full rounded-full border border-cream/20 bg-cream/5 px-5 py-3 text-sm text-cream outline-none placeholder:text-cream/50 focus:border-gold"
            />
            <button className="shrink-0 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest-deep transition-colors hover:bg-gold-soft">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center overflow-hidden rounded-full bg-cream">
              <img src={logo} alt="Wagwizi Community Foundation logo" className="size-full object-contain" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-xl">Wagwizi</span>
              <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold/90">Community Foundation</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
            Transforming lives across Zimbabwe through education, healthcare, youth
            empowerment, arts and sustainable community development — with dignity
            at the centre.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex size-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold hover:text-gold"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor"><circle cx="12" cy="12" r="4" /><circle cx="18" cy="6" r="1.4" /></svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Quick Links</h4>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-cream/75 transition-colors hover:text-gold">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/75">
            <li>14 Samora Machel Avenue<br />Harare, Zimbabwe</li>
            <li><a href="mailto:hello@wagwizi.org" className="hover:text-gold">hello@wagwizi.org</a></li>
            <li><a href="tel:+263242000000" className="hover:text-gold">+263 242 000 000</a></li>
            <li className="pt-2 text-cream/60">Emergency outreach line<br /><a href="tel:+263772000000" className="font-semibold text-cream hover:text-gold">+263 772 000 000</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Wagwizi Community Foundation. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Annual Report</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
