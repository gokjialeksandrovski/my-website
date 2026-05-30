interface HeroShellProps {
  children: React.ReactNode
}

export const HeroShell = ({ children }: HeroShellProps) => (
  <section className="w-full">
    <div className="max-w-7xl mx-auto px-8 md:px-12 md:min-h-dvh flex flex-col justify-start md:justify-center">
      <div className="pt-24 pb-10 md:py-28">
        {children}
      </div>
    </div>
  </section>
)
