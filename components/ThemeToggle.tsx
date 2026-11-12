'use client'

import { useTheme } from '@/context/ThemeContext'
import { useLanguage } from '@/context/LanguageContext'
import { SegmentToggle } from './SegmentToggle'

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const { dict } = useLanguage()
  const isDark = resolvedTheme === 'dark'

  return (
    <SegmentToggle
      segments={[dict.toggles.light, dict.toggles.dark]}
      activeIndex={isDark ? 1 : 0}
      label={isDark ? dict.toggles.switchToLight : dict.toggles.switchToDark}
      onToggle={() => setTheme(isDark ? 'light' : 'dark')}
    />
  )
}
