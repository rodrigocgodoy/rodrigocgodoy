'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { Button } from './ui/button'

interface DraftProps {
  draftMode: boolean
}

export function Draft({ draftMode }: DraftProps) {
  const pathname = usePathname()

  if (draftMode) {
    return (
      <div className="bg-orange-300 flex justify-center items-center z-20">
        <p>Draft mode is on!</p>
        <Link href={`/api/disable-draft?redirect=${pathname}`} passHref>
          <Button variant="link">Sair</Button>
        </Link>
      </div>
    )
  }
}
