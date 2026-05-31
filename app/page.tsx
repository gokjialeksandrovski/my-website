import { Nav } from '@/components/Nav'
import { Hero } from '@/components/sections/Hero'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Education } from '@/components/sections/Education'
import { Contact } from '@/components/sections/Contact'

const Home = () => (
  <>
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
