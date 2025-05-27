import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EventForm } from "@/components/event-form"
import { useRouter } from "next/navigation"

export default function CreateEventPage() {
  const router = useRouter()
  const [events, setEvents] = useState([])

  const handleSubmit = (newEvent) => {
    setEvents([...events, newEvent])
    router.push(`/events/${newEvent.id}`)
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Create New Event</CardTitle>
        </CardHeader>
        <CardContent>
          <EventForm onSubmit={handleSubmit} />
        </CardContent>
      </Card>
    </div>
  )
}
