"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/(auth)/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Upload, CalendarIcon, Clock, MapPin, Users, DollarSign } from "lucide-react"
import Link from "next/link"

export default function CreateEventPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    capacity: "",
    price: "",
    thumbnail: null as File | null,
  })

  useEffect(() => {
    if (!loading && user) {
      if (user.userType !== 'organizer') {
        router.push('/dashboard/attendee')
      }
    }
  }, [user, loading, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, thumbnail: e.target.files![0] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement event creation logic
    console.log('Form submitted:', formData)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black/50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    )
  }

  if (!user) {
    return <div className="flex items-center justify-center h-screen bg-black/50 text-white">Please login to create events</div>
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
            <Link href="/dashboard/events">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-white">Create New Event</h1>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
              <CardDescription>Fill in the details for your new event</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Event Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter event title"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter event description"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 min-h-[100px]"
                  required
                />
              </div>

              {/* Date and Time */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="pl-9 bg-white/5 border-white/20 text-white"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="pl-9 bg-white/5 border-white/20 text-white"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter event location"
                    className="pl-9 bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    required
                  />
                </div>
              </div>

              {/* Capacity and Price */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="capacity">Capacity</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
                    <Input
                      id="capacity"
                      name="capacity"
                      type="number"
                      value={formData.capacity}
                      onChange={handleInputChange}
                      placeholder="Enter maximum capacity"
                      className="pl-9 bg-white/5 border-white/20 text-white placeholder:text-white/50"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="Enter ticket price"
                      className="pl-9 bg-white/5 border-white/20 text-white placeholder:text-white/50"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Thumbnail Upload */}
              <div className="space-y-2">
                <Label htmlFor="thumbnail">Event Thumbnail</Label>
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <Upload className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
                    <Input
                      id="thumbnail"
                      name="thumbnail"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="pl-9 bg-white/5 border-white/20 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white/10 file:text-white hover:file:bg-white/20"
                      required
                    />
                  </div>
                  {formData.thumbnail && (
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <img
                        src={URL.createObjectURL(formData.thumbnail)}
                        alt="Thumbnail preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Create Event
              </Button>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  )
}
