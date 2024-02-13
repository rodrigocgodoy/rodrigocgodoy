// eslint-disable-next-line camelcase
import { unstable_setRequestLocale } from 'next-intl/server'
import matter from 'gray-matter'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'

import { Stack } from '@/components/stack'
import { About } from '@/components/about'
import { Intro } from '@/components/intro'
import { Projects } from '@/components/projetcs'

export default async function Home({
  params: { locale },
}: Readonly<{
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)
  const data = await getData({ locale })

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
}

interface GetDataReturn {
  slug: string
  title: string
  resume: string
}

async function getData({
  locale,
}: GetDataProps): Promise<GetDataReturn[] | null> {
  try {
    const dirnames = fs.readdirSync(path.join('src/data/projects'))

    const data = dirnames
      .map((dirname) => {
        try {
          const markdownWithMeta = fs.readFileSync(
            path.join('src/data/projects/' + dirname + `/${locale}.mdx`),
            'utf-8',
          )
          const { data: frontmatter } = matter(markdownWithMeta)
          return {
            slug: dirname,
            title: frontmatter.title,
            resume: frontmatter.resume,
          }
        } catch (error) {
          console.error(error)
          return undefined
        }
      })
      .filter((e) => e)

    return data as GetDataReturn[]
  } catch (error) {
    console.error(error)
    return null
  }
}
