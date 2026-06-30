import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { FeaturedCarousel } from "@/components/site/FeaturedCarousel";
import { ImpactStory } from "@/components/site/ImpactStory";
import { Programmes } from "@/components/site/Programmes";
import { Events } from "@/components/site/Events";
import { News } from "@/components/site/News";
import { Gallery } from "@/components/site/Gallery";
import { VideoStories } from "@/components/site/VideoStories";
import { GetInvolved } from "@/components/site/GetInvolved";
import { Donate } from "@/components/site/Donate";
import { Partners } from "@/components/site/Partners";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wagwizi Community Foundation — Together We Rise" },
      {
        name: "description",
        content:
          "Transforming lives across Zimbabwe through education, healthcare, youth empowerment, arts and sustainable community development.",
      },
      { property: "og:title", content: "Wagwizi Community Foundation — Together We Rise" },
      {
        property: "og:description",
        content:
          "Building stronger Zimbabwean communities through education, healthcare, youth empowerment and sustainable opportunities.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedCarousel />
        <ImpactStory />
        <Programmes />
        <Events />
        <News />
        <Gallery />
        <VideoStories />
        <GetInvolved />
        <Donate />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
