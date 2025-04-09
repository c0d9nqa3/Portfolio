import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  name: string
  role: string
  ctaText: string
  ctaLink: string
}

export function HeroSection({ name, role, ctaText, ctaLink }: HeroSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none">
              {name}
            </h1>
            <p className="mx-auto max-w-[700px] text-2xl font-medium text-muted-foreground">{role}</p>
          </div>
          <div className="space-x-4">
            <Button asChild>
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
