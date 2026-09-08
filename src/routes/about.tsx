import { createFileRoute } from "@tanstack/react-router";
import { Compass, Gauge, Rocket, Target } from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { GlowCard } from "@/components/GlowCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import heroPortal from "@/assets/hero-portal.jpg";

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
  component: AboutPage;
});

function AboutPage() {
  return <div />;
}
