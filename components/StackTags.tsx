import type { Skill } from '@/data/skills'

export const StackTag = ({ tech }: { tech: Skill }) => (
  <span className="font-display text-[11px] tracking-[0.12em] uppercase text-(--text-secondary) border border-(--rule) px-2 py-0.5">
    {tech}
  </span>
)
