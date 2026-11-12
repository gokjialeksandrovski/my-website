'use client'

import { PageSection } from '@/components/PageSection'
import { useLanguage } from '@/context/LanguageContext'

export const AiEngineering = () => {
  const { dict } = useLanguage()

  return (
    <PageSection id="ai-engineering" label={dict.aiEngineering.sectionLabel}>
      <div className="grid ledger gap-y-5 md:items-baseline">
        <h3 className="type-title text-ink md:col-start-2">{dict.aiEngineering.tool}</h3>
        <p className="type-body max-w-130 md:col-start-2 lg:col-start-3">{dict.aiEngineering.text}</p>
      </div>
    </PageSection>
  )
}
