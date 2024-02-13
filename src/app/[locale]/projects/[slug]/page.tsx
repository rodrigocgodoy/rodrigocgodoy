// eslint-disable-next-line camelcase
import { unstable_setRequestLocale } from 'next-intl/server'
import { format } from 'date-fns'
import matter from 'gray-matter'
import { marked } from 'marked'
import { Metadata } from 'next'
import path from 'path'
import fs from 'fs'

import { BackArrow } from '@/components/backArrow'

export default async function Project({
  params: { locale, slug },
}: Readonly<{
  params: { locale: string; slug: string }
}>) {
  unstable_setRequestLocale(locale)
  const data = await getData({ locale, slug })

  if (!data) {
    return (
      <main className="flex flex-col gap-3 min-h-screen h-full mx-auto my-20 max-w-2xl px-6">
        <div>
          <h1>Project Not Found</h1>
        </div>
      </main>
    )
  }

  const { title, startDate, endDate, content } = data

  return (
    <main className="flex flex-col items-start mx-auto my-20 max-w-2xl px-6">
      <BackArrow />
      <h1 className="text-xl m-0 font-medium text-gray-950 dark:text-gray-50">
        {title}
      </h1>
      <span className="text-sm text-gray-950 dark:text-gray-400">
        {format(new Date(startDate), 'MMMM/yyyy')}
        {' - '}
        {endDate === 'current'
          ? 'Até o momento'
          : format(new Date(endDate), 'MMMM/yyyy')}
      </span>
      <div
        className="mt-10"
        dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
      />
    </main>
  )
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string }
}): Promise<Metadata> {
  try {
    const markdownWithMeta = fs.readFileSync(
      path.join('src/data/projects/' + slug + `/${locale}.mdx`),
      'utf-8',
    )

    const {
      data: { title, description },
    } = matter(markdownWithMeta)

    const ogImage = '/logo.jpg'

    return {
      title,
      description,
      openGraph: {
        siteName: title,
        title,
        description,
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
}

interface GetDataReturn {
  title: string
  startDate: string
  endDate: string
  content: string
}

async function getData({
  slug,
  locale,
}: GetDataProps): Promise<GetDataReturn | null> {
  try {
    const markdownWithMeta = fs.readFileSync(
      path.join('src/data/projects/' + slug + `/${locale}.mdx`),
      'utf-8',
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    console.log(content)

    return {
      title: frontmatter.title,
      startDate: frontmatter.startDate,
      endDate: frontmatter.endDate,
      content,
    }
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function generateStaticParams() {
  const locales = ['pt', 'en']
  const dirnames = fs.readdirSync(path.join('src/data/projects'))
  const pathsArray = [] as unknown[]

  dirnames.map((dirname) => {
    return locales.map((language) => {
      return pathsArray.push({ params: { slug: dirname, locale: language } })
    })
  })

  return pathsArray
}
