import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function AIContentGeneratorPage() {
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

      <h1 className="text-4xl font-bold mb-4">AI Content Generator</h1>
      <p className="text-xl text-muted-foreground mb-8">Machine learning powered content creation</p>

      <div className="aspect-video overflow-hidden rounded-lg mb-8">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="AI Content Generator"
          width={1200}
          height={600}
          className="object-cover w-full"
        />
      </div>

      <div className="prose max-w-none mb-8">
        <h2>Project Overview</h2>
        <p>
          This AI-powered application generates high-quality content for blogs, social media, and marketing materials.
          Utilizing OpenAI's GPT models, it helps content creators and marketers produce engaging content efficiently.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Blog post generation with customizable topics and tones</li>
          <li>Social media content creation for multiple platforms</li>
          <li>Marketing copy generation for ads and campaigns</li>
          <li>Content editing and refinement tools</li>
          <li>SEO optimization suggestions</li>
          <li>Content scheduling and publishing integration</li>
        </ul>

        <h2>Technologies Used</h2>
        <ul>
          <li>Next.js for the frontend and API</li>
          <li>OpenAI API for content generation</li>
          <li>Tailwind CSS for styling</li>
          <li>Vercel AI SDK for AI integration</li>
          <li>Supabase for database and authentication</li>
          <li>Stripe for subscription management</li>
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
