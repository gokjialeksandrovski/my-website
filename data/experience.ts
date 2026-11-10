import type { Skill } from './skills'
import type { Period } from '../lib/formatPeriod'

export interface ExperienceEntry {
  readonly id: string
  readonly role: string
  readonly company: string
  readonly period: Period
  readonly isAchievement?: boolean
  readonly description: string
  readonly stack: readonly Skill[]
}

export const experience: readonly ExperienceEntry[] = [
  {
    id: "exp-avenga",
    role: "Associate IT Operations and Support Engineer",
    company: "Avenga",
    period: { start: "2026-10", end: "present" },
    description:
      "Avenga is an international IT services company. Joined the IT operations and support team for a telecom client: L1/L2 monitoring and incident response across a rotating shift schedule that includes nights and weekends. Currently onboarding.",
    stack: ["Jira", "Confluence"],
  },
  {
    id: "exp-freelance",
    role: "Freelance Full-Stack Engineer",
    company: "WestPrint, Medical Faculty, Korrmotive",
    period: { start: "2024-10", end: "2026-10" },
    description:
      "Build and run sites for clients, solo, from design to deployment: WestPrint (2024), the Medical Faculty platform (2025) and Korrmotive (2026). After leaving Pabau in June 2026 I did this full-time: Korrmotive went live in late June, and by mid-August had a custom admin, video, reader reactions and captcha. I still maintain Korrmotive in production. Details are under Selected Work.",
    stack: [
      "Next.js",
      "TypeScript",
      "Payload CMS",
      "Strapi",
      "PostgreSQL",
      "Nginx",
      "GitHub Actions (CI/CD)",
      "Hetzner",
    ],
  },
  {
    id: "exp-pabau-sre",
    role: "Junior Site Reliability / Software Engineer",
    company: "Pabau Clinic Software",
    period: { start: "2025-09", end: "2026-06" },
    description:
      "Alternated weeks between SRE on-call via PagerDuty and full-stack work, on a platform used by 4,000+ practices; on-call shifts averaged about three alerts an hour. After an account-takeover attack went unnoticed, wrote a New Relic alert for abnormal reminder volume. When a second compromised account began draining the company's SendGrid credits, the alert paged me on call; I traced the spike to a single user in the logs and escalated, and access was cut within minutes. Also wrote alerts for connection pool exhaustion, disk usage and slow queries, and tuned the Postgres CPU/RAM alert to stop firing during normal peak load.\n\nIn Terraform, added a retry job for the daily client database backups and gave the Docker image-tag cleanup job a dry-run mode and a keep-list, adapting existing modules, with senior review before merge. Monitored and recreated Kubernetes pods in Rancher on DigitalOcean for prod, staging and QA, and rotated secrets and JWTs monthly from Jenkins. Registered self-hosted Bitbucket runners on Hetzner with SOPS-encrypted secrets, and updated a Docker image for the move to Bun. Stored clinic data backups and CDN images in AWS S3.\n\nOn the calendar team, shipped a full-stack \"show deactivated staff\" toggle: a NestJS resolver and lazy GraphQL query for their past shifts and appointments.",
    stack: [
      "PagerDuty",
      "New Relic",
      "Kubernetes",
      "Rancher",
      "DigitalOcean",
      "Docker",
      "Terraform",
      "Jenkins",
      "Bitbucket Pipelines",
      "SOPS",
      "Hetzner",
      "AWS S3",
      "Linux",
      "NestJS",
      "GraphQL",
    ],
  },
  {
    id: "exp-pabau-junior",
    role: "Junior Software Engineer",
    company: "Pabau Clinic Software",
    period: { start: "2025-05", end: "2025-08" },
    description:
      "Given a ticket for a \"Confirmed\" icon on calendar appointment blocks, I traced the data from the icon back to the email-confirmation handler before shipping. That flow never set the status the spec relied on, so the icon would never have shown for patients confirming by email. Fixed it in two stages: a shared frontend helper with unit tests that reads either signal, then a backend change and a per-clinic backfill so the status is set consistently.\n\nBuilt the client invoices table with the UI/UX designer. The columns didn't fit the design, and the first proposal was to move some of them into a details modal. I proposed icons with tooltips instead (initial avatars, note and location icons, a truncated item list), which kept every field visible at a glance. Then built filters for the table.\n\nBuilt a reusable three-dot options menu shared by the invoices and payments tables and their edit modals, with LaunchDarkly flags deciding which options show; a shared time picker that shows the duration between start and end; and a NestJS controller that posts feature-usage events to Slack through the internal backend service. Also picked up bugs and features from other teams.",
    stack: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "NestJS",
      "Hasura",
      "Prisma",
      "PostgreSQL",
      "LaunchDarkly",
      "Jira",
      "Confluence",
    ],
  },
  {
    id: "exp-pabau-intern",
    role: "Software Engineer (Internship)",
    company: "Pabau Clinic Software",
    period: { start: "2025-02", end: "2025-04" },
    description:
      "Joined as an intern and shipped frontend work to production. Studied the platform architecture, started on the backend and database, and moved into a full-time role at the end of the term.",
    stack: [
      "Next.js",
      "TypeScript",
      "CSS",
      "GraphQL",
      "Hasura",
      "Ant Design",
      "Zustand",
      "Day.js",
      "Formik",
      "Git",
      "Linux",
    ],
  },
  {
    id: "exp-hackathon",
    role: "Hackathon Winner",
    company: "Brainster, Larger World",
    period: { start: "2024-08", end: "2024-08" },
    isAchievement: true,
    description:
      "Built the full frontend of a web platform in 48 hours with a team of four. Competed against seven other teams, won. The solution was picked up for continued development after the event.",
    stack: ["React", "Sass", "Figma", "Git"],
  },
];
