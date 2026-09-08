import { createFileRoute } from "@tanstack/react-router";
import { Compass, Gauge, Rocket, Target } from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { GlowCard } from "@/components/GlowCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import heroPortal from "@/assets/hero-portal.jpg";
import workflow from "@/assets/workflow.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tevexxo — Building Technology That Matters" },
      {
        name: "description",
        content:
          "Tevexxo is a technology studio building intelligent digital products. Read our story, mission, vision and engineering approach.",
      },
      { property: "og:title", content: "About Tevexxo — Building Technology That Matters" },
      {
        property: "og:description",
        content:
          "A technology studio building intelligent digital products. Our story, mission, vision and engineering approach.",
      },
    ],
  }),
  component: AboutPage,
});

const blocks = [
  {
    icon: Compass,
    eyebrow: "Our Story",
    title: "A studio built around engineering, not handoffs",
    paragraphs: [
      "Tevexxo is a technology studio that designs and builds intelligent digital products — web platforms, mobile apps and AI systems. We work as a single team across product design, engineering and deployment, so nothing gets lost between disciplines.",
      "Client work starts with the problem, not a feature list. We map the workflow, agree on what success looks like, then ship in short increments you can review in a working product rather than a slide deck.",
    ],
    image: heroPortal,
    alt: "Glowing technology portal representing Tevexxo's engineering core",
  },
  {
    icon: Target,
    eyebrow: "Our Mission",
    title: "Turn business problems into software that ships",
    paragraphs: [
      "Our mission is to give clients working software in production — not prototypes that stall. Each engagement ends with a deployed product, documented code, and a team that knows how to run it.",
      "We measure ourselves on outcomes our clients can point at: hours saved in a manual process, faster releases, lower infrastructure spend, revenue from a new digital channel.",
    ],
    image: workflow,
    alt: "Process strip from idea through plan, design, develop, test, deploy and support",
  },
  {
    icon: Rocket,
    eyebrow: "Our Vision",
    title: "Intelligence as a standard layer of every product",
    paragraphs: [
      "We see a near future where every serious digital product carries some intelligence — retrieval, prediction, automation — as a default layer rather than an experiment bolted on at the end.",
      "Tevexxo is building toward being the studio companies call for exactly that work: teams who can take an AI capability from idea to a governed, monitored production system.",
    ],
    image: heroPortal,
    alt: "Connected hexagon icons for code, cloud, data, security and analytics",
  },
  {
    icon: Gauge,
    eyebrow: "Our Approach",
    title: "Discipline first, speed as a consequence",
    paragraphs: [
      "We build with typed codebases, reviewed pull requests, automated tests and CI/CD from day one. That discipline is what lets us move quickly later without breaking what already works.",
      "Every project runs in short cycles with a live environment you can open at any point. Quality gates are part of the pipeline, so releasing is a routine action rather than an event.",
    ],
    image: workflow,
    alt: "Glowing workflow nodes representing Tevexxo's delivery pipeline",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building Technology That Matters"
        subtitle="Tevexxo is a technology studio building intelligent digital products — web, mobile and AI systems engineered to run in production."
      />

      <Section>
        <div className="space-y-20">
          {blocks.map((b, i) => (
            <Reveal key={b.eyebrow}>
              <div
                className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div>
                  <p className="font-display text-xs tracking-[0.35em] text-primary uppercase">
                    {b.eyebrow}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold md:text-3xl">{b.title}</h2>
                  {b.paragraphs.map((p) => (
                    <p key={p} className="mt-4 text-muted-foreground">
                      {p}
                    </p>
                  ))}
                  <span className="glow-ring mt-7 inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <b.icon className="h-5 w-5" />
                  </span>
                </div>
                <GlowCard className="overflow-hidden !p-3">
                  <img
                    src={b.image}
                    alt={b.alt}
                    loading="lazy"
                    className="w-full rounded-md object-cover"
                  />
                </GlowCard>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
