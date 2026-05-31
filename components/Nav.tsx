'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'
import { useLanguage } from '@/context/LanguageContext'
import { handleHashClick } from '@/lib/scrollToHash'
import type { Dictionary } from '@/data/translations/types'

const SECTION_IDS = ['experience', 'projects', 'education', 'contact'] as const
type SectionId = (typeof SECTION_IDS)[number]

type NavLabelKey = Exclude<keyof Dictionary['nav'], 'skipToContent'>

type NavLinkConfig = {
  href: string
  labelKey: NavLabelKey
  id: SectionId
}

const NAV_LINK_CONFIGS: readonly NavLinkConfig[] = [
  { href: '#experience', labelKey: 'experience', id: 'experience' },
  { href: '#projects', labelKey: 'work', id: 'projects' },
  { href: '#education', labelKey: 'education', id: 'education' },
  { href: '#contact', labelKey: 'contact', id: 'contact' },
] as const

const useActiveSection = (): SectionId | null => {
  const [active, setActive] = useState<SectionId | null>(null)

  useEffect(() => {
    const compute = () => {
      const threshold = window.scrollY + 88
      let result: SectionId | null = null
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top + window.scrollY
        if (top <= threshold) result = id
      }
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 40
      if (atBottom) result = SECTION_IDS.at(-1) ?? result
      setActive(result)
    }

    window.addEventListener('scroll', compute, { passive: true })
    compute()

    return () => window.removeEventListener('scroll', compute)
  }, [])

  return active
}

const useScrollProgress = (): number => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return progress
}

interface NavLinkItemProps {
  config: NavLinkConfig
  activeSection: SectionId | null
  label: string
  className?: string
}

const NavLinkItem = ({ config, activeSection, label, className = '' }: NavLinkItemProps) => {
  const colorClass =
    activeSection === config.id
      ? 'text-(--accent)'
      : 'text-(--text-muted) hover:text-(--text)'

  return (
    <Link
      href={config.href}
      onClick={(event) => handleHashClick(event, config.href)}
      className={`font-display tracking-[0.12em] uppercase transition-colors duration-200 ${colorClass} ${className}`}
    >
      {label}
    </Link>
  )
}

export const Nav = () => {
  const activeSection = useActiveSection()
  const scrollProgress = useScrollProgress()
  const { dict } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-(--bg) border-b border-(--rule)">
      <Link
        href="#main-content"
        className="absolute top-full left-4 z-50 opacity-0 pointer-events-none focus:opacity-100 focus:pointer-events-auto font-display text-[11px] tracking-[0.12em] uppercase bg-(--bg-subtle) border border-(--rule) px-3 py-2 text-(--accent) transition-opacity duration-150"
      >
        {dict.nav.skipToContent}
      </Link>

      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="h-10 md:h-11 flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-[11px] tracking-[0.12em] uppercase text-(--text-muted) hover:text-(--text) transition-colors duration-200 whitespace-nowrap"
          >
            {dict.profile.nameFirst} {dict.profile.nameLast}
          </Link>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
            {NAV_LINK_CONFIGS.map((config) => (
              <NavLinkItem
                key={config.href}
                config={config}
                activeSection={activeSection}
                label={dict.nav[config.labelKey]}
                className="text-[11px]"
              />
            ))}
            <span aria-hidden="true" className="w-px h-3 bg-(--rule-strong) shrink-0" />
            <div className="flex items-center gap-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        <nav aria-label="Primary" className="md:hidden flex items-center gap-6 h-9 border-t border-(--rule)">
          {NAV_LINK_CONFIGS.map((config) => (
            <NavLinkItem
              key={config.href}
              config={config}
              activeSection={activeSection}
              label={dict.nav[config.labelKey]}
              className="text-[10px]"
            />
          ))}
        </nav>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-px bg-(--accent) origin-left pointer-events-none"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />
    </header>
  )
}
