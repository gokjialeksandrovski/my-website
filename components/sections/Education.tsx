'use client'

import { education } from '@/data/education'
import { PageSection } from '@/components/PageSection'
import { LedgerList, LedgerRow } from '@/components/LedgerRow'
import { useLanguage } from '@/context/LanguageContext'
import { formatPeriod } from '@/lib/formatPeriod'

export const Education = () => {
  const { dict } = useLanguage()

  return (
    <PageSection id="education" label={dict.education.sectionLabel}>
      <LedgerList>
        {education.map((entry) => (
          <LedgerRow
            key={entry.id}
            aside={
              <p className="type-label tracking-widest tabular-nums text-ink-muted">
                {formatPeriod(entry.period, dict.period)}
              </p>
            }
            head={
              <>
                <h3 className="type-title text-ink">{entry.program}</h3>
                <p className="mt-1.5 type-label tracking-[0.12em] text-ink-secondary">{entry.institution}</p>
              </>
            }
          >
            <p className="type-body max-w-130">{dict.educationEntries[entry.id].note}</p>
          </LedgerRow>
        ))}
      </LedgerList>
    </PageSection>
  )
}
