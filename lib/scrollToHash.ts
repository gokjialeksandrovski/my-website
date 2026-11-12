import type { MouseEvent } from 'react'

const HASH = '#'

// No `behavior` argument: the scroll then follows CSS `scroll-behavior`, which is smooth by default
// and instant under prefers-reduced-motion. Focus moves with it so the next Tab starts in the section.
export const handleHashClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
  if (!href.startsWith(HASH)) return
  const target = document.getElementById(href.slice(HASH.length))
  if (!target) return
  event.preventDefault()
  target.scrollIntoView()
  target.focus({ preventScroll: true })
  history.pushState(null, '', href)
}

export const handleTopClick = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault()
  window.scrollTo({ top: 0 })
  history.pushState(null, '', window.location.pathname)
}
