import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { en } from '@/data/translations/en'
import { THEME_HEX } from '@/lib/themeColors'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const FONT_FAMILY = 'Oswald'
const FONT_WEIGHT = { medium: 500, bold: 700 } as const

// Satori can't read next/font, and needs static (non-variable) TTF instances.
const loadFont = (weight: number) =>
  readFile(join(process.cwd(), `assets/fonts/Oswald-${weight}.ttf`))

const NAME_LINE_STYLE = {
  color: THEME_HEX.nightInk,
  fontSize: '112px',
  fontWeight: FONT_WEIGHT.bold,
  letterSpacing: '-0.02em',
  lineHeight: 0.88,
  textTransform: 'uppercase',
} as const

const OgImage = async () => {
  const [medium, bold] = await Promise.all([
    loadFont(FONT_WEIGHT.medium),
    loadFont(FONT_WEIGHT.bold),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          width: '100%',
          height: '100%',
          backgroundColor: THEME_HEX.night,
          fontFamily: FONT_FAMILY,
          padding: '72px 80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: THEME_HEX.signalAmber,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              color: THEME_HEX.signalAmber,
              fontSize: '15px',
              fontWeight: FONT_WEIGHT.medium,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            {en.profile.statusLabel}
          </span>
        </div>

        <div style={NAME_LINE_STYLE}>{en.profile.nameFirst}</div>
        <div style={{ ...NAME_LINE_STYLE, marginBottom: '36px' }}>{en.profile.nameLast}</div>

        <div
          style={{
            height: '1px',
            backgroundColor: THEME_HEX.nightRuleStrong,
            marginBottom: '24px',
          }}
        />

        <div
          style={{
            color: THEME_HEX.nightInkMuted,
            fontSize: '20px',
            fontWeight: FONT_WEIGHT.medium,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          {en.profile.title}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: FONT_FAMILY, data: medium, style: 'normal', weight: FONT_WEIGHT.medium },
        { name: FONT_FAMILY, data: bold, style: 'normal', weight: FONT_WEIGHT.bold },
      ],
    },
  )
}

export default OgImage
