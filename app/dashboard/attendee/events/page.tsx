"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/(auth)/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, Filter, CalendarIcon, MapPin, Users, DollarSign } from "lucide-react"
import Link from "next/link"

export default function BrowseEventsPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [events, setEvents] = useState<any[]>([])

  useEffect(() => {
    if (!loading && user) {
      if (user.userType !== 'attendee') {
        router.push('/dashboard/organizer')
      } else {
        // TODO: Fetch events from API
        // For now, use mock data
        setEvents([
          {
            id: '1',
            title: 'Tech Conference 2024',
            description: 'Join us for the biggest tech conference of the year',
            date: '2024-06-15',
            location: 'San Francisco, CA',
            capacity: 1000,
            price: 299,
            thumbnail: '/placeholder.svg',
            attendees: 450
          },
          {
            id: '2',
            title: 'Music Festival',
            description: 'A three-day music festival featuring top artists',
            date: '2024-07-20',
            location: 'Los Angeles, CA',
            capacity: 5000,
            price: 199,
            thumbnail: '/placeholder.svg',
            attendees: 3200
          }
        ])
      }
    }
  }, [user, loading, router])

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black/50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    )
  }

  if (!user) {
    return <div className="flex items-center justify-center h-screen bg-black/50 text-white">Please login to browse events</div>
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
            <Link href="/dashboard/attendee">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-white">Browse Events</h1>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
            <Input
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
          {filteredEvents.length ? (
            filteredEvents.map((event) => (
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
                <CardContent className="p-4 pt-0 space-y-4">
                  <p className="text-sm text-white/70 line-clamp-2">{event.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1 text-white/70">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/70">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} / {event.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/70">
                      <DollarSign className="h-4 w-4" />
                      <span>${event.price}</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={`/dashboard/attendee/events/${event.id}`}>
                      View Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <h3 className="text-lg font-semibold mb-2 text-white">No events found</h3>
              <p className="text-white/70">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 