'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { Glyph } from '@/components/Glyph'
import { HeroHeading } from '@/components/HeroHeading'
import { ANIMATION_DELAYS } from '@/lib/animationDelays'

export const NotFoundContent = () => {
  const { dict } = useLanguage()
  const { notFound } = dict

  return (
    <>
      <p
        className="mb-6 md:mb-8 flex items-baseline gap-2 type-label font-semibold text-signal-text animate-in"
        style={{ animationDelay: ANIMATION_DELAYS.status }}
      >
        <span className="shrink-0 size-1.5 -translate-y-px rounded-full bg-signal" aria-hidden="true" />
        404
      </p>

      <HeroHeading first={notFound.titleFirst} last={notFound.titleLast} />

      <div
        className="mt-5 grid gap-x-8 gap-y-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:grid-cols-[10rem_minmax(0,1fr)_minmax(0,1.4fr)] animate-in"
        style={{ animationDelay: ANIMATION_DELAYS.meta }}
      >
        <p className="lg:col-span-2 font-display text-xl md:text-2xl tracking-[0.04em] uppercase text-ink-secondary font-medium leading-snug">
          {notFound.headline}
        </p>
        <div className="max-w-130">
          <p className="type-body">{notFound.body}</p>
          <Link
            href="/"
            className="group mt-5 relative before:absolute before:-inset-x-1 before:-inset-y-2 inline-flex items-center gap-2.5 type-label text-ink-secondary hover:text-signal-text transition-colors duration-200"
          >
            <Glyph
              name="arrowLeft"
              className="size-2.5 text-signal-text transition-transform duration-200 ease-out-expo group-hover:-translate-x-0.5 motion-reduce:transition-none"
            />
            <span className="underline decoration-1 underline-offset-4">{notFound.back}</span>
          </Link>
        </div>
      </div>
    </>
  )
}
