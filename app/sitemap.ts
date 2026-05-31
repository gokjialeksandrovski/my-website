import type { MetadataRoute } from 'next'

const BASE_URL = 'https://gordanaleksandrovski.com'

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  },
]

export default sitemap
