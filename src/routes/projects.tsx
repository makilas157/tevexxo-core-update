import { createFileRoute } from "@tanstack/react-router";

import { CTASection } from "@/components/CTASection";
import { GlowCard } from "@/components/GlowCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — How Tevexxo Delivers | Tevexxo" },
      {
        name: "description",
        content:
          "The kinds of engagements Tevexxo takes on, and the delivery process behind them: discovery, architecture, build cycles and handover.",
      },
      { property: "og:title", content: "Projects — How Tevexxo Delivers | Tevexxo" },
      {
        property: "og:description",
        content:
          "Engagement types and the delivery process behind them: discovery, architecture, build cycles and handover.",
      },
    ],
  }),
  component: ProjectsPage,
});

const engagements = [
  {
    kind: "Product build",
    body: "A new platform taken from an empty repository to a live release: architecture, design system, application, infrastructure and monitoring.",
  },
  {
    kind: "AI capability",
    body: "An assistant or extraction pipeline added to an existing product, with evaluation, cost controls and a staged rollout.",
  },
  {
    kind: "Rescue & modernisation",
    body: "An inherited codebase stabilised — tests added, dependencies upgraded, deploys automated — before new features resume.",
  },
];

const phases = [
  ["01", "Discovery", "We map the workflow, constraints and success criteria in a short paid discovery."],
  ["02", "Architecture", "Data model, integrations and infrastructure decided and written down before code."],
  ["03", "Build cycles", "Two-week increments, each ending in a live environment you can use."],
  ["04", "Handover", "Documentation, runbooks and a support window so your team can own it."],
] as const;

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work Shaped Around Delivery"
        subtitle="Client work is confidential, so here is the honest version: the engagements we take and exactly how we run them."
      />

      <Section>
        <SectionHeading eyebrow="Engagements" title="Three ways teams work with us" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {engagements.map((e, i) => (
            <Reveal key={e.kind} delay={i * 90}>
              <GlowCard className="h-full">
                <h3 className="text-lg font-bold text-primary">{e.kind}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{e.body}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {phases.map(([num, title, body], i) => (
            <Reveal key={num} delay={i * 80}>
              <GlowCard className="h-full">
                <span className="font-display text-2xl font-bold text-primary/70">{num}</span>
                <h3 className="mt-3 text-base font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
