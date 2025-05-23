import { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Clock, Filter, Search, Tag } from "lucide-react"
import { VideoBackground } from "@/app/components/video-background"

export const metadata: Metadata = {
  title: "Blog | Lunza",
  description: "Latest news, updates, and insights about virtual streaming and engagement technology",
}

const blogPosts = [
  {
    id: 1,
    title: "The Future of Virtual Conferences",
    excerpt: "Exploring how virtual conferences are reshaping the way we connect and share knowledge.",
    date: "March 15, 2024",
    category: "Industry Trends",
    readTime: "5 min read",
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Best Practices for Live Streaming",
    excerpt: "Learn the essential tips and tricks for delivering high-quality live streams.",
    date: "March 10, 2024",
    category: "Technical Guide",
    readTime: "8 min read",
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Engaging Your Virtual Audience",
    excerpt: "Discover strategies to keep your virtual conference attendees engaged and interactive.",
    date: "March 5, 2024",
    category: "Event Planning",
    readTime: "6 min read",
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "The Rise of Hybrid Events",
    excerpt: "How to successfully combine in-person and virtual elements in your conferences.",
    date: "March 1, 2024",
    category: "Event Planning",
    readTime: "7 min read",
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Streaming Technology Trends",
    excerpt: "Stay ahead with the latest innovations in streaming technology.",
    date: "February 28, 2024",
    category: "Technical Guide",
    readTime: "4 min read",
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Maximizing ROI for Virtual Events",
    excerpt: "Strategies to ensure your virtual conference delivers strong returns.",
    date: "February 25, 2024",
    category: "Industry Trends",
    readTime: "6 min read",
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <VideoBackground videoSrc="/videos/blog.mp4" className="py-20">
        <div className="container">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Blog
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Latest news, updates, and insights about conference streaming technology.
            </p>
          </div>
        </div>
      </VideoBackground>

      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search articles..." className="pl-8" />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Select>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="industry-trends">Industry Trends</SelectItem>
                <SelectItem value="technical-guide">Technical Guide</SelectItem>
                <SelectItem value="event-planning">Event Planning</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="all" className="mt-8">
          <TabsList>
            <TabsTrigger value="all">All Posts</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{post.date}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="mb-2 text-foreground">{post.title}</CardTitle>
                    <CardDescription className="mb-4 text-muted-foreground">{post.excerpt}</CardDescription>
                    <div className="flex items-center justify-between">
                      <Badge className="text-muted-foreground">{post.category}</Badge>
                      <Button variant="ghost" asChild className="text-primary hover:text-primary/90">
                        <Link href={`/blog/${post.id}`}>Read More →</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="featured" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.filter(post => post.featured).map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{post.date}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="mb-2 text-foreground">{post.title}</CardTitle>
                    <CardDescription className="mb-4 text-muted-foreground">{post.excerpt}</CardDescription>
                    <div className="flex items-center justify-between">
                      <Badge className="text-muted-foreground">{post.category}</Badge>
                      <Button variant="ghost" asChild className="text-primary hover:text-primary/90">
                        <Link href={`/blog/${post.id}`}>Read More →</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 