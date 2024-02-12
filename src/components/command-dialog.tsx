'use client'

import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import * as React from 'react'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  SunIcon,
  MoonIcon,
  LaptopIcon,
  GlobeIcon,
} from '@radix-ui/react-icons'

import {
  CommandDialog as CommandD,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { usePathname, useRouter } from '@/lib/navigation'

type Groups = Array<{
  heading: string
  actions: Array<{
    name: string
    icon: JSX.Element
    onSelect: () => void | Promise<void | boolean>
  }>
}>

export function CommandDialog() {
  const [open, setOpen] = React.useState(false)
  const { setTheme } = useTheme()

  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('command')

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const openLink = React.useCallback((url: string) => {
    window.open(url, '_blank')
  }, [])

  const groups: Groups = [
    {
      heading: t('language-heading'),
      actions: [
        {
          name: t('language-en'),
          icon: <GlobeIcon />,
          onSelect: () => router.replace(pathname, { locale: 'en' }),
        },
        {
          name: t('language-pt'),
          icon: <GlobeIcon />,
          onSelect: () => router.replace(pathname, { locale: 'pt-BR' }),
        },
      ],
    },
    {
      heading: t('theme-heading'),
      actions: [
        {
          name: t('theme-light'),
          icon: <SunIcon />,
          onSelect: () => setTheme('light'),
        },
        {
          name: t('theme-dark'),
          icon: <MoonIcon />,
          onSelect: () => setTheme('dark'),
        },
        {
          name: t('theme-system'),
          icon: <LaptopIcon />,
          onSelect: () => setTheme('system'),
        },
      ],
    },
    // {
    //   heading: t('latest-projects-heading'),
    //   actions: [
    //     {
    //       name: 'Mary Bin',
    //       icon: <Wheat />,
    //       onSelect: () => openLink('https://www.marybin.com.br/'),
    //     },
    //   ],
    // },
    {
      heading: t('socials-heading'),
      actions: [
        {
          name: 'GitHub',
          icon: <GitHubLogoIcon />,
          onSelect: () => openLink('https://github.com/rodrigocgodoy'),
        },
        {
          name: 'LinkedIn',
          icon: <LinkedInLogoIcon />,
          onSelect: () => openLink('https://linkedin.com/in/rodrigocgodoy'),
        },
        {
          name: 'Instagram',
          icon: <InstagramLogoIcon />,
          onSelect: () => openLink('https://instagram.com/rodrigocgodoy'),
        },
        {
          name: 'X (Twitter)',
          icon: <TwitterLogoIcon />,
          onSelect: () => openLink('https://twitter.com/rodrigogodoy__'),
        },
      ],
    },
  ]

  return (
    <>
      <button
        onClick={() => setOpen((open) => !open)}
        className="fixed left-5 bottom-5 gap-1 pointer select-none h-16 w-16 flex justify-center items-center border rounded-full font-mono font-medium text-slate-50 dark:text-slate-950 bg-slate-950 dark:bg-slate-50"
      >
        <span className="text-xl">⌘</span>
        <span className="text-sm">+</span>
        <span className="text-sm">K</span>
      </button>
      <CommandD open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={`${t('search')} ↵`} />
        <CommandList>
          <CommandEmpty>{t('search-empty')}</CommandEmpty>
          {groups.map((group) => (
            <CommandGroup key={group.heading} heading={group.heading}>
              {group.actions.map((action) => (
                <CommandItem key={action.name} onSelect={action.onSelect}>
                  {action.icon}
                  {action.name}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandD>
    </>
  )
}
