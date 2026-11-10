---
name: Gordan Aleksandrovski
description: Single-page portfolio for a full-stack engineer who also runs production. Warm paper, condensed uppercase type, hairline rules, one amber signal.
colors:
  signal-amber: "oklch(72% 0.16 85)"
  signal-amber-text: "oklch(52% 0.12 75)"
  paper: "oklch(97% 0.008 85)"
  paper-shade: "oklch(93% 0.012 85)"
  ink: "oklch(18% 0.01 85)"
  ink-secondary: "oklch(38% 0.01 85)"
  ink-muted: "oklch(52% 0.01 85)"
  rule: "oklch(84% 0.010 85)"
  rule-strong: "oklch(65% 0.010 85)"
  night: "oklch(12% 0.008 85)"
  night-shade: "oklch(17% 0.008 85)"
  night-ink: "oklch(92% 0.01 85)"
  night-ink-secondary: "oklch(72% 0.01 85)"
  night-ink-muted: "oklch(60% 0.01 85)"
  night-rule: "oklch(22% 0.010 85)"
  night-rule-strong: "oklch(35% 0.010 85)"
typography:
  display:
    fontFamily: "Oswald, sans-serif"
    fontSize: "clamp(2rem, 11vw, 10rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Oswald, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.375
    letterSpacing: "0.04em"
  title:
    fontFamily: "Oswald, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "0.04em"
  body:
    fontFamily: "Jost, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Oswald, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: "0.14em"
  label-sm:
    fontFamily: "Oswald, sans-serif"
    fontSize: "10px"
    fontWeight: 400
    letterSpacing: "0.12em"
  caption:
    fontFamily: "Oswald, sans-serif"
    fontSize: "10px"
    fontWeight: 400
    letterSpacing: "0.18em"
rounded:
  none: "0px"
  dot: "9999px"
spacing:
  tag-x: "8px"
  row-gap: "32px"
  gutter: "32px"
  gutter-md: "48px"
  label-gap: "40px"
  section: "80px"
  section-md: "112px"
components:
  nav-link:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.ink}"
  nav-link-active:
    textColor: "{colors.signal-amber-text}"
  text-link:
    textColor: "{colors.ink-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  text-link-hover:
    textColor: "{colors.signal-amber-text}"
  disclosure-toggle:
    textColor: "{colors.ink-secondary}"
    typography: "{typography.label}"
  disclosure-toggle-hover:
    textColor: "{colors.signal-amber-text}"
  stack-tag:
    textColor: "{colors.ink-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "2px 8px"
  status-dot:
    backgroundColor: "{colors.signal-amber}"
    rounded: "{rounded.dot}"
    size: "6px"
  tooltip:
    backgroundColor: "{colors.paper-shade}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
    width: "288px"
  contact-row:
    textColor: "{colors.ink-secondary}"
    padding: "20px 0"
  contact-row-hover:
    textColor: "{colors.signal-amber-text}"
---

# Design System: Gordan Aleksandrovski

## Overview

**Creative North Star: "The Engineering Ledger"**

The site is a record of work, kept the way an engineer keeps a ledger: ruled rows, fixed columns, dates on the left, facts on the right, nothing written in the margins. Every entry has the same shape (period, role or name, then evidence), so a reader scanning for six seconds and a reader studying for six minutes both find what they need in the same place. The one oversized moment is the name. Everything after it is set small, uppercase and exact.

The mood is plain, exact and operational, matching the CV's voice: verbs and specifics, no adjectives doing the selling. Restraint is the proof of competence here. Warm paper neutrals keep the austerity human; a single amber signal marks what is live, current or under the pointer, the way a status light does on a rack. Depth comes from hairline rules and spacing, never from shadows or fills.

Nothing extra. Every element on the page carries information or helps the reader reach it. Rejected outright: SaaS gloss (gradients, glass, glows), rounded card grids, template ornament with no information (registration marks, colophons, fake terminals), and dev-portfolio clichés (skill bars, logo walls, typing effects). Quality shows in how few things there are and how well each one is made: fast, accessible, bilingual, readable in both themes.

