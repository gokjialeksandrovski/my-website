'use client'

import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent } from 'react'
import Link from 'next/link'
import { type ContactLink } from '@/data/contact'
import { Glyph, type GlyphName } from '@/components/Glyph'

type CopyStatus = 'idle' | 'copied' | 'error'

const COPY_GLYPH: Record<CopyStatus, GlyphName> = { idle: 'copy', copied: 'check', error: 'alert' }
const COPIED_RESET_MS = 2000

export interface ContactRowStrings {
  label: string
  tooltip: string
  copyAction: string
  copied: string
  copyFailed: string
  newTab: string
}

const useIsTouch = () => {
  const [isTouch] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches
  )
  return isTouch
}

// The error state stays until blur or Escape: the fallback shows the address to select by hand,
// and a timer would close it before anyone could.
const useCopyState = (copyValue: string) => {
  const [status, setStatus] = useState<CopyStatus>('idle')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  const handleCopy = async () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    try {
      await navigator.clipboard.writeText(copyValue)
      setStatus('copied')
      timerRef.current = setTimeout(() => setStatus('idle'), COPIED_RESET_MS)
    } catch (error) {
      console.error('Clipboard write failed', error)
      setStatus('error')
    }
  }

  const dismissError = () => setStatus((current) => (current === 'error' ? 'idle' : current))

  return { status, handleCopy, dismissError }
}

const liveMessage = (status: CopyStatus, strings: ContactRowStrings, copyValue: string): string => {
  if (status === 'copied') return strings.copied
  if (status === 'error') return `${strings.copyFailed} ${copyValue}`
  return ''
}

interface ContactTooltipProps {
  id: string
  show: boolean
  status: CopyStatus
  copyValue: string
  strings: ContactRowStrings
}

// Always in the DOM (hidden when closed) so aria-describedby never points at a missing id,
// and outside the control so its text never joins the control's accessible name.
const ContactTooltip = ({ id, show, status, copyValue, strings }: ContactTooltipProps) => (
  <div
    id={id}
    role="tooltip"
    hidden={!show}
    className={`absolute top-full left-0 md:left-48 -mt-2 z-10 w-72 max-w-full bg-paper-shade border border-rule px-3 py-2 text-xs leading-relaxed ${status === 'error' ? '' : 'pointer-events-none'}`}
  >
    {status === 'error' ? (
      <>
        <p className="text-ink-secondary mb-1.5">{strings.copyFailed}</p>
        <span className="font-display tracking-[0.02em] text-ink select-all break-all">{copyValue}</span>
      </>
    ) : (
      <p className="text-ink-secondary">{strings.tooltip}</p>
    )}
  </div>
)

interface RowInnerProps {
  value: string
  glyph: GlyphName
  isCopied: boolean
  hint: string
  strings: ContactRowStrings
}

const RowInner = ({ value, glyph, isCopied, hint, strings }: RowInnerProps) => (
  <>
    <span className="min-w-0 flex-1 md:flex md:items-baseline">
      <span className="block md:w-48 md:shrink-0 type-caption text-ink-muted">{strings.label}</span>
      <span
        className={`block mt-1 md:mt-0 wrap-anywhere font-display text-[0.9375rem] md:text-base tracking-[0.02em] group-hover:text-signal-text transition-colors duration-200 ${isCopied ? 'text-signal-text' : 'text-ink'}`}
      >
        {isCopied ? strings.copied : value}
      </span>
      <span className="sr-only"> ({hint})</span>
    </span>
    <Glyph
      name={glyph}
      className={`size-3 transition-[color,translate] duration-200 ease-out-expo group-hover:text-signal-text motion-reduce:transition-none ${isCopied ? 'text-signal-text' : 'text-ink-muted'} ${glyph === 'arrowUpRight' ? 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5' : ''}`}
    />
  </>
)

interface ContactRowProps {
  link: ContactLink
  strings: ContactRowStrings
}

export const ContactRow = ({ link, strings }: ContactRowProps) => {
  const { status, handleCopy, dismissError } = useCopyState(link.copyValue)
  const [hintVisible, setHintVisible] = useState(false)
  const isTouch = useIsTouch()
  const tooltipId = `tooltip-${link.id}`
  // Once copied, the value itself reports the result; the hint would only repeat it.
  const showTooltip = status === 'error' || (status === 'idle' && !isTouch && hintVisible)

  const sharedProps = {
    onMouseEnter: () => setHintVisible(true),
    onMouseLeave: () => setHintVisible(false),
    onFocus: (event: FocusEvent<HTMLElement>) => {
      if (!isTouch && event.currentTarget.matches(':focus-visible')) setHintVisible(true)
    },
    onBlur: () => {
      setHintVisible(false)
      dismissError()
    },
    onKeyDown: (event: KeyboardEvent<HTMLElement>) => {
      if (event.key !== 'Escape') return
      setHintVisible(false)
      dismissError()
    },
    'aria-describedby': tooltipId,
    className: 'group w-full flex items-center gap-4 py-5 cursor-pointer text-left',
  }

  const isCopied = status === 'copied'

  return (
    <li className="relative">
      {link.url ? (
        <Link
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setHintVisible(false)}
          {...sharedProps}
        >
          <RowInner value={link.value} glyph="arrowUpRight" isCopied={false} hint={strings.newTab} strings={strings} />
        </Link>
      ) : (
        <button type="button" onClick={handleCopy} {...sharedProps}>
          <RowInner value={link.value} glyph={COPY_GLYPH[status]} isCopied={isCopied} hint={strings.copyAction} strings={strings} />
        </button>
      )}
      <ContactTooltip id={tooltipId} show={showTooltip} status={status} copyValue={link.copyValue} strings={strings} />
      <span role="status" className="sr-only">
        {liveMessage(status, strings, link.copyValue)}
      </span>
    </li>
  )
}
