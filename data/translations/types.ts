import type { PeriodLabels } from '../../lib/formatPeriod'
import type { ContactId } from '../contact'
import type { EducationId } from '../education'
import type { ExperienceId } from '../experience'
import type { ProjectId } from '../projects'

export interface ExperienceTranslation {
  readonly role: string
  readonly description: string
  /** One label per blank-line-separated paragraph of `description`; only for entries long enough to need scanning aids. */
  readonly sectionLabels?: readonly string[]
}

export interface TechnicalSection {
  readonly label: string
  readonly content: string
}

export interface ProjectTranslation {
  readonly name?: string
  readonly summary: string
  readonly technicalSections: readonly TechnicalSection[]
}

export interface ContactEntryTranslation {
  readonly label: string
  readonly tooltip: string
}

export interface EducationEntryTranslation {
  readonly note: string
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
    readonly personal: string
  }
  readonly contact: {
    readonly sectionLabel: string
    readonly availability: string
    readonly location: string
    readonly copyFailed: string
    readonly copied: string
    readonly copyAction: string
  }
  readonly education: {
    readonly sectionLabel: string
  }
  readonly aiEngineering: {
    readonly sectionLabel: string
    readonly tool: string
    readonly text: string
  }
  readonly profile: {
    readonly nameFirst: string
    readonly nameLast: string
    readonly statusLabel: string
    readonly title: string
    readonly lead: string
    readonly bio: string
    readonly about: string
  }
  readonly period: PeriodLabels
  readonly experienceEntries: Readonly<Record<ExperienceId, ExperienceTranslation>>
  readonly projectEntries: Readonly<Record<ProjectId, ProjectTranslation>>
  readonly contactEntries: Readonly<Record<ContactId, ContactEntryTranslation>>
  readonly educationEntries: Readonly<Record<EducationId, EducationEntryTranslation>>
}
