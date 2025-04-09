import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import type { ProjectProps } from "@/components/project-card"

export default function Portfolio() {
  // Project data
  const projects: ProjectProps[] = [
    {
      title: "Social Network",
      description: "A full-stack social networking platform",
      content:
        "A comprehensive social networking platform built with modern web technologies. Features include user profiles, friend connections, posts, comments, and real-time notifications.",
      imageUrl: "/images/social-network.png",
      imageAlt: "Social Network Diagram",
      link: "https://github.com/c0d9nqa3/SocialNetWork",
      slug: "social-network",
    },
    {
      title: "Simple OS",
      description: "A lightweight operating system implementation",
      content:
        "A minimalist operating system implementation focusing on core OS concepts including process management, memory allocation, and file systems.",
      imageUrl: "/images/simple-os.png",
      imageAlt: "Simple OS Terminal",
      link: "https://github.com/c0d9nqa3/Simple-OS",
      slug: "simple-os",
    },
    {
      title: "Empathetic Chatbot",
      description: "AI-powered empathetic conversation generator",
      content:
        "An advanced chatbot designed to generate empathetic responses in conversations. Utilizes natural language processing and machine learning to understand and respond to emotional contexts.",
      imageUrl: "/images/empathetic-chatbot.png",
      imageAlt: "Empathetic Chatbot Interface",
      link: "https://github.com/c0d9nqa3/Empathetic-dialogue-generate-Empathetic-Chatbot-",
      slug: "empathetic-chatbot",
      fullWidth: true,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="font-semibold">
            WY
          </Link>
          <nav className="flex gap-6">
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection name="Weijia Yan" role="Software Engineer" ctaText="View My Work" ctaLink="#projects" />

        {/* Projects Section */}
        <ProjectsSection title="My Projects" description="Check out some of my recent work" projects={projects} />

        {/* Contact Section */}
        <ContactSection
          title="Get In Touch"
          description="I'm always open to new opportunities and collaborations"
          email="Wj_Yann@outlook.com"
          githubUrl="https://github.com/c0d9nqa3"
          linkedinUrl="https://www.linkedin.com/in/weijia-yan-914146211"
        />
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Weijia Yan. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/c0d9nqa3" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/weijia-yan-914146211" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
