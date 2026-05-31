export interface ExperienceTranslation {
  readonly role: string
  readonly description: string
}

export interface ProjectTranslation {
  readonly summary: string
  readonly technicalSections: Readonly<Record<string, string>>
}

export interface ContactEntryTranslation {
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
    readonly contact: string
    readonly education: string
  }
  readonly hero: {
    readonly developerSince: string
    readonly since: string
    readonly philosophyToggle: string
    readonly philosophyLead: string
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
    readonly github: string
  }
  readonly contact: {
    readonly sectionLabel: string
    readonly availability: string
    readonly copyFailed: string
    readonly copyLink: string
  }
  readonly education: {
    readonly sectionLabel: string
  }
  readonly profile: {
    readonly nameFirst: string
    readonly nameLast: string
    readonly statusLabel: string
    readonly title: string
    readonly bio: string
    readonly about: string
  }
  readonly experienceEntries: Readonly<Record<string, ExperienceTranslation>>
  readonly projectEntries: Readonly<Record<string, ProjectTranslation>>
  readonly contactEntries: Readonly<Record<string, ContactEntryTranslation>>
  readonly educationEntries: Readonly<Record<string, EducationEntryTranslation>>
}
