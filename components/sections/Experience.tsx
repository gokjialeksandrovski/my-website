'use client'

import { experience, type ExperienceEntry } from '@/data/experience'
import { StackTag } from '@/components/StackTag'
import { SectionLabel } from '@/components/SectionLabel'
import { PageSection } from '@/components/PageSection'
import { useLanguage } from '@/context/LanguageContext'

interface ExperienceRowProps {
  entry: ExperienceEntry
  currentPositionLabel: string
}

const ExperienceRow = ({ entry, currentPositionLabel }: ExperienceRowProps) => (
  <div className="py-8 grid grid-cols-1 md:grid-cols-[160px_1fr_1.4fr] gap-y-3 gap-x-8">
    <div className="flex items-start gap-2 pt-0.5">
      <span className="font-display text-[11px] tracking-widest uppercase text-(--text-muted) leading-snug">
        {entry.period}
      </span>
      {entry.isCurrent && (
        <span
          className="mt-0.75 shrink-0 w-1.25 h-1.25 rounded-full bg-(--accent)"
          aria-label={currentPositionLabel}
        />
      )}
    </div>

    <div>
      <p className="font-display text-[13px] tracking-[0.04em] uppercase font-semibold text-(--text) leading-snug">
        {entry.role}
      </p>
      <p className="mt-1 font-display text-[10px] tracking-[0.12em] uppercase text-(--text-muted)">
        {entry.company}
      </p>
    </div>

    <div>
      <p className="text-base text-(--text-secondary) leading-relaxed">
        {entry.description}
      </p>
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
    return t ? { ...entry, role: t.role, description: t.description } : entry
  })

  return (
    <PageSection id="experience">
      <SectionLabel label={dict.experience.sectionLabel} />

      <div className="hidden md:grid grid-cols-[160px_1fr_1.4fr] gap-x-8 pb-4 border-b border-(--rule-strong)">
        <span className="font-display text-[9px] tracking-[0.18em] uppercase text-(--text-muted)">{dict.experience.colPeriod}</span>
        <span className="font-display text-[9px] tracking-[0.18em] uppercase text-(--text-muted)">{dict.experience.colRole}</span>
        <span className="font-display text-[9px] tracking-[0.18em] uppercase text-(--text-muted)">{dict.experience.colOverview}</span>
      </div>

      <div className="divide-y divide-(--rule)">
        {translatedEntries.map((entry) => (
          <ExperienceRow
            key={entry.id}
            entry={entry}
            currentPositionLabel={dict.experience.currentPosition}
          />
        ))}
      </div>
    </PageSection>
  )
}
