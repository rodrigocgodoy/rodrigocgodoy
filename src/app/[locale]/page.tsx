import { useTranslations } from 'next-intl'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Home() {
  const t = useTranslations('about')

  return (
    <main className="flex min-h-screen mx-auto my-20 max-w-2xl px-6">
      <div className="flex gap-3 item-center">
        <Avatar className="h-14 w-14 border border-gray-950 dark:border-gray-50">
          <AvatarImage src="/logo.jpg" alt="Rodrigo Godoy" />
          <AvatarFallback>RG</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-mono font-bold text-slate-950 dark:text-slate-50">
            Rodrigo Correia Godoy
          </h1>
          <h2 className="text-base text-gray-700 dark:text-gray-400">
            {t('role')}
          </h2>
        </div>
      </div>
    </main>
  )
}
