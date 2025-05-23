import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock speakers data
const speakers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "AI Researcher",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Senior Engineer, CloudSystems",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function EventSpeakers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Speakers</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={speaker.avatar || "/placeholder.svg"} alt={speaker.name} />
              <AvatarFallback>{speaker.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{speaker.name}</h3>
              <p className="text-sm text-muted-foreground">{speaker.role}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
