const GLYPH_PATHS = {
  arrowUpRight: 'M3 9 9 3M4.5 3H9v4.5',
  arrowLeft: 'M10 6H2M5.5 2.5 2 6l3.5 3.5',
  copy: 'M4.5 4.5v-3h6v6h-3M1.5 4.5h6v6h-6z',
  check: 'M1.5 6.5 4.5 9.5l6-7',
  alert: 'M6 1.5v6M6 9.5v1',
} as const

export type GlyphName = keyof typeof GLYPH_PATHS

interface GlyphProps {
  name: GlyphName
  className?: string
}

// One 12-unit grid and one square-capped stroke for every glyph, so they sit with the condensed caps beside them.
export const Glyph = ({ name, className = 'size-3' }: GlyphProps) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="square"
    aria-hidden="true"
    className={`inline-block shrink-0 ${className}`}
  >
    <path d={GLYPH_PATHS[name]} />
  </svg>
)
