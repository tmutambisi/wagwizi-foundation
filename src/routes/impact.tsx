import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { ImpactStats } from "@/components/site/ImpactStats";
import { FeaturedCarousel } from "@/components/site/FeaturedCarousel";
import { ImpactStory } from "@/components/site/ImpactStory";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Empowering Communities Across Zimbabwe" },
      {
        name: "description",
        content:
          "See the real impact of the Wagwizi Community Foundation: school feeding programs, healthcare outreach, clean water boreholes, and youth empowerment across Zimbabwe.",
      },
      { property: "og:title", content: "Our Impact — Empowering Communities Across Zimbabwe" },
      {
        property: "og:description",
        content:
          "Explore impact statistics and stories from the field showing how Wagwizi Community Foundation transforms lives in vulnerable communities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Our Impact — Wagwizi Community Foundation" },
      { name: "twitter:description", content: "Read our statistics and stories of real community impact." },
    ],
    links: [
      { rel: "canonical", href: "https://wagwizifoundation.org/impact" }
    ]
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <div className="bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="bg-forest-deep py-20 text-center text-cream lg:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <p className="eyebrow text-gold">Making a difference</p>
            <h1 className="mt-4 font-display text-5xl font-extrabold text-cream lg:text-6xl">
              Our Impact
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-cream/80">
              Every journey begins with a single step. We have taken ours — and we are just getting started.
            </p>
          </div>
        </div>
        {/* <ImpactStats /> */}
        {/* <FeaturedCarousel /> */}
        {/* <ImpactStory /> */}
      </main>
      <Footer />
    </div>
  );
}
