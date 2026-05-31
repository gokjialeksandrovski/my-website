'use client'

import { education, type EducationEntry } from '@/data/education'
import { SectionLabel } from '@/components/SectionLabel'
import { PageSection } from '@/components/PageSection'
import { useLanguage } from '@/context/LanguageContext'

const EducationRow = ({ entry }: { entry: EducationEntry }) => (
  <div className="py-8 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-y-3 gap-x-8">
    <span className="font-display text-[11px] tracking-widest uppercase text-(--text-muted) leading-snug pt-0.5">
      {entry.period}
    </span>
    <div>
      <p className="font-display text-[13px] tracking-[0.04em] uppercase font-semibold text-(--text) leading-snug">
        {entry.program}
      </p>
      <p className="mt-1 font-display text-[10px] tracking-[0.12em] uppercase text-(--text-muted)">
        {entry.institution}
      </p>
      {entry.note && (
        <p className="mt-2 text-base text-(--text-secondary) leading-relaxed">
          {entry.note}
        </p>
      )}
    </div>
  </div>
)

export const Education = () => {
  const { dict } = useLanguage()

  const translatedEntries = education.map((entry) => {
    const t = dict.educationEntries[entry.id]
    return t ? { ...entry, note: t.note } : entry
  })

  return (
    <PageSection id="education" compact>
      <SectionLabel label={dict.education.sectionLabel} />
      <div className="divide-y divide-(--rule)">
        {translatedEntries.map((entry) => (
          <EducationRow key={entry.id} entry={entry} />
        ))}
      </div>
    </PageSection>
  )
}
