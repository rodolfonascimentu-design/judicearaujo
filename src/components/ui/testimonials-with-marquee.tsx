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
  compact?: boolean
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className,
  compact
}: TestimonialsSectionProps) {
  const isDark = className?.includes('bg-primary')

  return (
    <section className={cn("py-32 lg:py-44 overflow-hidden", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className={cn(
          "flex flex-col items-center gap-4 text-center",
          compact ? "mb-10 lg:mb-12" : "mb-16 lg:mb-24"
        )}>
          <p className={cn(
            "font-sans text-[10px] tracking-[0.35em] uppercase font-medium mb-2",
            isDark ? "text-primary-foreground/50" : "text-muted-foreground"
          )}>
            Depoimentos
          </p>
          <h2 className={cn(
            "font-display text-2xl md:text-4xl font-light tracking-[-0.02em] max-w-2xl",
            isDark ? "text-primary-foreground" : "text-foreground"
          )}>
            {title}
          </h2>
          <p className={cn(
            "font-sans text-sm max-w-lg font-light tracking-wide",
            compact && "lg:whitespace-nowrap",
            isDark ? "text-primary-foreground/60" : "text-muted-foreground"
          )}>
            {description}
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex animate-marquee gap-6" style={{ '--duration': '200s', '--gap': '1.5rem' } as React.CSSProperties}>
              {[...Array(3)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                    className={cn(
                      "w-[350px] shrink-0",
                      isDark && "border-primary-foreground/10 bg-primary-foreground/5 hover:bg-primary-foreground/10"
                    )}
                    dark={isDark}
                  />
                ))
              ))}
            </div>
          </div>

          {/* Gradient overlays */}
          <div className={cn(
            "pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r to-transparent",
            isDark ? "from-primary" : "from-[#FFFBF0]"
          )} />
          <div className={cn(
            "pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l to-transparent",
            isDark ? "from-primary" : "from-[#FFFBF0]"
          )} />
        </div>
      </div>
    </section>
  )
}
