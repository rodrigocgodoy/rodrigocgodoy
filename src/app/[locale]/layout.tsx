import { NextIntlClientProvider, useMessages } from 'next-intl'
// eslint-disable-next-line camelcase
import { unstable_setRequestLocale } from 'next-intl/server'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'
import { CommandDialog } from '@/components/command-dialog'

export const metadata: Metadata = {
  title: 'Rodrigo Godoy',
  description: 'Site Rodrigo Godoy',
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)

  const messages = useMessages()

  return (
    <html
      lang={locale}
      className={GeistSans.className}
      suppressHydrationWarning
    >
      <head />
      <body className="bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CommandDialog />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export async function generateStaticParams() {
  return [{ lang: 'pt-BR' }, { lang: 'en' }]
}
