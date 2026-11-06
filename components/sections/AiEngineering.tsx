'use client'

import { SectionLabel } from '@/components/SectionLabel'
import { PageSection } from '@/components/PageSection'
import { useLanguage } from '@/context/LanguageContext'

export const AiEngineering = () => {
  const { dict } = useLanguage()

  return (
    <PageSection id="ai-engineering">
      <SectionLabel label={dict.aiEngineering.sectionLabel} />
      <dl className="divide-y divide-(--rule)">
        {dict.aiEngineering.practices.map(({ label, text }) => (
          <div key={label} className="py-8 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-y-3 gap-x-8">
            <dt className="font-display text-[11px] tracking-widest uppercase text-(--text-muted) leading-snug pt-1">
              {label}
            </dt>
            <dd className="text-base text-(--text-secondary) leading-relaxed max-w-130">
              {text}
            </dd>
          </div>
        ))}
      </dl>
    </PageSection>
  )
}
