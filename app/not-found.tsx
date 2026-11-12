import { Nav } from '@/components/Nav'
import { HeroShell } from '@/components/HeroShell'
import { SiteFooter } from '@/components/SiteFooter'
import { NotFoundContent } from './_components/NotFoundContent'

const NotFound = () => (
  <>
    <Nav />
    <main id="main-content" className="flex-1">
      <HeroShell>
        <NotFoundContent />
      </HeroShell>
    </main>
    <SiteFooter />
  </>
)

export default NotFound
