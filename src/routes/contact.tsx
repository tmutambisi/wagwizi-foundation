import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Wagwizi Community Foundation" },
      {
        name: "description",
        content:
          "Get in touch with the Wagwizi Community Foundation. Reach out to us for donations, partnerships, volunteering, corporate sponsorship or media enquiries.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactSection() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: Info */}
          <div data-reveal className="reveal">
            <p className="eyebrow text-terracotta">Talk to us</p>
            <h2 className="mt-4 text-balance text-4xl leading-tight text-foreground lg:text-5xl">
              We would love to hear from you.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Whether you are a donor, corporate partner, volunteer, or just want to
              learn more about our work, our doors are always open. Reach out and join the
              movement.
            </p>

            <div className="mt-10 space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.61 19a19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-2.92-8.2A2 2 0 0 1 4.67 2.72h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17.92z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:+263776971656"
                    className="mt-1 block text-lg font-medium text-foreground transition-colors hover:text-forest"
                  >
                    +263 77 697 1656
                  </a>
                  <p className="text-sm text-muted-foreground">Bookings: Shylet Ndarambwa</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <a
                    href="mailto:wagwizifoundation@gmail.com"
                    className="mt-1 block text-lg font-medium text-foreground transition-colors hover:text-forest"
                  >
                    wagwizifoundation@gmail.com
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Social Media
                  </p>
                  <div className="mt-1 flex flex-wrap gap-3">
                    <a
                      href="https://www.facebook.com/Wagwizifoundation"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-forest hover:underline"
                    >
                      Facebook
                    </a>
                    <span className="text-muted-foreground">·</span>
                    <a
                      href="https://www.instagram.com/wagwizifoundation/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-forest hover:underline"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              {/* Registration */}
              <div className="rounded-2xl border border-border bg-secondary p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Official Registration
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Private Voluntary Organisation · Act [Chapter 17:05] · Reg. No.{" "}
                  <span className="font-semibold text-foreground">PVO 123/26</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div data-reveal className="reveal" style={{ transitionDelay: "150ms" }}>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm lg:p-10">
              <h3 className="text-2xl text-foreground">Send us a message</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                <i> We will get back to you within 48 hours.</i>
              </p>

              <form
                className="mt-8 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const data = new FormData(form);
                  const subject = encodeURIComponent(
                    `Wagwizi Foundation — ${data.get("subject") || "Enquiry"}`,
                  );
                  const body = encodeURIComponent(
                    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCategory: ${data.get("category")}\n\n${data.get("message")}`,
                  );
                  window.location.href = `mailto:wagwizifoundation@gmail.com?subject=${subject}&body=${body}`;
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-foreground"
                    >
                      Full name <span className="text-terracotta">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-forest focus:ring-1 focus:ring-forest"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-foreground"
                    >
                      Email address <span className="text-terracotta">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-forest focus:ring-1 focus:ring-forest"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-category"
                    className="block text-sm font-medium text-foreground"
                  >
                    Enquiry type
                  </label>
                  <select
                    id="contact-category"
                    name="category"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-forest focus:ring-1 focus:ring-forest"
                  >
                    <option value="">Select a category</option>
                    <option>Donation</option>
                    <option>Partnership / Sponsorship</option>
                    <option>Volunteering</option>
                    <option>Media / Press</option>
                    <option>Events & Tickets</option>
                    <option>General Enquiry</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-medium text-foreground"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Brief subject line"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-forest focus:ring-1 focus:ring-forest"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-foreground"
                  >
                    Message <span className="text-terracotta">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us how you would like to get involved or how we can help..."
                    className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-forest focus:ring-1 focus:ring-forest"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gold py-4 text-sm font-bold text-forest-deep shadow-lg transition-all hover:bg-gold-soft hover:shadow-xl"
                >
                  Send Message
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  This will open your email client. Alternatively, email us directly at{" "}
                  <a
                    href="mailto:wagwizifoundation@gmail.com"
                    className="font-medium text-forest hover:underline"
                  >
                    wagwizifoundation@gmail.com
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <div className="bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="bg-forest-deep py-20 text-center text-cream lg:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <p className="eyebrow text-gold">We are here</p>
            <h1 className="mt-4 font-display text-5xl font-extrabold text-cream lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-cream/80">
              Reach out for donations, partnerships, volunteering, or any enquiry.
            </p>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
