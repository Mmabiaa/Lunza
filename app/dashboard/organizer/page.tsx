"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/(auth)/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, BarChart3, Users, Clock, TicketIcon, Plus, Settings, Bell } from "lucide-react"
import Link from "next/link"

export default function OrganizerDashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      if (user.userType !== 'organizer') {
        router.push('/dashboard/attendee')
      }
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black/50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    )
  }

  if (!user) {
    return <div className="flex items-center justify-center h-screen bg-black/50 text-white">Please login to access your dashboard</div>
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
        <div className="flex flex-col gap-8">
          {/* Header Section */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white">Organizer Dashboard</h1>
              <p className="text-white/70">Manage your events and view analytics</p>
            </div>
            <div className="flex gap-4">
              <Button asChild variant="outline" className="text-white border-white/20 hover:bg-white/10">
                <Link href="/dashboard/settings">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Link>
              </Button>
              <Button asChild>
                <Link href="/dashboard/create">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Event
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                <CalendarIcon className="h-4 w-4 text-white/70" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{user.totalEvents || 0}</div>
                <p className="text-xs text-white/70">+{user.eventsChange || 0} from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Attendees</CardTitle>
                <Users className="h-4 w-4 text-white/70" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{user.totalAttendees || 0}</div>
                <p className="text-xs text-white/70">+{user.attendeesChange || 0}% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Watch Time</CardTitle>
                <Clock className="h-4 w-4 text-white/70" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{user.watchTime || 0} hrs</div>
                <p className="text-xs text-white/70">+{user.watchTimeChange || 0}% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <TicketIcon className="h-4 w-4 text-white/70" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${user.revenue || 0}</div>
                <p className="text-xs text-white/70">+{user.revenueChange || 0}% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Events Tabs */}
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-4 bg-white/10">
              <TabsTrigger value="upcoming" className="text-white">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past" className="text-white">Past Events</TabsTrigger>
              <TabsTrigger value="drafts" className="text-white">Drafts</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {user.events?.length ? (
                  user.events.map((event) => (
                    <Card key={event.id} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={event.thumbnail || '/placeholder.svg'}
                          alt={event.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="line-clamp-1 text-xl">{event.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2 text-white/70">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex justify-between p-4 pt-0">
                        <div className="flex items-center gap-1 text-sm text-white/70">
                          <Users className="h-4 w-4" />
                          <span>{event.attendees || 0} registered</span>
                        </div>
                        <Button asChild size="sm" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                          <Link href={`/dashboard/events/${event.id}`}>
                            <BarChart3 className="mr-2 h-4 w-4" />
                            Manage
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8">
                    <h3 className="text-lg font-semibold mb-2 text-white">No events found</h3>
                    <p className="text-white/70">Create your first event to get started</p>
                    <Button asChild className="mt-4">
                      <Link href="/dashboard/create">Create Event</Link>
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="past" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=400&width=600`}
                        alt={`Past Event ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-1 text-xl">Past Event {i}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-white/70">
                        <CalendarIcon className="h-4 w-4" />
                        <span>May {5 + i}, 2023</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-between p-4 pt-0">
                      <div className="flex items-center gap-1 text-sm text-white/70">
                        <Users className="h-4 w-4" />
                        <span>{150 * i} attended</span>
                      </div>
                      <Button asChild size="sm" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                        <Link href={`/dashboard/events/${i + 10}`}>
                          <BarChart3 className="mr-2 h-4 w-4" />
                          Analytics
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="drafts" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2].map((i) => (
                  <Card key={i} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                    <div className="aspect-video w-full overflow-hidden bg-white/5">
                      <div className="flex h-full items-center justify-center">
                        <span className="text-white/50">No preview available</span>
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-1 text-xl">Draft Event {i}</CardTitle>
                      <CardDescription className="text-white/70">Last edited: May {20 + i}, 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-end gap-2 p-4 pt-0">
                      <Button asChild size="sm" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                        <Link href={`/dashboard/events/${i + 20}/edit`}>Edit</Link>
                      </Button>
                      <Button asChild size="sm" className="bg-white/10 hover:bg-white/20 text-white">
                        <Link href={`/dashboard/events/${i + 20}/publish`}>Publish</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Quick Actions */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Quick Actions
              </CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Button asChild variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  <Link href="/dashboard/events/create">
                    <Plus className="w-4 h-4 mr-2" />
                    New Event
                  </Link>
                </Button>
                <Button asChild variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  <Link href="/dashboard/events">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    All Events
                  </Link>
                </Button>
                <Button asChild variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  <Link href="/dashboard/analytics">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Analytics
                  </Link>
                </Button>
                <Button asChild variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  <Link href="/dashboard/settings">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
