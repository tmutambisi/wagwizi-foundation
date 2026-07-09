import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { About } from "@/components/site/About";
import { FounderMessage } from "@/components/site/FounderMessage";
import { Leadership } from "@/components/site/Leadership";
import { Partners } from "@/components/site/Partners";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Wagwizi Community Foundation" },
      {
        name: "description",
        content:
          "Learn about the Wagwizi Community Foundation, our mission, vision, core values, and our journey of transforming lives across Zimbabwe since 2019.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Page hero banner */}
        <div className="bg-forest-deep py-20 text-center text-cream lg:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <p className="eyebrow text-gold">Wagwizi Community Foundation</p>
            <h1 className="mt-4 font-display text-5xl font-extrabold text-cream lg:text-6xl">
              About Us
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-cream/80">
              Founded in 2019. Rebranded in 2026. Always community-first.
            </p>
          </div>
        </div>
        <About />
        <FounderMessage />
        <Leadership />
        {/* Partners section frozen for now */}
        {/* <Partners /> */}
      </main>
      <Footer />
    </div>
  );
}
