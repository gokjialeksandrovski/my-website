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
  night-rule: "oklch(24% 0.010 85)"
  night-rule-strong: "oklch(35% 0.010 85)"
typography:
  display:
    fontFamily: "Oswald, sans-serif"
    fontSize: "clamp(2rem, 11.4vw, 10rem)"
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
    fontSize: "1rem"
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
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.14em"
  caption:
    fontFamily: "Oswald, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.18em"
rounded:
  none: "0px"
  dot: "9999px"
spacing:
  tag-x: "8px"
  row-gap: "32px"
  gutter: "24px"
  gutter-sm: "32px"
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
    textColor: "{colors.ink}"
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
- Motion is short, eased and optional: one staged entrance, height reveals, colour shifts, a cross-fade when theme or language changes.

## Colors

Warm-paper neutrals on a single hue (85°), with one saturated amber that behaves like a status light. All values are OKLCH and live as CSS custom properties in `app/globals.css`; light tokens sit on `:root`, the night set on `.dark`. Tailwind reads them through `@theme` aliases, so components write `text-ink`, `text-ink-secondary`, `text-ink-muted`, `bg-paper`, `bg-paper-shade`, `border-rule`, `border-rule-strong`, `bg-signal` and `text-signal-text`, never a raw variable. Both blocks also set `color-scheme`, so native scrollbars and form controls follow the theme.

### Primary
- **Signal Amber** (`--accent`): the only saturated colour, identical in both themes. Marks the "available" status dot and label, the current-position dot in Experience (ongoing employment only; freelance work stays unmarked, so the section keeps one amber dot), the active nav link, every hover target, the `+`/`−` disclosure glyph, link arrows, the 1px scroll-progress bar under the nav, text selection, and the focus ring.
- **Signal Amber Text** (`--accent-text`): the same signal set as text or as a line on paper. Bright amber is 2.3:1 on Paper, so light theme uses a darker amber (5.1:1) for amber words, the `+`/`−` glyph, hover colour and the focus ring. In the night theme it equals Signal Amber. Dots and the progress bar keep the bright amber in both themes.

### Neutral
- **Paper** / **Night** (`--bg`): page background. Also the nav bar fill, so the fixed header is opaque, not translucent.
- **Paper Shade** / **Night Shade** (`--bg-subtle`): the one raised tone. Tooltip and skip-link backgrounds only.
- **Ink** / **Night Ink** (`--text`): the name, the hero lead, role and project titles, contact values, active toggle segments.
- **Ink Secondary** (`--text-secondary`): body copy, the title line, links at rest, company and institution names, stack tags.
- **Ink Muted** (`--text-muted`): periods, years, captions, column heads, nav links at rest, the footer line. 5:1 on Paper, 5.1:1 on Night.
- **Rule** (`--rule`): hairlines between rows and sections, section-label trailing line, tag borders, nav bottom border.
- **Rule Strong** (`--rule-strong`): emphasis hairlines (hero divider, Experience column-head underline, the top of the contact list), the dashed "Personal" badge, the scrollbar thumb, and the `·` separators between toggle segments.

### Named Rules
**The Status Light Rule.** Signal Amber means "live, current, or here". It marks state and interaction, never a heading, a background or a block of text. If an amber element doesn't answer "what is active?", it shouldn't be amber.

**The One Hue Rule.** Every neutral shares hue 85 with chroma at or under 0.012. New greys are built on that hue, never pulled from a cool default palette.

## Typography

**Display Font:** Oswald (with sans-serif), weights 400–700, Latin and Cyrillic
**Body Font:** Jost (with sans-serif), Latin and Cyrillic

**Character:** Oswald is condensed, uppercase and tracked: it sets every label, period, name and control, so the page reads like an engineering spec. Jost is round and open, used only for running sentences, which keeps the long reads calm against the tight display type.

The four recurring roles are Tailwind utilities defined once in `app/globals.css`: `type-title`, `type-label`, `type-caption` and `type-body`. Components compose those and add colour; they do not restate size, tracking or case.

