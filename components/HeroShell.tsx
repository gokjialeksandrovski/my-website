interface HeroShellProps {
  children: React.ReactNode
}

export const HeroShell = ({ children }: HeroShellProps) => (
  <section className="w-full">
    <div className="max-w-7xl mx-auto px-8 md:px-12 md:min-h-dvh flex flex-col justify-start md:justify-between">
      <div className="pt-24 pb-10 md:pt-28 md:pb-0">
        {children}
      </div>
      <div
        className="hidden md:flex pb-8 justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="animate-scroll-hint flex flex-col items-center gap-1.5">
          <div className="w-px h-6 bg-(--text-muted)" />
          <div className="w-1 h-1 rounded-full bg-(--text-muted)" />
        </div>
      </div>
    </div>
  </section>
)
