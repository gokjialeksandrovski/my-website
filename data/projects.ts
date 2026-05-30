import type { Skill } from './skills'

export interface TechnicalSection {
  readonly label: string
  readonly content: string
}

export interface Project {
  readonly id: string
  readonly number: string
  readonly name: string
  readonly summary?: string
  readonly description: string
  readonly technicalSections?: readonly TechnicalSection[]
  readonly stack: readonly Skill[]
  readonly url?: string
  readonly repoUrl?: string
  readonly year: string
}

export const projects: readonly Project[] = [
  {
    id: "proj-korrmotive",
    number: "01",
    name: "Korrmotive",
    summary:
      "Macedonian automotive news and reviews platform, built solo from design through deployment. The journalist's site was running on Wix. Rebuilt the whole thing on a custom stack.",
    description:
      "The migration was a script: parsed the Wix CSV export, pulled every image from their CDN, re-uploaded to Payload CMS, and rebuilt the full Lexical AST from scratch. Next.js 16 with server components, Payload CMS with a custom Lexical editor (carousel and collage media blocks), PostgreSQL on a Hetzner CX23. Security runs in layers: the admin sits behind Payload session auth and TOTP 2FA, while the public site has a strict Content Security Policy, HSTS preloading, and clickjack protection. Payload ships with GraphQL by default. Disabled it to reduce attack surface. Server-side rate limiting through Nginx. A Payload hook warms the Sharp image cache on every upload. Accessibility throughout: ARIA landmarks, full keyboard navigation on dropdowns and the image modal, focus trapping, and a publish hook that blocks posts with missing alt text. Four JSON-LD schema types for SEO. Deployments run under a dedicated unprivileged user, not root. PM2 with 14-day log rotation keeps the process running at around 1.2GB, with 1.6GB headroom on the 4GB VM. Weekly backups. CI/CD via GitHub Actions: SSH tunnel for DB migrations, rsync to the server, symlink flip for zero-downtime deploys. Self-hosted Umami for cookieless analytics, embedded in the admin panel.",
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
      "Web-scraping",
      "Nginx",
      "PM2",
      "GitHub Actions (CI/CD)",
      "Sharp",
      "Umami",
      "Git",
    ],
    url: "https://korrmotive.com",
    year: "2025",
  },
  {
    id: "proj-medicinski",
    number: "02",
    name: "Medical Faculty",
    summary:
      "Web platform for the Medical Faculty at Ss. Cyril and Methodius University in Skopje. Students browse all departments, study programs, subjects, and course materials. Professors manage their own content through an admin panel.",
    description:
      "Hosted on FINKI servers. Monorepo: Next.js 16 frontend and Strapi on the same domain. Next.js serves everything public. Strapi runs behind /cms-api/* and /admin, both proxied through Nginx. SQLite in production. The content model runs four levels deep: a department (Katedra) links to study programs (Fakultet) such as General Medicine, Dentistry, Pharmacy, Physiotherapy, and Optometry. Each program has its own subjects (Predmet: Anatomy 1, Anatomy 2, Pathological Physiology, and others). Each subject branches into category pages (Kategorija) for course organization, exam questions, grading info, and study materials, all stored as Strapi rich-text blocks. Relations are bidirectional: Predmet knows its Fakultet, Kategorija knows its Predmet, and Fakultet maps back to its Katedra through an inverse relation. Access is per department. Each department has its own CMS account, locked to its own records through Strapi RBAC. A Pediatrics professor cannot see or edit Anatomy's subjects or categories. Home page is a modal department picker with infinite scroll. Pagination runs on IntersectionObserver with a user-interaction guard: the sentinel fires from mount but the callback no-ops until the user actually scrolls, so the initial load does not prefetch a second page. Search is debounced at 250ms, hitting a Next.js API route with its own in-memory cache: 15-second TTL, 200-entry LRU cap, and in-flight deduplication. Two concurrent requests for the same term share one upstream fetch to Strapi instead of spawning two. Middleware blocks /admin and /cms-api/admin with 404s, not redirects. API routes rate limited at 60 requests per minute per IP with Retry-After and X-RateLimit-* headers. ISR with five-minute revalidation on all pages. Teaching staff, elective subjects, and seminar topics are each their own sub-page, fetching only the field they need rather than the full department record.",
    technicalSections: [
      {
        label: "Content model",
        content:
          "Four levels deep: Katedra → Fakultet → Predmet → Kategorija. Relations are bidirectional: subjects know their programs, categories know their subjects. Content stored as Strapi rich-text blocks; each subject branches into category pages for materials, exam questions, and grading info.",
      },
      {
        label: "Access control",
        content:
          "Strapi RBAC per department. Each department has its own CMS account, locked to its own records only. A Pediatrics professor cannot see or edit Anatomy's subjects or categories.",
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
    number: "03",
    name: "WestPrint",
    summary:
      "B2B platform for WestPrint, a Macedonian printing company since 1988. The site covers two sides: equipment sales (printers, cutters, laminators, vinyl, software) and print production services (business cards, stickers, vehicle wraps, signage, and more). Clicking any product or service fires a pre-filled order straight to the team's inbox. Runs in Macedonian, English, and Albanian.",
    description:
      "Next.js 16 and Payload CMS 3 in one codebase. The admin panel runs at /admin inside the same Next.js process as the public frontend. PostgreSQL with a connection pool capped at 10 connections and a 30-second idle timeout, tuned for the 4GB Hetzner box. Three locales (mk, en, sq) with URL-based routing: /:locale/equipment/... Dynamic dictionary imports per locale, falls back to English. Payload local API enforces overrideAccess: false on all server routes, so role checks apply even on internal calls. Admin and Editor roles via JWT: editors manage content, not configuration. ISR with two revalidation windows: 60 seconds on the homepage, 300 on equipment pages. Sharp generates three image variants on upload (thumbnail, card, full), outputs WebP, cached for a year. Contact form rate limited at 5 requests per minute per IP using an in-memory map with automatic window cleanup. Email via Nodemailer and Gmail SMTP with a cached transporter and HTML template. Reply-to headers on every submission so the owner can reply directly. A floating contact button is available on every page. Deployed on Ubuntu behind Nginx, process managed by PM2. Webpack build capped at 2GB to stay within the server memory.",
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
    year: "2025",
  },
];
