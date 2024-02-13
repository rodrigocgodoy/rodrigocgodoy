// eslint-disable-next-line camelcase
import { unstable_setRequestLocale } from 'next-intl/server'
import Image from 'next/image'

import { Stack } from '@/components/stack'
import { About } from '@/components/about'
import { Intro } from '@/components/intro'

export default function Home({
  params: { locale },
}: Readonly<{
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)

  return (
    <main className="flex flex-col gap-16 min-h-screen h-full mx-auto my-20 max-w-2xl px-6">
      <Intro />
      <About />
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
