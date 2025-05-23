import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

// Mock schedule data
const scheduleItems = [
  {
    id: 1,
    time: "9:00 AM - 9:30 AM",
    title: "Opening Keynote",
    speaker: "Sarah Johnson",
    isCurrent: true,
  },
  {
    id: 2,
    time: "9:45 AM - 10:30 AM",
    title: "The Future of AI",
    speaker: "Michael Chen",
    isCurrent: false,
  },
  {
    id: 3,
    time: "10:45 AM - 11:30 AM",
    title: "Building Scalable Systems",
    speaker: "Emily Rodriguez",
    isCurrent: false,
  },
  {
    id: 4,
    time: "11:45 AM - 12:30 PM",
    title: "Security Best Practices",
    speaker: "David Wilson",
    isCurrent: false,
  },
]

export function EventSchedule() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {scheduleItems.map((item) => (
          <div
            key={item.id}
            className={`relative rounded-md border p-3 ${item.isCurrent ? "border-primary bg-primary/5" : ""}`}
          >
            {item.isCurrent && (
              <div className="absolute -left-1 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
            )}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{item.time}</span>
            </div>
            <h3 className="mt-1 font-medium">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.speaker}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
