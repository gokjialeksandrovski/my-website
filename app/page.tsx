import { Nav } from '@/components/Nav'
import { Hero } from '@/components/sections/Hero'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { AiEngineering } from '@/components/sections/AiEngineering'
import { Education } from '@/components/sections/Education'
import { Contact } from '@/components/sections/Contact'
import { SiteFooter } from '@/components/SiteFooter'

const BASE_URL = 'https://gordanaleksandrovski.com'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Gordan Aleksandrovski',
  url: BASE_URL,
  jobTitle: 'Infrastructure · Full-Stack Engineer',
  email: 'gordanaleksandrovski20@gmail.com',
  sameAs: [
    'https://github.com/gokjialeksandrovski',
    'https://www.linkedin.com/in/gordan-aleksandrovski-99a62a202/',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Gordan Aleksandrovski',
  url: BASE_URL,
}

const Home = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
    <Nav />
    <main id="main-content" className="flex-1">
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <AiEngineering />
      <Contact />
    </main>
    <SiteFooter />
  </>
)

export default Home
