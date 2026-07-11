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
      { title: "About Us — Wagwizi Community Foundation | Jah Prayzah NGO" },
      {
        name: "description",
        content:
          "Learn about the Wagwizi Community Foundation, founded by Mukudzeyi Mukombe (Jah Prayzah) in 2025. Discover our mission, values, and core registration as PVO 123/26 in Zimbabwe.",
      },
      { property: "og:title", content: "About Us — Wagwizi Community Foundation | Jah Prayzah NGO" },
      {
        property: "og:description",
        content:
          "Discover our mission to transform lives across Zimbabwe through community-driven education, healthcare, and youth initiatives.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "About Us — Wagwizi Community Foundation" },
      { name: "twitter:description", content: "Learn about our mission and values." },
    ],
    links: [
      { rel: "canonical", href: "https://wagwizifoundation.org/about" }
    ]
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
              Founded in 2025. Rebranded in 2026. Always community-first.
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
