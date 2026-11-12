'use client'

import { projects } from '@/data/projects'
import { ProjectRow } from './ProjectRow'
import { PageSection } from '@/components/PageSection'
import { LedgerList } from '@/components/LedgerRow'
import { useLanguage } from '@/context/LanguageContext'

export const Projects = () => {
  const { dict } = useLanguage()

  return (
    <PageSection id="projects" label={dict.projects.sectionLabel}>
      <LedgerList>
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} translation={dict.projectEntries[project.id]} />
        ))}
      </LedgerList>
    </PageSection>
  )
}
