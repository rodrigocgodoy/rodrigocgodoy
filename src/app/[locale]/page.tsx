import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('index')

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Avatar>
        <AvatarImage src="/logo.jpg" />
        <AvatarFallback>RG</AvatarFallback>
      </Avatar>
      <h1 className="text-4xl font-mono font-extrabold">{t('title')}</h1>
    </main>
  )
}
