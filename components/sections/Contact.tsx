'use client'

import { contactLinks } from '@/data/contact'
import { ContactRow } from './ContactRow'
import { PageSection } from '@/components/PageSection'
import { useLanguage } from '@/context/LanguageContext'

export const Contact = () => {
  const { dict } = useLanguage()

  return (
    <PageSection id="contact" label={dict.contact.sectionLabel}>
      {/* md:ml-48 is the ledger's first column plus its gap, so the intro and every value share the name column's edge. */}
      <p className="type-body max-w-130 mb-8 md:ml-48">{dict.contact.availability}</p>

      <ul role="list" className="border-t border-rule-strong divide-y divide-rule">
        {contactLinks.map((link) => (
          <ContactRow
            key={link.id}
            link={link}
            strings={{
              ...dict.contactEntries[link.id],
              copyAction: dict.contact.copyAction,
              copied: dict.contact.copied,
              copyFailed: dict.contact.copyFailed,
              newTab: dict.a11y.newTab,
            }}
          />
        ))}
      </ul>
    </PageSection>
  )
}
