import type { Skill } from '@/data/skills'

export const StackTag = ({ tech }: { tech: Skill }) => (
  <span className="font-display text-[9px] tracking-[0.14em] uppercase text-(--text-muted) border border-(--rule) px-2 py-0.5">
    {tech}
  </span>
)
