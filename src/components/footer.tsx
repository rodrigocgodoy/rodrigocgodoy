import { useFormatter, useTranslations } from 'next-intl'

export function Footer() {
  const format = useFormatter()
  const t = useTranslations('footer')

  return (
    <footer className="flex m-5 mx-auto max-w-2xl p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl">
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