**Key Characteristics:**
- Ruled rows on a fixed column grid; hairlines are the structure.
- Condensed uppercase display type (Oswald) over a quiet geometric body (Jost).
- One accent, used as a signal: live status, active section, hover, focus, scroll progress.
- Square corners everywhere; the only round shape is a status dot.
- Flat surfaces; tonal layering only for a tooltip and the skip link.
- Motion is short, eased and optional: one staged entrance, height reveals, colour shifts.

## Colors

Warm-paper neutrals on a single hue (85°), with one saturated amber that behaves like a status light. All values are OKLCH and live as CSS custom properties in `app/globals.css`; light tokens sit on `:root`, the night set on `.dark`.

### Primary
- **Signal Amber** (`--accent`): the only saturated colour, identical in both themes. Marks the "available" status dot and label, the current-position dot in Experience, the active nav link, every hover target, the `+`/`−` disclosure glyph, the 1px scroll-progress bar under the nav, and the focus ring.
- **Signal Amber Text** (`--accent-text`): the same signal set as text or as a line on paper. Bright amber is 2.3:1 on Paper, so light theme uses a darker amber (5.1:1) for amber words, the `+`/`−` glyph, hover colour and the focus ring. In the night theme it equals Signal Amber. Dots and the progress bar keep the bright amber in both themes.

### Neutral
- **Paper** / **Night** (`--bg`): page background. Also the nav bar fill, so the fixed header is opaque, not translucent.
- **Paper Shade** / **Night Shade** (`--bg-subtle`): the one raised tone. Tooltip and skip-link backgrounds only.
- **Ink** / **Night Ink** (`--text`): the name, role and project titles, active toggle segments.
- **Ink Secondary** (`--text-secondary`): body copy, the title line, links at rest, contact values.
- **Ink Muted** (`--text-muted`): periods, company names, column heads, nav links at rest, the footer line. 5:1 on Paper, 5.1:1 on Night.
- **Rule** (`--rule`): hairlines between rows and sections, section-label trailing line, tag borders, nav bottom border.
- **Rule Strong** (`--rule-strong`): emphasis hairlines (hero divider, Experience column-head underline) and the `·` `/` separators between toggle segments.

### Named Rules
**The Status Light Rule.** Signal Amber means "live, current, or here". It marks state and interaction, never a heading, a background or a block of text. If an amber element doesn't answer "what is active?", it shouldn't be amber.

**The One Hue Rule.** Every neutral shares hue 85 with chroma at or under 0.012. New greys are built on that hue, never pulled from a cool default palette.

## Typography

**Display Font:** Oswald (with sans-serif), weights 400–700, Latin and Cyrillic
**Body Font:** Jost (with sans-serif), Latin and Cyrillic

**Character:** Oswald is condensed, uppercase and tracked: it sets every label, period, name and control, so the page reads like an engineering spec. Jost is round and open, used only for running sentences, which keeps the long reads calm against the tight display type.

### Hierarchy
- **Display** (700, `clamp(2rem, 11vw, 10rem)`, 0.88 from `md`, 1.0 below; Macedonian uses `clamp(2rem, 10vw, 9.25rem)` and 1.036, because the Cyrillic surname sets wider and would overflow the column): the name in the hero and "Not Found" on the 404. One per page. Uppercase, -0.02em tracking, first line nudged -0.025em left for optical alignment.
- **Headline** (500, 1.5rem at `md`, 1.25rem below, 0.04em, uppercase): the title line under the hero divider.
- **Title** (600, 13px; project names 16px at `md`; 0.04em, uppercase): role names, programme names, project names.
- **Body** (Jost 400, 1rem, 1.625): descriptions and bios. Measure capped at 500px (hero) and 520px (Experience, project, AI and contact text), about 75 characters. Paragraphs and `dd` use `text-wrap: pretty` so no last line is a single word. The hero bio drops to 0.875rem / normal leading below `md`. Tooltip copy is 0.75rem.
- **Label** (400, 11px, 0.12–0.14em, uppercase): section labels, nav, toggles, disclosure toggles, periods, project years (tabular), status line, link text, stack tags.
- **Label Small** (10px, 0.12–0.14em, uppercase): company and institution names, footer, mobile nav.
- **Caption** (10px, 0.14–0.18em, uppercase): column heads, technical and experience sub-labels, contact row labels. Same size as Label Small; wider tracking marks it as a caption. Nothing on the page is set below 10px.

