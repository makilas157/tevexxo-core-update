import { createFileRoute } from "@tanstack/react-router";
import { Clock, Code, Handshake, ShieldCheck, Users, Wrench } from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { GlowCard } from "@/components/GlowCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/why-tevexxo")({
  head: () => ({
    meta: [
      { title: "Why Tevexxo — Senior Engineering, Honest Delivery" },
      {
        name: "description",
        content:
          "Why teams choose Tevexxo: senior engineers only, code you own, fixed cycles, tested releases and support after launch.",
      },
      { property: "og:title", content: "Why Tevexxo — Senior Engineering, Honest Delivery" },
      {
        property: "og:description",
        content:
          "Senior engineers only, code you own, fixed cycles, tested releases and support after launch.",
      },
    ],
  }),
  component: WhyPage,
});

const reasons = [
  {
    icon: Users,
    title: "Senior team, no bench swaps",
    body: "The engineers in your first call are the ones writing the code. We do not hand projects down to a junior bench after signing.",
  },
  {
    icon: Code,
    title: "You own the code",
    body: "Your repository, your cloud accounts, your data. Everything is documented so another team could pick it up tomorrow.",
  },
  {
    icon: Clock,
    title: "Fixed cycles, visible progress",
    body: "Two-week increments with a live environment at the end of each one. No month-long silences before a big reveal.",
  },
  {
    icon: ShieldCheck,
    title: "Tested before it ships",
    body: "Automated tests, type checks and dependency scans run on every pull request, so releases stay predictable.",
  },
  {
    icon: Wrench,
    title: "Support after launch",
    body: "Monitoring, alerting and a defined support window, because launch day is the start of a product's life, not the end.",
  },
  {
    icon: Handshake,
    title: "Straight answers on scope",
    body: "If something should be cut, simplified or bought instead of built, we say so before you spend the budget.",
  },
];

function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Tevexxo"
        title="Fewer Surprises, Better Software"
        subtitle="What clients get from working with a small studio that keeps engineering, delivery and support in one team."
      />

      <Section>
        <SectionHeading eyebrow="Reasons" title="Six commitments we hold to" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <GlowCard className="h-full">
                <span className="glow-ring inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <r.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{r.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{r.body}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
