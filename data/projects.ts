import type { Skill } from './skills'

export interface Project {
  readonly id: string
  readonly name: string
  readonly stack: readonly Skill[]
  readonly url?: string
  readonly repoUrl?: string
  readonly year: string
  readonly personal?: true
}

export const projects = [
  {
    id: "proj-korrmotive",
    name: "Korrmotive",
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
    id: "proj-medicinski",
    name: "Medical Faculty – Department Platform",
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
  {
    id: "proj-levelspoon",
    name: "Levelspoon",
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
    repoUrl: "https://github.com/gokjialeksandrovski/levelspoon",
    year: "2026",
    personal: true,
  },
] as const satisfies readonly Project[]

export type ProjectId = (typeof projects)[number]['id']
