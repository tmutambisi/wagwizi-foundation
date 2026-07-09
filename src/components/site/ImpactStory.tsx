import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-reveal";
import rumbidzaiImg from "@/assets/student-microscope.png";
import tinasheImg from "@/assets/food-distribution.jpg";
import elizabethImg from "@/assets/outreach-wheelchair.jpg";

const stories = [
  {
    id: "rumbidzai",
    tabLabel: "Education Impact",
    title: "I used to walk past the school. Now I walk into it.",
    name: "Rumbidzai, Mutoko",
    age: 13,
    programme: "Girls Education Programme",
    desc: "A year ago, her family could no longer afford fees and she stayed home, fetching water before sunrise. Through the Girls Education Programme, she received a scholarship, school uniform, and a mentor who believed in her.",
    desc2:
      "Today she is top of her class and dreams of becoming a nurse — so she can return to the very outreach days that once cared for her grandmother.",
    quote: "Education gave me back my future.",
    img: rumbidzaiImg,
    stats: [
      { value: "510", label: "Girls enrolled" },
      { value: "94%", label: "Stayed in school" },
      { value: "12", label: "Districts reached" },
    ],
  },
  {
    id: "tinashe",
    tabLabel: "Youth Academy",
    title: "The academy gave me a craft instead of a street corner.",
    name: "Tinashe, Harare",
    age: 19,
    programme: "Youth Skills Academy",
    desc: "Struggling to find work after school, Tinashe faced a high risk of substance abuse common in his neighborhood. The Youth Skills Academy enrolled him in carpentry and music production training, equipping him with tools and life mentoring.",
    desc2:
      "He now co-runs a small woodworking workshop and produces music at JP Studios, serving as a peer mentor to younger boys fighting drug abuse.",
    quote: "I found my purpose and a real trade.",
    img: tinasheImg,
    stats: [
      { value: "240+", label: "Youth trained" },
      { value: "85%", label: "Combating drug abuse" },
      { value: "JP Studios", label: "Creative partner" },
    ],
  },
  {
    id: "elizabeth",
    tabLabel: "Welfare Outreach",
    title: "Now I can move in dignity, and my family thrives.",
    name: "Gogo Elizabeth, Chimanimani",
    age: 72,
    programme: "Healthcare & Welfare Outreach",
    desc: "Living alone with limited mobility, Gogo Elizabeth struggled to manage daily tasks. Wagwizi's healthcare team visited her during rural outreach, provided custom mobility aids, and distributed food hampers.",
    desc2:
      "With a new wheelchair and monthly food security hampers, she now moves around with ease and enjoys a reliable supply of fresh water from the new borehole.",
    quote: "I feel seen and respected in my old age.",
    img: elizabethImg,
    stats: [
      { value: "10", label: "Districts served" },
      { value: "1,200+", label: "Hampers shared" },
      { value: "Boreholes", label: "Clean water" },
    ],
  },
];

export function ImpactStory() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStory = stories[activeIdx];

  return (
    <section ref={ref} className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Tab Selection */}
        <div data-reveal className="reveal flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-secondary p-1 border border-border">
            {stories.map((story, i) => (
              <button
                key={story.id}
                onClick={() => setActiveIdx(i)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeIdx === i
                    ? "bg-forest text-cream shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {story.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Content Box */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-reveal className="reveal order-2 lg:order-1 transition-all duration-500">
            <p className="eyebrow text-terracotta">{activeStory.programme}</p>
            <h2 className="mt-4 text-balance text-4xl leading-tight text-foreground lg:text-5xl min-h-[3rem]">
              &ldquo;{activeStory.title}&rdquo;
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{activeStory.desc}</p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {activeStory.desc2}
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {activeStory.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="font-display text-3xl text-forest">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            data-reveal
            className="reveal order-1 lg:order-2"
            style={{ transitionDelay: "120ms" }}
          >
            <figure className="relative">
              <img
                src={activeStory.img}
                alt={activeStory.title}
                width={1280}
                height={1280}
                loading="lazy"
                className="aspect-square w-full rounded-3xl object-cover shadow-2xl transition-all duration-500"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
