import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/wagwizi-logo.png";

const links = [
  { label: "ABOUT", to: "/", hash: "about" },
  { label: "PROGRAMMES", to: "/programmes", hash: undefined },
  { label: "IMPACT", to: "/impact", hash: undefined },
  { label: "EVENTS", to: "/events", hash: undefined },
  { label: "GET INVOLVED", to: "/get-involved", hash: undefined },
  { label: "CONTACT", to: "/contact", hash: undefined },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const isHome = routerState.location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [routerState.location.pathname]);

  const navBg = isHome
    ? scrolled
      ? "bg-forest-deep/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
      : "bg-transparent"
    : "bg-forest-deep shadow-[0_4px_24px_rgba(0,0,0,0.15)]";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${navBg}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label="Wagwizi Community Foundation home"
        >
          <span className="flex size-10 items-center justify-center overflow-hidden rounded-full bg-cream">
            <img
              src={logo}
              alt="Wagwizi Community Foundation logo"
              className="size-full object-contain"
            />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg tracking-widest text-cream">WAGWIZI</span>
            <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold/90">
              COMMUNITY FOUNDATION
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className="text-sm font-medium text-cream/80 transition-colors hover:text-gold [&.active]:text-gold [&.active]:font-semibold"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/get-involved"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-forest-deep shadow-sm transition-all hover:bg-gold-soft hover:shadow-lg sm:inline-block"
          >
            Donate
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full border border-cream/30 text-cream lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-cream/10 bg-forest-deep/98 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-cream/85 transition-colors hover:bg-cream/5 hover:text-gold [&.active]:text-gold [&.active]:bg-cream/5"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/get-involved"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-forest-deep"
            >
              Donate Today
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
