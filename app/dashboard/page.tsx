"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, BarChart3, Users, Clock, TicketIcon } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/app/(auth)/auth-context"

export default function DashboardPage() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (!user) {
    return <div className="flex items-center justify-center h-screen">Please login to access your dashboard</div>
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Manage your events and view analytics</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/create">Create Event</Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Events</CardTitle>
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user?.totalEvents || 0}</div>
              <p className="text-xs text-muted-foreground">+{user?.eventsChange || 0} from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Attendees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user?.totalAttendees || 0}</div>
              <p className="text-xs text-muted-foreground">+{user?.attendeesChange || 0}% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Watch Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user?.watchTime || 0} hrs</div>
              <p className="text-xs text-muted-foreground">+{user?.watchTimeChange || 0}% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <TicketIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${user?.revenue || 0}</div>
              <p className="text-xs text-muted-foreground">+{user?.revenueChange || 0}% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {user?.events?.length ? (
                user.events.map((event) => (
                  <Card key={event.id}>
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={event.thumbnail || '/placeholder.svg'}
                        alt={event.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-1 text-xl">{event.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-between p-4 pt-0">
                      <div className="flex items-center gap-1 text-sm">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees || 0} registered</span>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <Link href={`/dashboard/events/${event.id}`}>Manage</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <h3 className="text-lg font-semibold mb-2">No events found</h3>
                  <p className="text-gray-500">Create your first event to get started</p>
                  <Button asChild className="mt-4">
                    <Link href="/dashboard/create">Create Event</Link>
                  </Button>
                </div>
              )}
              ))
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=400&width=600`}
                      alt={`Event ${i}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1 text-xl">Design Summit 202{i + 2}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>May {5 + i}, 2023</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-between p-4 pt-0">
                    <div className="flex items-center gap-1 text-sm">
                      <Users className="h-4 w-4" />
                      <span>{150 * i} attended</span>
                    </div>
                    <Button asChild size="sm" variant="outline">
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
                <Card key={i}>
                  <div className="aspect-video w-full overflow-hidden bg-muted">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-muted-foreground">No preview available</span>
                    </div>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1 text-xl">Draft Event {i}</CardTitle>
                    <CardDescription>Last edited: May {20 + i}, 2024</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-end gap-2 p-4 pt-0">
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/dashboard/events/${i + 20}/edit`}>Edit</Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href={`/dashboard/events/${i + 20}/publish`}>Publish</Link>
                    </Button>
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
