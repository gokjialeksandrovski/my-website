interface PageSectionProps {
  id: string
  children: React.ReactNode
  compact?: boolean
}

export const PageSection = ({ id, children, compact = false }: PageSectionProps) => (
  <section id={id} className="w-full border-t border-(--rule)">
    <div className={`max-w-7xl mx-auto px-8 md:px-12 ${compact ? 'py-12 md:py-16' : 'py-20 md:py-28'}`}>
      {children}
    </div>
  </section>
)
