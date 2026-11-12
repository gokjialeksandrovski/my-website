'use client'

import { experience, type ExperienceEntry } from '@/data/experience'
import type { ExperienceTranslation } from '@/data/translations/types'
import { StackTags } from '@/components/StackTags'
import { PageSection } from '@/components/PageSection'
import { LedgerList, LedgerRow } from '@/components/LedgerRow'
import { Prose, splitParagraphs } from '@/components/Prose'
import { useLanguage } from '@/context/LanguageContext'
import { formatPeriod, isOngoing } from '@/lib/formatPeriod'

const ExperienceDescription = ({ description, sectionLabels }: ExperienceTranslation) => {
  if (!sectionLabels) return <Prose text={description} />
  return (
    <div className="space-y-6">
      {splitParagraphs(description).map((paragraph, index) => (
        <div key={sectionLabels[index] ?? paragraph}>
          <h4 className="type-caption text-ink-muted mb-1.5">{sectionLabels[index]}</h4>
          <p className="type-body">{paragraph}</p>
        </div>
      ))}
    </div>
  )
}

interface ExperienceRowProps {
  entry: ExperienceEntry
  translation: ExperienceTranslation
  periodLabel: string
  currentPositionLabel: string
}

const ExperienceRow = ({ entry, translation, periodLabel, currentPositionLabel }: ExperienceRowProps) => (
  <LedgerRow
    aside={
      <p className="flex items-center gap-2 type-label tracking-widest tabular-nums text-ink-muted">
        {periodLabel}
        {isOngoing(entry.period) && !entry.isFreelance && (
          <span role="img" className="shrink-0 size-1.25 rounded-full bg-signal" aria-label={currentPositionLabel} />
        )}
      </p>
    }
    head={
      <>
        <h3 className="type-title text-ink">{translation.role}</h3>
        <p className="mt-1.5 type-label tracking-[0.12em] text-ink-secondary">{entry.company}</p>
      </>
    }
  >
    <div className="max-w-130">
      <ExperienceDescription {...translation} />
    </div>
    <StackTags stack={entry.stack} />
  </LedgerRow>
)

export const Experience = () => {
  const { dict } = useLanguage()

  return (
    <PageSection id="experience" label={dict.experience.sectionLabel}>
      {/* Each row names its own period, role and overview, so the column heads are a visual aid only. */}
      <div aria-hidden="true" className="hidden lg:grid ledger pb-4 mb-8 border-b border-rule-strong type-caption text-ink-muted">
        <span>{dict.experience.colPeriod}</span>
        <span>{dict.experience.colRole}</span>
        <span>{dict.experience.colOverview}</span>
      </div>

      <LedgerList>
        {experience.map((entry) => (
          <ExperienceRow
            key={entry.id}
            entry={entry}
            translation={dict.experienceEntries[entry.id]}
            periodLabel={formatPeriod(entry.period, dict.period)}
            currentPositionLabel={dict.experience.currentPosition}
          />
        ))}
      </LedgerList>
    </PageSection>
  )
}
