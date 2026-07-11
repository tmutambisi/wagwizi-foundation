import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Events } from "@/components/site/Events";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Launch Ceremony — Wagwizi Community Foundation" },
      {
        name: "description",
        content:
          "Stay up to date with Wagwizi Community Foundation charity events, outreaches, and details of our official launch ceremony on 11 July 2026.",
      },
      { property: "og:title", content: "Events & Launch Ceremony — Wagwizi Community Foundation" },
      {
        property: "og:description",
        content:
          "Join our upcoming charity events and outreaches. Keep track of the Wagwizi Community Foundation calendar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Events & Launch Ceremony — Wagwizi Community Foundation" },
      { name: "twitter:description", content: "Check out our calendar of charity events and outreaches." },
    ],
    links: [
      { rel: "canonical", href: "https://wagwizifoundation.org/events" }
    ]
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <div className="bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="bg-forest-deep py-20 text-center text-cream lg:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <p className="eyebrow text-gold">Mark your calendar</p>
            <h1 className="mt-4 font-display text-5xl font-extrabold text-cream lg:text-6xl">
              Events
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-cream/80">
              Be part of the moments that drive lasting change.
            </p>
          </div>
        </div>
        <Events />
      </main>
      <Footer />
    </div>
  );
}
