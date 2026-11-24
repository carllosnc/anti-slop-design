# anti-slop-design

[![skills.sh](https://skills.sh/b/carllosnc/anti-slop-design)](https://skills.sh/carllosnc/anti-slop-design)

**Use this skill when** creating, reviewing, or restyling any UI — landing pages,
marketing sites, dashboards, components, or screen copy. It enforces anti-slop design
guardrails (inverted from the satirical
[Slopstrap](https://slopstrap.mikelacher.com/) framework) to keep your output from
looking like every other AI-generated page: purple gradients, blinking dots, bento
grids, glassmorphism, gradient text, fake social proof, and LLM marketing copy.

## Install

```bash
npx skills add carllosnc/anti-slop-design
```

Pick your agent when prompted — OpenCode, Claude Code, Cursor, Codex, and 75+ more.
Add `-g` to install across all projects:

```bash
npx skills add carllosnc/anti-slop-design -g
```

Prefer manual? Copy `skills/anti-slop-design/` into your project's `.agents/skills/`,
`.opencode/skills/`, or `.claude/skills/` (or globally to
`~/.config/opencode/skills/`).

## What the skill avoids

| Slop | Rule |
|---|---|
| Purple→cyan gradient on headlines, CTAs, and prices | One solid accent color; at most one static gradient, never on text |
| Ambient blurred orbs + slate-950 page | Background chosen for the audience, flat or with subtle texture |
| One arbitrary italic serif word per headline | Serif emphasis only when part of a consistent system |
| Handwritten marker underlines on prepositions | Underlines only on links — or none at all |
| Blinking status dots with no backend | Status indicators only for real, live data |
| Shimmer pills and badges everywhere | At most one badge per view, only for a real state |
| Glass cards with glow, spotlight, and nested cards | Solid surfaces, at most one level of nesting |
| Fat 4px multicolored left borders | Hierarchy via spacing and type; color only when it encodes meaning |
| Bento grid as the default layout | Layout derived from content hierarchy |
| Animated stat counters with invented metrics | Static numbers, with a time window and a source |
| Infinite startup logo marquee | Real, permissioned logos, static — or no logo strip at all |
| Fake testimonials (Dr. Sarah Chen…) | Real quotes with attribution — or omit the section |
| Glowing middle pricing card with rotating beam | Highlight with a simple border or a static label |
| "It's not just X — it's Y" copy, em-dash chains, superlatives | Plain, specific, verifiable sentences |
| Emoji (✨⚡🚀) in headings, buttons, and icons | One real icon set — or none |

## How it works

Slopstrap is a joke — but it is also an accurate catalog of what **not** to do. This
skill inverts every one of its components into a golden rule: if your output could have
come out of `Slopstrap.slopify()`, redesign it.

The skill ships a workflow and a decoration budget in `SKILL.md`, with the full
catalog, copy rules, and a pre-delivery checklist under `references/` — loaded on
demand (progressive disclosure) instead of all at once.

## Structure

```text
skills/
└── anti-slop-design/
    ├── SKILL.md                      # Workflow, decoration budget, non-negotiables
    └── references/
        ├── anti-patterns.md          # Visual/interaction catalog (10 sections, .slop-* signatures)
        ├── copywriting.md            # Text and copy anti-patterns
        └── checklist.md              # Pre-delivery review checklist
opencode.json                         # Registers ./skills so this repo dogfoods the skill
```

The layout follows the Agent Skills spec (`SKILL.md` with `name` + `description`
frontmatter), which is what `npx skills add` and skills.sh index.

## Usage

- Mention `@anti-slop-design` in your prompt, or
- Ask something like *"review this component with anti-slop-design"* — OpenCode
  advertises the skill whenever the description matches the task (creating/reviewing UI,
  landing pages, components, screen copy).

## Credits

- Source satire: [Slopstrap](https://slopstrap.mikelacher.com/) by
  [Mike Lacher](https://mikelacher.com). The whole anti-pattern catalog is an inversion
  of his content — credit him when you fork.
