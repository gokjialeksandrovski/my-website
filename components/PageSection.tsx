interface PageSectionProps {
  id: string
  children: React.ReactNode
}

export const PageSection = ({ id, children }: PageSectionProps) => (
  <section id={id} className="w-full border-t border-(--rule)">
    <div className="max-w-7xl mx-auto px-8 md:px-12 py-20 md:py-28">
      {children}
    </div>
  </section>
)
