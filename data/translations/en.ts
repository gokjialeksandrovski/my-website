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
    engineerSince: "Engineer since",
    since: "2024",
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
  },
  contact: {
    sectionLabel: "05 — Contact",
    availability: "Hiring for an SRE, DevOps or full-stack role? Email me. To see how I write code first, the GitHub link opens this site's source.",
    location: "Skopje, North Macedonia",
    copyFailed: "Couldn't copy. Select the address and copy it:",
    copied: "Copied to clipboard",
    copyLink: "Copy link",
  },
  education: {
    sectionLabel: "04 — Education",
  },
  aiEngineering: {
    sectionLabel: "03 — AI-Assisted Engineering",
    practices: [
      {
        label: "Daily use",
        text: "I use Claude Code for most of my work: features, debugging, infrastructure, docs, and this site. I read every diff before it ships.",
      },
      {
        label: "Plans and playbooks",
        text: "I brainstorm before coding. Complex features also get a written plan, which I later delete and replace with a playbook of that feature's architecture and rules for the next similar feature. Recurring jobs get playbooks too, with checks the agent must pass and a log of past failures. When a run comes back wrong, I fix the playbook.",
      },
      {
        label: "Context",
        text: "I clear context between tasks and build each part of a feature with its own agent, compacting only when a task outgrows the window. A CLI output proxy, terse response modes and codebase knowledge graphs keep token use down.",
      },
      {
        label: "Review",
        text: "Code review goes to fresh subagents. The agent that wrote the code doesn't review it.",
      },
      {
        label: "Rules and lint",
        text: "I wrote a 22-rule engineering rulebook and add to it when review finds a new kind of bug. Eight rules run as custom ESLint checks with test fixtures, and a Stop hook won't let the agent finish while a file it touched fails lint.",
      },
      {
        label: "Docs",
        text: "Each project's CLAUDE.md stays short: project rules and a table of docs, each with a \"read when\" trigger, so the agent opens only what its task needs. One fact lives in one doc, and docs change in the same commit as the code they cover. I packaged this setup as a skill that reorganizes a project's docs.",
      },
    ],
  },
  profile: {
    nameFirst: "Gordan",
    nameLast: "Aleksandrovski",
    statusLabel: "Now · IT Ops & Support at Avenga",
    title: "Full-Stack Engineer · Site Reliability",
    bio: "I build, fix, and maintain code. At Pabau I built full-stack calendar features, then added bi-weekly SRE on-call shifts and DevOps tasks covering the whole infrastructure. Now I'm in IT operations and support at Avenga, working on a telecom client's systems. I like working in a structured team, but I also run personal projects to stay sharp and experiment with different architectures.",
    about:
      `This site has one job: make it clear that I'm serious. That's it.

It's a portfolio. Static data, most people open it once and never come back. Easy excuse to phone it in, or to go the other way and overengineer it into something nobody asked for. I try to do neither.

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
        "Avenga is an international IT services company. I'm on the IT operations and support team for a telecom client, monitoring their systems and responding to alerts.",
    },
    "exp-pabau-sre": {
      role: "Junior Site Reliability / Software Engineer",
      sectionLabels: ["On-call and monitoring", "Infrastructure", "Calendar team"],
      description:
        "Took bi-weekly SRE on-call shifts via PagerDuty and DevOps tasks covering the whole infrastructure. Used New Relic to diagnose slow queries and CPU/memory spikes, and flagged a compromised SendGrid account from a traced request spike.\n\nMonitored and recreated Kubernetes pods in Rancher on DigitalOcean for prod, staging and QA, and rotated secrets and JWTs monthly from Jenkins. Restarted Docker containers, truncated container and server logs, and updated an image for the move to Bun. Provisioned jobs, alerts and servers with Terraform, brought up two servers in TypeScript Pulumi for Rancher 2, and registered self-hosted Bitbucket runners on Hetzner with SOPS-encrypted secrets. Stored clinic data backups and CDN images in AWS S3.\n\nOn the calendar team, shipped a full-stack \"show deactivated staff\" toggle: a NestJS resolver and lazy GraphQL query for their past shifts and appointments.",
    },
    "exp-pabau-junior": {
      role: "Junior Software Engineer",
      description:
        "Full-stack development on the calendar team. Picked up bugs and features from other teams too.",
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
        "Macedonian automotive news and reviews platform, built solo from design through deployment. The journalist's site was running on Wix. Rebuilt the whole thing on a custom stack. He logs into the admin panel and publishes directly from there.",
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
    "proj-medicinski": {
      summary:
        "Web platform for the Medical Faculty at Ss. Cyril and Methodius University in Skopje. Students browse all departments, study programs, subjects, and course materials. Professors manage their own content through an admin panel. The server is owned and maintained by FINKI (Факултет за информатички науки и компјутерско инженерство), the Faculty of Computer Science and Engineering, not by me.",
      technicalSections: {
        "Content model":
          "Four levels deep: Katedra → Fakultet → Predmet → Kategorija. Relations are bidirectional: subjects know their programs, categories know their subjects. Content stored as Strapi rich-text blocks; each subject branches into category pages for materials, exam questions, and grading info.",
        "Access control":
          "Strapi RBAC per department. Each department has its own CMS account, locked to its own records only. A Pediatrics professor cannot see or edit Anatomy's subjects or categories.",
        Performance:
          "Search debounced at 250ms, hitting a Next.js API route with a 15s TTL / 200-entry LRU cache and in-flight deduplication. Two concurrent requests for the same term share one upstream fetch to Strapi instead of spawning two. IntersectionObserver pagination with a user-interaction guard: the sentinel fires from mount but no-ops until the user scrolls. ISR with five-minute revalidation.",
        Security:
          "Middleware blocks /admin and /cms-api/admin with 404s, not redirects. API routes rate limited at 60 req/min per IP with Retry-After and X-RateLimit-* headers.",
      },
    },
    "proj-westprint": {
      summary:
        "Catalog and inquiry platform for WestPrint, a Macedonian printing company since 1988. The site covers two sides: equipment (printers, cutters, laminators, vinyl, software) and print production services (business cards, stickers, vehicle wraps, signage, and more). Visitors browse the catalog, and clicking any product or service opens a pre-filled inquiry email straight to the team's inbox. Runs in Macedonian, English, and Albanian. The WestPrint team manages the full catalog through the admin panel.",
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
  },
  educationEntries: {
    "edu-01": {
      note: "13 months of JavaScript, TypeScript, React, CSS (a lot of Tailwind), Firebase, semantic HTML, design fundamentals, and Git.",
    },
  },
};
