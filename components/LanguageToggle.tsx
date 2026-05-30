'use client'

import { useLanguage } from '@/context/LanguageContext'

export const LanguageToggle = () => {
  const { lang, setLang } = useLanguage()
  const next = lang === 'en' ? 'mk' : 'en'

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={`Switch to ${next === 'mk' ? 'Macedonian' : 'English'}`}
      className="font-display text-[11px] tracking-[0.12em] uppercase cursor-pointer self-stretch flex items-center gap-1"
    >
      <span className={lang === 'en' ? 'text-(--accent)' : 'text-(--text-muted) hover:text-(--text) transition-colors duration-200'}>
        EN
      </span>
      <span className="text-(--rule-strong)" aria-hidden="true">·</span>
      <span className={lang === 'mk' ? 'text-(--accent)' : 'text-(--text-muted) hover:text-(--text) transition-colors duration-200'}>
        MK
      </span>
    </button>
  )
}
