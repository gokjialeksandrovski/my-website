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
      "Avenga is an international IT services company. I'm on the IT operations and support team for a telecom client, monitoring their systems and responding to alerts.",
    stack: ["Jira", "Confluence"],
  },
  {
    id: "exp-pabau-sre",
    role: "Junior Site Reliability / Software Engineer",
    company: "Pabau Clinic Software",
    period: { start: "2025-09", end: "2026-06" },
    description:
      "Took bi-weekly SRE on-call shifts via PagerDuty and DevOps tasks covering the whole infrastructure. Used New Relic to diagnose slow queries and CPU/memory spikes, and flagged a compromised SendGrid account from a traced request spike.\n\nMonitored and recreated Kubernetes pods in Rancher on DigitalOcean for prod, staging and QA, and rotated secrets and JWTs monthly from Jenkins. Restarted Docker containers, truncated container and server logs, and updated an image for the move to Bun. Provisioned jobs, alerts and servers with Terraform, brought up two servers in TypeScript Pulumi for Rancher 2, and registered self-hosted Bitbucket runners on Hetzner with SOPS-encrypted secrets. Stored clinic data backups and CDN images in AWS S3.\n\nOn the calendar team, shipped a full-stack \"show deactivated staff\" toggle: a NestJS resolver and lazy GraphQL query for their past shifts and appointments.",
    stack: [
      "PagerDuty",
      "New Relic",
      "Kubernetes",
      "Rancher",
      "DigitalOcean",
      "Docker",
      "Terraform",
      "Pulumi",
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
      "Full-stack development on the calendar team. Picked up bugs and features from other teams too.",
    stack: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "NestJS",
      "Hasura",
      "Prisma",
      "PostgreSQL",
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
