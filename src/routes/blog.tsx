import { createFileRoute } from "@tanstack/react-router";

import { CTASection } from "@/components/CTASection";
import { GlowCard } from "@/components/GlowCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Engineering Notes from Tevexxo" },
      {
        name: "description",
        content:
          "Engineering notes from the Tevexxo team on shipping AI features, keeping releases boring and choosing architecture that lasts.",
      },
      { property: "og:title", content: "Blog — Engineering Notes from Tevexxo" },
      {
        property: "og:description",
        content:
          "Notes on shipping AI features, keeping releases boring and choosing architecture that lasts.",
      },
    ],
  }),
  component: BlogPage,
});

const topics = [
  {
    tag: "AI Engineering",
    title: "Grounding an assistant in your own data",
    body: "Why retrieval quality, not model choice, decides whether an assistant is useful — and how we evaluate it before rollout.",
  },
  {
    tag: "Delivery",
    title: "Making releases boring on purpose",
    body: "The pipeline we set up on every project: typed builds, automated tests, preview environments and one-command rollbacks.",
  },
  {
    tag: "Architecture",
    title: "Choosing a data model you won't regret",
    body: "How early schema decisions quietly set the ceiling on what a product can do a year later.",
  },
];

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Engineering Notes"
        subtitle="Writing from the Tevexxo team on how we build. First articles are being prepared — here is what's coming."
      />

      <Section>
        <SectionHeading eyebrow="Coming soon" title="Topics we're writing about" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {topics.map((t, i) => (
            <Reveal key={t.title} delay={i * 90}>
              <GlowCard className="h-full">
                <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">
                  {t.tag}
                </span>
                <h3 className="mt-4 text-lg font-bold">{t.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{t.body}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
