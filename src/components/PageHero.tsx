import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="font-display text-xs tracking-[0.4em] text-primary uppercase">{eyebrow}</p>
        <h1 className="mt-5 text-4xl font-bold md:text-6xl">
          <span className="text-gradient-primary">{title}</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">{subtitle}</p>
      </Reveal>
    </Section>
  );
}
