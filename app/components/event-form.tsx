"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "react-day-picker"
import { cn } from "@/lib/utils"

interface EventFormProps {
  onSubmit: (event: any) => void;
  event?: any;
}

export function EventForm({ onSubmit, event }: EventFormProps) {
  const [title, setTitle] = useState(event?.title || "")
  const [description, setDescription] = useState(event?.description || "")
  const [date, setDate] = useState(event?.date || new Date())
  const [status, setStatus] = useState(event?.status || "upcoming")
  const [image, setImage] = useState(event?.image || "")
  const [video, setVideo] = useState(event?.video || "")
  const [isLive, setIsLive] = useState(event?.isLive || false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      title,
      description,
      date: format(date, "yyyy-MM-dd"),
      status,
      image,
      video,
      isLive,
      id: event?.id || Date.now(),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Event Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="date">Event Date</Label>
          <div className="flex items-center gap-2">
            <Input
              id="date"
              type="text"
              value={format(date, "yyyy-MM-dd")}
              placeholder="Select date"
              readOnly
            />
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className={cn(
                "rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              )}
            />
          </div>
        </div>

        <div>
          <Label>Status</Label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="live">Live</SelectItem>
              <SelectItem value="past">Past</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Event Image</Label>
          <Select value={image} onValueChange={setImage}>
            <SelectTrigger>
              <SelectValue placeholder="Select image" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="/images/AI and machine learning workshop.jpg">AI Workshop</SelectItem>
              <SelectItem value="/images/Cybersecurity Conference.jpg">Cybersecurity</SelectItem>
              <SelectItem value="/images/DevOps Transformation Conference.jpg">DevOps</SelectItem>
              <SelectItem value="/images/Future of Work Summit.jpg">Future of Work</SelectItem>
              <SelectItem value="/images/Product Management Conference.jpg">Product Management</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Event Video</Label>
          <Select value={video} onValueChange={setVideo}>
            <SelectTrigger>
              <SelectValue placeholder="Select video" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="/videos/AI and machine learning workshop.mp4">AI Workshop</SelectItem>
              <SelectItem value="/videos/Cybersecurity Conference.mp4">Cybersecurity</SelectItem>
              <SelectItem value="/videos/DevOps Transformation Conference.mp4">DevOps</SelectItem>
              <SelectItem value="/videos/Future of Work Summit.mp4">Future of Work</SelectItem>
              <SelectItem value="/videos/Product Management Conference.mp4">Product Management</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="isLive"
            checked={isLive}
            onChange={(e) => setIsLive(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <Label htmlFor="isLive" className="ml-2">Is this event live?</Label>
        </div>
      </div>

      <Button type="submit">{event ? "Update Event" : "Create Event"}</Button>
    </form>
  )
}
