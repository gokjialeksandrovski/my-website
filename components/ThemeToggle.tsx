'use client'

import { useTheme } from '@/context/ThemeContext'

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="font-display text-[11px] tracking-[0.12em] uppercase cursor-pointer self-stretch flex items-center gap-1"
    >
      <span className={!isDark ? 'text-(--accent)' : 'text-(--text-muted) hover:text-(--text) transition-colors duration-200'}>
        Light
      </span>
      <span className="text-(--rule-strong)" aria-hidden="true">·</span>
      <span className={isDark ? 'text-(--accent)' : 'text-(--text-muted) hover:text-(--text) transition-colors duration-200'}>
        Dark
      </span>
    </button>
  )
}
