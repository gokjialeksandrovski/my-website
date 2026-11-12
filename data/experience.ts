import type { Skill } from './skills'
import type { Period } from '../lib/formatPeriod'

export interface ExperienceEntry {
  readonly id: string
  readonly role: string
  readonly company: string
  readonly period: Period
  readonly isFreelance?: boolean
  readonly stack: readonly Skill[]
}

export const experience = [
  {
    id: "exp-avenga",
    role: "Associate IT Operations and Support Engineer",
    company: "Avenga",
    period: { start: "2026-10", end: "present" },
    stack: ["Jira", "Confluence"],
  },
  {
    id: "exp-freelance",
    role: "Freelance Full-Stack Engineer",
    company: "WestPrint, Medical Faculty, Korrmotive",
    isFreelance: true,
    period: { start: "2024-10", end: "present" },
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
    stack: ["React", "Sass", "Figma", "Git"],
  },
] as const satisfies readonly ExperienceEntry[]

export type ExperienceId = (typeof experience)[number]['id']
