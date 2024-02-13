import { useTranslations } from 'next-intl'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Intro() {
  const t = useTranslations('about')

  return (
    <section className="flex gap-3 item-center select-none">
      <Avatar className="h-14 w-14 border border-gray-950 dark:border-gray-50">
        <AvatarImage src="/logo.jpg" alt="Rodrigo Godoy" />
        <AvatarFallback>RG</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-xs font-mono font-light text-slate-950 dark:text-slate-50">
          @rodrigocgodoy
        </h3>
        <h1 className="text-2xl font-bold text-slate-950 dark:text-slate-50">
          Rodrigo Correia Godoy
        </h1>
        <h2 className="text-base text-gray-700 dark:text-gray-400">
          {t('role')}
        </h2>
      </div>
    </section>
  )
}
