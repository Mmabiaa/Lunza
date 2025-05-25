"use client"

import { useAuth } from "../(auth)/auth-context.tsx"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AttendeeDashboard() {
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
                href="/events"
                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold">Browse Events</h3>
                <p className="text-gray-500">Find and join events you're interested in</p>
              </Link>
              <Link 
                href="/profile"
                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold">Edit Profile</h3>
                <p className="text-gray-500">Update your personal information</p>
              </Link>
              <Link 
                href="/bookmarks"
                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold">View Bookmarks</h3>
                <p className="text-gray-500">Check your saved events</p>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add upcoming events list here */}
            <div className="space-y-4">
              {user?.upcomingEvents?.length > 0 ? (
                user.upcomingEvents.map((event, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{event.title || 'Untitled Event'}</h3>
                    <span className="text-gray-500">{event.date ? new Date(event.date).toLocaleDateString() : 'No date'}</span>
                  </div>
                ))
              ) : (
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">No events found</h3>
                  <Link 
                    href="/events"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Browse All Events
                  </Link>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Profile Information */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Personal Details</h3>
                  <p className="text-gray-500">Name: {user?.name || 'N/A'}</p>
                  <p className="text-gray-500">Email: {user?.email || 'N/A'}</p>
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
                  <h3 className="text-lg font-semibold">Membership Status</h3>
                  <p className="text-gray-500">Member Since: {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</p>
                  <p className="text-gray-500">Events Attended: {user?.eventsAttended || 0}</p>
                  <p className="text-gray-500">Upcoming Events: {user?.upcomingEvents?.length || 0}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
