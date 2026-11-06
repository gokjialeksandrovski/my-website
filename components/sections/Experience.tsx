'use client'

import { experience, type ExperienceEntry } from '@/data/experience'
import { StackTag } from '@/components/StackTag'
import { SectionLabel } from '@/components/SectionLabel'
import { PageSection } from '@/components/PageSection'
import { useLanguage } from '@/context/LanguageContext'
import { formatPeriod, isOngoing } from '@/lib/formatPeriod'

type ExperienceView = ExperienceEntry & { readonly sectionLabels?: readonly string[] }

const PARAGRAPH_SEPARATOR = '\n\n'
const BODY_CLASS = 'text-base text-(--text-secondary) leading-relaxed max-w-130'

const ExperienceDescription = ({ entry }: { entry: ExperienceView }) => {
  const { sectionLabels, description } = entry
  if (!sectionLabels) {
    return <p className={`${BODY_CLASS} whitespace-pre-line`}>{description}</p>
  }
  const paragraphs = description.split(PARAGRAPH_SEPARATOR)
  return (
    <div className="space-y-5">
      {paragraphs.map((paragraph, index) => (
        <div key={sectionLabels[index] ?? paragraph}>
          <p className="font-display text-[10px] tracking-[0.18em] uppercase text-(--text-muted) mb-1.5">
            {sectionLabels[index]}
          </p>
          <p className={BODY_CLASS}>{paragraph}</p>
        </div>
      ))}
    </div>
  )
}

interface ExperienceRowProps {
  entry: ExperienceView
  periodLabel: string
  currentPositionLabel: string
}

const ExperienceRow = ({ entry, periodLabel, currentPositionLabel }: ExperienceRowProps) => (
  <div className="py-8 last:pb-0 grid grid-cols-1 md:grid-cols-[160px_1fr_1.4fr] gap-y-3 gap-x-8">
    <div className="flex items-center gap-2 self-start pt-1">
      <span className="font-display text-[11px] tracking-widest uppercase text-(--text-muted) leading-snug">
        {periodLabel}
      </span>
      {isOngoing(entry.period) && (
        <span
          role="img"
          className="shrink-0 w-1.25 h-1.25 rounded-full bg-(--accent)"
          aria-label={currentPositionLabel}
        />
      )}
    </div>

    <div className="pt-1">
      <h3 className="font-display text-[13px] tracking-[0.04em] uppercase font-semibold text-(--text) leading-snug">
        {entry.role}
      </h3>
      <p className="mt-1 font-display text-[10px] tracking-[0.12em] uppercase text-(--text-muted)">
        {entry.company}
      </p>
    </div>

    <div>
      <ExperienceDescription entry={entry} />
      <div className="mt-3 flex flex-wrap gap-2">
        {entry.stack.map((tech) => (
          <StackTag key={tech} tech={tech} />
        ))}
      </div>
    </div>
  </div>
)

export const Experience = () => {
  const { dict } = useLanguage()

  const translatedEntries = experience.map((entry) => {
    const t = dict.experienceEntries[entry.id]
    return t ? { ...entry, role: t.role, description: t.description, sectionLabels: t.sectionLabels } : entry
  })

  return (
    <PageSection id="experience">
      <SectionLabel label={dict.experience.sectionLabel} />

      <div className="hidden md:grid grid-cols-[160px_1fr_1.4fr] gap-x-8 pb-4 border-b border-(--rule-strong)">
        <span className="font-display text-[10px] tracking-[0.18em] uppercase text-(--text-muted)">{dict.experience.colPeriod}</span>
        <span className="font-display text-[10px] tracking-[0.18em] uppercase text-(--text-muted)">{dict.experience.colRole}</span>
        <span className="font-display text-[10px] tracking-[0.18em] uppercase text-(--text-muted)">{dict.experience.colOverview}</span>
      </div>

      <div className="divide-y divide-(--rule)">
        {translatedEntries.map((entry) => (
          <ExperienceRow
            key={entry.id}
            entry={entry}
            periodLabel={formatPeriod(entry.period, dict.period)}
            currentPositionLabel={dict.experience.currentPosition}
          />
        ))}
      </div>
    </PageSection>
  )
}
