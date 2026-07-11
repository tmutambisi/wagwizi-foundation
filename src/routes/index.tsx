import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ImpactStats } from "@/components/site/ImpactStats";
import { About } from "@/components/site/About";
import { FounderMessage } from "@/components/site/FounderMessage";
import { Leadership } from "@/components/site/Leadership";
import { FeaturedCarousel } from "@/components/site/FeaturedCarousel";
import { ImpactStory } from "@/components/site/ImpactStory";
import { Programmes } from "@/components/site/Programmes";
import { Events } from "@/components/site/Events";
import { VideoStories } from "@/components/site/VideoStories";
import { GetInvolved } from "@/components/site/GetInvolved";
import { Donate } from "@/components/site/Donate";
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
      {
        property: "og:title",
        content: "Wagwizi Community Foundation — Together We Rise",
      },
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
        <ImpactStats />
        <About />
        <FounderMessage />
        <Leadership />
        {/* <FeaturedCarousel /> */}
        {/* <ImpactStory /> */}
        <Programmes />
        <Events />
        <VideoStories />
        {/* News section removed because they are not real stories */}
        {/* Partners section frozen for now */}
        {/* <Partners /> */}
        <GetInvolved />
        <Donate />
      </main>
      <Footer />
    </div>
  );
}
