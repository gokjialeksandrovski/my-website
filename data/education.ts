export interface EducationEntry {
  readonly id: string
  readonly institution: string
  readonly program: string
  readonly period: string
  readonly note?: string
}

export const education: readonly EducationEntry[] = [
  {
    id: "edu-01",
    institution: "Brainster",
    program: "Front-End Development Academy",
    period: "Sep 2023 — Oct 2024",
    note: "13 months of JavaScript, TypeScript, React, CSS (a lot of Tailwind), Firebase, semantic HTML, design fundamentals, and Git.",
  },
]
