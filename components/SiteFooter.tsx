'use client'

import { useLanguage } from '@/context/LanguageContext'

export const SiteFooter = () => {
  const { dict } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-rule">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 type-label text-ink-muted">
        <p>
          {dict.profile.nameFirst} {dict.profile.nameLast}
        </p>
        <p className="tabular-nums">
          {dict.contact.location} · {currentYear}
        </p>
      </div>
    </footer>
  )
}
