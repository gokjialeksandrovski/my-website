import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const OgImage = () =>
  new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          width: '100%',
          height: '100%',
          backgroundColor: '#1c1912',
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
              backgroundColor: '#c89a20',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              color: '#c89a20',
              fontSize: '15px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            Available for work
          </span>
        </div>

        <div
          style={{
            color: '#eae5dc',
            fontSize: '112px',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 0.88,
            textTransform: 'uppercase',
          }}
        >
          Gordan
        </div>
        <div
          style={{
            color: '#eae5dc',
            fontSize: '112px',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 0.88,
            textTransform: 'uppercase',
            marginBottom: '36px',
          }}
        >
          Aleksandrovski
        </div>

        <div
          style={{
            height: '1px',
            backgroundColor: '#36312a',
            marginBottom: '24px',
          }}
        />

        <div
          style={{
            color: '#6e6455',
            fontSize: '20px',
            fontWeight: 500,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          Fullstack Developer
        </div>
      </div>
    ),
    { ...size },
  )

export default OgImage
