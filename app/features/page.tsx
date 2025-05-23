import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VideoBackground } from "../components/video-background"
import {
  Video,
  Calendar,
  Users,
  MessageSquare,
  BarChart,
  Shield,
  Zap,
  Globe,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Features | Lunza",
  description: "Discover the powerful features of our conference streaming platform",
}

const featureCategories = [
  {
    title: "Live Streaming",
    description: "High-quality, reliable streaming for your virtual events",
    features: [
      {
        title: "HD Video Streaming",
        description: "Crystal clear video quality up to 4K resolution",
        icon: Video,
      },
      {
        title: "Multi-bitrate Streaming",
        description: "Adaptive streaming for different network conditions",
        icon: Zap,
      },
      {
        title: "Global CDN",
        description: "Low-latency streaming worldwide",
        icon: Globe,
      },
    ],
  },
  {
    title: "Event Management",
    description: "Comprehensive tools to manage your virtual events",
    features: [
      {
        title: "Event Scheduling",
        description: "Easy scheduling and calendar management",
        icon: Calendar,
      },
      {
        title: "Attendee Management",
        description: "Track and manage event participants",
        icon: Users,
      },
      {
        title: "Analytics Dashboard",
        description: "Detailed insights and reporting",
        icon: BarChart,
      },
    ],
  },
  {
    title: "Audience Engagement",
    description: "Interactive features to engage your audience",
    features: [
      {
        title: "Live Chat",
        description: "Real-time communication with participants",
        icon: MessageSquare,
      },
      {
        title: "Q&A Sessions",
        description: "Interactive question and answer features",
        icon: Users,
      },
      {
        title: "Polls and Surveys",
        description: "Gather feedback and insights",
        icon: BarChart,
      },
    ],
  },
  {
    title: "Networking",
    description: "Tools to facilitate meaningful connections",
    features: [
      {
        title: "Virtual Rooms",
        description: "Create private meeting spaces",
        icon: Users,
      },
      {
        title: "Matchmaking",
        description: "AI-powered attendee matching",
        icon: Globe,
      },
      {
        title: "Business Cards",
        description: "Digital business card exchange",
        icon: Shield,
      },
    ],
  },
]

const additionalFeatures = [
  {
    title: "Custom Branding",
    description: "White-label solution with your brand identity",
    icon: Shield,
  },
  {
    title: "Recording & Playback",
    description: "Record sessions for on-demand viewing",
    icon: Video,
  },
  {
    title: "Mobile Support",
    description: "Fully responsive design for all devices",
    icon: Globe,
  },
  {
    title: "API Access",
    description: "Integrate with your existing systems",
    icon: Zap,
  },
]

export default function FeaturesPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <VideoBackground
        videoSrc="/videos/hero-bg-video.mp4"
        className="py-20"
      >
        <div className="container">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Powerful Features for Virtual Events
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to create, manage, and deliver exceptional virtual events
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </VideoBackground>

      {/* Feature Categories */}
      {featureCategories.map((category, index) => {
        // Map category titles to video files
        const videoMap: Record<string, string> = {
          "Live Streaming": "/videos/streaming-bg-video.mp4",
          "Event Management": "/videos/management-bg-video.mp4",
          "Audience Engagement": "/videos/audience-bg-video.mp4",
          "Networking": "/videos/networking.mp4",
        }

        const videoSrc = videoMap[category.title]
        if (!videoSrc) {
          console.error(`No video source found for category: ${category.title}`)
        }

        return (
          <VideoBackground
            key={category.title}
            videoSrc={videoSrc}
            className="py-20"
          >
            <section className="container">
              <div className="mx-auto max-w-[800px] text-center">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {category.title}
                </h2>
                <p className="mt-4 text-muted-foreground">{category.description}</p>
              </div>

              <div className="mt-12 grid gap-8 md:grid-cols-3">
                {category.features.map((feature) => (
                  <Card key={feature.title}>
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </VideoBackground>
        )
      })}

      {/* Additional Features Section */}
      <VideoBackground videoSrc="/videos/additional-features.mp4" className="py-20">
        <section className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Additional Features
            </h2>
            <p className="mt-4 text-muted-foreground">
              Enhance your virtual events with these powerful additional features
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {additionalFeatures.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </VideoBackground>
    </div>
  )
}
