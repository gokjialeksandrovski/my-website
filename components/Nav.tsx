'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'
import { useLanguage } from '@/context/LanguageContext'
import { handleHashClick } from '@/lib/scrollToHash'
import type { Dictionary } from '@/data/translations/types'

const SECTION_IDS = ['experience', 'projects', 'education', 'ai-engineering', 'contact'] as const
type SectionId = (typeof SECTION_IDS)[number]

// A section counts as active once its top passes just under the fixed header (about 80px tall on mobile).
const ACTIVE_SECTION_OFFSET_PX = 88
const AT_BOTTOM_TOLERANCE_PX = 40

type NavLabelKey = Exclude<keyof Dictionary['nav'], 'skipToContent' | 'primary'>

type NavLinkConfig = {
  href: string
  labelKey: NavLabelKey
  id: SectionId
}

const NAV_LINK_CONFIGS: readonly NavLinkConfig[] = [
  { href: '#experience', labelKey: 'experience', id: 'experience' },
  { href: '#projects', labelKey: 'work', id: 'projects' },
  { href: '#education', labelKey: 'education', id: 'education' },
  { href: '#ai-engineering', labelKey: 'ai', id: 'ai-engineering' },
  { href: '#contact', labelKey: 'contact', id: 'contact' },
] as const

const useActiveSection = (): SectionId | null => {
  const [active, setActive] = useState<SectionId | null>(null)

  useEffect(() => {
    const compute = () => {
      const threshold = window.scrollY + ACTIVE_SECTION_OFFSET_PX
      let result: SectionId | null = null
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top + window.scrollY
        if (top <= threshold) result = id
      }
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - AT_BOTTOM_TOLERANCE_PX
      // Only on a page that has the sections: the short 404 is "at the bottom" on load.
      if (atBottom && result) result = SECTION_IDS.at(-1) ?? result
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
  hashBase: string
  className?: string
}

const NavLinkItem = ({ config, activeSection, label, hashBase, className = '' }: NavLinkItemProps) => {
  const href = `${hashBase}${config.href}`
  const colorClass =
    activeSection === config.id
      ? 'text-(--accent-text)'
      : 'text-(--text-muted) hover:text-(--text)'

  return (
    <Link
      href={href}
      onClick={(event) => handleHashClick(event, href)}
      className={`self-stretch flex items-center px-2 -mx-2 font-display tracking-[0.12em] uppercase transition-colors duration-200 ${colorClass} ${className}`}
    >
      {label}
    </Link>
  )
}

export const Nav = () => {
  const activeSection = useActiveSection()
  const scrollProgress = useScrollProgress()
  const { dict } = useLanguage()
  // Off the home page the sections don't exist, so hash links must route back to "/".
  const hashBase = usePathname() === '/' ? '' : '/'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-(--bg) border-b border-(--rule)">
      <Link
        href="#main-content"
        className="absolute top-full left-4 z-50 opacity-0 pointer-events-none focus:opacity-100 focus:pointer-events-auto font-display text-[11px] tracking-[0.12em] uppercase bg-(--bg-subtle) border border-(--rule) px-3 py-2 text-(--accent-text) transition-opacity duration-150"
      >
        {dict.nav.skipToContent}
      </Link>

      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="h-10 md:h-11 flex items-center justify-between">
          <Link
            href="/"
            className="min-w-0 truncate mr-4 py-2.5 font-display text-[11px] tracking-[0.12em] uppercase text-(--text-muted) hover:text-(--text) transition-colors duration-200 whitespace-nowrap"
          >
            {/* The Cyrillic name and toggles don't fit one row on the narrowest phones; the hero carries the full name. */}
            {dict.profile.nameFirst}
            <span className="hidden min-[375px]:inline"> {dict.profile.nameLast}</span>
          </Link>

          <nav aria-label={dict.nav.primary} className="hidden md:flex self-stretch items-center gap-8">
            {NAV_LINK_CONFIGS.map((config) => (
              <NavLinkItem
                key={config.href}
                config={config}
                activeSection={activeSection}
                label={dict.nav[config.labelKey]}
                hashBase={hashBase}
                className="text-[11px]"
              />
            ))}
            <span aria-hidden="true" className="w-px h-3 bg-(--rule-strong) shrink-0" />
            <div className="flex self-stretch items-center gap-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>

          <div className="flex shrink-0 self-stretch items-center gap-4 md:hidden">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        <nav aria-label={dict.nav.primary} className="md:hidden flex items-center justify-between h-9 border-t border-(--rule)">
          {NAV_LINK_CONFIGS.map((config) => (
            <NavLinkItem
              key={config.href}
              config={config}
              activeSection={activeSection}
              label={dict.nav[config.labelKey]}
              hashBase={hashBase}
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
