'use client'

import { useState } from 'react'

type UserType = 'attendee' | 'organizer'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [userType, setUserType] = useState<UserType>('attendee')
  const [isLogin, setIsLogin] = useState(false)

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    // Store user data in localStorage
    const userData = {
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
    localStorage.setItem('user', JSON.stringify(userData))
    // Navigate based on user type
    window.location.href = userType === 'attendee' ? '/dashboard/attendee' : '/dashboard/organizer'
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Create a basic user profile for login
    const userData = {
      id: Math.random().toString(36).substr(2, 9),
      name: email.split('@')[0],
      email,
      userType: 'attendee',
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
    localStorage.setItem('user', JSON.stringify(userData))
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={isLogin ? handleLogin : handleRegister}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {!isLogin && (
              <>
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <input
                      id="attendee"
                      name="userType"
                      type="radio"
                      value="attendee"
                      checked={userType === 'attendee'}
                      onChange={() => setUserType('attendee')}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label htmlFor="attendee" className="ml-3 block text-sm font-medium text-gray-700">
                      Attendee
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="organizer"
                      name="userType"
                      type="radio"
                      value="organizer"
                      checked={userType === 'organizer'}
                      onChange={() => setUserType('organizer')}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label htmlFor="organizer" className="ml-3 block text-sm font-medium text-gray-700">
                      Organizer
                  </label>
                  </div>
                </div>
              </>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLogin ? 'Sign in' : 'Register'}
            </button>
          </div>
        </form>

        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-indigo-600 hover:text-indigo-500"
          >
            {isLogin ? 'Don\'t have an account? Register' : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  )
}

