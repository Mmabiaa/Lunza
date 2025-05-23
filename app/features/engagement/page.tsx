import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, MessageSquare, BarChart, PieChart, Hand } from "lucide-react"
import Link from "next/link"
import { VideoBackground } from "@/app/components/video-background"

export default function EngagementFeaturePage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <VideoBackground videoSrc="/videos/audience-bg-video.mp4" className="py-20">
        <div className="container">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Audience Engagement</h1>
            <p className="mt-6 max-w-[600px] text-lg text-muted-foreground">
              Interactive tools to keep your audience engaged, participating, and connected throughout your event.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </VideoBackground>

      {/* Feature Overview */}
      <section className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight">Interactive Engagement Tools</h2>
            <p className="mt-4 text-muted-foreground">
              StreamConf provides a suite of powerful engagement tools designed to transform passive viewers into active
              participants. Our interactive features create memorable experiences that keep attendees engaged throughout
              your event.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Live chat and Q&A",
                "Polls and surveys",
                "Interactive whiteboarding",
                "Audience reactions",
                "Moderation tools",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-xl border bg-card shadow-lg">
            <img
              src="/placeholder.svg?height=720&width=1280"
              alt="Audience Engagement Tools"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tight">Key Engagement Features</h2>
          <p className="mt-4 text-muted-foreground">
            Our platform offers a comprehensive set of engagement tools designed to create interactive and memorable
            virtual events.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Live Chat",
              description:
                "Enable real-time conversations between attendees, speakers, and organizers with public and private messaging options.",
              icon: MessageSquare,
            },
            {
              title: "Q&A Sessions",
              description:
                "Facilitate interactive Q&A with upvoting, moderation, and the ability to highlight answered questions.",
              icon: MessageSquare,
            },
            {
              title: "Live Polls",
              description:
                "Create instant polls to gather feedback, test knowledge, or make collective decisions during your event.",
              icon: BarChart,
            },
            {
              title: "Surveys",
              description:
                "Collect detailed feedback before, during, and after your event with customizable survey forms.",
              icon: PieChart,
            },
            {
              title: "Audience Reactions",
              description:
                "Allow attendees to express themselves with emoji reactions, applause, and other interactive elements.",
              icon: Hand,
            },
            {
              title: "Engagement Analytics",
              description:
                "Measure and analyze audience engagement with comprehensive metrics and real-time dashboards.",
              icon: BarChart,
            },
          ].map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Engagement Tools */}
      <section className="container">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Engagement Tools in Action</h2>
            <p className="mt-4 text-muted-foreground">
              See how our engagement tools create interactive and memorable experiences for your audience.
            </p>
          </div>

          <Tabs defaultValue="chat" className="mt-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="chat">Live Chat</TabsTrigger>
              <TabsTrigger value="qa">Q&A</TabsTrigger>
              <TabsTrigger value="polls">Polls</TabsTrigger>
              <TabsTrigger value="reactions">Reactions</TabsTrigger>
            </TabsList>
            <TabsContent value="chat" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>
                    Foster community and conversation with our powerful live chat features.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg border">
                    <img
                      src="/placeholder.svg?height=600&width=1000"
                      alt="Live Chat Interface"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="font-medium">Key Features</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>• Public and private messaging</li>
                        <li>• Emoji and GIF support</li>
                        <li>• Moderation tools</li>
                        <li>• Chat history and search</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Benefits</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>• Increased audience participation</li>
                        <li>• Community building</li>
                        <li>• Real-time feedback</li>
                        <li>• Enhanced networking opportunities</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="qa" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Q&A Sessions</CardTitle>
                  <CardDescription>
                    Facilitate meaningful discussions with our interactive Q&A features.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg border">
                    <img
                      src="/placeholder.svg?height=600&width=1000"
                      alt="Q&A Interface"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="font-medium">Key Features</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>• Question submission and upvoting</li>
                        <li>• Moderation queue</li>
                        <li>• Question status tracking</li>
                        <li>• Anonymous question options</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Benefits</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>• Democratized audience participation</li>
                        <li>• Focused and relevant discussions</li>
                        <li>• Increased speaker-audience interaction</li>
                        <li>• Valuable content generation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="polls" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Live Polls</CardTitle>
                  <CardDescription>
                    Gather instant feedback and engage your audience with interactive polls.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg border">
                    <img
                      src="/placeholder.svg?height=600&width=1000"
                      alt="Polling Interface"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="font-medium">Key Features</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>• Multiple question types</li>
                        <li>• Real-time results</li>
                        <li>• Custom branding</li>
                        <li>• Export capabilities</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Benefits</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>• Instant audience feedback</li>
                        <li>• Increased engagement</li>
                        <li>• Data-driven insights</li>
                        <li>• Interactive learning</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reactions" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Audience Reactions</CardTitle>
                  <CardDescription>
                    Let your audience express themselves with interactive reactions and feedback.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg border">
                    <img
                      src="/placeholder.svg?height=600&width=1000"
                      alt="Reactions Interface"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="font-medium">Key Features</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>• Emoji reactions</li>
                        <li>• Applause meter</li>
                        <li>• Custom reactions</li>
                        <li>• Reaction analytics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Benefits</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>• Enhanced engagement</li>
                        <li>• Real-time feedback</li>
                        <li>• Fun and interactive</li>
                        <li>• Audience sentiment tracking</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
