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
  {
    label: "Facebook",
    href: "https://www.facebook.com/Wagwizifoundation",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/wagwizifoundation/",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
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
                {s.icon}
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
            <li>
              <span className="block text-[0.65rem] font-semibold uppercase tracking-wider text-cream/50">Mobile</span>
              <a href="tel:+263776971656" className="hover:text-gold">077 697 1656</a>
            </li>
            <li>
              <span className="block text-[0.65rem] font-semibold uppercase tracking-wider text-cream/50">Email address</span>
              <a href="mailto:wagwizifoundation@gmail.com" className="hover:text-gold">wagwizifoundation@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Wagwizi Community Foundation. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://tungasonic.co.zw"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-cream/75 transition-colors hover:text-gold"
            >
              TUNGASONIC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
