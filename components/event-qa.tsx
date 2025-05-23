"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ThumbsUp } from "lucide-react"
import { useState } from "react"

// Mock Q&A data
const initialQuestions = [
  {
    id: 1,
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    question: "What's your opinion on the future of serverless architecture?",
    time: "9:15 AM",
    upvotes: 12,
    answered: false,
  },
  {
    id: 2,
    user: {
      name: "Priya Patel",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    question: "Can you elaborate on the security implications of the new API you mentioned?",
    time: "9:18 AM",
    upvotes: 8,
    answered: false,
  },
  {
    id: 3,
    user: {
      name: "Thomas Lee",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    question: "How do you see AI impacting developer productivity in the next 5 years?",
    time: "9:22 AM",
    upvotes: 15,
    answered: true,
  },
]

export function EventQA() {
  const [questions, setQuestions] = useState(initialQuestions)
  const [newQuestion, setNewQuestion] = useState("")

  const handleAskQuestion = () => {
    if (!newQuestion.trim()) return

    const question = {
      id: questions.length + 1,
      user: {
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      question: newQuestion,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      upvotes: 0,
      answered: false,
    }

    setQuestions([...questions, question])
    setNewQuestion("")
  }

  const handleUpvote = (id: number) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, upvotes: q.upvotes + 1 } : q)))
  }

  // Sort questions by upvotes (highest first)
  const sortedQuestions = [...questions].sort((a, b) => b.upvotes - a.upvotes)

  return (
    <div className="flex h-[300px] flex-col">
      <ScrollArea className="flex-1 p-2">
        <div className="flex flex-col gap-4">
          {sortedQuestions.map((question) => (
            <div
              key={question.id}
              className={`rounded-md border p-3 ${question.answered ? "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-900/20" : ""}`}
            >
              <div className="flex gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={question.user.avatar || "/placeholder.svg"} alt={question.user.name} />
                  <AvatarFallback>{question.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{question.user.name}</span>
                    <span className="text-xs text-muted-foreground">{question.time}</span>
                    {question.answered && (
                      <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/50 dark:text-green-300">
                        Answered
                      </span>
                    )}
                  </div>
                  <p className="text-sm">{question.question}</p>
                  <div className="mt-2 flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 gap-1 px-2 text-xs"
                      onClick={() => handleUpvote(question.id)}
                    >
                      <ThumbsUp className="h-3 w-3" />
                      <span>{question.upvotes}</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="mt-2 flex gap-2">
        <Input
          placeholder="Ask a question..."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAskQuestion()
            }
          }}
        />
        <Button onClick={handleAskQuestion}>Ask</Button>
      </div>
    </div>
  )
}
