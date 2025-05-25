"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Calendar, Ticket, Settings, LogOut } from "lucide-react"
import { Navbar } from "@/app/components/navbar"

interface User {
  id: string
  name: string
  email: string
  userType: 'attendee' | 'organizer'
  totalEvents?: number
  eventsChange?: number
  totalAttendees?: number
  attendeesChange?: number
  watchTime?: number
  watchTimeChange?: number
  revenue?: number
  revenueChange?: number
  upcomingEvents?: Array<{
    id: string
    title: string
    date: string
  }>
  events?: Array<{
    id: string
    title: string
    date: string
    thumbnail?: string
    attendees?: number
  }>
  createdAt?: string
  eventsAttended?: number
}

export default function AttendeeDashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      const parsedUser = JSON.parse(userData)
      if (parsedUser.userType === 'attendee') {
        setUser(parsedUser)
      } else {
        window.location.href = '/dashboard/organizer'
      }
    }
    setLoading(false)
  }, [])

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
    <div className="relative min-h-screen bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/blog.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"></div>

      {/* Content */}
      <div className="relative z-20">
        <Navbar user={user} />

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quick Actions */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Link 
                    href="/events"
                    className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <h3 className="text-lg font-semibold">Browse Events</h3>
                    <p className="text-white/70">Find events to attend</p>
                  </Link>
                  <Link 
                    href="/tickets"
                    className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <h3 className="text-lg font-semibold">My Tickets</h3>
                    <p className="text-white/70">View your event tickets</p>
                  </Link>
                  <Link 
                    href="/profile"
                    className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <h3 className="text-lg font-semibold">Edit Profile</h3>
                    <p className="text-white/70">Update your information</p>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Event Stats */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="w-5 h-5" />
                  Event Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-white/5">
                      <p className="text-white/70">Events Attended</p>
                      <h3 className="text-2xl font-bold">{user.eventsAttended || 0}</h3>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5">
                      <p className="text-white/70">Upcoming Events</p>
                      <h3 className="text-2xl font-bold text-blue-400">{user.upcomingEvents?.length ?? 0}</h3>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5">
                      <p className="text-white/70">Watch Time</p>
                      <h3 className="text-2xl font-bold text-green-400">{user.watchTime || 0}h</h3>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5">
                      <p className="text-white/70">Total Spent</p>
                      <h3 className="text-2xl font-bold text-purple-400">${user.revenue?.toLocaleString() || 0}</h3>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profile and Settings */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Profile & Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-white/5">
                    <h3 className="text-lg font-semibold mb-2">Attendee Information</h3>
                    <p className="text-white/70">Name: {user.name}</p>
                    <p className="text-white/70">Email: {user.email}</p>
                    <p className="text-white/70">Member since: {new Date(user.createdAt || '').toLocaleDateString()}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5">
                    <h3 className="text-lg font-semibold mb-2">Activity Summary</h3>
                    <p className="text-white/70">Events Attended: {user.eventsAttended || 0}</p>
                    <p className="text-white/70">Watch Time: {user.watchTime || 0} hours</p>
                    <p className="text-white/70">Total Spent: ${user.revenue?.toLocaleString() || 0}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
