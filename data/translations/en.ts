import type { Dictionary } from './types'

export const en: Dictionary = {
  nav: {
    skipToContent: "Skip to content",
    experience: "Experience",
    work: "Work",
    ai: "AI",
    contact: "Contact",
    education: "Education",
    primary: "Primary",
  },
  toggles: {
    light: "Light",
    dark: "Dark",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
    switchLanguage: "Switch to Macedonian",
  },
  a11y: {
    newTab: "opens in a new tab",
  },
  notFound: {
    titleFirst: "Not",
    titleLast: "Found",
    headline: "Page missing",
    body: "This URL doesn't map to anything. That's the whole story.",
    back: "Back to the portfolio",
  },
  hero: {
    philosophyToggle: "How I approach the work",
  },
  experience: {
    sectionLabel: "01 — Experience",
    colPeriod: "Period",
    colRole: "Role / Company",
    colOverview: "Overview",
    currentPosition: "current position",
  },
  projects: {
    sectionLabel: "02 — Selected Work",
    technicalToggle: "How it's built",
    live: "Live →",
    personal: "Personal",
    source: "Source →",
  },
  contact: {
    sectionLabel: "05 — Contact",
    availability: "Email is the fastest way to reach me. The GitHub link opens this site's source.",
    location: "Skopje, North Macedonia",
    copyFailed: "Couldn't copy. Select the address and copy it:",
    copied: "Copied to clipboard",
    copyLink: "Copy link",
  },
  education: {
    sectionLabel: "03 — Education",
  },
  aiEngineering: {
    sectionLabel: "04 — AI-Assisted Engineering",
    text: "I use Claude Code daily and read every diff before it ships. Agents work from written plans and short per-project docs, and a fresh agent reviews code the first one wrote. When review finds a new kind of bug, I add a rule: eight run as custom ESLint checks with test fixtures, and a hook stops the agent finishing while a touched file fails lint.",
  },
  profile: {
    nameFirst: "Gordan",
    nameLast: "Aleksandrovski",
    statusLabel: "Skopje · Remote or on-site",
    title: "Infrastructure · Full-Stack Engineer",
    bio: "I run production systems and build the software on them. At Pabau I took SRE on-call shifts and DevOps work for a SaaS used by 4,000+ clinics, and built full-stack calendar features. As a freelancer I build and run client sites end to end, from the data model to zero-downtime deploys. Now I'm on the IT operations and support team at Avenga, for a telecommunications company. I like working in a structured team, but I also run personal projects to stay sharp and experiment with different architectures and technologies.",
    about:
      `It's a portfolio. Static data, most people open it once and never come back. Easy excuse to phone it in, or to go the other way and overengineer it into something nobody asked for. I try to do neither.

If something's going in front of people, it has to be good, not just passable, and ideally enjoyable enough to be worth the extra minutes. That's how I approach most things: keep it simple and don't complicate what doesn't need it, but don't let simple turn into lazy.

The one thing I won't skip is accounting for preferences that aren't mine. Every project gets at least some of it: a theme toggle, an extra language, keyboard navigation. Nobody asks for it, but it should be there. I want the point to get across with nothing important left out, in a way that's worth someone's time.`,
  },
  period: {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    present: "Present",
  },
  experienceEntries: {
    "exp-avenga": {
      role: "Associate IT Operations and Support Engineer",
      description:
        "Avenga is a global engineering and consulting company that builds software, AI products and digital platforms for enterprises. Joined the IT operations and support team for a telecommunications company: L1/L2 monitoring and incident response across a rotating shift schedule that includes nights and weekends. Currently onboarding.",
    },
    "exp-freelance": {
      role: "Freelance Full-Stack Engineer",
      description:
        "Build and run sites for clients, solo, from design to deployment: WestPrint (2024), the Medical Faculty platform (2025) and Korrmotive (2026). After leaving Pabau in June 2026 I did this full-time: Korrmotive went live in late June, and by mid-August had a custom admin, video, reader reactions and captcha. I still maintain all three in production. Details are under Selected Work.",
    },
    "exp-pabau-sre": {
      role: "Junior Site Reliability / Software Engineer",
      sectionLabels: ["On-call and monitoring", "Infrastructure", "Calendar team"],
      description:
        "Alternated weeks between SRE on-call via PagerDuty and full-stack work, on a SaaS used by 4,000+ clinics; on-call shifts averaged about three alerts an hour. After an account-takeover attack went unnoticed, wrote a New Relic alert for abnormal reminder volume. When a second compromised account began draining the company's SendGrid credits, the alert paged me on call; I traced the spike to a single user in the logs and escalated, and access was cut within minutes. Also wrote alerts for connection pool exhaustion, disk usage and slow queries, and tuned the Postgres CPU/RAM alert to stop firing during normal peak load.\n\nIn Terraform, added a retry job for the daily client database backups and gave the Docker image-tag cleanup job a dry-run mode and a keep-list, adapting existing modules, with senior review before merge. Monitored and recreated Kubernetes pods in Rancher on DigitalOcean for prod, staging and QA, and rotated secrets and JWTs monthly from Jenkins. Registered self-hosted Bitbucket runners on Hetzner with SOPS-encrypted secrets, and updated a Docker image for the move to Bun. Stored clinic data backups and CDN images in AWS S3.\n\nOn the calendar team, shipped a full-stack \"show deactivated staff\" toggle: a NestJS resolver and lazy GraphQL query for their past shifts and appointments.",
    },
    "exp-pabau-junior": {
      role: "Junior Software Engineer",
      sectionLabels: ["Calendar team", "Confirmed-icon fix", "Invoices table", "Shared components"],
      description:
        "Full-stack development on the calendar team, plus bugs and features from other teams. The examples below come from across my time at Pabau.\n\nGiven a ticket for a \"Confirmed\" icon on calendar appointment blocks, I traced the data from the icon back to the email-confirmation handler before shipping. That flow never set the status the spec relied on, so the icon would never have shown for patients confirming by email. Fixed it in two stages: a shared frontend helper with unit tests that reads either signal, then a backend change and a per-clinic backfill so the status is set consistently.\n\nBuilt the client invoices table with the UI/UX designer. The columns didn't fit the design, and the first proposal was to move some of them into a details modal. I proposed icons with tooltips instead (initial avatars, note and location icons, a truncated item list), which kept every field visible at a glance. Then built filters for the table.\n\nBuilt a reusable three-dot options menu shared by the invoices and payments tables and their edit modals, with LaunchDarkly flags deciding which options show; a shared time picker that shows the duration between start and end; and a NestJS controller that posts feature-usage events to Slack through the internal backend service.",
    },
    "exp-pabau-intern": {
      role: "Software Engineer (Internship)",
      description:
        "Joined as an intern and shipped frontend work to production. Studied the platform architecture, started on the backend and database, and moved into a full-time role at the end of the term.",
    },
    "exp-hackathon": {
      role: "Hackathon Winner",
      description:
        "Built the full frontend of a web platform in 48 hours with a team of four. Competed against seven other teams, won. The solution was picked up for continued development after the event.",
    },
  },
  projectEntries: {
    "proj-korrmotive": {
      summary:
        "Automotive news and reviews site for a Macedonian journalist, built solo from design to deployment. Migrated 229 articles and 1,991 images from Wix in one scripted import; he has published about 10 posts a month from the new admin panel since. GitHub Actions deploys it with zero downtime, and backups run weekly. Lighthouse: 95+ performance on mobile, 100 for accessibility and SEO.",
      technicalSections: {
        "Data migration":
          "Parsed the Wix CSV export, pulled every image from their CDN, re-uploaded to Payload CMS, and rebuilt the full Lexical AST from scratch. Custom Lexical editor blocks for carousel and collage media.",
        Security:
          "CSP, HSTS preloading, and clickjack protection on the public site. Admin behind Payload session auth and TOTP 2FA. GraphQL disabled to reduce attack surface. Server-side rate limiting through Nginx.",
        "Accessibility & SEO":
          "ARIA landmarks, full keyboard navigation on dropdowns and the image modal, focus trapping. A publish hook blocks posts with missing alt text. Four JSON-LD schema types.",
        "Infrastructure & CI/CD":
          "Deployments under a dedicated unprivileged user. PM2 with 14-day log rotation, ~1.2GB at runtime with 1.6GB headroom on the 4GB VM. Weekly backups. GitHub Actions pipeline: SSH tunnel for DB migrations, rsync, symlink flip for zero-downtime deploys. Self-hosted Umami for cookieless analytics.",
      },
    },
    "proj-levelspoon": {
      summary:
        "Meal-logging app I built for myself and run on my own Debian server. Many products sold in North Macedonia return nothing from a barcode lookup, so a Python OCR service reads the nutrition label from a photo instead. My first Python project. Self-hosted in Docker and reached over Tailscale, with nothing exposed to the public internet.",
      technicalSections: {
        "OCR and data":
          "Label photos go to a FastAPI + PaddleOCR service. Barcodes are looked up in the app's own database first, then Open Food Facts; 246 standard foods are seeded for loose food. Each product stores nutrition per 100 g, and totals are computed from the amount eaten. Products are shared between users, and a user can correct a figure for their own account without changing anyone else's.",
        "Optional AI":
          "Runs on the user's own Gemini API key (Gemini Flash). It estimates grams eaten from a photo and gives a rough itemised estimate for a described meal. Estimates are private and marked as estimates. Label figures never come from an LLM.",
        "Self-hosting":
          "Each service is its own Docker container with --restart unless-stopped, published on 127.0.0.1 only. The repo is cloned as a non-root user through a read-only deploy key scoped to that repo. Secrets live outside the repo in a 700 directory with 600 files. Migrations run in a throwaway Node container because the server has no Node.",
        "Tests":
          "Vitest against Postgres, Playwright end-to-end with mocked providers, and Python unit tests for the OCR service. Linted with ESLint and Ruff.",
      },
    },
    "proj-medicinski": {
      summary:
        "Platform for the Medical Faculty at Ss. Cyril and Methodius University in Skopje, where students browse departments, study programs, subjects and course materials. 37 departments, 364 subjects and 66 department editor accounts, each locked to its own department's records. API routes are rate limited, and search runs behind a cache that shares in-flight requests. Hosted on servers run by FINKI, the university's computer science faculty, so uptime is in their hands.",
      technicalSections: {
        "Content model":
          "Four levels deep: Katedra → Fakultet → Predmet → Kategorija. Relations are bidirectional: subjects know their programs, categories know their subjects. Content stored as Strapi rich-text blocks; each subject branches into category pages for materials, exam questions, and grading info.",
        "Access control":
          "Strapi RBAC per department. Each department has its own CMS account, locked to its own records only. A Pediatrics editor cannot see or edit Anatomy's subjects or categories.",
        Performance:
          "Search debounced at 250ms, hitting a Next.js API route with a 15s TTL / 200-entry LRU cache and in-flight deduplication. Two concurrent requests for the same term share one upstream fetch to Strapi instead of spawning two. IntersectionObserver pagination with a user-interaction guard: the sentinel fires from mount but no-ops until the user scrolls. ISR with five-minute revalidation.",
        Security:
          "Middleware blocks /admin and /cms-api/admin with 404s, not redirects. API routes rate limited at 60 req/min per IP with Retry-After and X-RateLimit-* headers.",
      },
    },
    "proj-westprint": {
      summary:
        "Catalog and inquiry site for WestPrint, a Macedonian printing company since 1988. 29 products and 55 services in three languages (Macedonian, English, Albanian), managed by their team through the admin panel. Each product or service opens a pre-filled inquiry email to the team; the site brings them 50+ inquiries a month.",
      technicalSections: {
        Architecture:
          "Next.js 16 and Payload CMS 3 in one codebase. Admin panel at /admin, inside the same Next.js process. Three locales (mk, en, sq) with URL-based routing. Dynamic dictionary imports per locale, falls back to English. Payload local API enforces overrideAccess: false on all server routes; Admin and Editor JWT roles.",
        Performance:
          "ISR with two revalidation windows: 60s on the homepage, 300s on equipment pages. Sharp generates three image variants on upload (thumbnail, card, full) in WebP, cached for a year. PostgreSQL pool capped at 10 connections, 30s idle timeout.",
        "Contact & email":
          "Contact form rate limited at 5 req/min per IP with automatic window cleanup. Email via Nodemailer and Gmail SMTP with a cached transporter and HTML template. Reply-to headers on every submission.",
        Infrastructure:
          "Ubuntu behind Nginx, process managed by PM2. Webpack build capped at 2GB to stay within the 4GB server's memory.",
      },
    },
  },
  contactEntries: {
    email: {
      label: "Email",
      tooltip:
        "Copies the address to your clipboard. No mail app opens.",
    },
    github: {
      label: "GitHub",
      tooltip:
        "Opens this site's source in a new tab. Client repos are private, so this is the code I can show.",
    },
    linkedin: {
      label: "LinkedIn",
      tooltip: "Opens my LinkedIn profile in a new tab.",
    },
    cv: {
      label: "CV",
      tooltip: "Opens my CV as a PDF in a new tab.",
    },
  },
  educationEntries: {
    "edu-01": {
      note: "13 months of JavaScript, TypeScript, React, CSS (a lot of Tailwind), Firebase, semantic HTML, design fundamentals, and Git.",
    },
  },
};
