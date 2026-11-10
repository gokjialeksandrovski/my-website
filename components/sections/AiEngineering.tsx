'use client'

import { SectionLabel } from '@/components/SectionLabel'
import { PageSection } from '@/components/PageSection'
import { useLanguage } from '@/context/LanguageContext'

export const AiEngineering = () => {
  const { dict } = useLanguage()

  return (
    <PageSection id="ai-engineering">
      <SectionLabel label={dict.aiEngineering.sectionLabel} />
      <p className="text-base text-(--text-secondary) leading-relaxed max-w-130">
        {dict.aiEngineering.text}
      </p>
    </PageSection>
  )
}
