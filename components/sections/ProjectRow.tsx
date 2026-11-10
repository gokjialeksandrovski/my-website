'use client'

import Link from 'next/link'
import { type Project } from '@/data/projects'
import { StackTag } from '@/components/StackTag'
import { Collapsible } from '@/components/Collapsible'
import { useLanguage } from '@/context/LanguageContext'

interface ExternalLinkProps {
  url: string
  label: string
  newTabLabel: string
}

const ExternalLink = ({ url, label, newTabLabel }: ExternalLinkProps) => (
  <Link
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="relative before:absolute before:inset-x-0 before:-inset-y-1.5 font-display text-[11px] tracking-[0.12em] uppercase text-(--text-secondary) hover:text-(--accent-text) transition-colors duration-200 border-b border-current pb-px"
  >
    {label}
    <span className="sr-only"> ({newTabLabel})</span>
  </Link>
)

const ProjectLinks = ({ project }: { project: Project }) => {
  const { dict } = useLanguage()
  const links = [
    { url: project.url, label: dict.projects.live },
    { url: project.repoUrl, label: dict.projects.source },
  ].filter((link): link is { url: string; label: string } => Boolean(link.url))
  if (links.length === 0) return null

  return (
    <div className="mt-4 flex gap-6">
      {links.map(({ url, label }) => (
        <ExternalLink key={url} url={url} label={label} newTabLabel={dict.a11y.newTab} />
      ))}
    </div>
  )
}

export const ProjectRow = ({ project }: { project: Project }) => {
  const { dict } = useLanguage()
  const collapsibleId = `technical-${project.id}`

  return (
    <div className="py-8 last:pb-0 grid grid-cols-1 md:grid-cols-[48px_1fr] md:items-baseline gap-4 md:gap-8">
      <div>
        <span className="font-display text-[11px] tracking-widest tabular-nums text-(--text-muted)">
          {project.year}
        </span>
      </div>

      <div>
        <h3 className="font-display text-[13px] md:text-base tracking-[0.04em] uppercase font-semibold text-(--text)">
          {project.name}
        </h3>

        <p className="mt-2 text-base text-(--text-secondary) leading-relaxed max-w-130">
          {project.summary}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <StackTag key={tech} tech={tech} />
          ))}
        </div>

        <ProjectLinks project={project} />

        <Collapsible
          id={collapsibleId}
          label={dict.projects.technicalToggle}
          buttonColorClass="text-(--text-muted)"
        >
          <div className="mt-3 space-y-5 max-w-130">
            {project.technicalSections.map(({ label, content }) => (
              <div key={label}>
                <p className="font-display text-[10px] tracking-[0.18em] uppercase text-(--text-muted) mb-1.5">
                  {label}
                </p>
                <p className="text-base text-(--text-secondary) leading-relaxed">
                  {content}
                </p>
              </div>
            ))}
          </div>
        </Collapsible>
      </div>
    </div>
  )
}
