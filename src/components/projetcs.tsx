import { ArrowRightIcon } from '@radix-ui/react-icons'

import { buttonVariants } from './ui/button'
import { Link } from '@/lib/navigation'
import { cn } from '@/lib/cn'

interface ProjectsProps {
  projects:
    | {
        slug: string
        title: string
        resume: string
      }[]
    | null
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="flex flex-col rounded-lg">
      <h2 className="text-slate-950 dark:text-gray-300 font-bold">Projetos</h2>

      <div className="flex flex-col gap-3 mt-3">
        {projects?.map((project) => (
          <Link
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'flex justify-between gap-3 h-auto -mx-3.5 group',
            )}
            key={project.title}
            href={`/projects/${project.slug}`}
          >
            <div className="flex flex-col items-start">
              <h3 className="text-slate-950 dark:text-gray-300 font-medium">
                {project.title}
              </h3>
              <p className="text-slate-900 dark:text-gray-500">
                {project.resume}
              </p>
            </div>
            <ArrowRightIcon className="size-4" />
          </Link>
        ))}
      </div>
    </section>
  )
}
