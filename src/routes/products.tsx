import { createFileRoute } from "@tanstack/react-router";
import { Boxes, FileSearch, MessagesSquare } from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { GlowCard } from "@/components/GlowCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Platform Building Blocks | Tevexxo" },
      {
        name: "description",
        content:
          "Tevexxo product building blocks: an AI assistant layer, a document intelligence pipeline and an internal operations platform starter.",
      },
      { property: "og:title", content: "Products — Platform Building Blocks | Tevexxo" },
      {
        property: "og:description",
        content:
          "Reusable building blocks we bring to client projects: AI assistant layer, document intelligence and an operations platform starter.",
      },
    ],
  }),
  component: ProductsPage,
});

const products = [
  {
    icon: MessagesSquare,
    name: "Assistant Layer",
    body: "A grounded chat assistant module that answers from your own content, with source citations, usage limits and an evaluation harness.",
    points: ["Retrieval over your data", "Cited answers", "Usage + cost controls"],
  },
  {
    icon: FileSearch,
    name: "Document Intelligence",
    body: "An ingestion pipeline that reads PDFs and scans, extracts structured fields and pushes them into the systems your team already uses.",
    points: ["OCR + extraction", "Human review queue", "API + webhook output"],
  },
  {
    icon: Boxes,
    name: "Operations Platform Starter",
    body: "A production-ready base for internal tools: roles and permissions, audit trails, reporting and a component library you can extend.",
    points: ["Role-based access", "Audit logging", "Reporting views"],
  },
];

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Building Blocks We Bring With Us"
        subtitle="Instead of starting from zero, client projects begin on modules we already run in production."
      />

      <Section>
        <SectionHeading
          eyebrow="Modules"
          title="Reusable, not off-the-shelf"
          subtitle="Each module is a foundation we tailor to your data, workflow and brand."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <GlowCard className="h-full">
                <span className="glow-ring inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
