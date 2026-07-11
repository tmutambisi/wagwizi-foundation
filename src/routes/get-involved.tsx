import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { GetInvolved } from "@/components/site/GetInvolved";
import { Donate } from "@/components/site/Donate";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Volunteer, Donate & Partner with Wagwizi" },
      {
        name: "description",
        content:
          "Join the Wagwizi Community Foundation movement. Support our work to transform lives across Zimbabwe through volunteering, online donations, or corporate partnerships.",
      },
      { property: "og:title", content: "Get Involved — Volunteer, Donate & Partner with Wagwizi" },
      {
        property: "og:description",
        content:
          "Support Jah Prayzah's foundation. Learn about opportunities to donate, volunteer, sponsor, or partner with the Wagwizi Community Foundation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Get Involved — Wagwizi Community Foundation" },
      { name: "twitter:description", content: "Join our movement and support our work in Zimbabwe." },
    ],
    links: [
      { rel: "canonical", href: "https://wagwizifoundation.org/get-involved" }
    ]
  }),
  component: GetInvolvedPage,
});

function GetInvolvedPage() {
  return (
    <div className="bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="bg-forest-deep py-20 text-center text-cream lg:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <p className="eyebrow text-gold">Join the movement</p>
            <h1 className="mt-4 font-display text-5xl font-extrabold text-cream lg:text-6xl">
              Get Involved
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-cream/80">
              There are many ways to be part of the story. Find yours.
            </p>
          </div>
        </div>
        <GetInvolved />
        <Donate />
      </main>
      <Footer />
    </div>
  );
}
