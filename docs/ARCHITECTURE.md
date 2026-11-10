# Architecture

Stack, file layout, routes, runtime behaviour, deployment and local commands for the portfolio at gordanaleksandrovski.com.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 App Router (Turbopack), React 19 |
| Language | TypeScript, `strict`, path alias `@/*` → repo root |
| Styling | Tailwind CSS v4 via `@tailwindcss/postcss`; design tokens as CSS custom properties in `app/globals.css` |
| Fonts | Oswald (display) and Jost (body) via `next/font/google`, exposed as `--font-display-raw` / `--font-body-raw` |
| Analytics | `@vercel/analytics` (`<Analytics />` in the root layout) |
| Package manager | pnpm (`.npmrc`: `shamefully-hoist=true`) |
| Data | Static TypeScript modules. No database, no CMS, no env vars |

## Structure

```
public/         the CV PDF linked from Contact, exported from ../cv/cv.html
app/            routes: layout, page, not-found, opengraph-image, robots, sitemap, icon.svg, apple-icon.png, globals.css
components/     Nav, toggles, Collapsible, PageSection, SectionLabel, StackTag, HeroShell
  sections/     Hero, Experience, Projects (+ ProjectRow), AiEngineering, Education, Contact (+ ContactRow)
context/        LanguageContext, ThemeContext (client providers)
data/           experience, projects, education, skills, contact
  translations/ en.ts, mk.ts, typed by types.ts
lib/            cookies, themeColors, formatPeriod, scrollToHash, animationDelays
docs/           this file, PRODUCT.md, DESIGN.md
```

## Routes

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Single page: Hero, Experience, Projects, Education, AI-Assisted Engineering, Contact. Emits `Person` and `WebSite` JSON-LD |
| 404 | `app/not-found.tsx` | Server shell; bilingual copy in `app/_components/NotFoundContent.tsx` (client, reads `useLanguage()`) |
| `/opengraph-image` | `app/opengraph-image.tsx` | Generated OG image (Satori) |
| `/robots.txt` | `app/robots.ts` | Allow all, points to sitemap |
| `/sitemap.xml` | `app/sitemap.ts` | One entry, the home page |
| `/icon.svg` | `app/icon.svg` | Favicon |
| `/apple-icon.png` | `app/apple-icon.png` | iOS home-screen icon: a 180px render of `icon.svg`. Re-export it when the SVG changes |

## Theme and language

- Both persist in cookies (`theme`, `lang`; keys in `lib/cookies.ts`, one-year `max-age`).
- `app/layout.tsx` reads them with `cookies()` and sets `<html lang>` and the `dark` class server-side. This makes the route dynamic.
- `ThemeProvider` falls back to `prefers-color-scheme` when no cookie is set. With no theme cookie, the root layout adds a small blocking script to `<head>` that sets `dark` before first paint, so a dark-preferring first visit doesn't flash light. `LanguageProvider` serves `en` / `mk` dictionaries from `data/translations/`.
- Colours that CSS variables can't reach (viewport `themeColor`, the OG image) come from the hex mirrors in `lib/themeColors.ts`.

## Content

All copy and facts live in `data/`. Experience entries are checked against the CV by `../cv/check-facts.mjs`.

## Deployment

Vercel, free tier. No CI workflows in the repo. Source: `github.com/gokjialeksandrovski/my-website`.

## Local commands

```bash
pnpm install
pnpm dev                 # next dev
pnpm build               # next build
pnpm lint                # eslint, incl. vendored clean-code-rules.mjs
pnpm exec tsc --noEmit   # type check
node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON ../cv/check-facts.mjs   # CV vs site experience drift
```
