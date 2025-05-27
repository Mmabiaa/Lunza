"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/(auth)/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Users, Clock, TicketIcon, TrendingUp, Download } from "lucide-react"
import Link from "next/link"

export default function AnalyticsPage() {
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
    return <div className="flex items-center justify-center h-screen bg-black/50 text-white">Please login to view analytics</div>
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
            <Link href="/dashboard/organizer">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-white">Analytics</h1>
        </div>

        <div className="grid gap-8">
          {/* Overview Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                <TrendingUp className="h-4 w-4 text-white/70" />
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

          {/* Detailed Analytics */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-4 bg-white/10">
              <TabsTrigger value="overview" className="text-white">Overview</TabsTrigger>
              <TabsTrigger value="events" className="text-white">Events</TabsTrigger>
              <TabsTrigger value="attendees" className="text-white">Attendees</TabsTrigger>
              <TabsTrigger value="revenue" className="text-white">Revenue</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle>Event Performance Overview</CardTitle>
                  <CardDescription>Key metrics and trends for your events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center text-white/70">
                    Chart visualization will be added here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="events" className="space-y-4">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle>Event Analytics</CardTitle>
                  <CardDescription>Detailed metrics for each event</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center text-white/70">
                    Event-specific charts will be added here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="attendees" className="space-y-4">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle>Attendee Analytics</CardTitle>
                  <CardDescription>Demographics and engagement metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center text-white/70">
                    Attendee analytics charts will be added here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="revenue" className="space-y-4">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle>Revenue Analytics</CardTitle>
                  <CardDescription>Financial performance and trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center text-white/70">
                    Revenue charts will be added here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Export Section */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle>Export Data</CardTitle>
              <CardDescription>Download analytics reports and data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  <Download className="w-4 h-4 mr-2" />
                  Export Overview
                </Button>
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  <Download className="w-4 h-4 mr-2" />
                  Export Events
                </Button>
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  <Download className="w-4 h-4 mr-2" />
                  Export Attendees
                </Button>
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  <Download className="w-4 h-4 mr-2" />
                  Export Revenue
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 