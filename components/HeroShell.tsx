interface HeroShellProps {
  children: React.ReactNode
}

// Sized to its content, not the viewport: the six-second scan should reach the Experience label on a laptop screen.
export const HeroShell = ({ children }: HeroShellProps) => (
  <section className="w-full">
    <div className="max-w-7xl mx-auto px-8 md:px-12 pt-24 pb-10 md:pt-28 md:pb-12">
      {children}
    </div>
  </section>
)
