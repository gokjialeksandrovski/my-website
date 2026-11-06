'use client'

import { useState } from 'react'

interface CollapsibleProps {
  id: string
  label: string
  buttonColorClass?: string
  buttonMarginClass?: string
  children: React.ReactNode
}

export const Collapsible = ({ id, label, buttonColorClass, buttonMarginClass, children }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={id}
        className={`${buttonMarginClass ?? 'mt-4'} relative before:absolute before:inset-x-0 before:-inset-y-1.5 flex items-center gap-2 font-display text-[11px] tracking-[0.14em] uppercase hover:text-(--accent-text) transition-colors duration-200 cursor-pointer ${buttonColorClass ?? 'text-(--text-secondary)'}`}
      >
        <span aria-hidden="true" className="w-2.5 text-left leading-none text-(--accent-text)">
          {isOpen ? '−' : '+'}
        </span>
        <span className="border-b border-current pb-px">{label}</span>
      </button>

      <div
        id={id}
        aria-hidden={!isOpen}
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 320ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          {children}
        </div>
      </div>
    </div>
  )
}
