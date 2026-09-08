import { Link } from "@tanstack/react-router";

import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function CTASection() {
  return (
    <Section>
      <Reveal>
        <div className="glow-card px-6 py-14 text-center md:px-14">
          <h2 className="text-3xl font-bold md:text-4xl">
            Let's build something <span className="text-gradient-primary">extraordinary</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Tell us what you're trying to ship. We'll come back with a scope, a timeline and the
            team that can deliver it.
          </p>
          <Link
            to="/contact"
            className="press-3d font-display mt-8 inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-bold tracking-wider text-primary-foreground uppercase shadow-[0_0_36px_-10px_var(--primary)] hover:bg-primary-glow"
          >
            Start a project
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
