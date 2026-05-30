'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { en } from '@/data/translations/en'
import { mk } from '@/data/translations/mk'
import type { Dictionary } from '@/data/translations/types'
import { COOKIE_KEYS, writeCookie } from '@/lib/cookies'

type Lang = 'en' | 'mk'

const DICTIONARIES: Record<Lang, Dictionary> = { en, mk }

interface LanguageContextValue {
  lang: Lang
  dict: Dictionary
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

interface LanguageProviderProps {
  initialLang: Lang
  children: React.ReactNode
}

export const LanguageProvider = ({ initialLang, children }: LanguageProviderProps) => {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (next: Lang) => {
    writeCookie(COOKIE_KEYS.lang, next)
    setLangState(next)
  }

  return (
    <LanguageContext.Provider value={{ lang, dict: DICTIONARIES[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
