'use client'

import { projects } from '@/data/projects'
import { ProjectRow } from './ProjectRow'
import { SectionLabel } from '@/components/SectionLabel'
import { PageSection } from '@/components/PageSection'
import { useLanguage } from '@/context/LanguageContext'

export const Projects = () => {
  const { dict } = useLanguage()

  const translatedProjects = projects.map((project) => {
    const t = dict.projectEntries[project.id]
    if (!t) return project

    const translatedSections = project.technicalSections?.map((section) => ({
      ...section,
      content: t.technicalSections[section.label] ?? section.content,
    }))

    return { ...project, ...(t.name && { name: t.name }), summary: t.summary, technicalSections: translatedSections }
  })

  return (
    <PageSection id="projects">
      <SectionLabel label={dict.projects.sectionLabel} />

      <div className="divide-y divide-(--rule)">
        {translatedProjects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </PageSection>
  )
}
