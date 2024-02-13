'use client'

import { useCallback, useEffect } from 'react'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'

import { Button } from './ui/button'

export function BackArrow() {
  const router = useRouter()

  const onHome = useCallback(() => {
    router.push('/')
  }, [router])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onHome()
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [onHome])

  return (
    <Button variant="link" className="gap-3" onClick={onHome}>
      <ArrowLeftIcon /> Voltar (esc)
    </Button>
  )
}
