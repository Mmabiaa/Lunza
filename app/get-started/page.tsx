import { Metadata } from "next"
import { ArrowRight, CheckCircle, Users, Settings, Calendar, Mail, Video } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VideoBackground } from "@/app/components/video-background"

export const metadata: Metadata = {
  title: "Get Started | Conference Streaming Platform",
  description: "Start your journey with our conference streaming platform",
}

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description: "Sign up for a free account and complete your profile setup.",
    icon: Users,
  },
  {
    number: "02",
    title: "Choose Your Plan",
    description: "Select the plan that best fits your conference needs.",
    icon: Settings,
  },
  {
    number: "03",
    title: "Set Up Your Event",
    description: "Configure your event settings, branding, and streaming options.",
    icon: Video,
  },
  {
    number: "04",
    title: "Invite Participants",
    description: "Send invitations to speakers and attendees.",
    icon: Mail,
  },
  {
    number: "05",
    title: "Go Live",
    description: "Start your conference and engage with your audience.",
    icon: Calendar,
  },
]

const features = [
  {
    name: "Easy-to-use interface",
    description: "Intuitive controls and dashboard for managing your events",
  },
  {
    name: "24/7 technical support",
    description: "Round-the-clock assistance for all your streaming needs",
  },
  {
    name: "Custom branding options",
    description: "Personalize your event with your brand identity",
  },
  {
    name: "Analytics and reporting",
    description: "Detailed insights into your event's performance",
  },
  {
    name: "Recording and playback",
    description: "Record and share your events with attendees",
  },
  {
    name: "Interactive features",
    description: "Engage your audience with polls, Q&A, and chat",
  },
]

export default function GetStartedPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <VideoBackground videoSrc="/videos/demo.mp4" className="py-20">
        <div className="container">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Get Started</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Begin your journey with our conference streaming platform in just a few simple steps
            </p>
          </div>
        </div>
      </VideoBackground>

      <div className="container">
        <div className="flex flex-col gap-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <Card key={step.number} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge>Step {step.number}</Badge>
                  </div>
                  <CardTitle className="mt-4 text-xl text-foreground">{step.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">What's Included</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.name}>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg text-foreground">{feature.name}</CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/register" className="inline-flex items-center gap-2">
                <span>Create Your Account</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 