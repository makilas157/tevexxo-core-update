import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="font-display text-xs tracking-[0.35em] text-primary uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p> : null}
    </Reveal>
  );
}
