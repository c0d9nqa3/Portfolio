import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github } from "lucide-react"

export default function SocialNetworkProjectPage() {
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

      <h1 className="text-4xl font-bold mb-4">Social Network</h1>
      <p className="text-xl text-muted-foreground mb-8">A full-stack social networking platform</p>

      <div className="aspect-video overflow-hidden rounded-lg mb-8">
        <Image
          src="/images/social-network.png"
          alt="Social Network Diagram"
          width={1200}
          height={600}
          className="object-contain w-full bg-sky-100"
        />
      </div>

      <div className="prose max-w-none mb-8">
        <h2>Project Overview</h2>
        <p>
          This social networking platform provides a comprehensive solution for connecting users and sharing content.
          Built with modern web technologies, it offers a seamless experience for users to create profiles, connect with
          friends, share posts, and engage with content.
        </p>

        <h2>Features</h2>
        <ul>
          <li>User authentication and profile management</li>
          <li>Friend connections and network visualization</li>
          <li>Post creation and sharing</li>
          <li>Comments and reactions</li>
          <li>Real-time notifications</li>
          <li>Privacy controls and user settings</li>
        </ul>

        <h2>Technologies Used</h2>
        <ul>
          <li>React for the frontend</li>
          <li>Node.js and Express for the backend</li>
          <li>MongoDB for the database</li>
          <li>Socket.io for real-time features</li>
          <li>JWT for authentication</li>
          <li>D3.js for network visualization</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link
            href="https://github.com/c0d9nqa3/SocialNetWork"
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
