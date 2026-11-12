import type { Period } from '../lib/formatPeriod'

export interface EducationEntry {
  readonly id: string
  readonly institution: string
  readonly program: string
  readonly period: Period
}

export const education = [
  {
    id: "edu-01",
    institution: "Brainster",
    program: "Front-End Development Academy",
    period: { start: "2023-09", end: "2024-10" },
  },
] as const satisfies readonly EducationEntry[]

export type EducationId = (typeof education)[number]['id']
