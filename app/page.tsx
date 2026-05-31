import { Nav } from '@/components/Nav'
import { Hero } from '@/components/sections/Hero'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Education } from '@/components/sections/Education'
import { Contact } from '@/components/sections/Contact'

const BASE_URL = 'https://gordanaleksandrovski.com'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Gordan Aleksandrovski',
  url: BASE_URL,
  jobTitle: 'Fullstack Developer',
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
    <main id="main-content">
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  </>
)

export default Home
