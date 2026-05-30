import { Nav } from '@/components/Nav'
import { Hero } from '@/components/sections/Hero'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'

const Home = () => (
  <>
    <Nav />
    <main id="main-content">
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
  </>
)

export default Home
