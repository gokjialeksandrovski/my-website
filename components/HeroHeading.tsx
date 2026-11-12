import { ANIMATION_DELAYS } from '@/lib/animationDelays'

interface HeroHeadingProps {
  first: string
  last: string
  /** Cyrillic sets wider and taller: "Александровски" is 7.84em against 6.98em for the Latin surname, and Д has feet below the baseline. */
  wide?: boolean
}

const SIZE = {
  regular: 'text-[clamp(2rem,11.4vw,10rem)] leading-none md:leading-[0.88]',
  wide: 'text-[clamp(2rem,10.15vw,9.25rem)] leading-[1.036]',
} as const

// The page's one display moment: each line rises from behind its baseline, then the rule draws in beneath.
export const HeroHeading = ({ first, last, wide = false }: HeroHeadingProps) => (
  <>
    {/* Flex column: the lines' negative mask margins must add up, and block margins would collapse into one. */}
    <h1 className={`flex flex-col font-display font-bold uppercase text-ink tracking-[-0.02em] ${wide ? SIZE.wide : SIZE.regular}`}>
      <span className="reveal-line">
        <span className="-ml-[0.025em]" style={{ animationDelay: ANIMATION_DELAYS.heading }}>
          {first}
        </span>
      </span>{' '}
      <span className="reveal-line">
        <span style={{ animationDelay: ANIMATION_DELAYS.headingSecondLine }}>{last}</span>
      </span>
    </h1>

    <div
      className="mt-8 md:mt-10 h-px bg-rule-strong animate-draw"
      style={{ animationDelay: ANIMATION_DELAYS.divider }}
    />
  </>
)
