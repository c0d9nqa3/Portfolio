import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function TaskManagementProjectPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-4">Task Management App</h1>
      <p className="text-xl text-muted-foreground mb-8">Productivity tool for teams</p>

      <div className="aspect-video overflow-hidden rounded-lg mb-8">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Task Management App"
          width={1200}
          height={600}
          className="object-cover w-full"
        />
      </div>

      <div className="prose max-w-none mb-8">
        <h2>Project Overview</h2>
        <p>
          This task management application helps teams organize and track their work efficiently. With real-time updates
          and a drag-and-drop interface, it makes project management intuitive and collaborative.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Kanban board with drag-and-drop functionality</li>
          <li>Task creation, assignment, and tracking</li>
          <li>Real-time updates and notifications</li>
          <li>Team collaboration tools</li>
          <li>Project timeline and milestone tracking</li>
          <li>Customizable workflows</li>
        </ul>

        <h2>Technologies Used</h2>
        <ul>
          <li>React for the frontend</li>
          <li>Next.js for server-side rendering</li>
          <li>Tailwind CSS for styling</li>
          <li>React DnD for drag-and-drop functionality</li>
          <li>Socket.io for real-time updates</li>
          <li>MongoDB for database</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Github className="mr-2 h-4 w-4" /> View Code
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="https://example.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
          </Link>
        </Button>
      </div>
    </div>
  )
}
