import type { MouseEvent } from 'react'

export const handleHashClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
  const target = document.getElementById(href.slice(1))
  if (!target) return
  event.preventDefault()
  target.scrollIntoView({ behavior: 'smooth' })
  history.pushState(null, '', href)
}
