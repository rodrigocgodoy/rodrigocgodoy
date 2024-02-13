// eslint-disable-next-line camelcase
import { unstable_setRequestLocale } from 'next-intl/server'

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
    <main className="flex flex-col gap-10 min-h-screen h-full mx-auto my-20 max-w-2xl px-6">
      <Intro />
      <About />
      <Stack />
    </main>
  )
}
