'use client'

import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent } from 'react'
import Link from 'next/link'
import { type ContactLink } from '@/data/contact'

type CopyStatus = 'idle' | 'copied' | 'error'

const INDICATOR: Record<CopyStatus, string> = { idle: '→', copied: '✓', error: '!' }
const COPIED_RESET_MS = 2000

export interface ContactRowStrings {
  label: string
  tooltip: string
  copyLink: string
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

interface TooltipBodyProps {
  status: CopyStatus
  copyValue: string
  strings: ContactRowStrings
}

const TooltipBody = ({ status, copyValue, strings }: TooltipBodyProps) => {
  if (status === 'error') {
    return (
      <>
        <p className="font-body text-xs text-(--text-muted) leading-relaxed mb-1.5">{strings.copyFailed}</p>
        <span className="font-display text-xs text-(--text) select-all break-all">{copyValue}</span>
      </>
    )
  }
  return <p className="font-body text-xs text-(--text-secondary) leading-relaxed">{strings.tooltip}</p>
}

interface ContactTooltipProps {
  id: string
  show: boolean
  status: CopyStatus
  copyValue: string
  strings: ContactRowStrings
}

// Always in the DOM (hidden when closed) so aria-describedby never points at a missing id.
const ContactTooltip = ({ id, show, status, copyValue, strings }: ContactTooltipProps) => (
  <div
    id={id}
    role="tooltip"
    hidden={!show}
    className={`absolute top-full right-0 sm:right-auto sm:left-0 mt-1 z-10 w-72 max-w-[calc(100vw-3rem)] bg-(--bg-subtle) border border-(--rule) px-3 py-2 ${status !== 'error' ? 'pointer-events-none' : ''}`}
  >
    <TooltipBody status={status} copyValue={copyValue} strings={strings} />
  </div>
)

interface RowInnerProps {
  link: ContactLink
  status: CopyStatus
  tooltipId: string
  showTooltip: boolean
  strings: ContactRowStrings
}

const RowInner = ({ link, status, tooltipId, showTooltip, strings }: RowInnerProps) => {
  const isCopied = status === 'copied'
  const valueColor = isCopied ? 'text-(--accent-text)' : 'text-(--text-secondary)'
  const indicatorVisibility = status === 'idle' ? 'hidden md:inline' : 'inline'

  return (
    <>
      <div className="flex items-center w-full md:w-auto justify-between md:justify-start md:gap-12">
        <span className="font-display text-[10px] tracking-[0.18em] uppercase text-(--text-muted) w-20 shrink-0">
          {strings.label}
        </span>
        <span className="relative min-w-0">
          <span className={`wrap-anywhere font-display text-sm md:text-base tracking-[0.02em] group-hover:text-(--accent-text) transition-colors duration-200 ${valueColor}`}>
            {isCopied ? strings.copied : link.value}
          </span>
          <ContactTooltip id={tooltipId} show={showTooltip} status={status} copyValue={link.copyValue} strings={strings} />
        </span>
      </div>
      <span aria-hidden="true" className={`${indicatorVisibility} ml-3 font-display text-sm text-(--text-muted) group-hover:text-(--accent-text) transition-colors duration-200`}>
        {INDICATOR[status]}
      </span>
    </>
  )
}

interface ContactRowProps {
  link: ContactLink
  strings: ContactRowStrings
}

export const ContactRow = ({ link, strings }: ContactRowProps) => {
  const { status, handleCopy, dismissError } = useCopyState(link.copyValue)
  const [hintVisible, setHintVisible] = useState(false)
  const isTouch = useIsTouch()
  const tooltipId = `tooltip-${link.id}`
  const showTooltip = status === 'error' || (!isTouch && hintVisible)

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
    className: 'group w-full flex items-center justify-between py-5 cursor-pointer text-left',
  }

  const inner = <RowInner link={link} status={status} tooltipId={tooltipId} showTooltip={showTooltip} strings={strings} />

  const control = link.url ? (
    <Link
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${strings.label} (${strings.newTab})`}
      onClick={() => setHintVisible(false)}
      {...sharedProps}
    >
      {inner}
    </Link>
  ) : (
    <button type="button" onClick={handleCopy} aria-label={`${strings.copyLink}: ${strings.label}`} {...sharedProps}>
      {inner}
    </button>
  )

  return (
    <div>
      {control}
      <span role="status" className="sr-only">
        {liveMessage(status, strings, link.copyValue)}
      </span>
    </div>
  )
}
