'use client'

import { useEffect, useRef, useState, type RefObject } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'
import { useLanguage } from '@/context/LanguageContext'
import { handleHashClick, handleTopClick } from '@/lib/scrollToHash'
import type { Dictionary } from '@/data/translations/types'

const SECTION_IDS = ['experience', 'projects', 'education', 'ai-engineering', 'contact'] as const
type SectionId = (typeof SECTION_IDS)[number]

// A section counts as active once its top passes just under the fixed header (about 80px tall on mobile).
const ACTIVE_SECTION_OFFSET_PX = 96
const AT_BOTTOM_TOLERANCE_PX = 40
const PROGRESS_INITIAL_STYLE = { transform: 'scaleX(0)' } as const

type NavLabelKey = Exclude<keyof Dictionary['nav'], 'skipToContent' | 'primary'>

type NavLinkConfig = {
  labelKey: NavLabelKey
  id: SectionId
}

const NAV_LINK_CONFIGS: readonly NavLinkConfig[] = [
  { labelKey: 'experience', id: 'experience' },
  { labelKey: 'work', id: 'projects' },
  { labelKey: 'education', id: 'education' },
  { labelKey: 'ai', id: 'ai-engineering' },
  { labelKey: 'contact', id: 'contact' },
] as const

const findActiveSection = (): SectionId | null => {
  const passed = SECTION_IDS.filter((id) => {
    const section = document.getElementById(id)
    return section !== null && section.getBoundingClientRect().top <= ACTIVE_SECTION_OFFSET_PX
  })
  const current = passed.at(-1) ?? null
  const { scrollHeight } = document.documentElement
  const atBottom = window.scrollY + window.innerHeight >= scrollHeight - AT_BOTTOM_TOLERANCE_PX
  // Only on a page that has the sections: the short 404 is "at the bottom" on load.
  return atBottom && current ? SECTION_IDS[SECTION_IDS.length - 1] : current
}

const readScrollProgress = (): number => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  return scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0
}

// One listener, one layout read per frame. The progress bar is written straight to the DOM,
// so scrolling re-renders the header only when the active section changes.
const useScrollSpy = (progressBarRef: RefObject<HTMLDivElement | null>): SectionId | null => {
  const [active, setActive] = useState<SectionId | null>(null)

  useEffect(() => {
    let frame = 0
    const measure = () => {
      frame = 0
      if (progressBarRef.current) progressBarRef.current.style.transform = `scaleX(${readScrollProgress()})`
      setActive(findActiveSection())
    }
    const schedule = () => {
      if (frame === 0) frame = requestAnimationFrame(measure)
    }

    // The page grows when a panel opens or the language changes; that moves progress without a scroll event.
    const resizeObserver = new ResizeObserver(schedule)
    resizeObserver.observe(document.body)
    window.addEventListener('scroll', schedule, { passive: true })

    return () => {
      window.removeEventListener('scroll', schedule)
      resizeObserver.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [progressBarRef])

  return active
}

interface NavLinksProps {
  activeSection: SectionId | null
  labels: Dictionary['nav']
  hashBase: string
  className: string
}

const NavLinks = ({ activeSection, labels, hashBase, className }: NavLinksProps) =>
  NAV_LINK_CONFIGS.map(({ id, labelKey }) => {
    const isActive = activeSection === id
    return (
      <Link
        key={id}
        href={`${hashBase}#${id}`}
        onClick={(event) => handleHashClick(event, `#${id}`)}
        aria-current={isActive ? 'location' : undefined}
        className={`relative before:absolute before:-inset-x-2 before:-inset-y-2.5 type-label transition-colors duration-200 ${isActive ? 'text-signal-text' : 'text-ink-muted hover:text-ink'} ${className}`}
      >
        {labels[labelKey]}
      </Link>
    )
  })

export const Nav = () => {
  const progressBarRef = useRef<HTMLDivElement>(null)
  const activeSection = useScrollSpy(progressBarRef)
  const { dict } = useLanguage()
  const isHome = usePathname() === '/'
  // Off the home page the sections don't exist, so hash links must route back to "/".
  const hashBase = isHome ? '' : '/'

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper border-b border-rule">
      <Link
        href="#main-content"
        className="absolute top-full left-4 z-50 opacity-0 pointer-events-none focus:opacity-100 focus:pointer-events-auto type-label tracking-[0.12em] bg-paper-shade border border-rule px-3 py-2 text-signal-text transition-opacity duration-150"
      >
        {dict.nav.skipToContent}
      </Link>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="h-10 lg:h-11 flex items-center justify-between">
          <Link
            href="/"
            onClick={isHome ? handleTopClick : undefined}
            className="mr-4 relative before:absolute before:-inset-x-2 before:-inset-y-2.5 type-label tracking-[0.12em] text-ink-muted hover:text-ink transition-colors duration-200 whitespace-nowrap"
          >
            {/* The Cyrillic name and toggles don't fit one row on the narrowest phones; the hero carries the full name. */}
            {dict.profile.nameFirst}
            <span className="hidden min-[375px]:inline">&nbsp;{dict.profile.nameLast}</span>
          </Link>

          <nav aria-label={dict.nav.primary} className="hidden lg:flex items-center gap-8">
            <NavLinks activeSection={activeSection} labels={dict.nav} hashBase={hashBase} className="tracking-[0.12em]" />
            <span aria-hidden="true" className="w-px h-3 bg-rule-strong shrink-0" />
            <div className="flex items-center gap-5">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>

          <div className="flex shrink-0 items-center gap-4 sm:gap-5 lg:hidden">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        <nav
          aria-label={dict.nav.primary}
          className="lg:hidden flex items-center justify-between sm:justify-start sm:gap-8 h-9 border-t border-rule"
        >
          <NavLinks activeSection={activeSection} labels={dict.nav} hashBase={hashBase} className="tracking-[0.08em] sm:tracking-[0.12em]" />
        </nav>
      </div>

      <div
        ref={progressBarRef}
        className="absolute inset-x-0 -bottom-px h-px bg-signal origin-left pointer-events-none"
        style={PROGRESS_INITIAL_STYLE}
        aria-hidden="true"
      />
    </header>
  )
}
