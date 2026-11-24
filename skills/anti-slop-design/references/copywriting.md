# Copy anti-patterns

Textual slop is easier to ship than visual slop because it feels like "just words"
(Slopstrap's own `data-slop-prose` generator: "Because it's just words and honestly who
cares"). Audit every string you write against this list.

## 1. Formulaic constructions

**"It's not just X — it's Y."**
*Slopstrap signature:* mandated in its agent compliance checklist.
**Instead:** state what it is, plainly: "Deploy previews for every pull request."

**Em-dash chains.**
Slop copy leans on em-dashes (—) the way other prose uses commas, often stacking two per
sentence.
**Instead:** use commas, periods, or parentheses. One em-dash per paragraph at most, and
prefer none.

**The stacked-buzzword noun phrase.**
"AI-powered agentic workflow automation for next-gen revenue teams."
**Instead:** one idea per phrase, concrete nouns: "Automates invoice follow-ups by email."

**Superlative/verb mush.**
Supercharge, Unleash, Elevate, Seamlessly, Robust, Blazing fast, Enterprise-grade,
Zero-effort, 10x, Ship at unprecedented velocity.
**Instead:** verbs that describe what actually happens: "Import your CSV and map columns
in a minute."

## 2. Announcements & badges

**Eyebrow announcement pills.**
*Slopstrap signature:* "✨ Introducing v2.0 — Now Live →", "✨ MOST POPULAR",
"AI-POWERED", "EARLY ACCESS", "SOC2 TYPE ∞".
**Instead:** one badge only when it reports a real state (Beta, New, −20%), placed where
the state matters (the plan, the feature, the release note). No shimmer, no sparkle
prefix, no badges that say nothing verifiable.

**Emoji as punctuation in headings and buttons.**
✨ ⚡ 🚀 💎 🤖 sprinkled through titles, CTAs, and section headers.
**Instead:** no emoji in UI chrome. Emoji only in genuinely informal surfaces (chat
apps, some social contexts) and then used consistently, not as confetti.

## 3. Claims & metrics

**Unverifiable superlatives and fake precision.**
"Trusted by innovative teams at the world's leading companies." / "99.99% Uptime or
something" / "▲ +420% YoY".
**Instead:** every claim must be checkable: named customers (with permission), measured
numbers with a time window and source, or drop the claim.

**Manufactured urgency and authority.**
"10X FASTER", "LIVE", "0 Real Incidents", invented certifications.
**Instead:** honest labels only. "Beta" means beta. Absence of incidents is reported
with a date range, not as a permanent glowing dot.

**Hedged filler that almost makes sense.**
*Slopstrap signature:* `data-slop-prose` — paragraphs of plausible-sounding marketing
prose with no specific meaning.
**Instead:** if a sentence could be pasted onto a competitor's site unchanged, rewrite it
with a concrete detail (who, what, how much, how fast).

## 4. Structure & tone

- Write for the reader's task: what it is, what it does for them, what to do next.
- Short paragraphs (1–3 sentences). One idea per sentence.
- Plain subject–verb–object. Active voice by default.
- Headings describe the section's content ("Pricing"), not its vibe ("Supercharge your
  workflow at scale").
- Buttons: verb + object ("Create project", "Download PDF"). Avoid "Get Started →" as
  the only CTA on the page.
- Consistent terminology: pick one word for one thing (project vs. workspace vs.
  space) and use it everywhere.
- No fake testimonials, no invented bylines, no lorem-adjacent prose in shipped UI.

## 5. Quick self-check

Read the page aloud. If any sentence sounds like it was written to fill space rather
than to inform, cut it. If the page would still make sense with the adjectives removed,
remove them.
