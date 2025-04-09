import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function ECommerceProjectPage() {
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

      <h1 className="text-4xl font-bold mb-4">E-Commerce Platform</h1>
      <p className="text-xl text-muted-foreground mb-8">A full-stack e-commerce solution</p>

      <div className="aspect-video overflow-hidden rounded-lg mb-8">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="E-Commerce Platform"
          width={1200}
          height={600}
          className="object-cover w-full"
        />
      </div>

      <div className="prose max-w-none mb-8">
        <h2>Project Overview</h2>
        <p>
          This e-commerce platform provides a complete solution for online stores. Built with Next.js, Tailwind CSS, and
          Stripe integration, it offers a seamless shopping experience for customers and powerful management tools for
          store owners.
        </p>

        <h2>Features</h2>
        <ul>
          <li>User authentication and account management</li>
          <li>Product catalog with search and filtering</li>
          <li>Shopping cart and checkout process</li>
          <li>Secure payment processing with Stripe</li>
          <li>Order management and tracking</li>
          <li>Admin dashboard for inventory management</li>
        </ul>

        <h2>Technologies Used</h2>
        <ul>
          <li>Next.js for frontend and API routes</li>
          <li>Tailwind CSS for styling</li>
          <li>Stripe for payment processing</li>
          <li>PostgreSQL for database</li>
          <li>Prisma as ORM</li>
          <li>NextAuth.js for authentication</li>
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
