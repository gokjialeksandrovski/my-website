import { flushSync } from 'react-dom'

// Cross-fades a change that repaints the whole page (theme, language). Browsers without the API swap instantly;
// reduced motion is handled in CSS, where the transition's animations are switched off.
export const withViewTransition = (update: () => void) => {
  if (!('startViewTransition' in document)) {
    update()
    return
  }
  document.startViewTransition(() => flushSync(update))
}