### Hierarchy
- **Display** (700, `clamp(2rem, 11.4vw, 10rem)`, 0.88 from `md`, 1.0 below; Macedonian uses `clamp(2rem, 10.15vw, 9.25rem)` and 1.036, because the Cyrillic surname sets wider and Д has feet below the baseline): the name in the hero and "Not Found" on the 404, both through `HeroHeading`. One per page. Uppercase, -0.02em tracking, first line nudged -0.025em left for optical alignment. The viewport factors leave room for a classic 15px scrollbar at every width down to 320px.
- **Headline** (500, 1.5rem at `md`, 1.25rem below, 0.04em, uppercase): the title line under the hero divider. It may break only at its `·` separator, never inside "Full-Stack".
- **Lead** (Jost 400, 1.25rem at `md`, 1.125rem below, 1.375, Ink): the first sentence of the hero bio, the one line a six-second reader takes away.
- **Title** (`type-title`: 600, 1rem at `md`, 0.9375rem below, 0.04em, uppercase): role names, programme names, project names. A row's title is its strongest element, so it never sets smaller than the body copy beside it.
- **Body** (`type-body`: Jost 400, 1rem, 1.625, Ink Secondary): descriptions and bios, at every width. Measure capped at 520px, about 75 characters. Paragraphs and `dd` use `text-wrap: pretty`; headings use `balance`. Tooltip copy is 0.75rem.
- **Label** (`type-label`: 400, 0.6875rem, 0.14em, uppercase; 0.12em for nav, toggles, tags and company names, 0.1em with tabular figures for periods and years): section labels, nav, toggles, disclosure toggles, periods, project years, status line, company and institution names, stack tags, footer.
- **Caption** (`type-caption`: 0.6875rem, 0.18em, uppercase, Ink Muted): column heads, technical and experience sub-labels, contact row labels, the "Personal" badge. Same size as Label; the wider tracking and muted ink mark it as a caption.
- **Address** (Oswald 400, mixed case, 0.02–0.04em): URLs and the email address. 0.8125rem for a project's link, 0.9375rem to 1rem for contact values. Addresses are case-sensitive facts, so they are the one place Oswald is not uppercase.

Nothing on the page is set below 0.6875rem (11px), and every size is in `rem` so the page follows the reader's font-size setting.

### Named Rules
**The Two Voices Rule.** Oswald labels, Jost explains. If it is a sentence, it is Jost; if it names, dates or controls something, it is Oswald uppercase. Never set a paragraph in Oswald or a label in Jost.

**The Tracking Scales Down Rule.** The smaller the uppercase text, the wider its tracking: display -0.02em, headline/title 0.04em, label 0.1–0.14em, caption 0.18em.

## Layout

One centred column, `max-w-7xl` (1280px), with a 24px gutter that widens to 32px at `sm` (640px) and 48px at `md` (768px). Every section is a full-width band separated by a top hairline, with 80px vertical padding (112px at `md`). The footer is its own shorter band (32px).

Inside each band the ledger grid takes over. It is one utility, `ledger`, shared by every section, so the same three edges run down the whole page:

| Width | Columns | Use |
|---|---|---|
| below `md` | one | period, name, evidence stacked |
| `md` (768px) | `160px \| 1fr` | period, then name with the evidence under it |
| `lg` (1024px) | `160px \| 1fr \| 1.4fr` | period, name, evidence |

