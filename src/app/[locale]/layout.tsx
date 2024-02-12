import '../../styles/globals.css'

// eslint-disable-next-line camelcase
import { unstable_setRequestLocale } from 'next-intl/server'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'
import { CommandDialog } from '@/components/command-dialog'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Rodrigo Godoy',
  description: 'Site Rodrigo Godoy',
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale} className={inter.className} suppressHydrationWarning>
      <head />
      <body className="bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CommandDialog />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export async function generateStaticParams() {
  return [{ lang: 'pt-BR' }, { lang: 'en' }]
}
