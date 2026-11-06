# CLAUDE.md

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## First Steps

Read `docs/ARCHITECTURE.md` before doing anything. It covers the stack, file layout, routes, theme/language handling, deployment and local commands.

| Doc | Read when |
|---|---|
| `docs/ARCHITECTURE.md` | Always |
| `docs/PRODUCT.md` | Writing or changing copy, adding a project/role/skill, or touching anything a recruiter reads |
| `docs/DESIGN.md` | Changing any component, style, token, layout or animation |

When a change makes one of these docs wrong, update the doc in the same change. Docs describe what exists, not plans.

## Impeccable

`PRODUCT.md` and `DESIGN.md` live in `docs/`, not the repo root. For any `/impeccable` command, read and write `docs/PRODUCT.md` and `docs/DESIGN.md`. The design sidecar stays at `.impeccable/design.json`.

## Scope

Build and maintain the portfolio site in this repo.

Do NOT work on:
- `../cv/`. The CV is the source of truth for roles, dates, titles and project years. Align the site to it, never the reverse.
- Content for IT Ops / Support roles or freelance clients (not target audiences).
- Anything listed as absent in `docs/PRODUCT.md` › Evidence on Hand (case studies, testimonials, metrics, certifications, logos). Never fabricate it.

## Environment

Windows 11, pnpm. Free-tier hosting: no new dependency without asking.

## Project conventions

- New content and facts go in `data/`, not hard-coded in components.
- Every copy change lands in both `data/translations/en.ts` and `mk.ts`, same voice.
- After editing `data/experience.ts` or its translations, run `../cv/check-facts.mjs` (command in `docs/ARCHITECTURE.md`). It must pass.
- Changing a token in `app/globals.css` means updating its hex mirror in `lib/themeColors.ts`: the OG image and `themeColor` read only the mirror.
- `clean-code-rules.mjs` is a vendored copy of the canonical rules. Re-copy it, don't edit it here.
