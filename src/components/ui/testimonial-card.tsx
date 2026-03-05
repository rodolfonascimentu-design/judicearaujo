import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
  dark?: boolean
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className,
  dark
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  const initials = author.name.split(' ').map(n => n[0]).join('').slice(0, 2)
  
  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "flex flex-col gap-4 rounded-[6px] border border-border/50 bg-card p-6",
        "transition-colors duration-300 hover:bg-muted/50",
        href && "cursor-pointer",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback className={cn(
            "text-xs font-medium",
            dark ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"
          )}>
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className={cn(
            "font-sans text-sm font-medium",
            dark ? "text-primary-foreground" : "text-foreground"
          )}>
            {author.name}
          </span>
          <span className={cn(
            "font-sans text-xs",
            dark ? "text-primary-foreground/50" : "text-muted-foreground"
          )}>
            {author.handle}
          </span>
        </div>
      </div>
      <p className={cn(
        "font-sans text-sm leading-relaxed",
        dark ? "text-primary-foreground/70" : "text-muted-foreground"
      )}>
        {text}
      </p>
    </Card>
  )
}
