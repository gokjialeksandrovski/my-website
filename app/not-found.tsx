import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { HeroShell } from '@/components/HeroShell'
import { ANIMATION_DELAYS } from '@/lib/animationDelays'

const NotFound = () => (
  <>
    <Nav />
    <main id="main-content">
      <HeroShell>
        <div className="mb-8 animate-in" style={{ animationDelay: ANIMATION_DELAYS.status }}>
          <span className="inline-flex items-center gap-2 font-display text-[11px] tracking-[0.14em] uppercase font-semibold text-(--accent)">
            <span className="w-1.5 h-1.5 rounded-full bg-(--accent)" aria-hidden="true" />
            404
          </span>
        </div>

        <h1
          className="font-display font-bold uppercase text-(--text) leading-[0.88] tracking-[-0.02em] animate-in"
          style={{
            fontSize: 'clamp(3.5rem, 13vw, 10rem)',
            animationDelay: ANIMATION_DELAYS.heading,
          }}
        >
          Not
          <br />
          Found
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
              Page missing
            </p>
            <p className="font-display text-[9px] tracking-[0.12em] uppercase text-(--text-muted)">
              gordanaleksandrovski.dev
            </p>
          </div>
          <div className="max-w-125">
            <p className="text-base text-(--text-secondary) leading-relaxed">
              This URL doesn&apos;t map to anything. That&apos;s the whole story.
            </p>
            <Link
              href="/"
              className="mt-4 inline-flex items-center gap-2 font-display text-[10px] tracking-[0.14em] uppercase text-(--text-secondary) hover:text-(--accent) transition-colors duration-200"
            >
              <span className="text-(--accent)">←</span>
              <span className="border-b border-current pb-px">Back to the portfolio</span>
            </Link>
          </div>
        </div>
      </HeroShell>
    </main>
  </>
)

export default NotFound
