'use client'

import { contactLinks } from '@/data/contact'
import { ContactRow } from './ContactRow'
import { SectionLabel } from '@/components/SectionLabel'
import { PageSection } from '@/components/PageSection'
import { useLanguage } from '@/context/LanguageContext'

export const Contact = () => {
  const { dict } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <PageSection id="contact">
      <SectionLabel label={dict.contact.sectionLabel} />

      <p className="text-base text-(--text-secondary) leading-relaxed mb-12">
        {dict.contact.availability}
      </p>

      <div className="flex flex-col divide-y divide-(--rule)">
        {contactLinks.map((link) => (
          <ContactRow
            key={link.id}
            link={link}
            copyFailed={dict.contact.copyFailed}
            copyLink={dict.contact.copyLink}
            tooltip={dict.contactEntries[link.id]?.tooltip ?? ''}
          />
        ))}
      </div>

      <div className="mt-16 pt-6 border-t border-(--rule) flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <span className="font-display text-[10px] tracking-[0.14em] uppercase text-(--text-muted)">
          {dict.profile.nameFirst} {dict.profile.nameLast}
        </span>
        <span className="font-display text-[10px] tracking-[0.14em] uppercase text-(--text-muted)">
          {dict.profile.title} — {currentYear}
        </span>
      </div>
    </PageSection>
  )
}
