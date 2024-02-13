'use client'

import Image from 'next/image'

import { Slider } from './slider'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'
import { stacks } from '@/data/stacks'

export function Stack() {
  return (
    <div className="flex flex-col rounded-lg">
      <h2 className="text-slate-950 dark:text-gray-300 font-medium">Stack</h2>

      <Slider pauseOnHover>
        {stacks.map(({ name, image }) => (
          <TooltipProvider key={name}>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  key={name}
                  src={image}
                  alt={name}
                  className="h-12 w-12"
                />
              </TooltipTrigger>
              <TooltipContent>{name}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </Slider>
    </div>
  )
}
