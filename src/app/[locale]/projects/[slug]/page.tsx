// eslint-disable-next-line camelcase
import { unstable_setRequestLocale } from 'next-intl/server'
import { format } from 'date-fns'
import { documentToReactComponents as renderRichText } from '@contentful/rich-text-react-renderer'
import { draftMode } from 'next/headers'
import { Metadata } from 'next'

import { BackArrow } from '@/components/backArrow'
import { Project, contentfulClient, parseContentfulProject } from '@/lib/cms'
import { TypeProjectSkeleton } from '@/contentful/types'

export default async function Project({
  params: { locale, slug },
}: Readonly<{
  params: { locale: string; slug: string }
}>) {
  unstable_setRequestLocale(locale)
  const data = await getData({ locale, slug, preview: draftMode().isEnabled })

  if (!data) {
    return (
      <main className="flex flex-col items-start mx-auto my-20 max-w-2xl px-6">
        <BackArrow />

        <div>
          <h1>Project Not Found</h1>
        </div>
      </main>
    )
  }

  return (
    <main className="flex flex-col items-start mx-auto my-20 max-w-2xl px-6">
      <BackArrow />
      <h1 className="text-xl m-0 font-medium text-gray-950 dark:text-gray-50">
        {data.title}
      </h1>
      <span className="text-sm text-gray-950 dark:text-gray-400">
        {format(new Date(data.startDate), 'MMMM/yyyy')}
        {' - '}
        {!data.hasEndDate
          ? 'Até o momento'
          : format(new Date(data.endDate!), 'MMMM/yyyy')}
      </span>
      <div className="rich-text-contentful">{renderRichText(data.content)}</div>
    </main>
  )
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string }
}): Promise<Metadata> {
  try {
    const client = contentfulClient({ preview: draftMode().isEnabled })

    const { items } = await client.getEntries<TypeProjectSkeleton>({
      locale,
      'fields.slug': slug,
      content_type: 'project',
      include: 2,
    })

    const data = parseContentfulProject(items[0])

    if (data) {
      const { title, resume, ogImage } = data

      return {
        title,
        description: resume,
        openGraph: {
          siteName: title,
          title,
          description: resume,
          url: '',
          type: 'website',
          images: [
            {
              url: ogImage,
            },
          ],
        },
        twitter: {
          card: 'summary_large_image',
          site: '@site',
          creator: '@rodrigogodoy__',
          images: [{ url: ogImage }],
        },
      }
    }

    return {
      title: 'Project Not Found',
      robots: 'noindex,nofollow',
    }
  } catch (error) {
    console.error(error)
    return {
      title: 'Project Not Found',
      robots: 'noindex,nofollow',
    }
  }
}

interface GetDataProps {
  slug: string
  locale: string
  preview: boolean
}

async function getData({ slug, locale, preview }: GetDataProps) {
  try {
    const client = contentfulClient({ preview })

    const {
      items: [data],
    } = await client.getEntries<TypeProjectSkeleton>({
      locale,
      'fields.slug': slug,
      content_type: 'project',
      include: 2,
    })

    console.log(parseContentfulProject(data))

    return parseContentfulProject(data) || null
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function generateStaticParams() {
  const locales = ['pt-BR', 'en']

  try {
    const client = contentfulClient({ preview: true })
    const data = await client.getEntries<TypeProjectSkeleton>({
      locale: 'pt-BR',
      content_type: 'project',
    })

    const dataFormatted = data.items?.map(
      (item) => parseContentfulProject(item) as Project,
    )

    return dataFormatted.map((item) => {
      return locales.map((locale) => {
        return { params: { slug: item.slug, locale } }
      })
    })
  } catch (error) {
    console.error(error)
    return []
  }
}
