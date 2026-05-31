import type { Dictionary } from './types'

export const en: Dictionary = {
  nav: {
    skipToContent: "Skip to content",
    experience: "Experience",
    work: "Work",
    contact: "Contact",
    education: "Education",
  },
  hero: {
    developerSince: "Developer since",
    since: "2023",
    philosophyToggle: "my philosophy in a nutshell",
    philosophyLead: "How I approach the work:",
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
    technicalToggle: "technical",
    live: "Live →",
    github: "GitHub →",
  },
  contact: {
    sectionLabel: "04 — Contact",
    availability: "Thanks for the read. I hope you enjoyed it. If you want to talk or see an example of how I code on a project, find me through the links below.",
    copyFailed: "Copy failed — select manually:",
    copyLink: "Copy link",
  },
  education: {
    sectionLabel: "03 — Education",
  },
  profile: {
    nameFirst: "Gordan",
    nameLast: "Aleksandrovski",
    statusLabel: "Always learning",
    title: "Fullstack Developer",
    bio: "I build, fix, and maintain code. As a full-stack developer, I balance feature work with regular SRE rotations and DevOps tasks to keep production healthy. I like working in a structured team, but I also run personal projects to stay sharp and experiment with different architecture.",
    about:
      "This site has one job: make it clear that I'm serious. That's genuinely it. It's a portfolio. Static data, most people open it once and never come back. Easy excuse to phone it in, or the polar opposite: overengineer it into something nobody asked for. I always try to do neither. If something's going in front of people, it has to actually be good. Not passable. Good. Enjoyable, even. Worth the extra minutes. That tension is kind of how I approach everything: keep it simple, don't complicate what doesn't need to be complicated, but don't let simplicity become an excuse for laziness. One non-negotiable: accounting for preferences that aren't mine. Every project has at least some of it. A theme toggle, an extra language, keyboard navigation. Not because it's required. Because it should be there. Get the point across, leave nothing important out, and make it worth someone else's time.",
  },
  experienceEntries: {
    "exp-01": {
      role: "Junior Software Engineer",
      description:
        "Full-stack development on the calendar team, with SRE rotations and DevOps responsibilities added from September 2025. Bugs and features from other teams picked up throughout.",
    },
    "exp-02": {
      role: "Software Engineer (Internship)",
      description:
        "Joined as an intern, worked on frontend features, and moved into a full-time role at the end of the term.",
    },
    "exp-03": {
      role: "Hackathon Winner",
      description:
        "Built the full frontend of a web platform in 48 hours with a team of four. Competed against eight teams, won. The solution was picked up for continued development after the event.",
    },
  },
  projectEntries: {
    "proj-korrmotive": {
      summary:
        "Macedonian automotive news and reviews platform, built solo from design through deployment. The journalist's site was running on Wix. Rebuilt the whole thing on a custom stack.",
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
        "Web platform for the Medical Faculty at Ss. Cyril and Methodius University in Skopje. Students browse all departments, study programs, subjects, and course materials. Professors manage their own content through an admin panel.",
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
        "B2B platform for WestPrint, a Macedonian printing company since 1988. The site covers two sides: equipment sales (printers, cutters, laminators, vinyl, software) and print production services (business cards, stickers, vehicle wraps, signage, and more). Clicking any product or service fires a pre-filled order straight to the team's inbox. Runs in Macedonian, English, and Albanian.",
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
      tooltip:
        "Genuinely not a fan of prompts that open email apps. There are too many of them. Here's a copy to paste.",
    },
    github: {
      tooltip:
        "This will open this website's repo so you can see how I organize code. Repos for clients are private, even though the code is mine, it's not mine for sharing.",
    },
    linkedin: {
      tooltip: "This will open the corporate industry standard.",
    },
  },
  educationEntries: {
    "edu-01": {
      note: "13 months of JavaScript, TypeScript, React, CSS (a lot of Tailwind), Firebase, semantic HTML, design fundamentals, and Git.",
    },
  },
};
