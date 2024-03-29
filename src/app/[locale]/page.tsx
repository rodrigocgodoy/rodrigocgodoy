// eslint-disable-next-line camelcase
import { unstable_setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import { draftMode } from 'next/headers'

import { Stack } from '@/components/stack'
import { About } from '@/components/about'
import { Intro } from '@/components/intro'
import { Projects } from '@/components/projetcs'
import { Project, contentfulClient, parseContentfulProject } from '@/lib/cms'
import { TypeProjectSkeleton } from '@/contentful/types'

export default async function Home({
  params: { locale },
}: Readonly<{
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)
  const data = await getData({ locale, preview: draftMode().isEnabled })

  return (
    <main className="flex flex-col gap-16 mx-auto my-20 max-w-2xl px-6">
      <Intro />
      <About />
      <Projects projects={data} />
      <Stack />

      <Image
        src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
        alt="ReactJS"
        width={550}
        height={550}
        className="fixed -right-[195px] -bottom-[195px] h-[550px] w-[550px] opacity-15"
      />
      <Image
        src="https://www.svgrepo.com/show/354119/nodejs-icon.svg"
        alt="Node.js"
        width={400}
        height={400}
        className="fixed -left-[100px] -top-[100px] h-[400px] w-[400px] opacity-15"
      />
    </main>
  )
}

interface GetDataProps {
  locale: string
  preview: boolean
}

async function getData({ locale, preview }: GetDataProps) {
  try {
    const client = contentfulClient({ preview })
    const data = await client.getEntries<TypeProjectSkeleton>({
      locale,
      content_type: 'project',
      limit: 5,
    })

    const dataFormatted = data.items?.map(
      (item) => parseContentfulProject(item) as Project,
    )

    return dataFormatted || null
  } catch (error) {
    console.error(error)
    return null
  }
}
