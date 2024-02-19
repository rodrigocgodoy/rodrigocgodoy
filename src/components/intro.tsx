import { useTranslations } from 'next-intl'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from './ui/badge'

export function Intro() {
  const t = useTranslations('about')

  return (
    <section className="flex gap-3 items-center justify-between">
      <div className="flex gap-3 item-center">
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
      </div>

      <div className="relative">
        <Badge variant="outline">Disponivel para novas vagas</Badge>

        <span className="absolute -right-1 -top-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
        </span>
      </div>
    </section>
  )
}
