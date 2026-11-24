---
name: anti-slop-design
description: "Use when creating, reviewing, or restyling any UI — landing pages, marketing sites, dashboards, components, or copy for screens. Enforces anti-slop design guardrails (inverted from the satirical Slopstrap framework) to avoid the clichéd AI-generated aesthetic: purple gradients, blinking dots, bento grids, glassmorphism, gradient text, fake social proof, and LLM marketing copy."
---

# Anti-Slop Design

[Slopstrap](https://slopstrap.mikelacher.com/) is a satirical framework that ships every
"AI-generated, vibecoded" design cliché as a ready-made component. This skill inverts it:
every Slopstrap pattern is a smell here. If your output could plausibly come out of
`Slopstrap.slopify()`, redesign it.

## Workflow

1. Before touching styles, read `references/anti-patterns.md` (visual & interaction) and
   `references/copywriting.md` (text).
2. Start from content: write the real hierarchy (what the user must understand first),
   then choose layout. Never start from a card grid.
3. Apply the decoration budget below to every element you add.
4. Finish by running `references/checklist.md` against the output and fix whatever fails.

## Decoration budget

- **Palette:** one accent color + neutrals. At most one gradient, static, never on text.
- **Surfaces:** solid or very subtle backgrounds. No glassmorphism, glow, cursor
  spotlight, nested cards, or rotating conic borders.
- **Icons:** one real icon set, or none. No emoji as icons, headings, or buttons.
- **Badges/pills:** only for real states (New, Beta, Sale), max one per view, no shimmer.
- **Status indicators:** only when backed by live data. Static pages get no blinking dots.
- **Motion:** must communicate state or hierarchy; subtle, short, transform/opacity only,
  disabled under `prefers-reduced-motion`. No infinite loops (marquees, ping rings,
  shimmer sweeps, count-ups, sparkle bursts, cursor trails).
- **Social proof:** real logos, real testimonials with attribution, real numbers — or
  omit it entirely.

## Non-negotiables

1. **Never fabricate.** No fake metrics, fake logos, fake testimonials, fake
   "All Systems Operational", fake "Live" badges.
2. **Contrast:** body text meets WCAG AA (4.5:1; 3:1 for large text). Headings are
   solid-colored — no gradient or animated text.
3. **Typography is a decision, not a default.** Pick a pairing for the product's voice;
   do not reflexively ship Inter + Instrument Serif italic + JetBrains Mono.
4. **Layout serves hierarchy.** Asymmetry must have a reason. Cards are for repeated
   items — never used to fragment a paragraph into glowing tiles.
5. **Copy is plain and specific.** No "It's not just X — it's Y", no em-dash chains, no
   superlative mush, no emoji in UI chrome.

## Layout guidance (quick)

- Prefer simple, content-driven structures: single column, 2-column, or a plain
  responsive grid.
- Build hierarchy with whitespace and type scale instead of borders, glows, and color.
- One primary CTA per view; secondary actions stay quiet.
- If a section is really one paragraph, it stays one paragraph.

When in doubt, remove the decoration and check whether the design still communicates.
It should.
