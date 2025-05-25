import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { CalendarIcon, Clock, MapPin, Share2, TicketIcon, Users } from "lucide-react"
import { VideoPlayer } from "@/components/video-player"
import { EventChat } from "@/components/event-chat"
import { EventQA } from "@/components/event-qa"
import { EventSchedule } from "@/components/event-schedule"
import { EventSpeakers } from "@/components/event-speakers"

export default function EventPage({ params }: { params: { id: string } }) {
  const eventId = params.id;

  const events = [
    {
      id: 1,
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
    },
    {
      id: 2,
      title: "Future of Work Summit",
      description:
        "Explore the evolving workplace with insights from global experts. Discover how remote work, automation, and AI are reshaping the future of employment.",
      date: "July 10-11, 2024",
      time: "10:00 AM - 4:00 PM",
      timezone: "Eastern Time (UTC-5)",
      location: "Virtual",
      attendees: 1200,
      image: "/placeholder.svg?height=720&width=1280",
      status: "upcoming",
      featured: true,
      organizer: {
        name: "WorkWorld Summit",
        logo: "/placeholder.svg?height=100&width=100",
      },
      price: "$24.99",
      isLive: true,
    },
    {
      id: 3,
      title: "AI & Machine Learning Workshop",
      description:
        "Hands-on sessions with AI experts. Learn how to build and deploy machine learning models using real-world datasets.",
      date: "August 5, 2024",
      time: "8:00 AM - 3:00 PM",
      timezone: "Central Time (UTC-6)",
      location: "Virtual",
      attendees: 800,
      image: "/placeholder.svg?height=720&width=1280",
      status: "upcoming",
      featured: false,
      organizer: {
        name: "AI Innovators",
        logo: "/placeholder.svg?height=100&width=100",
      },
      price: "$19.99",
      isLive: true,
    },
    {
      id: 4,
      title: "Product Management Conference",
      description:
        "The go-to event for aspiring and experienced product managers. Learn best practices, tools, and techniques from top PMs across the globe.",
      date: "September 2-3, 2024",
      time: "9:00 AM - 6:00 PM",
      timezone: "Pacific Time (UTC-8)",
      location: "Virtual",
      attendees: 1000,
      image: "/placeholder.svg?height=720&width=1280",
      status: "upcoming",
      featured: true,
      organizer: {
        name: "Product Leaders Network",
        logo: "/placeholder.svg?height=100&width=100",
      },
      price: "$39.99",
      isLive: true,
    },
    {
      id: 5,
      title: "Marketing Innovation Summit",
      description:
        "Discover the newest trends in digital marketing, data analytics, and consumer engagement from leading marketers.",
      date: "October 7, 2024",
      time: "11:00 AM - 5:00 PM",
      timezone: "Mountain Time (UTC-7)",
      location: "Virtual",
      attendees: 900,
      image: "/placeholder.svg?height=720&width=1280",
      status: "upcoming",
      featured: false,
      organizer: {
        name: "MarketWise Agency",
        logo: "/placeholder.svg?height=100&width=100",
      },
      price: "$27.99",
      isLive: true,
    },
    {
      id: 6,
      title: "DevOps Transformation Conference",
      description:
        "Bridge the gap between development and operations. Learn CI/CD, infrastructure as code, and scalable DevOps practices.",
      date: "November 15-16, 2024",
      time: "9:30 AM - 4:30 PM",
      timezone: "Pacific Time (UTC-8)",
      location: "Virtual",
      attendees: 1100,
      image: "/placeholder.svg?height=720&width=1280",
      status: "upcoming",
      featured: true,
      organizer: {
        name: "DevOps World",
        logo: "/placeholder.svg?height=100&width=100",
      },
      price: "$34.99",
      isLive: true,
    },
    {
      id: 7,
      title: "Future of Work Summit",
      description:
        "A repeat session of our popular summit exploring how hybrid work, leadership, and global trends are reshaping modern workplaces.",
      date: "December 3, 2024",
      time: "10:00 AM - 4:00 PM",
      timezone: "Eastern Time (UTC-5)",
      location: "Virtual",
      attendees: 1300,
      image: "/placeholder.svg?height=720&width=1280",
      status: "upcoming",
      featured: false,
      organizer: {
        name: "WorkWorld Summit",
        logo: "/placeholder.svg?height=100&width=100",
      },
      price: "$24.99",
      isLive: true,
    },
    {
      id: 8,
      title: "Cybersecurity Conference",
      description:
        "Stay ahead of the latest cyber threats and defenses. Hear from experts on security, compliance, and protecting digital infrastructure.",
      date: "January 20, 2025",
      time: "9:00 AM - 5:00 PM",
      timezone: "Pacific Time (UTC-8)",
      location: "Virtual",
      attendees: 1400,
      image: "/placeholder.svg?height=720&width=1280",
      status: "upcoming",
      featured: true,
      organizer: {
        name: "SecureNet Alliance",
        logo: "/placeholder.svg?height=100&width=100",
      },
      price: "$29.99",
      isLive: true,
    },
  ];

  const event = events.find((e) => e.id === Number(eventId))!;
  const eventIdToVideo: Record<string, string> = {
    "1": "/videos/Tech Conference 2024.mp4",
    "2": "/videos/Future of Work Summit.mp4",
    "3": "/videos/AI & Machine Learning Workshop.mp4",
    "4": "/videos/Product Management Conference.mp4",
    "5": "/videos/Marketing Innovation Summit.mp4",
    "6": "/videos/DevOps Transformation Conference.mp4",
    "7": "/videos/Future of Work Summit.mp4",
    "8": "/videos/Cybersecurity Conference.mp4",
  };
  const videoSrc = eventIdToVideo[eventId] || "/videos/Tech Conference 2024.mp4";

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
              <VideoPlayer src={videoSrc} className="rounded-lg" />

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
