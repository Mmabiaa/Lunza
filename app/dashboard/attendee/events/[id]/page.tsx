"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/(auth)/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, CalendarIcon, MapPin, Users, DollarSign, Clock, TicketIcon, Share2 } from "lucide-react"
import Link from "next/link"

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [event, setEvent] = useState<any>(null)
  const [isRegistered, setIsRegistered] = useState(false)

  useEffect(() => {
    if (!loading && user) {
      if (user.userType !== 'attendee') {
        router.push('/dashboard/organizer')
      } else {
        // TODO: Fetch event details from API
        // For now, use mock data
        setEvent({
          id: params.id,
          title: 'Tech Conference 2024',
          description: 'Join us for the biggest tech conference of the year. Network with industry leaders, attend workshops, and learn about the latest technologies.',
          date: '2024-06-15',
          time: '09:00',
          location: 'San Francisco Convention Center, CA',
          capacity: 1000,
          price: 299,
          thumbnail: '/placeholder.svg',
          attendees: 450,
          organizer: {
            name: 'Tech Events Inc.',
            email: 'contact@techevents.com'
          },
          schedule: [
            {
              time: '09:00 - 10:00',
              title: 'Opening Keynote',
              speaker: 'John Doe'
            },
            {
              time: '10:30 - 12:00',
              title: 'Workshop: AI & Machine Learning',
              speaker: 'Jane Smith'
            },
            {
              time: '13:00 - 14:30',
              title: 'Panel Discussion: Future of Tech',
              speaker: 'Multiple Speakers'
            }
          ]
        })

        // Check if user is registered
        setIsRegistered(user.registeredEvents?.includes(params.id) || false)
      }
    }
  }, [user, loading, router, params.id])

  const handleRegister = async () => {
    // TODO: Implement registration logic
    console.log('Registering for event:', event.id)
    setIsRegistered(true)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black/50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    )
  }

  if (!user) {
    return <div className="flex items-center justify-center h-screen bg-black/50 text-white">Please login to view event details</div>
  }

  if (!event) {
    return <div className="flex items-center justify-center h-screen bg-black/50 text-white">Event not found</div>
  }

  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover"
        >
          <source src="/videos/management-bg-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button asChild variant="outline" className="text-white border-white/20 hover:bg-white/10">
            <Link href="/dashboard/attendee/events">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-white">{event.title}</h1>
        </div>

        <div className="grid gap-8">
          {/* Event Overview */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={event.thumbnail || '/placeholder.svg'}
                alt={event.title}
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Event Overview</CardTitle>
              <CardDescription>Key information about this event</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-white/70" />
                  <div>
                    <p className="text-sm text-white/70">Date & Time</p>
                    <p className="font-medium">{new Date(event.date).toLocaleDateString()} at {event.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-white/70" />
                  <div>
                    <p className="text-sm text-white/70">Location</p>
                    <p className="font-medium">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-white/70" />
                  <div>
                    <p className="text-sm text-white/70">Capacity</p>
                    <p className="font-medium">{event.attendees} / {event.capacity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-white/70" />
                  <div>
                    <p className="text-sm text-white/70">Price</p>
                    <p className="font-medium">${event.price}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Event Details Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-4 bg-white/10">
              <TabsTrigger value="overview" className="text-white">Overview</TabsTrigger>
              <TabsTrigger value="schedule" className="text-white">Schedule</TabsTrigger>
              <TabsTrigger value="organizer" className="text-white">Organizer</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle>Event Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">{event.description}</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="schedule" className="space-y-4">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle>Event Schedule</CardTitle>
                  <CardDescription>Detailed timeline of the event</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {event.schedule.map((item: any, index: number) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/5">
                        <div className="flex items-center gap-2 min-w-[120px]">
                          <Clock className="h-4 w-4 text-white/70" />
                          <span className="text-sm text-white/70">{item.time}</span>
                        </div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-white/70">Speaker: {item.speaker}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="organizer" className="space-y-4">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle>Event Organizer</CardTitle>
                  <CardDescription>Contact information for the event organizer</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">{event.organizer.name}</h4>
                      <p className="text-sm text-white/70">{event.organizer.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Registration Card */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle>Registration</CardTitle>
              <CardDescription>Secure your spot at this event</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2">
                  <TicketIcon className="h-5 w-5 text-white/70" />
                  <div>
                    <p className="text-sm text-white/70">Ticket Price</p>
                    <p className="text-2xl font-bold">${event.price}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Event
                  </Button>
                  {isRegistered ? (
                    <Button disabled className="bg-green-500 hover:bg-green-600">
                      Registered
                    </Button>
                  ) : (
                    <Button onClick={handleRegister}>
                      Register Now
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 