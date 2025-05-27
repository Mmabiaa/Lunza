"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User, Mail, Lock, UserPlus } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState<"attendee" | "organizer">("attendee")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Create demo user data
    const userData = {
      id: "1",
      name: name,
      email: email,
      userType: userType,
      eventsAttended: 0,
      watchTime: 0,
      revenue: 0,
      createdAt: new Date().toISOString(),
      upcomingEvents: [],
      totalEvents: userType === "organizer" ? 0 : undefined,
      totalAttendees: userType === "organizer" ? 0 : undefined
    }

    // Store user data in localStorage
    localStorage.setItem("user", JSON.stringify(userData))

    // Redirect to appropriate dashboard
    router.push(`/dashboard/${userType}`)
  }

  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/join-bg-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-white text-center">Create Account</CardTitle>
            <CardDescription className="text-white/70 text-center">
              Join us and start your journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-white/70" />
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-white/70" />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-white/70" />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={() => setUserType("attendee")}
                    className={`flex-1 ${
                      userType === "attendee"
                        ? "bg-white/20 text-white"
                        : "bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    <User className="w-4 h-4 mr-2" />
                    Attendee
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setUserType("organizer")}
                    className={`flex-1 ${
                      userType === "organizer"
                        ? "bg-white/20 text-white"
                        : "bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Organizer
                  </Button>
                </div>
              </div>
              {error && (
                <div className="text-red-400 text-sm text-center">{error}</div>
              )}
              <Button
                type="submit"
                className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
              >
                Create Account
              </Button>
              <div className="text-center text-white/70">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-white hover:text-white/90 underline"
                >
                  Sign in
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