- **Experience, Projects, Education** are lists of `LedgerRow`: an aside (period, or year in tabular figures), a head (title, then company, institution or the project's link), and the evidence (prose, stack tags, disclosure). Experience adds a caption-size column header above a strong hairline at `lg`. A long overview can carry `sectionLabels` in its translation: each paragraph then gets a Caption sub-label, the same pattern as project technical panels.
- **Projects:** client work comes first, newest first; personal projects come last and carry a "Personal" badge after the name (Caption, Ink Muted, 1px dashed Rule Strong border, square). The dashed border sets it apart from stack tags, so it does not read as a technology. Under the name sits the project's address, written out (`korrmotive.com`), so the link says where it goes and a live site and a source repo need no separate labels.
- **AI-Assisted Engineering:** one entry on the same columns: the tool in the name column, the paragraph in the evidence column.
- **Hero meta:** the title line spans the first two ledger columns and the bio sits in the third, so the bio shares its left edge with every overview below it. Between `md` and `lg` it is `1fr | 1.6fr`.
- **Contact:** the label takes the first column; the intro and every value start on the name column's edge.

Rows are 32px top and bottom, divided by hairlines; the first row in a list drops its top padding and the last its bottom padding, so every band ends exactly on the band padding. From `md` up, ledger cells align on their first baseline (`items-baseline`), so a period or year sits on the same line as the name beside it whatever the size difference; never nudge a column with top padding. At `lg` the period and name cells are `position: sticky` under the header, so they stay in view while a long overview scrolls past. Section labels sit 40px above their first row. The hero sizes to its content at every width.

The fixed header is one 44px bar from `lg`; below that it is a 40px bar with a 36px row of section links under it. Its height lives in `--header-height`, which `scroll-padding-top` and the sticky cells read.

**The Ruled Row Rule.** New content enters as a row in an existing ledger, divided by a hairline and aligned to the shared columns. Not as a card, panel or grid tile.

**The One Grid Rule.** A section does not invent its own columns. If its content has a date, a name and evidence, it uses `LedgerRow`; if it has less, it leaves a column empty rather than shifting an edge.

## Elevation & Depth

Flat. No `box-shadow` exists anywhere in the system. Separation comes from 1px hairlines (`--rule`, `--rule-strong`) and from spacing. The only tonal lift is Paper Shade behind the contact tooltip and the skip link, each also bordered with a hairline. The fixed nav sits above content by being opaque and ruled, not by casting a shadow.

**The Flat Ledger Rule.** If something needs to stand apart, give it a hairline or more space. Never a shadow, blur or glow.

## Shapes

Square. Every border, tag, tooltip and focus outline has 0px corners. The single exception is the status dot (6px, or 5px for the current-position marker), fully round, because it represents a light. The section label extends into a 1px trailing rule that runs to the column edge; links carry a 1px underline, offset 4px. Focus is a 1.5px Signal Amber Text outline, offset 3px, drawn around the control's text; a control's larger hit area comes from a pseudo-element, so the ring never fills the header.

Glyphs (`components/Glyph.tsx`) are drawn, not typed: one 12-unit grid, one 1.25 square-capped stroke, `currentColor`. There are five: up-right arrow (opens elsewhere), left arrow (back), copy, check and alert. The disclosure `+` / `−` is two 1px CSS bars on a 9px box.

## Components

### Text Links and Disclosure Toggles
**Labelled, not decorated.** Controls are Oswald text with a 1px underline, never filled buttons or pills.
- **Link:** Ink Secondary at rest, Signal Amber Text on hover, 200ms colour transition. An external link ends in an amber up-right arrow that moves 2px up and right on hover.
- **Disclosure toggle:** Label, Ink Secondary, preceded by the Signal Amber Text `+` / `−`; the vertical bar collapses when the panel opens. The panel opens by animating `grid-template-rows` from `0fr` to `1fr` over 300ms while its content fades in; `aria-expanded` / `aria-controls` wired. The closed panel is `inert`: out of the tab order, the accessibility tree and find-in-page.
- **Back link (404):** same link style, prefixed with an amber left arrow.

### Segment Toggles (Language, Theme)
Two words separated by a Rule Strong `·`: `EN · MK`, `Light · Dark`, both through `SegmentToggle`. The active segment is Ink; the inactive one is Ink Muted and turns Signal Amber Text when the button is hovered. One button toggles both; its accessible name says where it switches to. The change cross-fades through the View Transitions API (240ms) where the browser has it.

### Stack Tags
- **Style:** Label size (0.12em), Ink Secondary, 1px Rule border, square, 2px × 8px padding, 6px gaps, 16px under the prose. Readers scan tags for keywords, so they are not set small or faint. Marked up as a list.
- **State:** none. Tags are evidence, not filters. They always sit inside the entry where the skill was used.

### Status Dot and Status Line
A 6px Signal Amber circle beside a semibold Signal Amber Text label stating location and working mode ("Skopje · Remote or on-site"). The amber label states a current fact, per the Status Light Rule; it is never a slogan. The line wraps on narrow screens. The same dot at 5px marks the current role in Experience, with an accessible label.

### Navigation
Fixed, opaque Paper bar with a bottom hairline. Name at left in Label, Ink Muted; it scrolls to the top on the home page and links home elsewhere. Below 375px only the first name shows, so the Cyrillic name and toggles fit one row. Five section links, one per numbered section in page order (Experience, Work, Education, AI, Contact), Ink Muted at rest, Ink on hover, Signal Amber Text with `aria-current="location"` for the section in view. Each link's hit area extends 10px above and below its text. A nav jump scrolls with CSS `scroll-behavior` (smooth, or instant under reduced motion) and moves focus to the section. Off the home page the links point at `/#section` and nothing is marked active. From `lg` the links share the bar with the toggles, separated by a Rule Strong hairline divider; below `lg` they take their own row. A 1px Signal Amber bar along the bottom edge scales horizontally with scroll progress; it is written straight to the DOM once per animation frame. The skip link is hidden until focused, then appears below the bar on Paper Shade.

### Contact Rows
Full-width ruled rows under a strong hairline, 20px vertical padding: a Caption label in the first ledger column (stacked above the value below `md`), the value in Oswald Address type, Ink, and a glyph at the far right: an up-right arrow for links, a copy mark for the email row, then a check after copying or an alert on failure. The whole row turns Signal Amber Text on hover. The email row copies to the clipboard: for 2s the value itself reads "Copied to clipboard" in Signal Amber Text, so a phone tap gets visible feedback. Link rows open in a new tab and say so to screen readers; the accessible name is the visible label and value, never a replacement string. A square Paper Shade tooltip (288px) explains the action on hover or keyboard focus; touch devices get no hover tooltip. On copy failure the tooltip opens on every device, shows the value as selectable text, and stays until blur or Escape. Each row has a visually hidden `role="status"` region that announces the copy result.

### Section Label
Every section opens with a Label-size, Ink Muted uppercase `<h2>` followed by a 1px Rule that runs to the column edge, 40px above the first row. `PageSection` renders it and labels the section with it.

### Footer
A `<footer>` band after `<main>`: the name at left, location and year at right, Label, Ink Muted. Pages shorter than the viewport pin it to the bottom.

### Browser Surfaces
Text selection is Signal Amber with Ink text in both themes. The scrollbar takes Rule Strong on Paper through `scrollbar-color`. The tap highlight is off; hover and focus states carry the feedback.

### Favicon
A condensed, straight-sided G in Night Ink on a square Night tile, its crossbar in Signal Amber: the bar is the status light. The tile is Night in both colour schemes, matching the Open Graph image. Drawn on a 32-unit grid with a 4-unit stroke and every edge on an even coordinate, so the 16px tab icon lands on whole pixels. `app/apple-icon.png` is the same mark at 180px.

### Signature: Hero Entrance
The status line fades up; each line of the name rises from behind its own baseline (60ms and 140ms delays, 900ms); the divider draws in from the left (320ms); the meta block fades up 14px (420ms). All on `cubic-bezier(0.22, 1, 0.36, 1)`, exposed as `ease-out-expo`. It runs once, on load. Under `prefers-reduced-motion` it is disabled, along with smooth scrolling, panel transitions, arrow nudges and the theme cross-fade.

## Do's and Don'ts

### Do:
- **Do** add new content as a `LedgerRow` on the shared `ledger` columns.
- **Do** use the `type-*` utilities and the colour aliases; add a new role to `app/globals.css` before repeating a size and tracking pair in a component.
- **Do** use Oswald uppercase for anything that names, dates or controls, and Jost for every sentence.
- **Do** keep Signal Amber for state: live, current, active, hover, focus.
- **Do** pair every new token with its `.dark` value and check both themes and both languages (Latin and Cyrillic) before shipping.
- **Do** honour `prefers-reduced-motion` for every animation, and keep motion under 400ms except the one-time hero entrance.
- **Do** read colours that live outside CSS (viewport `themeColor`, the Open Graph image) from `lib/themeColors.ts`, and update its hex mirrors whenever a mirrored token in `app/globals.css` changes. `app/icon.svg` is static, so it repeats three of those hex values by hand: change it, and re-export `app/apple-icon.png`, in the same edit.

### Don't:
- **Don't** add anything that doesn't carry information. If removing it loses no fact and no affordance, remove it.
- **Don't** use shadows, gradients, glassmorphism, glows or gradient text.
- **Don't** round corners, build card grids or bento layouts, or add icon tiles.
- **Don't** add template ornament: registration marks, colophons, fake terminal windows, decorative numerals.
- **Don't** add dev-portfolio clichés: skill bars, percentage meters, tech-logo walls, typing animations.
- **Don't** list a skill without the work it was used in; stack tags live inside entries, never in a standalone grid.
- **Don't** introduce a second accent colour or a cool grey.
- **Don't** set body paragraphs in Oswald or wider than 520px.
- **Don't** type an arrow or a check as a Unicode character; use `Glyph`.
- **Don't** give a section its own column widths.
