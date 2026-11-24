# Visual & interaction anti-patterns

Catalog inverted from the [Slopstrap](https://slopstrap.mikelacher.com/) component
library. Each entry: what the slop looks like, why it reads as generated, and what to do
instead. The class names (`.slop-*`, `data-slop-*`) are Slopstrap's — you will never
write them; they are signatures to recognize and reject.

## 1. Page shell & background

**Ambient blurred orbs over a dark grid.**
*Slopstrap signature:* `.slop-body slop-grid-bg` + `.slop-orb-layer` with purple/cyan/pink
blobs. A near-black slate page with floating glow blobs is the single strongest
"vibecoded" tell.
**Instead:** choose light or dark deliberately for the product context. Backgrounds are
flat or carry one subtle, static texture. Decorative shapes, if any, are low-contrast,
non-interactive, `aria-hidden`, and never compete with content.

**Dark mode as the default everywhere.**
Dark is fine for dev tools and dashboards; a plumbers' website or a government portal in
slate-950 with neon accents is slop.
**Instead:** match the surface to the audience and brand, not to the IDE you were
looking at while coding.

## 2. Color & gradients

**Purple-to-cyan gradient on headlines, CTAs, and prices.**
*Slopstrap signature:* `.slop-btn-primary`, `.slop-text-gradient`, `.slop-price`.
**Instead:** solid accent color. Gradients, when used at all: one per page, static,
never on text, never animated.

**Animated rainbow / conic-gradient text and borders.**
*Slopstrap signature:* `.slop-text-gradient-animated`, `.slop-btn-rainbow`,
`.slop-card-beam` (rotating perimeter beam), `.slop-border-l-rainbow`.
**Instead:** static borders (`1px` neutral, or one accent where it carries meaning).
Text is a single solid color.

**Seven-color accent system.**
*Slopstrap signature:* `.slop-border-l-purple | cyan | emerald | amber | pink | rose |
gradient` — a different colored stripe per card.
**Instead:** one accent + neutrals. Differentiation comes from spacing, type weight, and
position, not from assigning each card its own hue.

## 3. Typography

**Gradient typography (clipped linear/rainbow text).**
*Slopstrap signature:* `.slop-text-gradient`, `.slop-h1`.
**Instead:** solid-color headings with strong contrast against their background.

**Washed-out body copy.**
*Slopstrap signature:* `.slop-muted` — "slate-400 engineered for maximum SaaS
authority". Low-contrast gray body text fails WCAG and looks like filler.
**Instead:** body text at ≥4.5:1 contrast. Muted variants only for truly secondary
metadata (timestamps, captions), and still within AA.

**The arbitrary italic serif word.**
*Slopstrap signature:* `.slop-serif-emphasis` — exactly one random noun/adjective per
headline set in Instrument Serif italic ("Build the *future* of work").
**Instead:** serif emphasis only when it is part of a consistent typographic system
with a reason, never as a per-headline gimmick. Whole headline or none.

**Handwritten marker underlines on random words.**
*Slopstrap signature:* `.slop-underline` — swooping purple-pink SVG marker under prepositions
("in", "that", "without"), plus squiggle and RGB variants.
**Instead:** underlines only on links, or one deliberate highlight treatment applied
consistently — not sprayed across prose.

**Default font trio.**
*Slopstrap signature:* Inter + Instrument Serif italic + JetBrains Mono, loaded in that
exact combination. Any of these fonts is legitimate; shipping all three by reflex signals
that no typographic decision was made.
**Instead:** choose type for the product's voice and limit the system (e.g., one family
across weights, plus a mono only if there is code or data).

## 4. Buttons & CTAs

**Shiny gradient buttons with shimmer sweep and glow.**
*Slopstrap signature:* `.slop-btn-primary` (purple→cyan + hover shimmer),
`.slop-btn-lg` "✨ Large Hero CTA".
**Instead:** solid primary button, clear hover (slight darken/lift), visible focus ring,
sane padding. One primary CTA per view; ghost/secondary for the rest.

**Emoji in button labels.**
*Slopstrap signature:* "✨ Generate with AI →", "⚡ Run".
**Instead:** verb + object ("Create project", "Start free trial"). No emoji, no
decorative arrows unless they indicate forward navigation.

## 5. Cards & surfaces

**Frosted glass cards with glow, cursor spotlight, and hover lift.**
*Slopstrap signature:* `.slop-card` (backdrop blur + `::before` cursor spotlight),
`.slop-card-beam`.
**Instead:** solid (or barely translucent) surfaces with a `1px` border or a very light
shadow. Hover states change border/shadow subtly — no spotlight following the cursor.

