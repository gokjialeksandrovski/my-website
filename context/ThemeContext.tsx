'use client'

import { createContext, useContext, useEffect, useState, useSyncExternalStore } from 'react'
import { COOKIE_KEYS, writeCookie } from '@/lib/cookies'

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

  useEffect(() => {
    document.documentElement.classList.toggle('dark', resolvedTheme === 'dark')
  }, [resolvedTheme])

  const setTheme = (next: Theme) => {
    setOverride(next)
    writeCookie(COOKIE_KEYS.theme, next)
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
