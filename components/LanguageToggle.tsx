'use client'

import { useLanguage } from '@/context/LanguageContext'
import { SegmentToggle } from './SegmentToggle'

const SEGMENTS = ['EN', 'MK'] as const

export const LanguageToggle = () => {
  const { lang, dict, setLang } = useLanguage()

  return (
    <SegmentToggle
      segments={SEGMENTS}
      activeIndex={lang === 'en' ? 0 : 1}
      label={dict.toggles.switchLanguage}
      onToggle={() => setLang(lang === 'en' ? 'mk' : 'en')}
    />
  )
}
