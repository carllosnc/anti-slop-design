# Pre-delivery checklist

Run against every UI you produce or review. Anything that fails gets fixed before you
call it done.

## Color & surfaces

- [ ] One accent color + neutrals; no rainbow card borders, no per-card hues.
- [ ] At most one gradient on the page, static, not applied to text.
- [ ] No glassmorphism, glow, cursor spotlight, or rotating conic borders.
- [ ] No ambient blurred orbs / decorative blobs behind content.
- [ ] Background mode (light/dark) chosen for the audience, not by reflex.

## Typography

- [ ] Headings are solid-colored — no gradient or animated text.
- [ ] Body text meets WCAG AA contrast (4.5:1; large text 3:1).
- [ ] No random single-word serif italic in headlines.
- [ ] No handwritten/squiggle underlines sprayed through prose.
- [ ] Font pairing was chosen deliberately (not the default Inter + serif + mono trio
      by inertia).

## Components

- [ ] No blinking status dot unless it reflects real live data.
- [ ] No shimmer/eyebrow pill unless it reports a real state; at most one per view.
- [ ] No emoji in headings, buttons, icons, or badges.
- [ ] Cards: solid surfaces, max one nesting level, accent borders only where they
      encode meaning.
- [ ] Buttons: solid primary with clear hover and focus ring; one primary CTA per view.

## Layout

- [ ] Layout derived from content hierarchy, not from a bento grid.
- [ ] No fragmentation of a single paragraph into tiles/cards.
- [ ] Cards used only for repeated, comparable items.
- [ ] Asymmetry has an explicit reason.
- [ ] Whitespace and type scale carry hierarchy where possible.

## Motion

- [ ] Every animation communicates state or causality; nothing loops for decoration.
- [ ] Duration short (~300ms or less), animating transform/opacity.
- [ ] `prefers-reduced-motion` respected.
- [ ] No count-ups, marquees, shimmer sweeps, sparkle bursts, or cursor trails.

## Honesty (hard gate)

- [ ] No fabricated metrics, deltas, or uptime claims.
- [ ] No invented logos, customers, certifications, or testimonials.
- [ ] No "All Systems Operational"/"Live" indicators without a backend behind them.
- [ ] Badges (Beta, New, Sale) reflect reality.

## Copy

- [ ] No "It's not just X — it's Y" constructions.
- [ ] Em-dashes used at most once per paragraph (prefer zero).
- [ ] No superlative mush (Supercharge / Unleash / Seamlessly / 10x).
- [ ] Every claim is specific and verifiable.
- [ ] Buttons are verb + object; no emoji in UI text.
- [ ] Terminology consistent across the page.

## Accessibility & robustness

- [ ] Semantic HTML (headings in order, landmarks, real buttons/links).
- [ ] Visible focus states; keyboard reachable.
- [ ] Icons and status text have accessible labels; decorative elements `aria-hidden`.
- [ ] Works with images blocked, with JS disabled where reasonable, and at 320px width.

## The last test

Strip every decorative effect (gradients, glows, badges, animations). If the page stops
communicating, the design was decoration. Ship the version that survives.
