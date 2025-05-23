import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, MapPin, Users } from "lucide-react"
import Link from "next/link"

// Mock data for upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "Tech Conference 2024",
    description: "Join industry leaders for the biggest tech conference of the year.",
    date: "June 15-17, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Virtual",
    attendees: 1500,
    image: "/placeholder.svg?height=400&width=600",
    status: "upcoming",
    featured: true,
  },
  {
    id: 2,
    title: "Design Summit",
    description: "Explore the latest trends in UX/UI design with expert speakers.",
    date: "July 8, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Virtual",
    attendees: 800,
    image: "/placeholder.svg?height=400&width=600",
    status: "upcoming",
    featured: false,
  },
  {
    id: 3,
    title: "AI & Machine Learning Workshop",
    description: "Hands-on workshop on the latest AI and ML technologies.",
    date: "July 22, 2024",
    time: "1:00 PM - 6:00 PM",
    location: "Virtual",
    attendees: 500,
    image: "/placeholder.svg?height=400&width=600",
    status: "upcoming",
    featured: false,
  },
  {
    id: 4,
    title: "Product Management Conference",
    description: "Learn from top product managers about building successful products.",
    date: "August 5-6, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Virtual",
    attendees: 1200,
    image: "/placeholder.svg?height=400&width=600",
    status: "upcoming",
    featured: false,
  },
]

export function UpcomingEvents() {
  return (
    <section className="container">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Upcoming Events</h2>
            <p className="text-muted-foreground">Discover and register for upcoming conferences and events.</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/events">View All</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    {event.featured ? "Featured" : "Upcoming"}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>{event.attendees}+ attendees</span>
                  </div>
                </div>
                <CardTitle className="line-clamp-1 text-xl">{event.title}</CardTitle>
                <CardDescription className="line-clamp-2">{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-2 p-4 pt-0 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button asChild className="w-full">
                  <Link href={`/events/${event.id}`}>Register Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
