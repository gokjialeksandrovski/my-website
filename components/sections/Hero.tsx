'use client'

import { useLanguage } from '@/context/LanguageContext'
import { Collapsible } from '@/components/Collapsible'
import { HeroShell } from '@/components/HeroShell'
import { HeroHeading } from '@/components/HeroHeading'
import { Prose } from '@/components/Prose'
import { ANIMATION_DELAYS } from '@/lib/animationDelays'

const PHILOSOPHY_ID = 'hero-philosophy'
const TITLE_SEPARATOR = ' · '

// The title may only break at its separator: "Full-Stack" split at the hyphen reads as two words.
const TitleLine = ({ title }: { title: string }) => {
  const parts = title.split(TITLE_SEPARATOR)
  return (
    <p className="font-display text-xl md:text-2xl tracking-[0.04em] uppercase text-ink-secondary font-medium leading-snug">
      {parts.map((part, index) => (
        <span key={part}>
          <span className="whitespace-nowrap">
            {part}
            {index < parts.length - 1 && ' ·'}
          </span>{' '}
        </span>
      ))}
    </p>
  )
}

export const Hero = () => {
  const { dict, lang } = useLanguage()
  const { profile } = dict

  return (
    <HeroShell>
      <p
        className="mb-6 md:mb-8 flex items-baseline gap-2 type-label font-semibold text-signal-text animate-in"
        style={{ animationDelay: ANIMATION_DELAYS.status }}
      >
        <span className="shrink-0 size-1.5 -translate-y-px rounded-full bg-signal" aria-hidden="true" />
        {profile.statusLabel}
      </p>

      <HeroHeading first={profile.nameFirst} last={profile.nameLast} wide={lang === 'mk'} />

      <div
        className="mt-5 grid gap-x-8 gap-y-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:grid-cols-[10rem_minmax(0,1fr)_minmax(0,1.4fr)] animate-in"
        style={{ animationDelay: ANIMATION_DELAYS.meta }}
      >
        <div className="lg:col-span-2">
          <TitleLine title={profile.title} />
        </div>
        <div className="max-w-130">
          <p className="text-lg md:text-xl leading-snug text-ink">{profile.lead}</p>
          <p className="mt-4 type-body">{profile.bio}</p>

          <Collapsible id={PHILOSOPHY_ID} label={dict.hero.philosophyToggle}>
            <div className="pt-4">
              <Prose text={profile.about} />
            </div>
          </Collapsible>
        </div>
      </div>
    </HeroShell>
  )
}
