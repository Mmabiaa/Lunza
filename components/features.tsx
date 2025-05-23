import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart3,
  Calendar,
  CreditCard,
  Globe,
  MessageSquare,
  MonitorPlay,
  Network,
  PanelTop,
  Users,
  Video,
} from "lucide-react"

// Mock data for features
const features = [
  {
    title: "High-Quality Streaming",
    description: "Deliver crystal-clear video and audio to your audience, regardless of their device or connection.",
    icon: MonitorPlay,
  },
  {
    title: "Interactive Engagement",
    description: "Keep your audience engaged with live polls, Q&A sessions, and real-time chat.",
    icon: MessageSquare,
  },
  {
    title: "Event Management",
    description: "Easily create, schedule, and manage your events from a single dashboard.",
    icon: Calendar,
  },
  {
    title: "Analytics & Insights",
    description: "Gain valuable insights into attendee behavior and engagement metrics.",
    icon: BarChart3,
  },
  {
    title: "Global Reach",
    description: "Reach audiences worldwide with multi-language support and CDN delivery.",
    icon: Globe,
  },
  {
    title: "Secure Payments",
    description: "Process payments securely with our integrated ticketing and payment system.",
    icon: CreditCard,
  },
  {
    title: "Networking Opportunities",
    description: "Enable attendees to connect and network through virtual breakout rooms.",
    icon: Users,
  },
  {
    title: "Customizable Branding",
    description: "Tailor the platform to match your brand identity and event theme.",
    icon: PanelTop,
  },
  {
    title: "Multi-Device Support",
    description: "Provide a seamless experience across desktop, tablet, and mobile devices.",
    icon: Video,
  },
  {
    title: "Integration Ecosystem",
    description: "Connect with your favorite tools and services through our extensive API.",
    icon: Network,
  },
]

export function Features() {
  return (
    <section className="container">
      <div className="flex flex-col gap-8">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Powerful Features for Exceptional Events</h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to create, manage, and deliver outstanding virtual events.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="pb-2">
                <feature.icon className="h-10 w-10 text-primary" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
