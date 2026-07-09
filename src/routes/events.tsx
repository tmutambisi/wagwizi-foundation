import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Events } from "@/components/site/Events";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Wagwizi Community Foundation" },
      {
        name: "description",
        content:
          "Stay up to date with Wagwizi Community Foundation events, including our black-tie launch ceremony on 11 July 2026 at The Exchange, The Country Club.",
      },
    ],
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
