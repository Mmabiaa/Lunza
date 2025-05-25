"use client"

import { useAuth } from "../(auth)/auth-context"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AttendeeDashboard() {
  const { user } = useAuth()

  if (!user) {
    return <div className="flex items-center justify-center h-screen">Please login to access your dashboard</div>
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Welcome, {user.name}</CardTitle>
          <CardDescription>Your Attendee Dashboard</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Upcoming Events</h3>
            {/* Add upcoming events list here */}
            <div className="space-y-2">
              <Link 
                href="/events"
                className="text-blue-500 hover:text-blue-600"
              >
                Browse All Events
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">My Profile</h3>
            <div className="space-y-2">
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <Link 
                href="/profile"
                className="text-blue-500 hover:text-blue-600"
              >
                Edit Profile
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">My Bookmarks</h3>
            {/* Add bookmarks section here */}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
