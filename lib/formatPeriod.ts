export const PRESENT = 'present'

type YearMonth = `${number}-${number}`

export interface Period {
  readonly start: YearMonth
  readonly end: YearMonth | typeof PRESENT
}

export interface PeriodLabels {
  readonly months: readonly string[]
  readonly present: string
}

// Month names come from the dictionary rather than Intl so server and browser ICU data can't disagree at hydration.
const formatYearMonth = (value: YearMonth, months: readonly string[]) => {
  const [year, month] = value.split('-').map(Number)
  return `${months[month - 1]} ${year}`
}

export const isOngoing = ({ end }: Period) => end === PRESENT

export const formatPeriod = (period: Period, { months, present }: PeriodLabels) => {
  const start = formatYearMonth(period.start, months)
  if (period.end === period.start) return start
  const end = period.end === PRESENT ? present : formatYearMonth(period.end, months)
  return `${start} – ${end}`
}
