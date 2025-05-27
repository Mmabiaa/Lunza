"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Bell, Lock, Shield, Moon, Sun } from "lucide-react"
import { Navbar } from "@/app/components/navbar"
import { useAuth } from "@/app/(auth)/auth-context"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    darkMode: true,
    twoFactorAuth: false
  })
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
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
    return <div className="flex items-center justify-center h-screen bg-black/50 text-white">Please login to access settings</div>
  }

  const handleSettingChange = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleSaveSettings = async () => {
    try {
      // Here you would typically save settings to your server
      // For now, we'll just update local storage
      const userData = JSON.parse(localStorage.getItem('user') || '{}')
      userData.settings = settings
      localStorage.setItem('user', JSON.stringify(userData))
      setSuccess('Settings saved successfully')
      setError(null)
    } catch (err) {
      setError('Failed to save settings: ' + (err as Error).message)
      setSuccess(null)
    }
  }

  return (
    <div className="min-h-screen bg-black/50">
      <Navbar user={user} />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Settings</h1>
            <p className="text-white/70">Manage your account settings and preferences</p>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </CardTitle>
              <CardDescription>Manage your notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications" className="text-white">Email Notifications</Label>
                <Switch
                  id="email-notifications"
                  checked={settings.emailNotifications}
                  onCheckedChange={() => handleSettingChange('emailNotifications')}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications" className="text-white">Push Notifications</Label>
                <Switch
                  id="push-notifications"
                  checked={settings.pushNotifications}
                  onCheckedChange={() => handleSettingChange('pushNotifications')}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security
              </CardTitle>
              <CardDescription>Manage your security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="two-factor" className="text-white">Two-Factor Authentication</Label>
                <Switch
                  id="two-factor"
                  checked={settings.twoFactorAuth}
                  onCheckedChange={() => handleSettingChange('twoFactorAuth')}
                />
              </div>
              <Button variant="outline" className="w-full text-white border-white/20 hover:bg-white/10">
                <Lock className="w-4 h-4 mr-2" />
                Change Password
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Moon className="w-5 h-5" />
                Appearance
              </CardTitle>
              <CardDescription>Customize your interface</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode" className="text-white">Dark Mode</Label>
                <Switch
                  id="dark-mode"
                  checked={settings.darkMode}
                  onCheckedChange={() => handleSettingChange('darkMode')}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
              onClick={handleSaveSettings}
            >
              Save Changes
            </Button>
          </div>

          {error && (
            <div className="text-red-400 text-center">
              {error}
            </div>
          )}
          {success && (
            <div className="text-green-400 text-center">
              {success}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 