'use client'

import Link from 'next/link'
import { type Project } from '@/data/projects'
import type { ProjectTranslation } from '@/data/translations/types'
import { StackTags } from '@/components/StackTags'
import { Collapsible } from '@/components/Collapsible'
import { Glyph } from '@/components/Glyph'
import { LedgerRow } from '@/components/LedgerRow'
import { useLanguage } from '@/context/LanguageContext'

const URL_PREFIX = /^https?:\/\/(www\.)?/

// The link reads as its own destination, so a live site and a source repo need no separate labels.
const ProjectLink = ({ url, newTabLabel }: { url: string; newTabLabel: string }) => (
  <Link
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative before:absolute before:-inset-x-1 before:-inset-y-2 inline-flex items-baseline gap-1.5 font-display text-[0.8125rem] tracking-[0.04em] text-ink-secondary hover:text-signal-text transition-colors duration-200"
  >
    <span className="wrap-anywhere underline decoration-1 underline-offset-4">{url.replace(URL_PREFIX, '')}</span>
    <Glyph
      name="arrowUpRight"
      className="size-2.5 text-signal-text transition-transform duration-200 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
    />
    <span className="sr-only"> ({newTabLabel})</span>
  </Link>
)

interface ProjectRowProps {
  project: Project
  translation: ProjectTranslation
}

export const ProjectRow = ({ project, translation }: ProjectRowProps) => {
  const { dict } = useLanguage()
  const links = [project.url, project.repoUrl].filter((url): url is string => Boolean(url))

  return (
    <LedgerRow
      aside={<p className="type-label tracking-widest tabular-nums text-ink-muted">{project.year}</p>}
      head={
        <>
          <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1.5 type-title text-ink">
            {translation.name ?? project.name}
            {project.personal && (
              <span className="type-caption font-normal text-ink-muted border border-dashed border-rule-strong px-1.5 py-px">
                {dict.projects.personal}
              </span>
            )}
          </h3>
          {links.map((url) => (
            <p key={url} className="mt-1.5">
              <ProjectLink url={url} newTabLabel={dict.a11y.newTab} />
            </p>
          ))}
        </>
      }
    >
      <p className="type-body max-w-130">{translation.summary}</p>
      <StackTags stack={project.stack} />

      <Collapsible id={`technical-${project.id}`} label={dict.projects.technicalToggle}>
        <dl className="pt-5 space-y-5 max-w-130">
          {translation.technicalSections.map(({ label, content }) => (
            <div key={label}>
              <dt className="type-caption text-ink-muted mb-1.5">{label}</dt>
              <dd className="type-body">{content}</dd>
            </div>
          ))}
        </dl>
      </Collapsible>
    </LedgerRow>
  )
}