### Named Rules
**The Two Voices Rule.** Oswald labels, Jost explains. If it is a sentence, it is Jost; if it names, dates or controls something, it is Oswald uppercase. Never set a paragraph in Oswald or a label in Jost.

**The Tracking Scales Down Rule.** The smaller the uppercase text, the wider its tracking: display -0.02em, headline/title 0.04em, label 0.12–0.14em, caption up to 0.18em.

## Layout

One centred column, `max-w-7xl` (1280px), with a 32px gutter that widens to 48px at `md` (768px). Every section is a full-width band separated by a top hairline, with 80px vertical padding (112px at `md`), or 48/64px for compact bands.

Inside each band the ledger grid takes over, collapsing to a single column below `md`:
- **Experience:** `160px | 1fr | 1.4fr` (period, role and company, overview with tags), with a caption-size column header above a strong hairline. A long overview can carry `sectionLabels` in its translation: each paragraph then gets a Caption sub-label, the same pattern as project technical panels.
- **Education:** `160px | 1fr`.
- **Projects:** `48px | 1fr` (year in tabular figures, then content). The year replaced an index number: list order carries no meaning, and the year does.
- **Hero meta:** `1fr | 1.6fr` (title line, then bio).

Rows are 32px top and bottom, divided by hairlines; the last row in a band drops its bottom padding, so every band ends exactly on the band padding and the space above and below each section hairline matches. From `md` up, ledger columns align on their first baseline (`items-baseline`), so a period or year sits on the same line as the name beside it whatever the size difference; never nudge a column with top padding. Section labels sit 40px above their first row. The hero sizes to its content at every width (112px top, 48px bottom at `md`), so on a 900px-tall laptop screen the Experience label shows in the first viewport. The fixed header is 40px (44px at `md`); on mobile a second 36px row carries the section links.

**The Ruled Row Rule.** New content enters as a row in an existing ledger, divided by a hairline and aligned to the section's columns. Not as a card, panel or grid tile.

## Elevation & Depth

Flat. No `box-shadow` exists anywhere in the system. Separation comes from 1px hairlines (`--rule`, `--rule-strong`) and from spacing. The only tonal lift is Paper Shade behind the contact tooltip and the skip link, each also bordered with a hairline. The fixed nav sits above content by being opaque and ruled, not by casting a shadow.

**The Flat Ledger Rule.** If something needs to stand apart, give it a hairline or more space. Never a shadow, blur or glow.

## Shapes

Square. Every border, tag, tooltip and focus outline has 0px corners. The single exception is the status dot (6px, or 5px for the current-position marker), fully round, because it represents a light. The section label extends into a 1px trailing rule that runs to the column edge; links carry a 1px underline (`border-bottom: 1px solid currentColor`) instead of a text decoration. Focus is a 1.5px Signal Amber Text outline, offset 3px.

## Components

### Text Links and Disclosure Toggles
**Labelled, not decorated.** Controls are uppercase Oswald text with a 1px underline, never filled buttons or pills.
- **Link:** Label size, Ink Secondary at rest, Signal Amber Text on hover, 200ms colour transition. Underline is a bottom border in `currentColor` with 1px padding.
- **Disclosure toggle:** Label, preceded by a Signal Amber Text `+` / `−` glyph in a fixed 10px slot so the label doesn't shift. Ink Secondary (Ink Muted on project rows). The panel opens by animating `grid-template-rows` from `0fr` to `1fr` over 320ms; `aria-expanded` / `aria-controls` wired, and the closed panel is `aria-hidden`.
- **Back link (404):** same link style, prefixed with an amber `←`.

### Segment Toggles (Language, Theme)
Two words separated by a Rule Strong `·`: `EN · MK`, `Light · Dark`. The active segment is Ink; the inactive one is Ink Muted and turns Ink on hover. One button toggles both; its accessible name says where it switches to.

