"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/(auth)/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Users, CalendarIcon, MapPin, DollarSign, Edit, Trash2, BarChart3, Settings } from "lucide-react"
import Link from "next/link"

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [event, setEvent] = useState<any>(null)

  useEffect(() => {
    if (!loading && user) {
      if (user.userType !== 'organizer') {
        router.push('/dashboard/attendee')
      } else {
        // TODO: Fetch event details from API
        // For now, find event in user's events
        const foundEvent = user.events?.find((e: any) => e.id === params.id)
        if (foundEvent) {
          setEvent(foundEvent)
        } else {
          router.push('/dashboard/events')
        }
      }
    }
  }, [user, loading, router, params.id])

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
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="text-white border-white/20 hover:bg-white/10">
              <Link href="/dashboard/events">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Events
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-white">{event.title}</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
          </div>
        </div>

        <div className="grid gap-8">
          {/* Event Overview */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle>Event Overview</CardTitle>
              <CardDescription>Key information about your event</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-white/70" />
                  <div>
                    <p className="text-sm text-white/70">Date</p>
                    <p className="font-medium">{new Date(event.date).toLocaleDateString()}</p>
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
                    <p className="text-sm text-white/70">Attendees</p>
                    <p className="font-medium">{event.attendees || 0} / {event.capacity}</p>
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

          {/* Event Management Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-4 bg-white/10">
              <TabsTrigger value="overview" className="text-white">Overview</TabsTrigger>
              <TabsTrigger value="attendees" className="text-white">Attendees</TabsTrigger>
              <TabsTrigger value="analytics" className="text-white">Analytics</TabsTrigger>
              <TabsTrigger value="settings" className="text-white">Settings</TabsTrigger>
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

            <TabsContent value="attendees" className="space-y-4">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle>Registered Attendees</CardTitle>
                  <CardDescription>View and manage event attendees</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center text-white/70">
                    Attendee list will be displayed here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle>Event Analytics</CardTitle>
                  <CardDescription>Track event performance and engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center text-white/70">
                    Analytics charts will be displayed here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle>Event Settings</CardTitle>
                  <CardDescription>Configure event preferences and options</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center text-white/70">
                    Settings form will be displayed here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
} 