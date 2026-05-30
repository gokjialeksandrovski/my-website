export interface ContactLink {
  readonly id: string
  readonly label: string
  readonly value: string
  readonly copyValue: string
  readonly url?: string
}

export const contactLinks: readonly ContactLink[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'gordanaleksandrovski20@gmail.com',
    copyValue: 'gordanaleksandrovski20@gmail.com',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/gokjialeksandrovski',
    url: 'https://github.com/gokjialeksandrovski',
    copyValue: 'https://github.com/gokjialeksandrovski',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/gordan-aleksandrovski',
    url: 'https://www.linkedin.com/in/gordan-aleksandrovski-99a62a202/',
    copyValue: 'https://www.linkedin.com/in/gordan-aleksandrovski-99a62a202/',
  },
]
