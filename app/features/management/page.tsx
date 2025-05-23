import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Check, LayoutDashboard, LineChart, Settings, Users } from "lucide-react"
import Link from "next/link"
import { VideoBackground } from "@/app/components/video-background"

export default function ManagementFeaturePage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <VideoBackground videoSrc="/videos/management-bg-video.mp4" className="py-20">
        <div className="container">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Event Management</h1>
            <p className="mt-6 max-w-[600px] text-lg text-muted-foreground">
              Powerful tools to create, manage, and analyze your events from a single dashboard.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/get-started">Create Event</Link>
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
            <h2 className="text-3xl font-bold tracking-tight">Comprehensive Event Management</h2>
            <p className="mt-4 text-muted-foreground">
              StreamConf provides everything you need to create and manage successful virtual events. From customizable
              event pages to detailed analytics, our platform streamlines the entire event management process.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Customizable event pages",
                "Scheduling and calendar integration",
                "Speaker and session management",
                "Ticketing and registration",
                "Analytics and reporting",
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
              alt="Event Management Dashboard"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tight">Key Management Features</h2>
          <p className="mt-4 text-muted-foreground">
            Our platform offers a comprehensive set of management tools designed to make organizing virtual events
            effortless.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Event Dashboard",
              description:
                "A centralized dashboard that gives you complete control over all aspects of your event in one place.",
              icon: LayoutDashboard,
            },
            {
              title: "Schedule Management",
              description: "Create and manage complex event schedules with multiple tracks, sessions, and speakers.",
              icon: Calendar,
            },
            {
              title: "Speaker Management",
              description: "Easily manage speaker profiles, presentations, and communication all from one interface.",
              icon: Users,
            },
            {
              title: "Registration & Ticketing",
              description: "Set up customizable registration forms and ticket types with secure payment processing.",
              icon: Calendar,
            },
            {
              title: "Analytics & Reporting",
              description: "Gain valuable insights with real-time analytics on attendance, engagement, and more.",
              icon: LineChart,
            },
            {
              title: "Customization Options",
              description:
                "Tailor every aspect of your event to match your brand with extensive customization options.",
              icon: Settings,
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

      {/* Management Tools */}
      <section className="container">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Management Tools</h2>
            <p className="mt-4 text-muted-foreground">
              Explore the powerful tools that make event management simple and efficient.
            </p>
          </div>

          <Tabs defaultValue="dashboard" className="mt-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="scheduling">Scheduling</TabsTrigger>
              <TabsTrigger value="speakers">Speakers</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Event Dashboard</CardTitle>
                  <CardDescription>
                    A comprehensive overview of your event with all the tools you need in one place.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg border">
                    <img
                      src="/placeholder.svg?height=600&width=1000"
                      alt="Event Dashboard"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="font-medium">Key Features</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>• Real-time event overview</li>
                        <li>• Quick access to all management tools</li>
                        <li>• Attendee and registration metrics</li>
                        <li>• Content and session management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Benefits</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>• Centralized event control</li>
                        <li>• Time-saving workflows</li>
                        <li>• Improved team collaboration</li>
                        <li>• Reduced management complexity</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="scheduling" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Scheduling Tools</CardTitle>
                  <CardDescription>
                    Create and manage complex event schedules with multiple tracks and sessions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg border">
                    <img
                      src="/placeholder.svg?height=600&width=1000"
                      alt="Scheduling Interface"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="font-medium">Key Features</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>• Drag-and-drop schedule builder</li>
                        <li>• Multi-track support</li>
                        <li>• Time zone management</li>
                        <li>• Calendar integration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Benefits</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>• Simplified schedule creation</li>
                        <li>• Flexible session management</li>
                        <li>• Automatic attendee notifications</li>
                        <li>• Conflict prevention</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="speakers" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Speaker Management</CardTitle>
                  <CardDescription>Easily manage speaker profiles, presentations, and communication.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg border">
                    <img
                      src="/placeholder.svg?height=600&width=1000"
                      alt="Speaker Management"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="font-medium">Key Features</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>• Speaker profile management</li>
                        <li>• Presentation uploads</li>
                        <li>• Speaker communication tools</li>
                        <li>• Speaker portal access</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Benefits</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>• Streamlined speaker coordination</li>
                        <li>• Simplified content collection</li>
                        <li>• Improved speaker experience</li>
                        <li>• Professional speaker showcase</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics & Reporting</CardTitle>
                  <CardDescription>
                    Gain valuable insights with real-time analytics on attendance, engagement, and more.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg border">
                    <img
                      src="/placeholder.svg?height=600&width=1000"
                      alt="Analytics Dashboard"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="font-medium">Key Features</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>• Real-time attendance tracking</li>
                        <li>• Engagement metrics</li>
                        <li>• Session popularity analysis</li>
                        <li>• Custom report generation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Benefits</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>• Data-driven decision making</li>
                        <li>• ROI measurement</li>
                        <li>• Content effectiveness insights</li>
                        <li>• Attendee behavior understanding</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to manage your next event?</h2>
          <p className="max-w-[700px] text-lg text-primary-foreground/80">
            Join thousands of event organizers who trust StreamConf for their virtual conferences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/register">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
