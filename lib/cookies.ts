export const COOKIE_KEYS = {
  theme: 'theme',
  lang: 'lang',
} as const

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365

export const writeCookie = (name: string, value: string) => {
  document.cookie = `${name}=${value}; path=/; max-age=${ONE_YEAR_SECONDS}; samesite=lax`
}
