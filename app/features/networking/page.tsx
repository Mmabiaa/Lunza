import { Metadata } from "next"
import { Users, MessageSquare, Video, Share2, Calendar } from "lucide-react"
import { VideoBackground } from "@/app/components/video-background"

export const metadata: Metadata = {
  title: "Networking Features | Lunza",
  description: "Powerful networking tools for virtual events and conferences",
}

const features = [
  {
    icon: Users,
    title: "Virtual Networking Rooms",
    description: "Create dedicated spaces for attendees to connect and network in real-time.",
  },
  {
    icon: MessageSquare,
    title: "Advanced Chat System",
    description: "Public and private chat channels with file sharing and emoji support.",
  },
  {
    icon: Video,
    title: "Video Breakout Rooms",
    description: "Enable face-to-face networking with customizable video breakout rooms.",
  },
  {
    icon: Share2,
    title: "Business Card Exchange",
    description: "Digital business card sharing and contact management system.",
  },
  {
    icon: Calendar,
    title: "Meeting Scheduler",
    description: "Schedule and manage one-on-one or group meetings with built-in calendar integration.",
  },
]

export default function NetworkingPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <VideoBackground videoSrc="/videos/networkin.mp4" className="py-20">
        <div className="container">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Powerful Networking Features
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Connect, engage, and build relationships in your virtual conference
            </p>
          </div>
        </div>
      </VideoBackground>

      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-lg shadow-md p-6 border"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Why Choose Our Networking Features?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-2">Enhanced Engagement</h3>
              <p className="text-muted-foreground">
                Keep your attendees engaged with interactive networking tools and real-time
                communication features.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Seamless Integration</h3>
              <p className="text-muted-foreground">
                All networking features are seamlessly integrated into the main conference
                platform for a smooth user experience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Analytics & Insights</h3>
              <p className="text-muted-foreground">
                Track engagement metrics and networking activities to measure the success of
                your event.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Customizable Experience</h3>
              <p className="text-muted-foreground">
                Tailor networking features to match your event's specific needs and branding
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 