'use client'

import { useTranslations } from 'next-intl'
import { buttonVariants } from './ui/button'
import { toast } from 'sonner'
import { DownloadIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/cn'

export function About() {
  const t = useTranslations('about')

  return (
    <div className="flex flex-col gap-4 items-start">
      <h2 className="text-gray-300 font-medium">{t('title')}</h2>

      <p className="text-gray-100">{t('part1')}</p>
      <p className="text-gray-100">{t('part2')}</p>
      <p className="text-gray-100">{t('part3')}</p>

      <a
        className={cn(buttonVariants({ variant: 'outline' }), 'gap-3')}
        href="/Rodrigo Godoy Curriculo.pdf"
        download
        onClick={() => toast.success(t('download-success'))}
      >
        <DownloadIcon />
        {t('download')}
      </a>
    </div>
  )
}
