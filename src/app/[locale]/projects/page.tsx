// eslint-disable-next-line camelcase
import { unstable_setRequestLocale } from 'next-intl/server'
import { draftMode } from 'next/headers'

import { Project, contentfulClient, parseContentfulProject } from '@/lib/cms'
import { TypeProjectSkeleton } from '@/contentful/types'
import { Projects as ProjectsComponent } from '@/components/projetcs'
import { BackArrow } from '@/components/backArrow'

export default async function Projects({
  params: { locale },
}: Readonly<{
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)
  const data = await getData({ locale, preview: draftMode().isEnabled })

  return (
    <main className="flex flex-col items-start mx-auto my-20 max-w-2xl px-6">
      <BackArrow />
      <ProjectsComponent projects={data} />
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
