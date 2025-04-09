import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github } from "lucide-react"

export default function SimpleOSProjectPage() {
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

      <h1 className="text-4xl font-bold mb-4">Simple OS</h1>
      <p className="text-xl text-muted-foreground mb-8">A lightweight operating system implementation</p>

      <div className="aspect-video overflow-hidden rounded-lg mb-8">
        <Image
          src="/images/simple-os.png"
          alt="Simple OS Terminal"
          width={1200}
          height={600}
          className="object-contain w-full bg-sky-100"
        />
      </div>

      <div className="prose max-w-none mb-8">
        <h2>Project Overview</h2>
        <p>
          Simple OS is a minimalist operating system implementation designed to demonstrate core OS concepts. It
          provides a hands-on approach to understanding how operating systems work at a fundamental level, including
          process management, memory allocation, and file systems.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Basic kernel implementation</li>
          <li>Process scheduling and management</li>
          <li>Memory allocation and virtual memory</li>
          <li>Simple file system</li>
          <li>Device drivers for basic I/O</li>
          <li>Command-line interface</li>
        </ul>

        <h2>Technologies Used</h2>
        <ul>
          <li>C/C++ for core implementation</li>
          <li>Assembly for low-level operations</li>
          <li>QEMU for virtualization and testing</li>
          <li>Make for build automation</li>
          <li>GDB for debugging</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link
            href="https://github.com/c0d9nqa3/Simple-OS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Github className="mr-2 h-4 w-4" /> View on GitHub
          </Link>
        </Button>
      </div>
    </div>
  )
}
