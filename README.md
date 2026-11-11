# gordanaleksandrovski.com

My portfolio site. One page, in English and Macedonian, with light and dark themes. Live at [gordanaleksandrovski.com](https://gordanaleksandrovski.com).

It runs on Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4, hosted on Vercel's free tier. There's no database, CMS or environment variables. Every role, project and line of copy is a typed TypeScript module in `data/`.

## Running it

```bash
pnpm install
pnpm dev
```

`pnpm build` makes a production build, `pnpm lint` runs ESLint and `pnpm exec tsc --noEmit` runs the type check.

## Decisions worth explaining

Theme and language live in cookies rather than localStorage. The root layout reads them on the server and sets `<html lang>` and the `dark` class before the page is sent, so a returning visitor never sees the wrong theme flash in. A first-time visitor has no cookie yet, so a small inline script checks `prefers-color-scheme` before first paint. The cost is that the route renders dynamically instead of statically. For a single page, I'll take that.

Both languages are typed against one `Dictionary` interface (`data/translations/types.ts`). If I add an English string and forget the Macedonian one, the build fails.

The expandable sections animate `grid-template-rows` from `0fr` to `1fr`. That avoids measuring heights in JavaScript and needs no animation library.

A few colours have to exist outside CSS. The browser's `themeColor` and the generated Open Graph image can't read CSS variables, so `lib/themeColors.ts` keeps hex copies of the tokens in `app/globals.css`.

## Lint rules

`clean-code-rules.mjs` is a set of custom ESLint rules I use across my projects, on top of `eslint-config-next`. They catch things the default config lets through: default exports outside Next.js entry points, empty `catch` blocks, heavy libraries imported into client components, and edit or open states whose only exit is the save button.

## More

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md): file layout, routes, deployment
- [docs/DESIGN.md](docs/DESIGN.md): tokens, typography, components, motion
