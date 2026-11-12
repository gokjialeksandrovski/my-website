import type { Skill } from '@/data/skills'

export const StackTags = ({ stack }: { stack: readonly Skill[] }) => (
  <ul role="list" className="mt-4 flex flex-wrap gap-1.5">
    {stack.map((tech) => (
      <li key={tech} className="type-label tracking-[0.12em] text-ink-secondary border border-rule px-2 py-0.5">
        {tech}
      </li>
    ))}
  </ul>
)
