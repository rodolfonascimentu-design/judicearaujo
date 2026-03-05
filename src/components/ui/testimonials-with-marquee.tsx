import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn("py-32 lg:py-44 overflow-hidden", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center gap-4 text-center mb-16 lg:mb-24">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-medium mb-2">
            Depoimentos
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-light text-foreground tracking-[-0.02em] max-w-2xl">
            {title}
          </h2>
          <p className="font-sans text-sm text-muted-foreground max-w-lg font-light tracking-wide">
            {description}
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex animate-marquee gap-6" style={{ '--duration': '40s', '--gap': '1.5rem' } as React.CSSProperties}>
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                    className="w-[350px] shrink-0"
                  />
                ))
              ))}
            </div>
          </div>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  )
}
