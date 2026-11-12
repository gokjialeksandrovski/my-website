export interface ContactLink {
  readonly id: string
  readonly value: string
  readonly copyValue: string
  readonly url?: string
}

export const contactLinks = [
  {
    id: 'email',
    value: 'gordanaleksandrovski20@gmail.com',
    copyValue: 'gordanaleksandrovski20@gmail.com',
  },
  {
    id: 'github',
    value: 'github.com/gokjialeksandrovski/my-website',
    url: 'https://github.com/gokjialeksandrovski/my-website',
    copyValue: 'https://github.com/gokjialeksandrovski/my-website',
  },
  {
    id: 'linkedin',
    value: 'linkedin.com/in/gordan-aleksandrovski-99a62a202',
    url: 'https://www.linkedin.com/in/gordan-aleksandrovski-99a62a202/',
    copyValue: 'https://www.linkedin.com/in/gordan-aleksandrovski-99a62a202/',
  },
  {
    id: 'cv',
    value: 'Gordan-Aleksandrovski-CV.pdf',
    url: '/Gordan-Aleksandrovski-CV.pdf',
    copyValue: 'https://gordanaleksandrovski.com/Gordan-Aleksandrovski-CV.pdf',
  },
] as const satisfies readonly ContactLink[]

export type ContactId = (typeof contactLinks)[number]['id']
