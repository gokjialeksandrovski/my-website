import { Nav } from '@/components/Nav'
import { HeroShell } from '@/components/HeroShell'
import { NotFoundContent } from './_components/NotFoundContent'

const NotFound = () => (
  <>
    <Nav />
    <main id="main-content">
      <HeroShell>
        <NotFoundContent />
      </HeroShell>
    </main>
  </>
)

export default NotFound
