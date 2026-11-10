export const COOKIE_KEYS = {
  theme: 'theme',
  lang: 'lang',
} as const

const SECONDS_PER_DAY = 86_400
const DAYS_PER_YEAR = 365
const ONE_YEAR_SECONDS = SECONDS_PER_DAY * DAYS_PER_YEAR

export const writeCookie = (name: string, value: string) => {
  document.cookie = `${name}=${value}; path=/; max-age=${ONE_YEAR_SECONDS}; samesite=lax`
}
