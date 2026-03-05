import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

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
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
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
        </Avatar>
        <div className="flex flex-col">
          <span className="font-sans text-sm font-medium text-foreground">
            {author.name}
          </span>
          <span className="font-sans text-xs text-muted-foreground">
            {author.handle}
          </span>
        </div>
      </div>
      <p className="font-sans text-sm text-muted-foreground leading-relaxed">
        {text}
      </p>
    </Card>
  )
}
