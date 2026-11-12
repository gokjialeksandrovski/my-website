interface SegmentToggleProps {
  segments: readonly [string, string]
  activeIndex: 0 | 1
  label: string
  onToggle: () => void
}

// One button, two words: the lit one is the current state, and pressing anywhere flips it.
export const SegmentToggle = ({ segments, activeIndex, label, onToggle }: SegmentToggleProps) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={label}
    className="group relative before:absolute before:-inset-x-1.5 before:-inset-y-2.5 flex items-center gap-1.5 type-label tracking-[0.12em] cursor-pointer"
  >
    {segments.map((segment, index) => (
      <span key={segment} className="contents">
        {index > 0 && <span className="text-rule-strong" aria-hidden="true">·</span>}
        <span
          className={`transition-colors duration-200 ${index === activeIndex ? 'text-ink' : 'text-ink-muted group-hover:text-signal-text'}`}
        >
          {segment}
        </span>
      </span>
    ))}
  </button>
)
