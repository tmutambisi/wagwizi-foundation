import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { News } from "@/components/site/News";
import { VideoStories } from "@/components/site/VideoStories";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — Wagwizi Community Foundation" },
      {
        name: "description",
        content:
          "The latest news and stories from the field at Wagwizi Community Foundation, covering Education, Healthcare, Youth Empowerment, and Community Development.",
      },
    ],
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
