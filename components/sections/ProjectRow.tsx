'use client'

import Link from 'next/link'
import { type Project } from '@/data/projects'
import { StackTag } from '@/components/StackTag'
import { Collapsible } from '@/components/Collapsible'
import { useLanguage } from '@/context/LanguageContext'

interface ProjectLinksProps {
  project: Project
  liveLabel: string
  githubLabel: string
}

const ProjectLinks = ({ project, liveLabel, githubLabel }: ProjectLinksProps) => {
  if (!project.url && !project.repoUrl) return null

  return (
    <div className="mt-4 flex gap-5">
      {project.url && (
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-[11px] tracking-[0.12em] uppercase text-(--text-secondary) hover:text-(--accent) transition-colors duration-200 border-b border-current pb-px"
        >
          {liveLabel}
        </Link>
      )}
      {project.repoUrl && (
        <Link
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-[11px] tracking-[0.12em] uppercase text-(--text-secondary) hover:text-(--accent) transition-colors duration-200 border-b border-current pb-px"
        >
          {githubLabel}
        </Link>
      )}
    </div>
  )
}

export const ProjectRow = ({ project }: { project: Project }) => {
  const { dict } = useLanguage()
  const collapsibleId = `technical-${project.id}`

  return (
    <div className="py-8 grid grid-cols-1 md:grid-cols-[48px_1fr] gap-4 md:gap-8">
      <div className="pt-1">
        <span className="font-display text-[11px] tracking-widest tabular-nums text-(--text-muted)">
          {project.number}
        </span>
      </div>

      <div>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="font-display text-[13px] md:text-base tracking-[0.04em] uppercase font-semibold text-(--text)">
            {project.name}
          </h3>
          <span className="font-display text-[9px] tracking-[0.14em] uppercase text-(--text-muted)">
            {project.year}
          </span>
        </div>

        <p className="mt-2 text-base text-(--text-secondary) leading-relaxed max-w-145">
          {project.summary ?? project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <StackTag key={tech} tech={tech} />
          ))}
        </div>

        <ProjectLinks
          project={project}
          liveLabel={dict.projects.live}
          githubLabel={dict.projects.github}
        />

        {project.summary && (
          <Collapsible
            id={collapsibleId}
            label={dict.projects.technicalToggle}
            buttonColorClass="text-(--text-muted)"
          >
            {project.technicalSections ? (
              <div className="mt-3 space-y-5 max-w-145">
                {project.technicalSections.map(({ label, content }) => (
                  <div key={label}>
                    <p className="font-display text-[9px] tracking-[0.18em] uppercase text-(--text-muted) mb-1.5">
                      {label}
                    </p>
                    <p className="text-base text-(--text-secondary) leading-relaxed">
                      {content}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-base text-(--text-secondary) leading-relaxed max-w-145">
                {project.description}
              </p>
            )}
          </Collapsible>
        )}
      </div>
    </div>
  )
}
