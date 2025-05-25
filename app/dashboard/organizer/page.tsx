"use client"

import { useAuth } from "../(auth)/auth-context.tsx"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function OrganizerDashboard() {
  const { user } = useAuth()

  if (!user) {
    return <div className="flex items-center justify-center h-screen">Please login to access your dashboard</div>
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Link 
                href="/events/create"
                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold">Create Event</h3>
                <p className="text-gray-500">Start a new event</p>
              </Link>
              <Link 
                href="/events/manage"
                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold">Manage Events</h3>
                <p className="text-gray-500">View and edit your events</p>
              </Link>
              <Link 
                href="/analytics"
                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold">View Analytics</h3>
                <p className="text-gray-500">Check event performance</p>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Event Management */}
        <Card>
          <CardHeader>
            <CardTitle>Event Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Active Events</h3>
                <Link 
                  href="/events/manage"
                  className="text-blue-500 hover:text-blue-600"
                >
                  View All
                </Link>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500">Total Events</p>
                    <h3 className="text-2xl font-bold">0</h3>
                  </div>
                  <div>
                    <p className="text-gray-500">Active Events</p>
                    <h3 className="text-2xl font-bold text-green-500">0</h3>
                  </div>
                  <div>
                    <p className="text-gray-500">Upcoming Events</p>
                    <h3 className="text-2xl font-bold text-blue-500">0</h3>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile and Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Profile & Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Organizer Information</h3>
                  <p className="text-gray-500">Name: {user.name}</p>
                  <p className="text-gray-500">Email: {user.email}</p>
                </div>
                <Link 
                  href="/profile"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Edit Profile
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Organizer Stats</h3>
                  <p className="text-gray-500">Events Created: 0</p>
                  <p className="text-gray-500">Total Attendees: 0</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
