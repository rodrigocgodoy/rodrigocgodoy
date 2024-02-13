import { useFormatter, useTranslations } from 'next-intl'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'
import { socials } from '@/data/socials'
import { Link } from '@/lib/navigation'

export function Footer() {
  const format = useFormatter()
  const t = useTranslations('footer')

  return (
    <footer className="flex flex-col gap-3 m-5 mx-auto max-w-2xl p-6 bg-slate-50 dark:bg-zinc-900 rounded-2xl">
      <div className="flex gap-1">
        {socials?.map((social) => {
          const Icon = social.icon
          return (
            <TooltipProvider key={social.name}>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={social.url}>{Icon}</Link>
                </TooltipTrigger>
                <TooltipContent>{social.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        })}
      </div>
      <span className="text-xs font-medium text-slate-950 dark:text-slate-50">
        {t('copyright', {
          year: format.dateTime(new Date(), {
            year: 'numeric',
          }),
        })}
      </span>
    </footer>
  )
}
