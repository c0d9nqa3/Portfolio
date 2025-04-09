import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export interface ProjectProps {
  title: string
  description: string
  content: string
  imageUrl: string
  imageAlt: string
  link: string
  slug: string
  fullWidth?: boolean
}

export function ProjectCard({
  title,
  description,
  content,
  imageUrl,
  imageAlt,
  link,
  slug,
  fullWidth = false,
}: ProjectProps) {
  return (
    <Card
      className={`shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        fullWidth ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={`/projects/${slug}`} className="block">
          <div className={`aspect-video overflow-hidden rounded-md ${fullWidth ? "max-h-[400px]" : ""}`}>
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={imageAlt}
              width={fullWidth ? 800 : 600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Link>
        <p className="mt-4 text-muted-foreground">{content}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href={`/projects/${slug}`} className="flex items-center justify-center">
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
