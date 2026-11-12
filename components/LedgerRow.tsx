interface LedgerRowProps {
  aside: React.ReactNode
  head: React.ReactNode
  children: React.ReactNode
}

// On wide screens the period and name stay pinned under the header while a long entry scrolls past,
// so the reader always knows whose evidence they are in.
const STICKY_CELL = 'lg:sticky lg:top-[calc(var(--header-height)+1.5rem)]'

export const LedgerRow = ({ aside, head, children }: LedgerRowProps) => (
  <li className="grid ledger gap-y-5 py-8 first:pt-0 last:pb-0 md:items-baseline">
    <div className={STICKY_CELL}>{aside}</div>
    <div className={STICKY_CELL}>{head}</div>
    <div className="md:col-start-2 lg:col-start-3">{children}</div>
  </li>
)

export const LedgerList = ({ children }: { children: React.ReactNode }) => (
  <ul role="list" className="divide-y divide-rule">
    {children}
  </ul>
)
