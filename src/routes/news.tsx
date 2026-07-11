import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { News } from "@/components/site/News";
import { VideoStories } from "@/components/site/VideoStories";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Latest News & Outreaches — Wagwizi Community Foundation" },
      {
        name: "description",
        content:
          "Read updates, press releases, and stories from the field on education, healthcare, and youth initiatives run by the Wagwizi Community Foundation.",
      },
      { property: "og:title", content: "Latest News & Outreaches — Wagwizi Community Foundation" },
      {
        property: "og:description",
        content:
          "Keep up with the latest news, stories of hope, and development work from the Wagwizi Community Foundation in Zimbabwe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Latest News & Outreaches — Wagwizi Community Foundation" },
      { name: "twitter:description", content: "Updates and stories from the field in Zimbabwe." },
    ],
    links: [
      { rel: "canonical", href: "https://wagwizifoundation.org/news" }
    ]
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <div className="bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="bg-forest-deep py-20 text-center text-cream lg:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <p className="eyebrow text-gold">From the field</p>
            <h1 className="mt-4 font-display text-5xl font-extrabold text-cream lg:text-6xl">
              Latest News
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-cream/80">
              Real stories. Real people. Real change.
            </p>
          </div>
        </div>
        <News />
        <VideoStories />
      </main>
      <Footer />
    </div>
  );
}