**Card inside a card inside a card.**
*Slopstrap signature:* `.slop-card-nested` — "Because one rounded box is never enough."
**Instead:** at most one level of grouping. Use dividers or spacing instead of a nested
container.

**Fat 4px multicolored left borders on every card/alert.**
*Slopstrap signature:* `.slop-border-l-purple` etc. — "the orders will come with a
colorful left border."
**Instead:** an accent border only where it encodes meaning (error = red, success =
green), thin and consistent. Hierarchy otherwise comes from whitespace and type.

**Icon squircles with emoji.**
*Slopstrap signature:* `.slop-icon-box` — a tinted glowing rounded square containing
⚡🚀💎🤖.
**Instead:** a real icon set at consistent stroke weight, or no icon at all. Icons are
labeled for screen readers when they carry meaning.

## 6. Status, badges & decoration

**Blinking status dots connected to nothing.**
*Slopstrap signature:* `.slop-status` / `.slop-dot` dual-ring ping — "All Systems
Operational", "AI Engine Active", "Quantum Synced" on static HTML with no backend.
**Instead:** a status indicator only when it reflects real, live data. Otherwise static
text or nothing at all.

**Eyebrow pills and shimmer badges on everything.**
*Slopstrap signature:* `.slop-pill slop-pill-shimmer` ("✨ Introducing v2.0 — Now Live →"),
`.slop-badge-popular | ai | beta | early-access`.
**Instead:** at most one badge per view, only for a real state (Beta, New, −20%), static,
no shimmer, no dot.

**Alerts with blinking dots and gratuitous emoji.**
*Slopstrap signature:* `.slop-alert` — "✨ AI Insight:", "🚀 Deployment Ready:".
**Instead:** plain callouts with semantic variants (info/warn/error), an optional
consistent icon, and text that states the actual situation.

## 7. Layout & grids

**Bento grid as the default layout.**
*Slopstrap signature:* `.slop-bento` (7/5/4/4/4 columns) — "Fuck It, Put It In a Bento
Grid." Fracturing a simple paragraph into asymmetrical glowing tiles.
**Instead:** derive layout from content hierarchy. Asymmetric spans only when one piece
of content genuinely deserves more width. A paragraph is one block.

**Identical 3-up feature card grids.**
*Slopstrap signature:* `.slop-grid-3` — three equal rounded boxes with emoji headings and
zero hierarchy, used because content needed *something*.
**Instead:** cards only for repeated, comparable items (features with equal weight,
testimonials, products). For unequal content, vary the structure — list, split section,
or a single focused block.

**Decoration as layout.** If removing the glow/borders/gradient makes the layout
collapse, there was no layout — only styling.

## 8. Metrics & social proof

**Animated stat counters with invented deltas.**
*Slopstrap signature:* `.slop-stat-card` + `data-slop-count` — "99.99% Uptime or
something", "▲ +420% YoY", counting up on scroll.
**Instead:** static, sourced numbers with a period and a source ("99.98% uptime, last
90 days"). No count-up animation. No number you cannot back.

**Infinite startup logo marquee.**
*Slopstrap signature:* `<div data-slop-marquee></div>` — "One little tag to give you
instant credibility."
**Instead:** real customer logos you have permission to show, in a static grid, sized
consistently — or no logo strip at all.

**Auto-generated fake testimonials.**
*Slopstrap signature:* `data-slop-testimonials="1..6"` — Dr. Sarah Chen (VP of Product at
NexusAI), Marcus Vance, Elena Rostova…
**Instead:** real quotes with name, role, company, and (ideally) photo — or omit the
section. Never invent a person.

## 9. Pricing & conversion furniture

**Glowing middle pricing card with "✨ MOST POPULAR" shimmer tag.**
*Slopstrap signature:* `.slop-pricing-popular` + `.slop-card-beam` + `.slop-badge-popular`.
**Instead:** highlight the recommended plan with a simple border in the accent color or
a small static label. The toggle between monthly/yearly is fine; the beam is not.

**Fake macOS terminal and sparkle AI input bar.**
*Slopstrap signature:* `.slop-terminal` with traffic lights, `.slop-ai-bar` with ✨.
**Instead:** a terminal block only when it contains real, runnable commands; an AI input
only when it actually does something.

## 10. Motion & effects

**Motion that decorates rather than informs.**
*Slopstrap signature:* shimmer sweeps, ping rings, draw-in underlines, count-ups,
marquees, `sparkleBurst()`, cursor sparkle trails (`data-slop-level="4"`).
**Instead:** motion budget — animate only to show state change, causality, or spatial
relationship; keep it under ~300ms; use `transform`/`opacity`; respect
`prefers-reduced-motion`. No infinite loops competing for attention.
