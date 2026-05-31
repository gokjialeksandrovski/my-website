'use client'

import { useEffect, useRef, useState, type FocusEvent } from 'react'
import Link from 'next/link'
import { type ContactLink } from '@/data/contact'

type CopyStatus = 'idle' | 'copied' | 'error'

const INDICATOR: Record<CopyStatus, string> = { idle: '→', copied: '✓', error: '!' }

const useIsTouch = () => {
  const [isTouch] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches
  )
  return isTouch
}

const useCopyState = (copyValue: string) => {
  const [status, setStatus] = useState<CopyStatus>('idle')
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  const handleCopy = async () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    try {
      await navigator.clipboard.writeText(copyValue)
      setStatus('copied')
      timerRef.current = setTimeout(() => setStatus('idle'), 1500)
    } catch {
      setStatus('error')
      setTooltipVisible(true)
      timerRef.current = setTimeout(() => { setStatus('idle'); setTooltipVisible(false) }, 2000)
    }
  }

  return { status, tooltipVisible, setTooltipVisible, handleCopy }
}

interface TooltipBodyProps {
  status: CopyStatus
  copyValue: string
  tooltip: string
  copyFailed: string
}

const TooltipBody = ({ status, copyValue, tooltip, copyFailed }: TooltipBodyProps) => {
  if (status === 'error') {
    return (
      <>
        <p className="font-body text-xs text-(--text-muted) leading-relaxed mb-1.5">{copyFailed}</p>
        <span className="font-display text-xs text-(--text) select-all break-all">{copyValue}</span>
      </>
    )
  }
  return <p className="font-body text-xs text-(--text-secondary) leading-relaxed">{tooltip}</p>
}

interface ContactTooltipProps {
  id: string
  show: boolean
  status: CopyStatus
  copyValue: string
  tooltip: string
  copyFailed: string
}

const ContactTooltip = ({ id, show, status, copyValue, tooltip, copyFailed }: ContactTooltipProps) => {
  if (!show) return null
  return (
    <div
      id={id}
      role="tooltip"
      className={`absolute top-full right-0 sm:right-auto sm:left-0 mt-1 z-10 w-72 max-w-[calc(100vw-3rem)] bg-(--bg-subtle) border border-(--rule) px-3 py-2 ${status !== 'error' ? 'pointer-events-none' : ''}`}
    >
      <TooltipBody status={status} copyValue={copyValue} tooltip={tooltip} copyFailed={copyFailed} />
    </div>
  )
}

interface ContactRowProps {
  link: ContactLink
  copyFailed: string
  copyLink: string
  tooltip: string
}

interface RowInnerProps {
  link: ContactLink
  status: CopyStatus
  tooltipId: string
  showTooltip: boolean
  copyValue: string
  tooltip: string
  copyFailed: string
}

const RowInner = ({ link, status, tooltipId, showTooltip, copyValue, tooltip, copyFailed }: RowInnerProps) => (
  <>
    <div className="flex items-center w-full md:w-auto justify-between md:justify-start md:gap-12">
      <span className="font-display text-[9px] tracking-[0.18em] uppercase text-(--text-muted) w-20 shrink-0">
        {link.label}
      </span>
      <span className="relative">
        <span className="font-display text-sm md:text-base tracking-[0.02em] text-(--text-secondary) group-hover:text-(--accent) transition-colors duration-200">
          {link.value}
        </span>
        <ContactTooltip
          id={tooltipId}
          show={showTooltip}
          status={status}
          copyValue={copyValue}
          tooltip={tooltip}
          copyFailed={copyFailed}
        />
      </span>
    </div>
    <span className="hidden md:inline font-display text-sm text-(--text-muted) group-hover:text-(--accent) transition-colors duration-200">
      {INDICATOR[status]}
    </span>
  </>
)

export const ContactRow = ({ link, copyFailed, copyLink, tooltip }: ContactRowProps) => {
  const { status, tooltipVisible, setTooltipVisible, handleCopy } = useCopyState(link.copyValue)
  const isTouch = useIsTouch()
  const tooltipId = `tooltip-${link.id}`
  const showTooltip = !isTouch && (tooltipVisible || status === 'error')

  const sharedProps = {
    onMouseEnter: () => setTooltipVisible(true),
    onMouseLeave: () => { if (status !== 'error') setTooltipVisible(false) },
    onFocus: (event: FocusEvent<HTMLElement>) => {
      if (!isTouch && event.currentTarget.matches(':focus-visible')) {
        setTooltipVisible(true)
      }
    },
    onBlur: () => { if (!isTouch && status !== 'error') setTooltipVisible(false) },
    'aria-describedby': tooltipId,
    className: 'group w-full flex items-center justify-between py-5 cursor-pointer text-left',
  }

  const inner = (
    <RowInner
      link={link}
      status={status}
      tooltipId={tooltipId}
      showTooltip={showTooltip}
      copyValue={link.copyValue}
      tooltip={tooltip}
      copyFailed={copyFailed}
    />
  )

  if (link.url) {
    return (
      <Link
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        onClick={() => setTooltipVisible(false)}
        {...sharedProps}
      >
        {inner}
      </Link>
    )
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`${copyLink}: ${link.label}`}
      {...sharedProps}
    >
      {inner}
    </button>
  )
}
