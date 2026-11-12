'use client'

import { useState } from 'react'

interface CollapsibleProps {
  id: string
  label: string
  children: React.ReactNode
}

// Two 1px bars on a 9px box; the vertical one collapses when the panel opens, turning + into −.
const PLUS_MINUS =
  'relative size-2.25 shrink-0 text-signal-text before:absolute before:inset-x-0 before:top-1 before:h-px before:bg-current after:absolute after:inset-y-0 after:left-1 after:w-px after:bg-current after:transition-transform after:duration-300 after:ease-out-expo group-aria-expanded:after:scale-y-0 motion-reduce:after:transition-none'

export const Collapsible = ({ id, label, children }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={id}
        className="group mt-5 relative before:absolute before:-inset-x-1 before:-inset-y-2 flex items-center gap-2.5 type-label text-ink-secondary hover:text-signal-text transition-colors duration-200 cursor-pointer"
      >
        <span aria-hidden="true" className={PLUS_MINUS} />
        <span className="underline decoration-1 underline-offset-4">{label}</span>
      </button>

      {/* grid-template-rows 0fr → 1fr animates to the content's own height with no measuring.
          inert keeps the closed panel out of the tab order, the accessibility tree and find-in-page. */}
      <div
        id={id}
        inert={!isOpen}
        className={`grid transition-[grid-template-rows] duration-300 ease-out-expo motion-reduce:transition-none ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div
          className={`min-h-0 overflow-hidden transition-opacity duration-300 motion-reduce:transition-none ${isOpen ? 'opacity-100 delay-75' : 'opacity-0'}`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
