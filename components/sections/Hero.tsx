'use client'

import { useLanguage } from '@/context/LanguageContext'
import { Collapsible } from '@/components/Collapsible'
import { HeroShell } from '@/components/HeroShell'
import { ANIMATION_DELAYS } from '@/lib/animationDelays'

const PHILOSOPHY_ID = 'hero-philosophy'

export const Hero = () => {
  const { dict, lang } = useLanguage()
  const headingLeading = lang === 'mk' ? 'leading-[1.036]' : 'leading-[1.0] md:leading-[0.88]'

  return (
    <HeroShell>
      <div className="mb-8 animate-in" style={{ animationDelay: ANIMATION_DELAYS.status }}>
        <div className="inline-flex items-center gap-4 font-display text-[11px] tracking-[0.14em] uppercase">
          <span className="inline-flex items-center gap-2 font-semibold text-(--accent)">
            <span
              className="w-1.5 h-1.5 rounded-full bg-(--accent)"
              aria-hidden="true"
            />
            {dict.profile.statusLabel}
          </span>
          <span className="text-(--rule-strong)" aria-hidden="true">/</span>
          <span className="font-medium text-(--text-secondary)">
            {dict.hero.developerSince} {dict.hero.since}
          </span>
        </div>
      </div>

      <h1
        className={`font-display font-bold uppercase text-(--text) tracking-[-0.02em] animate-in pb-4 ${headingLeading}`}
        style={{
          fontSize: 'clamp(2rem, 11vw, 10rem)',
          animationDelay: ANIMATION_DELAYS.heading,
        }}
      >
        <span className="block" style={{ marginLeft: '-0.025em' }}>
          {dict.profile.nameFirst}
        </span>
        <span className="block">{dict.profile.nameLast}</span>
      </h1>

      <div
        className="mt-6 border-t border-(--rule-strong) animate-in"
        style={{ animationDelay: ANIMATION_DELAYS.divider }}
      />

      <div
        className="mt-5 grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-4 md:gap-12 animate-in"
        style={{ animationDelay: ANIMATION_DELAYS.meta }}
      >
        <div>
          <p className="font-display text-xl md:text-2xl tracking-[0.04em] uppercase text-(--text-secondary) font-medium leading-snug">
            {dict.profile.title}
          </p>
        </div>
        <div className="max-w-125">
          <p className="text-sm md:text-base text-(--text-secondary) leading-normal md:leading-relaxed">
            {dict.profile.bio}
          </p>

          <div className="mt-5">
            <p className="text-sm md:text-base text-(--text-secondary) leading-normal md:leading-relaxed">
              {dict.hero.philosophyLead}
            </p>
              <Collapsible id={PHILOSOPHY_ID} label={dict.hero.philosophyToggle} buttonMarginClass="mt-2">
              <p className="mt-3 text-base text-(--text-secondary) leading-relaxed">
                {dict.profile.about}
              </p>
            </Collapsible>
          </div>
        </div>
      </div>
    </HeroShell>
  )
}
