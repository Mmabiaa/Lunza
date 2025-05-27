"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/(auth)/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Clock, MapPin, Users, TicketIcon, Search, Filter } from "lucide-react"
import Link from "next/link"

export default function AttendeeDashboardPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [mockUser, setMockUser] = useState<any>(null)

  useEffect(() => {
    if (!loading && user) {
      if (user.userType !== 'attendee') {
        router.push('/dashboard/organizer')
      } else {
        // Add mock data for testing
        setMockUser({
          ...user,
          upcomingEvents: 2,
          pastEvents: 5,
          totalTickets: 7,
          watchTime: 24,
          upcomingEventsList: [
            {
              id: '1',
              title: 'Tech Conference 2024',
              date: '2024-06-15',
              location: 'San Francisco, CA',
              thumbnail: '/placeholder.svg'
            },
            {
              id: '2',
              title: 'Music Festival',
              date: '2024-07-20',
              location: 'Los Angeles, CA',
              thumbnail: '/placeholder.svg'
            }
          ],
          pastEventsList: [
            {
              id: '3',
              title: 'Web Development Workshop',
              date: '2024-01-15',
              location: 'New York, NY',
              thumbnail: '/placeholder.svg'
            },
            {
              id: '4',
              title: 'Design Conference',
              date: '2024-02-20',
              location: 'Chicago, IL',
              thumbnail: '/placeholder.svg'
            }
          ]
        })
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
    return <div className="flex items-center justify-center h-screen bg-black/50 text-white">Please login to view dashboard</div>
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
          <h1 className="text-3xl font-bold text-white">Welcome, {user.name}</h1>
          <Button asChild>
            <Link href="/dashboard/attendee/events">
              <Search className="w-4 h-4 mr-2" />
              Browse Events
            </Link>
          </Button>
        </div>

        <div className="grid gap-8">
          {/* Quick Stats */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                <CalendarIcon className="h-4 w-4 text-white/70" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockUser?.upcomingEvents || 0}</div>
                <p className="text-xs text-white/70">Events you're registered for</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Past Events</CardTitle>
                <Clock className="h-4 w-4 text-white/70" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockUser?.pastEvents || 0}</div>
                <p className="text-xs text-white/70">Events you've attended</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Tickets</CardTitle>
                <TicketIcon className="h-4 w-4 text-white/70" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockUser?.totalTickets || 0}</div>
                <p className="text-xs text-white/70">Tickets purchased</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Watch Time</CardTitle>
                <Clock className="h-4 w-4 text-white/70" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockUser?.watchTime || 0} hrs</div>
                <p className="text-xs text-white/70">Total time spent in events</p>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Events you're registered for</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {mockUser?.upcomingEventsList?.length ? (
                  mockUser.upcomingEventsList.map((event: any) => (
                    <Card key={event.id} className="bg-white/5 border-white/10">
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
                      <CardContent className="p-4 pt-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-sm text-white/70">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                          <Button asChild size="sm" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                            <Link href={`/dashboard/attendee/events/${event.id}`}>
                              View Details
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8">
                    <h3 className="text-lg font-semibold mb-2 text-white">No upcoming events</h3>
                    <p className="text-white/70">Browse events to find something interesting</p>
                    <Button asChild className="mt-4">
                      <Link href="/dashboard/attendee/events">Browse Events</Link>
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Past Events */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle>Past Events</CardTitle>
              <CardDescription>Events you've attended</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {mockUser?.pastEventsList?.length ? (
                  mockUser.pastEventsList.map((event: any) => (
                    <Card key={event.id} className="bg-white/5 border-white/10">
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
                      <CardContent className="p-4 pt-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-sm text-white/70">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                          <Button asChild size="sm" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                            <Link href={`/dashboard/attendee/events/${event.id}`}>
                              View Details
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8">
                    <h3 className="text-lg font-semibold mb-2 text-white">No past events</h3>
                    <p className="text-white/70">Your event history will appear here</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
