import type { Period } from '../lib/formatPeriod'

export interface EducationEntry {
  readonly id: string
  readonly institution: string
  readonly program: string
  readonly period: Period
  readonly note?: string
}

export const education: readonly EducationEntry[] = [
  {
    id: "edu-01",
    institution: "Brainster",
    program: "Front-End Development Academy",
    period: { start: "2023-09", end: "2024-10" },
    note: "13 months of JavaScript, TypeScript, React, CSS (a lot of Tailwind), Firebase, semantic HTML, design fundamentals, and Git.",
  },
  {
    id: "edu-02",
    institution: "Public Secondary School \"Georgi Dimitrov\"",
    program: "Natural Sciences and Mathematics",
    period: { start: "2018-09", end: "2022-06" },
  },
]