### Stack Tags
- **Style:** Label size (11px, 0.12em), Ink Secondary, 1px Rule border, square, 2px × 8px padding, 8px gaps. Readers scan tags for keywords, so they are not set small or faint.
- **State:** none. Tags are evidence, not filters. They always sit inside the entry where the skill was used.

### Status Dot and Status Line
A 6px Signal Amber circle beside a semibold Signal Amber Text label stating location and working mode ("Skopje · Remote or on-site"). The amber label states a current fact, per the Status Light Rule; it is never a slogan. The line wraps on narrow screens. The same dot at 5px marks the current role in Experience, with an accessible label.

### Navigation
Fixed, opaque Paper bar with a bottom hairline. Name at left in Label, Ink Muted; below 375px only the first name shows, so the Cyrillic name and toggles fit one row. Five section links, one per numbered section in page order (Experience, Work, AI, Education, Contact), at Label size (10px on mobile), each stretched to the bar's full height with 8px side padding so the tap target clears 24px, Ink Muted at rest, Ink on hover, Signal Amber Text for the section in view. Off the home page the links point at `/#section` and nothing is marked active. A Rule Strong hairline divider separates links from the two segment toggles. A 1px Signal Amber bar along the bottom edge scales horizontally with scroll progress. The skip link is hidden until focused, then appears below the bar on Paper Shade.

### Contact Rows
Full-width ruled rows, 20px vertical padding: a Caption label in a fixed 80px slot, the value in Oswald (14px, 16px at `md`), and an indicator at the far right (`→` at `md` and up, then `✓` after copying, `!` on failure, at every width). The whole row turns Signal Amber Text on hover. Email rows copy to the clipboard: for 2s the value itself reads "Copied to clipboard" in Signal Amber Text, so a phone tap gets visible feedback. Link rows open in a new tab and say so to screen readers. A square Paper Shade tooltip (288px) explains the action on hover or keyboard focus; touch devices get no hover tooltip. On copy failure the tooltip opens on every device, shows the value as selectable text, and stays until blur or Escape. Each row has a visually hidden `role="status"` region that announces the copy result.

### Section Label
Every section opens with a Label-size, Ink Muted uppercase `<h2>` followed by a 1px Rule that runs to the column edge, 40px above the first row.

### Signature: Hero Entrance
Status line, name, divider and meta block fade up 14px in sequence (0, 80, 180, 260ms delays) over 700ms on `cubic-bezier(0.22, 1, 0.36, 1)`. Under `prefers-reduced-motion` it is disabled and smooth scrolling is turned off.

## Do's and Don'ts

### Do:
- **Do** add new content as a ruled row on the section's existing column grid (`160px | 1fr | 1.4fr`, `48px | 1fr`).
- **Do** use Oswald uppercase for anything that names, dates or controls, and Jost for every sentence.
- **Do** keep Signal Amber for state: live, current, active, hover, focus.
- **Do** pair every new token with its `.dark` value and check both themes and both languages (Latin and Cyrillic) before shipping.
- **Do** honour `prefers-reduced-motion` for every animation, and keep motion under 400ms except the one-time hero entrance.
- **Do** read colours that live outside CSS (viewport `themeColor`, the Open Graph image) from `lib/themeColors.ts`, and update its hex mirrors whenever a token in `app/globals.css` changes.

### Don't:
- **Don't** add anything that doesn't carry information. If removing it loses no fact and no affordance, remove it.
- **Don't** use shadows, gradients, glassmorphism, glows or gradient text.
- **Don't** round corners, build card grids or bento layouts, or add icon tiles.
- **Don't** add template ornament: registration marks, colophons, fake terminal windows, decorative numerals.
- **Don't** add dev-portfolio clichés: skill bars, percentage meters, tech-logo walls, typing animations.
- **Don't** list a skill without the work it was used in; stack tags live inside entries, never in a standalone grid.
- **Don't** introduce a second accent colour or a cool grey.
- **Don't** set body paragraphs in Oswald or wider than 520px (500px in the hero).
