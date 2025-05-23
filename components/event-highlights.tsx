import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlayCircle } from "lucide-react"

// Mock data for event highlights
const highlights = [
  {
    id: "tech-conference",
    title: "Tech Conference 2023",
    description: "Highlights from our flagship tech conference featuring industry leaders and innovators.",
    image: "/placeholder.svg?height=720&width=1280",
    stats: {
      attendees: "5,000+",
      speakers: "50+",
      sessions: "100+",
    },
  },
  {
    id: "design-summit",
    title: "Design Summit 2023",
    description: "A gathering of the world's top designers sharing insights and trends.",
    image: "/placeholder.svg?height=720&width=1280",
    stats: {
      attendees: "3,200+",
      speakers: "30+",
      sessions: "60+",
    },
  },
  {
    id: "product-conference",
    title: "Product Conference 2023",
    description: "The premier event for product managers and product teams.",
    image: "/placeholder.svg?height=720&width=1280",
    stats: {
      attendees: "4,500+",
      speakers: "40+",
      sessions: "80+",
    },
  },
]

export function EventHighlights() {
  return (
    <section className="container">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Event Highlights</h2>
          <p className="text-muted-foreground">Explore highlights from our most successful events.</p>
        </div>

        <Tabs defaultValue={highlights[0].id} className="w-full">
          <TabsList className="mb-6 w-full justify-start overflow-auto">
            {highlights.map((highlight) => (
              <TabsTrigger key={highlight.id} value={highlight.id} className="min-w-max">
                {highlight.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {highlights.map((highlight) => (
            <TabsContent key={highlight.id} value={highlight.id} className="w-full">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>

                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-primary">{highlight.stats.attendees}</span>
                      <span className="text-sm text-muted-foreground">Attendees</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-primary">{highlight.stats.speakers}</span>
                      <span className="text-sm text-muted-foreground">Speakers</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-primary">{highlight.stats.sessions}</span>
                      <span className="text-sm text-muted-foreground">Sessions</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button className="gap-2">
                      <PlayCircle className="h-4 w-4" />
                      Watch Highlights
                    </Button>
                  </div>
                </div>

                <div className="overflow-hidden rounded-lg border">
                  <AspectRatio ratio={16 / 9}>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                      <Button size="lg" variant="outline" className="gap-2 bg-background/80 backdrop-blur">
                        <PlayCircle className="h-5 w-5" />
                        Play Video
                      </Button>
                    </div>
                    <img
                      src={highlight.image || "/placeholder.svg"}
                      alt={highlight.title}
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
