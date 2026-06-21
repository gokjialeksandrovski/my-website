import type { Skill } from './skills'

export interface ExperienceEntry {
  readonly id: string
  readonly role: string
  readonly company: string
  readonly period: string
  readonly isCurrent: boolean
  readonly isAchievement?: boolean
  readonly description: string
  readonly stack: readonly Skill[]
}

export const experience: readonly ExperienceEntry[] = [
  {
    id: "exp-01",
    role: "Junior Software Engineer",
    company: "Pabau Clinic Software",
    period: "May 2025 — Present",
    isCurrent: true,
    description:
      "Primarily on the calendar team, but also sometimes picked up bugs and features from other teams. Starting in September 2025, I was assigned additional responsibilities involving SRE rotations and DevOps tasks in addition to my full-stack development work.",
    stack: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "NestJS",
      "Hasura",
      "Prisma",
      "PostgreSQL",
      "New Relic",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Linux",
    ],
  },
  {
    id: "exp-02",
    role: "Software Engineer (Internship)",
    company: "Pabau Clinic Software",
    period: "Feb 2025 — May 2025",
    isCurrent: false,
    description:
      "Joined as an intern, worked on frontend features, and moved into a full-time role at the end of the term.",
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
    id: "exp-03",
    role: "Hackathon Winner",
    company: "Brainster · Larger World",
    period: "Aug 2024",
    isCurrent: false,
    isAchievement: true,
    description:
      "Built the full frontend of a web platform in 48 hours with a team of four. Competed against eight teams, won. The solution was picked up for continued development after the event.",
    stack: ["React", "Sass", "Figma", "Git"],
  },
];
