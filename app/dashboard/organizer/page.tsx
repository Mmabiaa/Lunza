"use client"

import { useAuth } from "../(auth)/auth-context"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function OrganizerDashboard() {
  const { user } = useAuth()

  if (!user) {
    return <div className="flex items-center justify-center h-screen">Please login to access your dashboard</div>
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Welcome, {user.name}</CardTitle>
          <CardDescription>Your Organizer Dashboard</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">My Events</h3>
            <div className="space-y-2">
              <Link 
                href="/events/create"
                className="text-blue-500 hover:text-blue-600"
              >
                Create New Event
              </Link>
              {/* Add events list here */}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Event Analytics</h3>
            <div className="space-y-2">
              {/* Add analytics section here */}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Attendee Management</h3>
            <div className="space-y-2">
              {/* Add attendee management section here */}
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
        </CardContent>
      </Card>
    </div>
  )
}
