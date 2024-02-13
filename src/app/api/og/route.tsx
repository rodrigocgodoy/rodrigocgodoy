/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    const hasTitle = searchParams.has('title')
    const hasType = searchParams.has('type')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Default title'
    const type = hasType
      ? searchParams.get('type')?.slice(0, 100)
      : 'Default type'

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: 'rgb(24, 24, 27)',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            position: 'relative',
          }}
        >
          <img
            alt="Vercel"
            height={350}
            width={350}
            src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
            style={{
              position: 'absolute',
              opacity: 0.4,
              right: -120,
              bottom: -120,
            }}
          />
          <img
            alt="Vercel"
            height={300}
            width={300}
            src="https://www.svgrepo.com/show/354119/nodejs-icon.svg"
            style={{
              position: 'absolute',
              opacity: 0.4,
              left: -100,
              top: -100,
            }}
          />
          <span
            style={{
              fontSize: 35,
              fontStyle: 'normal',
              color: 'white',
            }}
          >
            {type}:
          </span>
          <span
            style={{
              fontSize: 60,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              color: 'white',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.2,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </span>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: unknown) {
    console.error(e)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
