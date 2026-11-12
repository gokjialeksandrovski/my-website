'use client'

import { createContext, useContext, useEffect, useState, useSyncExternalStore } from 'react'
import { COOKIE_KEYS, writeCookie } from '@/lib/cookies'
import { withViewTransition } from '@/lib/viewTransition'

type Theme = 'light' | 'dark'
const MQ = '(prefers-color-scheme: dark)'

const subscribeSystemTheme = (callback: () => void) => {
  const mq = window.matchMedia(MQ)
  mq.addEventListener('change', callback)
  return () => mq.removeEventListener('change', callback)
}

const useSystemTheme = (): Theme =>
  useSyncExternalStore(
    subscribeSystemTheme,
    () => (window.matchMedia(MQ).matches ? 'dark' : 'light'),
    () => 'light',
  )

interface ThemeContextValue {
  resolvedTheme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

interface ThemeProviderProps {
  initialTheme?: Theme
  children: React.ReactNode
}

export const ThemeProvider = ({ initialTheme, children }: ThemeProviderProps) => {
  const [override, setOverride] = useState<Theme | undefined>(initialTheme)
  const systemTheme = useSystemTheme()
  const resolvedTheme: Theme = override ?? systemTheme

  // Read the media query here rather than trusting resolvedTheme: during hydration
  // useSyncExternalStore reports the server's "light", which would strip the class
  // the pre-paint script just set.
  useEffect(() => {
    const isDark = override ? override === 'dark' : window.matchMedia(MQ).matches
    document.documentElement.classList.toggle('dark', isDark)
  }, [override, systemTheme])

  const setTheme = (next: Theme) => {
    writeCookie(COOKIE_KEYS.theme, next)
    // The class flips inside the transition callback: waiting for the effect below would snapshot the old theme twice.
    withViewTransition(() => {
      document.documentElement.classList.toggle('dark', next === 'dark')
      setOverride(next)
    })
  }

  return (
    <ThemeContext.Provider value={{ resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
