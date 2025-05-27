"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Users, Clock, TicketIcon, BarChart3 } from "lucide-react"
import { Navbar } from "@/app/components/navbar"
import { useRouter } from "next/navigation"
import { LiveStream } from "@/app/components/live-stream"
import Link from "next/link"

interface User {
  id: string
  name: string
  email: string
  userType: "attendee" | "organizer"
}

interface Event {
  id: number
  title: string
  date: string
  status: "upcoming" | "live" | "past"
  attendees: number
  revenue: number
  duration: string
  thumbnail: string
}

export default function ManagePage() {
  const [user, setUser] = useState<User | null>(null)
  const [events, setEvents] = useState<Event[]>([])
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      router.push('/login')
    }
  }, [])

  if (!user) {
    return <div className="flex items-center justify-center h-screen bg-black/50 text-white">Loading...</div>
  }

  // Mock events data
  useEffect(() => {
    const mockEvents: Event[] = [
      {
        id: 1,
        title: "Music Concert",
        date: "2025-05-25",
        status: "upcoming" as const,
        attendees: 150,
        revenue: 3000,
        duration: "2h",
        thumbnail: "/images/event1.jpg"
      },
      {
        id: 2,
        title: "Tech Conference",
        date: "2025-05-27",
        status: "live" as const,
        attendees: 250,
        revenue: 5000,
        duration: "4h",
        thumbnail: "/images/event2.jpg"
      },
      {
        id: 3,
        title: "Design Workshop",
        date: "2025-05-20",
        status: "past" as const,
        attendees: 92,
        revenue: 1800,
        duration: "3h",
        thumbnail: "/images/event3.jpg"
      }
    ]
    setEvents(mockEvents)
  }, [])

  return (
    <div className="relative min-h-screen bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/manage-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"></div>

      {/* Content */}
      <div className="relative z-20">
        <Navbar user={user} />

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white">Manage Events</h1>
                <p className="text-white/70">Manage your events and view analytics</p>
              </div>
              <Button asChild className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                <Link href="/dashboard/create">Create New Event</Link>
              </Button>
            </div>

            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="mb-4 bg-white/10 border-white/20">
                <TabsTrigger value="upcoming" className="text-white data-[state=active]:bg-white/20">Upcoming</TabsTrigger>
                <TabsTrigger value="live" className="text-white data-[state=active]:bg-white/20">Live</TabsTrigger>
                <TabsTrigger value="past" className="text-white data-[state=active]:bg-white/20">Past</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="space-y-6">
                {events
                  .filter(event => event.status === "upcoming")
                  .map(event => (
                    <Card key={event.id} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{event.title}</CardTitle>
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4 text-white/70" />
                          <span className="text-sm text-white/70">{event.date}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-white/70" />
                              <span>{event.attendees} attendees</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-white/70" />
                              <span>{event.duration}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <TicketIcon className="h-4 w-4 text-white/70" />
                            <span>${event.revenue} revenue</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>

              <TabsContent value="live" className="space-y-6">
                {events
                  .filter(event => event.status === "live")
                  .map(event => (
                    <Card key={event.id} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{event.title}</CardTitle>
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4 text-white/70" />
                          <span className="text-sm text-white/70">{event.date}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <LiveStream 
                            streamUrl={`/live/${event.id}`} 
                            isOrganizer={user.userType === 'organizer'} 
                          />
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-white/70" />
                              <span>{event.attendees} attendees</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-white/70" />
                              <span>{event.duration}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <TicketIcon className="h-4 w-4 text-white/70" />
                            <span>${event.revenue} revenue</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>

              <TabsContent value="past" className="space-y-6">
                {events
                  .filter(event => event.status === "past")
                  .map(event => (
                    <Card key={event.id} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{event.title}</CardTitle>
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4 text-white/70" />
                          <span className="text-sm text-white/70">{event.date}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-white/70" />
                              <span>{event.attendees} attendees</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-white/70" />
                              <span>{event.duration}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <TicketIcon className="h-4 w-4 text-white/70" />
                            <span>${event.revenue} revenue</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
