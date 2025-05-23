import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { CalendarIcon, Clock, MapPin, Share2, TicketIcon, Users } from "lucide-react"
import { LiveStreamPlayer } from "@/components/live-stream-player"
import { EventChat } from "@/components/event-chat"
import { EventQA } from "@/components/event-qa"
import { EventSchedule } from "@/components/event-schedule"
import { EventSpeakers } from "@/components/event-speakers"

export default function EventPage({ params }: { params: { id: string } }) {
  // This would normally fetch event data based on the ID
  const eventId = params.id

  // Mock event data
  const event = {
    id: eventId,
    title: "Tech Conference 2024",
    description:
      "Join industry leaders for the biggest tech conference of the year. Explore the latest trends, technologies, and innovations shaping the future of the tech industry.",
    date: "June 15-17, 2024",
    time: "9:00 AM - 5:00 PM",
    timezone: "Pacific Time (UTC-8)",
    location: "Virtual",
    attendees: 1500,
    image: "/placeholder.svg?height=720&width=1280",
    status: "upcoming",
    featured: true,
    organizer: {
      name: "TechEvents Inc.",
      logo: "/placeholder.svg?height=100&width=100",
    },
    price: "$29.99",
    isLive: true,
  }

  // Map event titles to video file names
  const eventTitleToVideo: Record<string, string> = {
    "Tech Conference 2024": "/videos/Tech Conference 2024.mp4",
    "Cybersecurity Conference": "/videos/Cybersecurity Conference.mp4",
    "Future of Work Summit": "/videos/Future of Work Summit.mp4",
    "DevOps Transformation Conference": "/videos/DevOps Transformation Conference.mp4",
    "Marketing Innovation Summit": "/videos/Marketing Innovation Summit.mp4",
    "Product Management Conference": "/videos/Product Management Conference.mp4",
    "AI & Machine Learning Workshop": "/videos/AI and machine learning workshop.mp4",
  }
  const videoSrc = eventTitleToVideo[event.title] || "/videos/Tech Conference 2024.mp4"

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <Badge variant={event.isLive ? "destructive" : "outline"} className="px-3 py-1">
              {event.isLive ? "LIVE NOW" : "Upcoming"}
            </Badge>
            <span className="text-sm text-muted-foreground">Event #{eventId}</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button size="sm">
              <TicketIcon className="mr-2 h-4 w-4" />
              Get Tickets
            </Button>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{event.title}</h1>
          <div className="mt-2 flex flex-wrap gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{event.attendees}+ attendees</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <LiveStreamPlayer videoSrc={videoSrc} />

              <CardContent className="p-4">
                <Tabs defaultValue="chat">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="chat">Chat</TabsTrigger>
                    <TabsTrigger value="qa">Q&A</TabsTrigger>
                    <TabsTrigger value="polls">Polls</TabsTrigger>
                  </TabsList>
                  <TabsContent value="chat" className="mt-4">
                    <EventChat />
                  </TabsContent>
                  <TabsContent value="qa" className="mt-4">
                    <EventQA />
                  </TabsContent>
                  <TabsContent value="polls" className="mt-4">
                    <div className="flex h-[300px] items-center justify-center rounded-md border">
                      <p className="text-muted-foreground">No active polls at the moment</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Event Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">About</h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium">Organized by</h3>
                  <div className="mt-2 flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={event.organizer.logo || "/placeholder.svg"} alt={event.organizer.name} />
                      <AvatarFallback>TE</AvatarFallback>
                    </Avatar>
                    <span>{event.organizer.name}</span>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium">Ticket Price</h3>
                  <p className="text-xl font-bold text-primary">{event.price}</p>
                  <p className="text-xs text-muted-foreground">Includes access to all sessions and recordings</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <TicketIcon className="mr-2 h-4 w-4" />
                  Register Now
                </Button>
              </CardFooter>
            </Card>

            <EventSchedule />

            <EventSpeakers />
          </div>
        </div>
      </div>
    </div>
  )
}
