"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"

// Mock chat messages
const initialMessages = [
  {
    id: 1,
    user: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    message: "Hello everyone! Excited for the keynote!",
    time: "9:02 AM",
  },
  {
    id: 2,
    user: {
      name: "Sarah Kim",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    message: "Me too! I heard they're announcing something big.",
    time: "9:03 AM",
  },
  {
    id: 3,
    user: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    message: "Does anyone know when the AI panel starts?",
    time: "9:05 AM",
  },
  {
    id: 4,
    user: {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    message: "I think it's at 11:30 AM, right after the coffee break.",
    time: "9:06 AM",
  },
  {
    id: 5,
    user: {
      name: "David Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    message: "The speaker lineup for this conference is amazing!",
    time: "9:08 AM",
  },
]

export function EventChat() {
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const message = {
      id: messages.length + 1,
      user: {
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, message])
    setNewMessage("")
  }

  return (
    <div className="flex h-[300px] flex-col">
      <ScrollArea className="flex-1 p-2">
        <div className="flex flex-col gap-3">
          {messages.map((message) => (
            <div key={message.id} className="flex gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={message.user.avatar || "/placeholder.svg"} alt={message.user.name} />
                <AvatarFallback>{message.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{message.user.name}</span>
                  <span className="text-xs text-muted-foreground">{message.time}</span>
                </div>
                <p className="text-sm">{message.message}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="mt-2 flex gap-2">
        <Input
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage()
            }
          }}
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  )
}
