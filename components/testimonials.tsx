import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Quote } from "lucide-react"

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    content:
      "StreamConf transformed our annual conference. The platform is intuitive, reliable, and our attendees loved the interactive features.",
    author: {
      name: "Sarah Johnson",
      role: "Event Director, TechSummit",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 2,
    content:
      "The analytics and engagement tools helped us understand our audience better than ever before. We saw a 40% increase in attendee participation.",
    author: {
      name: "Michael Chen",
      role: "CEO, FutureTalks",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 3,
    content:
      "From ticketing to post-event content, StreamConf handled everything seamlessly. It's the complete package for virtual events.",
    author: {
      name: "Emily Rodriguez",
      role: "Conference Manager, DesignCon",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container">
        <div className="flex flex-col gap-10">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Event Organizers Worldwide</h2>
            <p className="mt-4 text-muted-foreground">
              See what our customers have to say about their experience with StreamConf.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardHeader className="pb-2">
                  <Quote className="h-8 w-8 text-primary/20" />
                </CardHeader>
                <CardContent className="flex h-full flex-col justify-between gap-6">
                  <CardDescription className="text-base font-normal text-foreground">
                    "{testimonial.content}"
                  </CardDescription>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.author.avatar || "/placeholder.svg"}
                        alt={testimonial.author.name}
                      />
                      <AvatarFallback>{testimonial.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{testimonial.author.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.author.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
