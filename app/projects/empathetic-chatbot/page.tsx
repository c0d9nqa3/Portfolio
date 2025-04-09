import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github } from "lucide-react"

export default function EmpatheticChatbotPage() {
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

      <h1 className="text-4xl font-bold mb-4">Empathetic Chatbot</h1>
      <p className="text-xl text-muted-foreground mb-8">AI-powered empathetic conversation generator</p>

      <div className="aspect-video overflow-hidden rounded-lg mb-8">
        <Image
          src="/images/empathetic-chatbot.png"
          alt="Empathetic Chatbot Interface"
          width={1200}
          height={600}
          className="object-contain w-full bg-sky-100"
        />
      </div>

      <div className="prose max-w-none mb-8">
        <h2>Project Overview</h2>
        <p>
          The Empathetic Chatbot is an advanced AI system designed to generate empathetic responses in conversations. It
          uses natural language processing and machine learning techniques to understand emotional contexts and respond
          appropriately, making it ideal for applications in customer service, mental health support, and personal
          assistants.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Emotion recognition from text</li>
          <li>Context-aware response generation</li>
          <li>Personalized conversation memory</li>
          <li>Multi-turn dialogue management</li>
          <li>Empathy level adjustment</li>
          <li>Integration with various platforms</li>
        </ul>

        <h2>Technologies Used</h2>
        <ul>
          <li>Python for core implementation</li>
          <li>PyTorch for deep learning models</li>
          <li>Transformer-based architectures</li>
          <li>NLTK and spaCy for NLP processing</li>
          <li>Flask for API development</li>
          <li>Docker for containerization</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link
            href="https://github.com/c0d9nqa3/Empathetic-dialogue-generate-Empathetic-Chatbot-"
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
