import { createFileRoute } from "@tanstack/react-router";
import { Bot, Cloud, Code2, LineChart, ShieldCheck, Smartphone } from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { GlowCard } from "@/components/GlowCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Web, Mobile, AI & Cloud Engineering | Tevexxo" },
      {
        name: "description",
        content:
          "Tevexxo builds web platforms, mobile apps, AI systems, cloud infrastructure, data analytics and security hardening for growing companies.",
      },
      { property: "og:title", content: "Services — Web, Mobile, AI & Cloud Engineering | Tevexxo" },
      {
        property: "og:description",
        content:
          "Web platforms, mobile apps, AI systems, cloud infrastructure, analytics and security engineering.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Code2,
    title: "Web Platform Engineering",
    body: "Dashboards, portals and customer-facing apps built on typed React and server-rendered routes, with clean data models underneath.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    body: "One cross-platform codebase shipped to iOS and Android, with offline handling, push notifications and store release pipelines.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    body: "Retrieval-based assistants, document extraction and workflow automation grounded in your own data with evaluation before rollout.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    body: "Infrastructure as code, containerised deployments, CI/CD and observability so releases are repeatable and reversible.",
  },
  {
    icon: LineChart,
    title: "Data & Analytics",
    body: "Event tracking, warehouse modelling and reporting that answers the questions your team asks every week.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Reliability",
    body: "Access control reviews, dependency scanning, backup and recovery drills, and load testing before your traffic finds the limits.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Engineering Across The Full Stack"
        subtitle="Six practices that cover a product from first architecture decision to long-term operation."
      />

      <Section>
        <SectionHeading
          eyebrow="Capabilities"
          title="What we take responsibility for"
          subtitle="Pick one practice or hand us the whole delivery — the same senior team stays on it."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <GlowCard className="h-full">
                <span className="glow-ring inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
