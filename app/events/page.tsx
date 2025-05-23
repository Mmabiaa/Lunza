import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Clock, Filter, MapPin, Search, Users } from "lucide-react"
import Link from "next/link"
import { VideoBackground } from "@/app/components/video-background"
import { Metadata } from "next"

// Mock data for events
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
    category: "Technology",
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
    category: "Design",
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
    category: "Technology",
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
    category: "Business",
  },
  {
    id: 5,
    title: "Marketing Innovation Summit",
    description: "Discover the latest marketing strategies and technologies.",
    date: "August 15, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Virtual",
    attendees: 950,
    image: "/placeholder.svg?height=400&width=600",
    status: "upcoming",
    featured: false,
    category: "Marketing",
  },
  {
    id: 6,
    title: "DevOps Transformation Conference",
    description: "Learn how to implement DevOps practices in your organization.",
    date: "September 10-11, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Virtual",
    attendees: 750,
    image: "/placeholder.svg?height=400&width=600",
    status: "upcoming",
    featured: false,
    category: "Technology",
  },
  {
    id: 7,
    title: "Future of Work Summit",
    description: "Explore how technology is transforming the workplace.",
    date: "September 20, 2024",
    time: "11:00 AM - 4:00 PM",
    location: "Virtual",
    attendees: 1100,
    image: "/placeholder.svg?height=400&width=600",
    status: "upcoming",
    featured: false,
    category: "Business",
  },
  {
    id: 8,
    title: "Cybersecurity Conference",
    description: "Stay updated on the latest cybersecurity threats and solutions.",
    date: "October 5-6, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Virtual",
    attendees: 850,
    image: "/placeholder.svg?height=400&width=600",
    status: "upcoming",
    featured: false,
    category: "Technology",
  },
]

const pastEvents = [
  {
    id: 101,
    title: "Tech Conference 2023",
    description: "The premier event for technology professionals.",
    date: "June 10-12, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Virtual",
    attendees: 1350,
    image: "/placeholder.svg?height=400&width=600",
    status: "past",
    featured: false,
    category: "Technology",
  },
  {
    id: 102,
    title: "Design Summit 2023",
    description: "A gathering of the world's top designers.",
    date: "July 5, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Virtual",
    attendees: 720,
    image: "/placeholder.svg?height=400&width=600",
    status: "past",
    featured: false,
    category: "Design",
  },
  {
    id: 103,
    title: "AI Revolution Conference",
    description: "Exploring the future of artificial intelligence.",
    date: "August 15-16, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Virtual",
    attendees: 950,
    image: "/placeholder.svg?height=400&width=600",
    status: "past",
    featured: false,
    category: "Technology",
  },
  {
    id: 104,
    title: "Digital Marketing Symposium",
    description: "Strategies for success in the digital marketing landscape.",
    date: "September 8, 2023",
    time: "10:00 AM - 3:00 PM",
    location: "Virtual",
    attendees: 680,
    image: "/placeholder.svg?height=400&width=600",
    status: "past",
    featured: false,
    category: "Marketing",
  },
]

export default function EventsPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <VideoBackground videoSrc="/videos/event.mp4" className="py-20">
        <div className="container">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Upcoming Events
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Join our upcoming conferences and virtual events
            </p>
          </div>
        </div>
      </VideoBackground>

      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search events..." className="pl-8" />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Select>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="upcoming" className="mt-8">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{event.date}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span>{event.time}</span>
                    </div>
                    <CardTitle className="mb-2 text-foreground">{event.title}</CardTitle>
                    <CardDescription className="mb-4 text-muted-foreground">{event.description}</CardDescription>
                    <div className="flex items-center justify-between">
                      <Badge className="text-muted-foreground">{event.category}</Badge>
                      <Button variant="ghost" asChild className="text-primary hover:text-primary/90">
                        <Link href={`/events/${event.id}`}>View Details →</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{event.date}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span>{event.time}</span>
                    </div>
                    <CardTitle className="mb-2 text-foreground">{event.title}</CardTitle>
                    <CardDescription className="mb-4 text-muted-foreground">{event.description}</CardDescription>
                    <div className="flex items-center justify-between">
                      <Badge className="text-muted-foreground">{event.category}</Badge>
                      <Button variant="ghost" asChild className="text-primary hover:text-primary/90">
                        <Link href={`/events/${event.id}`}>View Details →</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Events | Lunza",
  description: "Discover and join upcoming virtual events and conferences",
}
