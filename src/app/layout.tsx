import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Rodrigo Godoy',
  description: 'Site Rodrigo Godoy',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900">
        {children}
      </body>
    </html>
  )
}
