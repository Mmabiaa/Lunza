'use client'

import { createContext, useContext, useState, useEffect } from 'react'

interface AuthContextType {
  user: {
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
  } | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string, userType: 'attendee' | 'organizer') => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthContextType['user']>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Demo login - accept any credentials
    const demoUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: email.split('@')[0], // Use email username as name
      email,
      userType: 'attendee' as const,
      totalEvents: 0,
      eventsChange: 0,
      totalAttendees: 0,
      attendeesChange: 0,
      watchTime: 0,
      watchTimeChange: 0,
      revenue: 0,
      revenueChange: 0,
      upcomingEvents: [],
      events: [],
      createdAt: new Date().toISOString(),
      eventsAttended: 0
    }

    setUser(demoUser)
    localStorage.setItem('user', JSON.stringify(demoUser))
    window.location.href = '/dashboard'
  }

  const register = async (name: string, email: string, password: string, userType: 'attendee' | 'organizer') => {
    // Demo registration - create new user with provided details
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      userType,
      totalEvents: userType === 'organizer' ? 5 : 0,
      eventsChange: 2,
      totalAttendees: userType === 'organizer' ? 150 : 0,
      attendeesChange: 15,
      watchTime: userType === 'organizer' ? 1248 : 0,
      watchTimeChange: 10,
      revenue: userType === 'organizer' ? 24780 : 0,
      revenueChange: 12,
      upcomingEvents: userType === 'organizer' ? [
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
      events: userType === 'organizer' ? [
        {
          id: '1',
          title: 'Sample Event',
          date: '2024-05-25',
          thumbnail: '/placeholder.svg',
          attendees: 100
        }
      ] : [],
      createdAt: new Date().toISOString(),
      eventsAttended: userType === 'attendee' ? 3 : 0
    }

    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
    // Redirect based on user type
    window.location.href = userType === 'attendee' ? '/dashboard/attendee' : '/dashboard/organizer'
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
    window.location.href = '/'
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
