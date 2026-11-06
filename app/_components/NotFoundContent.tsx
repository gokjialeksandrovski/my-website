'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { ANIMATION_DELAYS } from '@/lib/animationDelays'

export const NotFoundContent = () => {
  const { dict } = useLanguage()
  const { notFound } = dict

  return (
    <>
      <div className="mb-8 animate-in" style={{ animationDelay: ANIMATION_DELAYS.status }}>
        <span className="inline-flex items-center gap-2 font-display text-[11px] tracking-[0.14em] uppercase font-semibold text-(--accent-text)">
          <span className="w-1.5 h-1.5 rounded-full bg-(--accent)" aria-hidden="true" />
          404
        </span>
      </div>

      <h1
        className="font-display font-bold uppercase text-(--text) leading-[0.88] tracking-[-0.02em] animate-in"
        style={{
          fontSize: 'clamp(2rem, 11vw, 10rem)',
          animationDelay: ANIMATION_DELAYS.heading,
        }}
      >
        <span className="block">{notFound.titleFirst}</span>{' '}
        <span className="block">{notFound.titleLast}</span>
      </h1>

      <div
        className="mt-6 border-t border-(--rule-strong) animate-in"
        style={{ animationDelay: ANIMATION_DELAYS.divider }}
      />

      <div
        className="mt-5 grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-4 md:gap-12 animate-in"
        style={{ animationDelay: ANIMATION_DELAYS.meta }}
      >
        <div className="space-y-3">
          <p className="font-display text-xl md:text-2xl tracking-[0.04em] uppercase text-(--text-secondary) font-medium leading-snug">
            {notFound.headline}
          </p>
          <p className="font-display text-[10px] tracking-[0.12em] uppercase text-(--text-muted)">
            gordanaleksandrovski.com
          </p>
        </div>
        <div className="max-w-125">
          <p className="text-base text-(--text-secondary) leading-relaxed">{notFound.body}</p>
          <Link
            href="/"
            className="mt-4 inline-flex items-center gap-2 font-display text-[11px] tracking-[0.14em] uppercase text-(--text-secondary) hover:text-(--accent-text) transition-colors duration-200"
          >
            <span className="text-(--accent-text)" aria-hidden="true">←</span>
            <span className="border-b border-current pb-px">{notFound.back}</span>
          </Link>
        </div>
      </div>
    </>
  )
}
