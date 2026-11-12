// Sized to its content, not the viewport: the six-second scan should reach the Experience label on a laptop screen.
export const HeroShell = ({ children }: { children: React.ReactNode }) => (
  <section className="w-full">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-[calc(var(--header-height)+2rem)] pb-12 lg:pt-28 lg:pb-16">
      {children}
    </div>
  </section>
)
