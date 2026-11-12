interface PageSectionProps {
  id: string
  label: string
  children: React.ReactNode
}

// tabIndex -1 lets a nav jump move focus here, so the next Tab continues from the section, not from the header.
export const PageSection = ({ id, label, children }: PageSectionProps) => (
  <section id={id} aria-labelledby={`${id}-label`} tabIndex={-1} className="w-full border-t border-rule">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 md:py-28">
      <h2
        id={`${id}-label`}
        className="mb-10 flex items-center gap-4 type-label font-normal text-ink-muted whitespace-nowrap after:h-px after:flex-1 after:bg-rule"
      >
        {label}
      </h2>
      {children}
    </div>
  </section>
)
