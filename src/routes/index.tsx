import { createFileRoute, Link } from "@tanstack/react-router";
import { Bot, Cloud, Code2, Smartphone } from "lucide-react";
import { useRef } from "react";

import { CTASection } from "@/components/CTASection";
import { GlowCard } from "@/components/GlowCard";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import heroPortal from "@/assets/hero-portal.jpg";
import workflow from "@/assets/workflow.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tevexxo — Intelligent Digital Products & AI Engineering" },
      {
        name: "description",
        content:
          "Tevexxo is a technology studio designing and engineering web platforms, mobile apps and AI systems that ship fast and hold up in production.",
      },
      { property: "og:title", content: "Tevexxo — Intelligent Digital Products & AI Engineering" },
      {
        property: "og:description",
        content:
          "A technology studio building web platforms, mobile apps and AI systems that ship fast and hold up in production.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Code2,
    title: "Web Platforms",
    body: "Product-grade web applications with typed APIs, clean data models and interfaces people actually enjoy using.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    body: "Cross-platform apps built from one codebase, released to both stores with analytics and crash reporting wired in.",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    body: "Assistants, document intelligence and recommendation systems grounded in your own data, not generic demos.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    body: "Infrastructure as code, CI/CD pipelines and monitoring so every release is boring, repeatable and reversible.",
  },
];

function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1200px) rotateY(${px * 9}deg) rotateX(${-py * 9}deg)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "";
      }}
      className="relative transition-transform duration-500 ease-out will-change-transform"
    >
      <img
        src={heroPortal}
        alt="Glowing orange technology portal surrounded by hexagon icons for code, cloud, database, security and analytics"
        width={1280}
        height={1280}
        className="w-full max-w-xl"
      />
    </div>
  );
}

function Index() {
  return (
    <>
      <Section className="pt-32 pb-16 md:pt-40">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="font-display text-xs tracking-[0.4em] text-primary uppercase">
              Technology Studio
            </p>
            <h1 className="mt-5 text-4xl leading-tight font-bold md:text-6xl">
              We engineer <span className="text-gradient-primary">intelligent</span> digital
              products
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Tevexxo designs, builds and ships web platforms, mobile apps and AI systems — with the
              engineering discipline that keeps them running long after launch.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="press-3d font-display inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-bold tracking-wider text-primary-foreground uppercase shadow-[0_0_36px_-10px_var(--primary)] hover:bg-primary-glow"
              >
                Start a project
              </Link>
              <Link
                to="/services"
                className="press-3d font-display inline-flex items-center rounded-md border border-primary/50 px-6 py-3 text-sm font-bold tracking-wider text-primary uppercase hover:bg-primary/10"
              >
                Our services
              </Link>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[
                ["4", "Core practices"],
                ["100%", "In-house engineering"],
                ["24/7", "Post-launch support"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl font-bold text-primary">{value}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120} className="flex justify-center md:justify-end">
            <HeroVisual />
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What We Do"
          title="Four practices, one delivery team"
          subtitle="Every engagement is handled by the same senior team from first call to production."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
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

        <Reveal delay={160} className="mt-16">
          <div className="overflow-hidden">
            <div className="flow-marquee flex w-[200%]">
              <img
                src={workflow}
                alt="Delivery process: idea, plan, design, develop, test, deploy, support"
                width={1920}
                height={640}
                loading="lazy"
                className="w-1/2 shrink-0"
              />
              <img
                src={workflow}
                alt=""
                aria-hidden="true"
                width={1920}
                height={640}
                loading="lazy"
                className="w-1/2 shrink-0"
              />
            </div>
          </div>
        </Reveal>
      </Section>

      <CTASection />
    </>
  );
}
