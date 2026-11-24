# anti-slop-design

A skill for coding agents (OpenCode, Claude Code — also compatible with `.claude/skills`
and `.agents/skills`) that enforces **anti-slop design guardrails**: the inverse of
[Slopstrap](https://slopstrap.mikelacher.com/), Mike Lacher's satire that packages every
"vibecoded" LLM design cliché as a ready-made component.

> *"Make your site look hastily vibecoded."*

Slopstrap is a joke — but it is also an accurate catalog of what **not** to do. This
skill inverts every one of its components into a golden rule: if your output could have
come out of `Slopstrap.slopify()`, redesign it.

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

## Structure

```text
.opencode/skills/anti-slop-design/
├── SKILL.md                      # Workflow, decoration budget, non-negotiables
└── references/
    ├── anti-patterns.md          # Visual/interaction catalog (10 sections, .slop-* signatures)
    ├── copywriting.md            # Text and copy anti-patterns
    └── checklist.md              # Pre-delivery review checklist
```

## Installation

**In this project** (already active — OpenCode discovers `.opencode/skills`
automatically):

```powershell
# just having it in the repository is enough
```

**Globally (all projects):**

```powershell
# OpenCode
Copy-Item -Recurse .opencode\skills\anti-slop-design "$env:USERPROFILE\.config\opencode\skills\"

# or Claude Code / Agents compatibility
Copy-Item -Recurse .opencode\skills\anti-slop-design "$env:USERPROFILE\.claude\skills\"
```

**In another repository:** copy the `anti-slop-design/` folder into its
`.opencode/skills/`, `.claude/skills/`, or `.agents/skills/`.

## Usage

- Mention `@anti-slop-design` in your prompt, or
- Ask something like *"review this component with anti-slop-design"* — OpenCode
  advertises the skill whenever the description matches the task (creating/reviewing UI,
  landing pages, components, screen copy).

## Credits

- Source satire: [Slopstrap](https://slopstrap.mikelacher.com/) by
  [Mike Lacher](https://mikelacher.com). The whole anti-pattern catalog is an inversion
  of his content — credit him when you fork.
