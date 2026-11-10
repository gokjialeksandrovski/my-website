import type { Skill } from './skills'

export interface TechnicalSection {
  readonly label: string
  readonly content: string
}

export interface Project {
  readonly id: string
  readonly name: string
  readonly summary: string
  readonly technicalSections: readonly TechnicalSection[]
  readonly stack: readonly Skill[]
  readonly url?: string
  readonly year: string
}

export const projects: readonly Project[] = [
  {
    id: "proj-korrmotive",
    name: "Korrmotive",
    summary:
      "Automotive news and reviews site for a Macedonian journalist, built solo from design to deployment. Migrated 229 articles and 1,991 images from Wix in one scripted import; he has published about 10 posts a month from the new admin panel since. GitHub Actions deploys it with zero downtime, and backups run weekly. Lighthouse: 95+ performance on mobile, 100 for accessibility and SEO.",
    technicalSections: [
      {
        label: "Data migration",
        content:
          "Parsed the Wix CSV export, pulled every image from their CDN, re-uploaded to Payload CMS, and rebuilt the full Lexical AST from scratch. Custom Lexical editor blocks for carousel and collage media.",
      },
      {
        label: "Security",
        content:
          "CSP, HSTS preloading, and clickjack protection on the public site. Admin behind Payload session auth and TOTP 2FA. GraphQL disabled to reduce attack surface. Server-side rate limiting through Nginx.",
      },
      {
        label: "Accessibility & SEO",
        content:
          "ARIA landmarks, full keyboard navigation on dropdowns and the image modal, focus trapping. A publish hook blocks posts with missing alt text. Four JSON-LD schema types.",
      },
      {
        label: "Infrastructure & CI/CD",
        content:
          "Deployments under a dedicated unprivileged user. PM2 with 14-day log rotation, ~1.2GB at runtime with 1.6GB headroom on the 4GB VM. Weekly backups. GitHub Actions pipeline: SSH tunnel for DB migrations, rsync, symlink flip for zero-downtime deploys. Self-hosted Umami for cookieless analytics.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Payload CMS",
      "PostgreSQL",
      "Hetzner",
      "Nginx",
      "PM2",
      "GitHub Actions (CI/CD)",
      "Sharp",
      "Umami",
      "Git",
    ],
    url: "https://korrmotive.com",
    year: "2026",
  },
  {
    id: "proj-levelspoon",
    name: "Levelspoon",
    summary:
      "Meal-logging app I built for myself and run on my own Debian server. Many products sold in North Macedonia return nothing from a barcode lookup, so a Python OCR service reads the nutrition label from a photo instead. My first Python project. Self-hosted in Docker and reached over Tailscale, with nothing exposed to the public internet.",
    technicalSections: [
      {
        label: "OCR and data",
        content:
          "Label photos go to a FastAPI + PaddleOCR service. Barcodes are looked up in the app's own database first, then Open Food Facts; 246 standard foods are seeded for loose food. Each product stores nutrition per 100 g, and totals are computed from the amount eaten. Products are shared between users, and a user can correct a figure for their own account without changing anyone else's.",
      },
      {
        label: "Optional AI",
        content:
          "Runs on the user's own Gemini API key (Gemini Flash). It estimates grams eaten from a photo and gives a rough itemised estimate for a described meal. Estimates are private and marked as estimates. Label figures never come from an LLM.",
      },
      {
        label: "Self-hosting",
        content:
          "Each service is its own Docker container with --restart unless-stopped, published on 127.0.0.1 only. The repo is cloned as a non-root user through a read-only deploy key scoped to that repo. Secrets live outside the repo in a 700 directory with 600 files. Migrations run in a throwaway Node container because the server has no Node.",
      },
      {
        label: "Tests",
        content:
          "Vitest against Postgres, Playwright end-to-end with mocked providers, and Python unit tests for the OCR service. Linted with ESLint and Ruff.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Tailscale",
      "Linux",
    ],
    year: "2026",
  },
  {
    id: "proj-medicinski",
    name: "Medical Faculty – Department Platform",
    summary:
      "Platform for the Medical Faculty at Ss. Cyril and Methodius University in Skopje, where students browse departments, study programs, subjects and course materials. 37 departments, 364 subjects and 66 department editor accounts, each locked to its own department's records. API routes are rate limited, and search runs behind a cache that shares in-flight requests. Hosted on servers run by FINKI, the university's computer science faculty, so uptime is in their hands.",
    technicalSections: [
      {
        label: "Content model",
        content:
          "Four levels deep: Katedra → Fakultet → Predmet → Kategorija. Relations are bidirectional: subjects know their programs, categories know their subjects. Content stored as Strapi rich-text blocks; each subject branches into category pages for materials, exam questions, and grading info.",
      },
      {
        label: "Access control",
        content:
          "Strapi RBAC per department. Each department has its own CMS account, locked to its own records only. A Pediatrics editor cannot see or edit Anatomy's subjects or categories.",
      },
      {
        label: "Performance",
        content:
          "Search debounced at 250ms, hitting a Next.js API route with a 15s TTL / 200-entry LRU cache and in-flight deduplication. Two concurrent requests for the same term share one upstream fetch to Strapi instead of spawning two. IntersectionObserver pagination with a user-interaction guard: the sentinel fires from mount but no-ops until the user scrolls. ISR with five-minute revalidation.",
      },
      {
        label: "Security",
        content:
          "Middleware blocks /admin and /cms-api/admin with 404s, not redirects. API routes rate limited at 60 req/min per IP with Retry-After and X-RateLimit-* headers.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Strapi",
      "SQLite",
      "RBAC",
      "Ant Design",
      "Nginx",
      "PM2",
      "Git",
    ],
    url: "https://katedri.medf.ukim.edu.mk",
    year: "2025",
  },
  {
    id: "proj-westprint",
    name: "WestPrint",
    summary:
      "Catalog and inquiry site for WestPrint, a Macedonian printing company since 1988. 29 products and 55 services in three languages (Macedonian, English, Albanian), managed by their team through the admin panel. Each product or service opens a pre-filled inquiry email to the team; the site brings them 50+ inquiries a month.",
    technicalSections: [
      {
        label: "Architecture",
        content:
          "Next.js 16 and Payload CMS 3 in one codebase. Admin panel at /admin, inside the same Next.js process. Three locales (mk, en, sq) with URL-based routing. Dynamic dictionary imports per locale, falls back to English. Payload local API enforces overrideAccess: false on all server routes; Admin and Editor JWT roles.",
      },
      {
        label: "Performance",
        content:
          "ISR with two revalidation windows: 60s on the homepage, 300s on equipment pages. Sharp generates three image variants on upload (thumbnail, card, full) in WebP, cached for a year. PostgreSQL pool capped at 10 connections, 30s idle timeout.",
      },
      {
        label: "Contact & email",
        content:
          "Contact form rate limited at 5 req/min per IP with automatic window cleanup. Email via Nodemailer and Gmail SMTP with a cached transporter and HTML template. Reply-to headers on every submission.",
      },
      {
        label: "Infrastructure",
        content:
          "Ubuntu behind Nginx, process managed by PM2. Webpack build capped at 2GB to stay within the 4GB server's memory.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Payload CMS",
      "PostgreSQL",
      "Sharp",
      "Nginx",
      "PM2",
      "Git",
    ],
    url: "https://westprint.mk",
    year: "2024",
  },
];
