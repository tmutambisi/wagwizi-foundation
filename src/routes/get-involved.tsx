import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { GetInvolved } from "@/components/site/GetInvolved";
import { Donate } from "@/components/site/Donate";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Wagwizi Community Foundation" },
      {
        name: "description",
        content:
          "Join the Wagwizi Community Foundation movement. Volunteer, donate, partner, or sponsor our work to transform lives across Zimbabwe.",
      },
    ],
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
