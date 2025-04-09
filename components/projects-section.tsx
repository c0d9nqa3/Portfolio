import { ProjectCard, type ProjectProps } from "./project-card"

interface ProjectsSectionProps {
  title: string
  description: string
  projects: ProjectProps[]
}

export function ProjectsSection({ title, description, projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{title}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
