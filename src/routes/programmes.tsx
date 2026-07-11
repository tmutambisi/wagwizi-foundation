import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Programmes } from "@/components/site/Programmes";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/programmes")({
  head: () => ({
    meta: [
      { title: "Our Programmes — Supporting Women & Girls in Zimbabwe" },
      {
        name: "description",
        content:
          "Explore the six core programmes of the Wagwizi Community Foundation: Education & The Girl Child, Healthcare & Supporting Women, Youth & Substance Abuse Support, Arts, Culture & Youth Mentorship, Community Development, and Food Security for Families.",
      },
      { property: "og:title", content: "Our Programmes — Supporting Women & Girls in Zimbabwe" },
      {
        property: "og:description",
        content:
          "Discover how the Wagwizi Community Foundation supports the girl child, empowers women, installs boreholes, provides food security, and aids youth affected by substance abuse.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Our Programmes — Wagwizi Community Foundation" },
      { name: "twitter:description", content: "Explore our six core programmes of community support." },
    ],
    links: [
      { rel: "canonical", href: "https://wagwizifoundation.org/programmes" }
    ]
  }),
  component: ProgrammesPage,
});

function ProgrammesPage() {
  return (
    <div className="bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="bg-forest-deep py-20 text-center text-cream lg:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <p className="eyebrow text-gold">What we do</p>
            <h1 className="mt-4 font-display text-5xl font-extrabold text-cream lg:text-6xl">
              Our Programmes
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-cream/80">
              Supporting women, vulnerable families, the girl child, and young people affected by drug and substance abuse.
            </p>
          </div>
        </div>
        <Programmes />
      </main>
      <Footer />
    </div>
  );
}
