import { useEffect, useRef, type ReactNode } from "react";

/** Section with the shared grid-circuit background and a slow scroll parallax. */
export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--parallax", `${(rect.top * -0.08).toFixed(2)}px`);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`grid-circuit grid-circuit-glow overflow-hidden py-20 md:py-28 ${className}`}
    >
      <div className="relative mx-auto w-full max-w-6xl px-5">{children}</div>
    </section>
  );
}
