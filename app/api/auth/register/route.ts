import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, password, name, userType = 'attendee' } = await request.json()

    // Generate a sample user object
    const sampleUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: name || 'Test User',
      email: email || 'test@example.com',
      userType: userType as 'attendee' | 'organizer',
      totalEvents: userType === 'organizer' ? 5 : 0,
      eventsChange: 2,
      totalAttendees: userType === 'organizer' ? 150 : 0,
      attendeesChange: 15,
      watchTime: userType === 'organizer' ? 1248 : 0,
      watchTimeChange: 10,
      revenue: userType === 'organizer' ? 24780 : 0,
      revenueChange: 12,
      upcomingEvents: [
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
      ],
      events: userType === 'organizer' ? [
        {
          id: '1',
          title: 'Tech Conference 2024',
          date: '2024-06-10',
          thumbnail: '/placeholder.svg',
          attendees: 150
        },
        {
          id: '2',
          title: 'Web Development Workshop',
          date: '2024-07-15',
          thumbnail: '/placeholder.svg',
          attendees: 100
        }
      ] : [],
      createdAt: new Date().toISOString(),
      eventsAttended: userType === 'attendee' ? 3 : 0
    }

    // Store in localStorage for testing
    localStorage.setItem('user', JSON.stringify(sampleUser))
    localStorage.setItem('token', 'test-token')

    return NextResponse.json({ user: sampleUser })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred during registration' },
      { status: 500 }
    )
  }
}

