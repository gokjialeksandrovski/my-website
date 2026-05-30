'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { type ContactLink } from '@/data/contact'

type CopyStatus = 'idle' | 'copied' | 'error'

const hasUrl = (link: ContactLink): link is ContactLink & { url: string } =>
  typeof link.url === 'string'

const INDICATOR: Record<CopyStatus, string> = { idle: '→', copied: '✓', error: '!' }

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
        <p className="font-body text-xs text-(--text-muted) leading-relaxed mb-1.5">
          {copyFailed}
        </p>
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

interface ContactRowProps {
  link: ContactLink
  copyFailed: string
  copyLink: string
  tooltip: string
}

const CopyRow = ({ link, copyFailed, tooltip }: Omit<ContactRowProps, 'copyLink'>) => {
  const { status, tooltipVisible, setTooltipVisible, handleCopy } = useCopyState(link.copyValue)
  const tooltipId = `tooltip-${link.id}`
  const showTooltip = tooltipVisible || status === 'error'

  return (
    <button
      type="button"
      onClick={handleCopy}
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => status !== 'error' && setTooltipVisible(false)}
      onFocus={() => setTooltipVisible(true)}
      onBlur={() => status !== 'error' && setTooltipVisible(false)}
      aria-describedby={tooltipId}
      className="group w-full flex items-center justify-between py-5 cursor-pointer text-left"
    >
      <div className="flex items-center gap-8 md:gap-12">
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
            copyValue={link.copyValue}
            tooltip={tooltip}
            copyFailed={copyFailed}
          />
        </span>
      </div>
      <span className="font-display text-sm text-(--text-muted) group-hover:text-(--accent) transition-colors duration-200">
        {INDICATOR[status]}
      </span>
    </button>
  )
}

const NavigableRow = ({ link, copyFailed, copyLink, tooltip }: ContactRowProps & { link: ContactLink & { url: string } }) => {
  const { status, tooltipVisible, setTooltipVisible, handleCopy } = useCopyState(link.copyValue)
  const tooltipId = `tooltip-${link.id}`
  const showTooltip = tooltipVisible || status === 'error'

  return (
    <div className="flex items-center justify-between py-5">
      <div className="flex items-center gap-8 md:gap-12">
        <span className="font-display text-[9px] tracking-[0.18em] uppercase text-(--text-muted) w-20 shrink-0">
          {link.label}
        </span>
        <span className="relative">
          <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => status !== 'error' && setTooltipVisible(false)}
            onFocus={() => setTooltipVisible(true)}
            onBlur={() => status !== 'error' && setTooltipVisible(false)}
            className="font-display text-sm md:text-base tracking-[0.02em] text-(--text-secondary) hover:text-(--accent) transition-colors duration-200"
          >
            {link.value}
          </Link>
          <ContactTooltip
            id={tooltipId}
            show={showTooltip}
            status={status}
            copyValue={link.copyValue}
            tooltip={tooltip}
            copyFailed={copyFailed}
          />
        </span>
      </div>

      <button
        type="button"
        onClick={handleCopy}
        onFocus={() => setTooltipVisible(true)}
        onBlur={() => status !== 'error' && setTooltipVisible(false)}
        aria-label={`${copyLink}: ${link.label}`}
        aria-describedby={tooltipId}
        className="font-display text-sm text-(--text-muted) hover:text-(--accent) transition-colors duration-200 cursor-pointer p-2 -mr-2"
      >
        {INDICATOR[status]}
      </button>
    </div>
  )
}

export const ContactRow = ({ link, copyFailed, copyLink, tooltip }: ContactRowProps) => {
  if (hasUrl(link)) return <NavigableRow link={link} copyFailed={copyFailed} copyLink={copyLink} tooltip={tooltip} />
  return <CopyRow link={link} copyFailed={copyFailed} tooltip={tooltip} />
}
