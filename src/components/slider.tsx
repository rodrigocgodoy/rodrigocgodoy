import { cn } from '@/lib/cn'
import { createArray } from '@/lib/create-array'

type SliderProps = {
  children: React.ReactNode
  pauseOnHover?: boolean
  className?: string
}

export function Slider({ children, pauseOnHover, className }: SliderProps) {
  return (
    <div
      className={cn(
        'group relative flex gap-4 overflow-hidden py-8',
        className,
      )}
      data-testid="slider"
    >
      {createArray(0, 2).map((i) => (
        <div
          key={i}
          className={cn(
            'flex shrink-0 animate-slide justify-around gap-4 [--gap:1rem]',
            pauseOnHover && 'group-hover:paused',
          )}
          data-testid={`slider-child-${i + 1}`}
        >
          {children}
        </div>
      ))}
      <div className="pointer-events-none absolute inset-0 bg-fade-gradient-slate-50 dark:bg-fade-gradient" />
    </div>
  )
}
