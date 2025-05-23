import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { VideoBackground } from "@/app/components/video-background"

export const metadata: Metadata = {
  title: "Privacy Policy | Conference Streaming Platform",
  description: "Learn about how we protect your privacy and handle your data",
}

const sections = [
  {
    title: "Information We Collect",
    content: [
      "Personal information (name, email, company)",
      "Event participation data",
      "Usage statistics and analytics",
      "Device and browser information",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To provide and improve our services",
      "To communicate with you about your account",
      "To send you updates and marketing communications",
      "To analyze and enhance user experience",
    ],
  },
  {
    title: "Data Protection",
    content: [
      "We implement industry-standard security measures",
      "Your data is encrypted during transmission",
      "Regular security audits and updates",
      "Limited access to personal information",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "Access your personal data",
      "Request data correction or deletion",
      "Opt-out of marketing communications",
      "Export your data",
    ],
  },
  {
    title: "Cookies and Tracking",
    content: [
      "We use cookies to improve your experience",
      "Essential cookies for functionality",
      "Analytics cookies for service improvement",
      "Marketing cookies for personalization",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <VideoBackground videoSrc="/videos/event-bg-video.mp4" className="py-20">
        <div className="container">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </VideoBackground>

      {/* Content Sections */}
      <section className="container">
        <div className="mx-auto max-w-[800px] space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">{section.title}</h2>
              <ul className="mt-4 space-y-2">
                {section.content.map((item) => (
                  <li key={item} className="text-muted-foreground">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Questions About Privacy?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our team is here to help you understand our privacy practices
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 