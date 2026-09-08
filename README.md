# Tevexxo Core Update

Do the following changes only. Do not redesign, restyle, or change anything else in the project — no layout changes, no font changes, no changes to any other page's structure or content unless explicitly listed below.

────────────────────────────────

1. ABOUT PAGE — /about

────────────────────────────────

Create a new route at /about using the exact same visual style and components already used on other pages (PageHero header, SectionHeading, Reveal scroll animations, glow-card style, same grid-circuit background, same fonts — Orbitron for headings, Rajdhani for body — same black + orange accent theme).

PageHero: eyebrow "About Us", title "Building Technology That Matters", short subtitle about Tevexxo being a technology studio building intelligent digital products.

Editorial-style section (text + supporting visual side by side, not a wall of text), with short specific paragraphs (2-4 sentences each, no vague marketing fluff):

- Our Story — what Tevexxo actually does (a technology studio building intelligent digital products/AI solutions) and how it approaches client work.

- Our Mission — the concrete outcome Tevexxo delivers for clients.

- Our Vision — where Tevexxo is headed as a company.

- Our Approach — how Tevexxo actually builds (engineering discipline, quality, speed).

End with a CTA section ("Let's build something extraordinary" style, same as used elsewhere) linking to the Contact page.

Do NOT add team bios, timelines, awards, stats/counters, testimonials, or press logos unless that content already genuinely exists in the project — do not invent fake data.

Navigation:

- Add "About" to the navbar, positioned right after "Home" (before "Services").

- Add "About" to the Footer's "Navigate" column, same position.

- Do not reorder, rename, or remove any other existing nav/footer links.

Keep every other page (Home, Services, Products, Projects, Why Tevexxo, Blog, Contact) exactly as it is.

────────────────────────────────

2. LOGO UPDATE

────────────────────────────────

Replace the current logo mark wherever it appears (Navbar, Footer, favicon if configured) with the attached new logo image (orange arrow mark, transparent/white background, no circle crop).

- Save it as the project logo asset (e.g. src/assets/logo.png), replacing the previous logo file.

- Use it at the same sizes/positions as the old logo (Navbar ~36-40px, Footer ~28-32px), keep the same ring/glow treatment already applied around the logo.

- Since this version has no circular background of its own, do NOT force it into a circular crop/frame — place the image itself (square/transparent), sized to match the old logo's visual weight.

- Keep the "TEVEXXO" wordmark text next to it exactly as it is.

────────────────────────────────

3. HOME PAGE — src/routes/index.tsx

────────────────────────────────

Two changes only:

a) Hero section image replacement: Replace the current hero visual (OrbitShowcase component on the right side of the hero) with the new hero image (dark tech-themed image with a glowing orange ring/portal and hexagon icons for code, cloud, database, security, analytics). Use full clarity/resolution — no blur, no compression artifacts, no opacity reduction. Keep the same hero layout (image right, text left) and keep all existing hero text, buttons, and stats untouched.

b) "What We Do" section — add tools/process image below the existing 4-card services grid: the hexagon-shaped connected workflow graphic showing Idea → Plan → Design → Develop → Test → Deploy → Support, connected by a straight glowing line. Keep the image's original colors exactly as-is — do not recolor or retheme it. Add a subtle continuous horizontal scrolling/moving animation to this image layer (the dotted/glowing connector line should appear to move/flow left to right slowly, looping infinitely), similar to a marquee/flowing-line effect, without distorting the image itself.

Do not change any other section, spacing, font, or color on the Home page.

────────────────────────────────

4. VISUAL DEPTH & EFFECTS PASS (site-wide, cosmetic only)

────────────────────────────────

Background stays pure black (#000000 / near-black), unchanged.

Orange remains the primary accent color, unchanged.

Introduce a secondary accent — electric cyan-blue (#00E5FF) — used ONLY for subtle glow/depth effects (hover glows, card edge lighting, icon highlights). Do not use it for text, buttons, or main UI elements — those stay orange/black.

Add:

1. Service/feature cards (glow-card components): on hover, a soft 3D tilt effect (slight perspective rotation following cursor) plus a subtle cyan-orange dual glow around the card edge. Smooth and subtle, not flashy.

2. Section backgrounds (grid-circuit background): a very slow, subtle parallax shift on scroll — background moves slower than foreground content for depth.

3. Icons/logo: a soft pulsing glow ring (orange, low opacity) behind key icons, animating gently on loop.

4. Primary CTA buttons: a subtle 3D press effect on click (slight scale-down + shadow shift) for tactile feedback.

5. Hero visual: a slow-rotating 3D perspective tilt on mouse move, subtle, not distracting from text.

Constraints:

- No font changes (keep Orbitron for headings, Rajdhani for body).

- No layout, spacing, or content changes.

- No changes to any other page's structure — this is effects/depth/color-accent only, applied consistently across existing components.

- Keep all animations smooth, subtle, and performant.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2b155d93-4371-490e-83c2-6e65e3fa9e02).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
