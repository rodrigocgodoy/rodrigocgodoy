import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'

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
          <Button
            key={project.title}
            className="flex justify-between gap-3 h-auto -mx-3.5 group"
            variant="ghost"
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
          </Button>
        ))}
      </div>
    </section>
  )
}
