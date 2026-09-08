import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin } from "lucide-react";
import { useState } from "react";

import { GlowCard } from "@/components/GlowCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Tevexxo — Start a Project" },
      {
        name: "description",
        content:
          "Tell Tevexxo what you're building. Share your goal, timeline and budget range and we'll reply with a scope and next steps.",
      },
      { property: "og:title", content: "Contact Tevexxo — Start a Project" },
      {
        property: "og:description",
        content: "Tell us what you're building and we'll reply with a scope and next steps.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Build"
        subtitle="Share the problem, the deadline and any constraints. We reply with an honest read on scope and effort."
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <GlowCard>
              {sent ? (
                <div className="py-10 text-center">
                  <h2 className="text-xl font-bold text-primary">Thanks — message noted</h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    This form isn't connected to email delivery yet, so please also reach us at
                    hello@tevexxo.com so nothing gets missed.
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block text-sm">
                      <span className="text-muted-foreground">Name</span>
                      <input
                        required
                        name="name"
                        className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-foreground outline-none focus:border-primary"
                      />
                    </label>
                    <label className="block text-sm">
                      <span className="text-muted-foreground">Email</span>
                      <input
                        required
                        type="email"
                        name="email"
                        className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-foreground outline-none focus:border-primary"
                      />
                    </label>
                  </div>
                  <label className="block text-sm">
                    <span className="text-muted-foreground">Company</span>
                    <input
                      name="company"
                      className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-foreground outline-none focus:border-primary"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="text-muted-foreground">What do you want to build?</span>
                    <textarea
                      required
                      rows={5}
                      name="message"
                      className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-foreground outline-none focus:border-primary"
                    />
                  </label>
                  <button
                    type="submit"
                    className="press-3d font-display inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-bold tracking-wider text-primary-foreground uppercase shadow-[0_0_36px_-10px_var(--primary)] hover:bg-primary-glow"
                  >
                    Send message
                  </button>
                </form>
              )}
            </GlowCard>
          </Reveal>

          <Reveal delay={120} className="md:col-span-2">
            <GlowCard className="h-full">
              <h2 className="font-display text-xs tracking-[0.3em] text-primary uppercase">
                Direct
              </h2>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-primary" /> hello@tevexxo.com
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" /> Remote-first, worldwide
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 text-primary" /> Replies within one business day
                </li>
              </ul>
            </GlowCard>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
