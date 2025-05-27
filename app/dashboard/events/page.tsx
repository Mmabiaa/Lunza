"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/(auth)/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, Plus, Filter, CalendarIcon, Users, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
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
    return <div className="flex items-center justify-center h-screen bg-black/50 text-white">Please login to view events</div>
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
              <Link href="/dashboard/organizer">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-white">All Events</h1>
          </div>
          <Button asChild>
            <Link href="/dashboard/create">
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </Link>
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
            <Input
              placeholder="Search events..."
              className="pl-9 bg-white/5 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Events Grid */}
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
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-white/70">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees || 0} registered</span>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild size="sm" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                        <Link href={`/dashboard/events/${event.id}`}>
                          <BarChart3 className="mr-2 h-4 w-4" />
                          Manage
                        </Link>
                      </Button>
                    </div>
                  </div>
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
      </div>
    </div>
  )
} 