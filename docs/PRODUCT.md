# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary readers are recruiters and engineering managers hiring for two role families:

- **SRE / DevOps** — reliability, infrastructure and platform roles (on-call, Kubernetes, Terraform, monitoring).
- **Full-stack / Software Engineer** — product engineering roles (Next.js, TypeScript, Node, PostgreSQL).

They skim fast, usually a 6–10 second scan, then read closely only if the first pass earns it. Many arrive from the CV link or LinkedIn and open the site instead of, or alongside, the PDF.

Secondary readers are developers and technical evaluators who judge taste and code competence together: they inspect the site itself, its behaviour, and its public source (github.com/gokjialeksandrovski/my-website).

IT Ops / Support roles and freelance clients are not target audiences for now.

## Product Purpose

The website half of Gordan Aleksandrovski's professional brand (the other half is the CV, maintained outside this repo in `../cv/`). It gets a hiring reader from "who is this" to "worth an interview" for SRE/DevOps and full-stack roles. Success is an interview request.

The site is also its own evidence: a fast, accessible, bilingual, well-built site is a working sample of the claims it makes.

## Positioning

An engineer who covers the whole lifecycle, not one half of it: ships full-stack features *and* runs them in production (SRE rotations, zero-downtime CI/CD, monitoring, L1/L2 ops). Accessibility, security and performance are built in early rather than patched later. The proof is shipped client work with specific technical depth (Wix-to-Payload migration that rebuilt the Lexical AST, multi-level RBAC, TOTP 2FA, CSP/HSTS, ISR + Sharp WebP pipeline), not a skills list.

The current role (Associate IT Operations and Support Engineer at Avenga) is IT Ops at a much larger, more established company than Pabau. It is shown as is: a step down in title, a step up in company, never reframed as SRE work.

## Operating Context

- Single-page portfolio at gordanaleksandrovski.com, deployed on Vercel (free tier), with Vercel Web Analytics.
- Sections in order: Hero, Experience, Projects (Selected Work), AI-Assisted Engineering (how the work gets done with Claude Code; mirrors the CV section), Education, Contact. Plus a 404 page and a generated Open Graph image.
- All content is static and versioned in the repo. Stack, file layout and data files: `docs/ARCHITECTURE.md`.
- The CV (`../cv/`) is the companion artifact (principle 3).

## Capabilities and Constraints

- No database, no CMS, no client-side data fetching.
- EN/MK language toggle across all copy; light/dark theme with cookie persistence and system-preference fallback, resolved server-side.
- Contact: email copy-to-clipboard, GitHub and LinkedIn links.
- Project rows expand to technical detail (architecture, security, performance, infrastructure).
- Free-tier hosting: keep dependencies minimal and the site fast by default.

## Brand Commitments

- Name: **Gordan Aleksandrovski**. Title line: **Full-Stack Engineer · Site Reliability**.
- Contact: Skopje, North Macedonia · gordanaleksandrovski20@gmail.com · gordanaleksandrovski.com · github.com/gokjialeksandrovski · linkedin.com/in/gordan-aleksandrovski-99a62a202.
- Voice: first-person, plain and concrete. Verbs and specifics ("Wrote the migration myself", "shipped a working product in 48 hours"), no buzzwords or self-praise adjectives. Same voice in EN and MK.

## Evidence on Hand

- Experience (canonical; CV and website must match exactly):
  - Avenga: Associate IT Operations and Support Engineer (Oct 2026 – Present).
  - Pabau Clinic Software: Junior Site Reliability / Software Engineer (Sep 2025 – Jun 2026).
  - Pabau Clinic Software: Junior Software Engineer (May 2025 – Aug 2025).
  - Pabau Clinic Software: Software Engineer (Internship) (Feb 2025 – Apr 2025).
  - Brainster: Hackathon Winner (Aug 2024).
- Projects, each with a live production link: Korrmotive (korrmotive.com, 2026), Medical Faculty department platform for Ss. Cyril and Methodius University (katedri.medf.ukim.edu.mk, 2025), WestPrint (westprint.mk).
- Education: Brainster Front-End Development Academy (Sep 2023 – Oct 2024); Natural Sciences and Mathematics, Public Secondary School "Georgi Dimitrov" (Sep 2018 – Jun 2022).
- The site's own public source code.
- Absent, do not fabricate: case studies (client work shows live production links instead), testimonials, references, metrics such as uptime percentages or traffic numbers, certifications, client logos.

## Product Principles

1. **Proof over claims.** Every skill appears next to the work where it was used. A bare skill without evidence gets cut before a project does.
2. **Both halves, every time.** The site shows building *and* operating. Neither the SRE story nor the full-stack story gets dropped.
3. **One source of truth.** Site and CV state the same roles, dates and titles, in both languages. Drift reads as carelessness.
4. **Scannable first, deep second.** The six-second pass lands name, title, current role and the two role families. Technical depth sits behind expansion for the reader who stays.
5. **The site is a sample.** Speed, accessibility, bilingual parity and clean source are part of the pitch, not polish.
6. **Never reframe a role beyond the work done.** Wording may get clearer. It may not get grander.

## Accessibility & Inclusion

Full keyboard navigation and ARIA labelling, matching the CV's own claim. Content stays readable in both themes and both languages (Latin and Cyrillic). Respect reduced-motion preferences.
