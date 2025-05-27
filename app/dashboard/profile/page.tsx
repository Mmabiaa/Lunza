"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { LiveStream } from "@/app/components/live-stream"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { User, Mail, Edit, Trash2, Image, CameraIcon } from "lucide-react"
import { Navbar } from "@/app/components/navbar"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  interface User {
  name: string;
  email: string;
  userType: "attendee" | "organizer";
  image?: string;
}

const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      const parsedUser = JSON.parse(userData) as User
      setUser(parsedUser)
      setImagePreview(parsedUser.image || null)
    } else {
      router.push('/login')
    }
  }, [])

  if (!user) {
    return <div className="flex items-center justify-center h-screen bg-black/50 text-white">Loading...</div>
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/login')
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSaveProfile = async () => {
    if (!imageFile) {
      setError('Please select an image')
      return
    }

    try {
      // Here you would typically upload the image to your server
      // For now, we'll just update the local storage with the base64 data
      const userData = JSON.parse(localStorage.getItem('user') || '{}')
      userData.image = imagePreview
      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)
      setError(null)
    } catch (err) {
      setError('Failed to save profile: ' + (err as Error).message)
    }
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
        <source src="/videos/profile-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"></div>

      {/* Content */}
      <div className="relative z-20">
        <Navbar user={user} />

        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-32 h-32 relative">
                {imagePreview ? (
                  <img 
                    src={imagePreview} 
                    alt={user.name} 
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center">
                    <Image className="w-16 h-16 text-white" />
                  </div>
                )}
                <label className="absolute bottom-0 right-0 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 cursor-pointer">
                  <CameraIcon className="w-5 h-5" />
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
              <h1 className="text-3xl font-bold text-white">{user.name}</h1>
              <p className="text-white/70">{user.email}</p>
            </div>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="space-y-1">
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-white/70">Full Name</label>
                    <Input
                      value={user.name}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/70">Email</label>
                    <Input
                      value={user.email}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/70">User Type</label>
                    <Input
                      value={user.userType}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                      disabled
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
                onClick={handleSaveProfile}
              >
                <Edit className="w-4 h-4 mr-2" />
                Save Profile
              </Button>
              <Button variant="destructive" onClick={handleLogout}>
                <Trash2 className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
            {error && (
              <div className="text-red-400 text-center mt-4">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
