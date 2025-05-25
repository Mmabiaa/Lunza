"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { VideoBackground } from "@/app/components/video-background"

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [accountType, setAccountType] = useState('attendee')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    // Create user data based on form inputs
    const userData = {
      id: Math.random().toString(36).substr(2, 9),
      name: `${firstName} ${lastName}`,
      email,
      userType: accountType,
      totalEvents: accountType === 'organizer' ? 5 : 0,
      eventsChange: 2,
      totalAttendees: accountType === 'organizer' ? 150 : 0,
      attendeesChange: 15,
      watchTime: accountType === 'organizer' ? 1248 : 0,
      watchTimeChange: 10,
      revenue: accountType === 'organizer' ? 24780 : 0,
      revenueChange: 12,
      upcomingEvents: accountType === 'organizer' ? [
        {
          id: '1',
          title: 'Tech Conference 2024',
          date: '2024-06-10'
        },
        {
          id: '2',
          title: 'Web Development Workshop',
          date: '2024-07-15'
        }
      ] : [],
      events: accountType === 'organizer' ? [
        {
          id: '1',
          title: 'Sample Event',
          date: '2024-05-25',
          thumbnail: '/placeholder.svg',
          attendees: 100
        }
      ] : [],
      createdAt: new Date().toISOString(),
      eventsAttended: accountType === 'attendee' ? 3 : 0
    }

    localStorage.setItem('user', JSON.stringify(userData))
    // Redirect based on account type
    window.location.href = accountType === 'attendee' ? '/dashboard/attendee' : '/dashboard/organizer'
  }

  return (
    <VideoBackground videoSrc="/videos/join-bg-video.mp4" className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-8">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>Enter your information to create an account</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <CardContent>
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Account type</Label>
              <RadioGroup
                defaultValue="attendee"
                value={accountType}
                onValueChange={setAccountType}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="attendee" id="attendee" />
                  <Label htmlFor="attendee" className="font-normal">
                    Attendee
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="organizer" id="organizer" />
                  <Label htmlFor="organizer" className="font-normal">
                    Organizer
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full">
              Create account
            </Button>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-primary underline-offset-4 hover:underline">
                Login
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </VideoBackground>
  )
}
