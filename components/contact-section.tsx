import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

interface ContactSectionProps {
  title: string
  description: string
  email: string
  githubUrl: string
  linkedinUrl: string
}

export function ContactSection({ title, description, email, githubUrl, linkedinUrl }: ContactSectionProps) {
  return (
    <section id="contact" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{title}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{description}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Button variant="outline" asChild>
              <Link href={`mailto:${email}`} className="flex items-center">
                <Mail className="mr-2 h-4 w-4" /> {email}
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
