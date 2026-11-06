'use client'

import { useTheme } from '@/context/ThemeContext'
import { useLanguage } from '@/context/LanguageContext'

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const { dict } = useLanguage()
  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? dict.toggles.switchToLight : dict.toggles.switchToDark}
      className="font-display text-[11px] tracking-[0.12em] uppercase cursor-pointer self-stretch flex items-center gap-1"
    >
      <span className={!isDark ? 'text-(--text)' : 'text-(--text-muted) hover:text-(--text) transition-colors duration-200'}>
        {dict.toggles.light}
      </span>
      <span className="text-(--rule-strong)" aria-hidden="true">·</span>
      <span className={isDark ? 'text-(--text)' : 'text-(--text-muted) hover:text-(--text) transition-colors duration-200'}>
        {dict.toggles.dark}
      </span>
    </button>
  )
}
