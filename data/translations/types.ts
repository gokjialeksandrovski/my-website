import type { PeriodLabels } from '../../lib/formatPeriod'

export interface ExperienceTranslation {
  readonly role: string
  readonly description: string
  /** One label per blank-line-separated paragraph of `description`; only for entries long enough to need scanning aids. */
  readonly sectionLabels?: readonly string[]
}

export interface ProjectTranslation {
  readonly name?: string
  readonly summary: string
  readonly technicalSections: Readonly<Record<string, string>>
}

export interface ContactEntryTranslation {
  readonly label: string
  readonly tooltip: string
}

export interface EducationEntryTranslation {
  readonly note: string
}

export interface AiPractice {
  readonly label: string
  readonly text: string
}

export interface Dictionary {
  readonly nav: {
    readonly skipToContent: string
    readonly experience: string
    readonly work: string
    readonly ai: string
    readonly contact: string
    readonly education: string
    readonly primary: string
  }
  readonly toggles: {
    readonly light: string
    readonly dark: string
    readonly switchToLight: string
    readonly switchToDark: string
    readonly switchLanguage: string
  }
  readonly a11y: {
    readonly newTab: string
  }
  readonly notFound: {
    readonly titleFirst: string
    readonly titleLast: string
    readonly headline: string
    readonly body: string
    readonly back: string
  }
  readonly hero: {
    readonly engineerSince: string
    readonly since: string
    readonly philosophyToggle: string
  }
  readonly experience: {
    readonly sectionLabel: string
    readonly colPeriod: string
    readonly colRole: string
    readonly colOverview: string
    readonly currentPosition: string
  }
  readonly projects: {
    readonly sectionLabel: string
    readonly technicalToggle: string
    readonly live: string
  }
  readonly contact: {
    readonly sectionLabel: string
    readonly availability: string
    readonly location: string
    readonly copyFailed: string
    readonly copied: string
    readonly copyLink: string
  }
  readonly education: {
    readonly sectionLabel: string
  }
  readonly aiEngineering: {
    readonly sectionLabel: string
    readonly practices: readonly AiPractice[]
  }
  readonly profile: {
    readonly nameFirst: string
    readonly nameLast: string
    readonly statusLabel: string
    readonly title: string
    readonly bio: string
    readonly about: string
  }
  readonly period: PeriodLabels
  readonly experienceEntries: Readonly<Record<string, ExperienceTranslation>>
  readonly projectEntries: Readonly<Record<string, ProjectTranslation>>
  readonly contactEntries: Readonly<Record<string, ContactEntryTranslation>>
  readonly educationEntries: Readonly<Record<string, EducationEntryTranslation>>
}
