import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { VideoBackground } from "@/app/components/video-background"

export const metadata: Metadata = {
  title: "Terms of Service | Conference Streaming Platform",
  description: "Read our terms of service and user agreement",
}

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing or using our platform, you agree to these terms",
      "You must be at least 18 years old to use our services",
      "You are responsible for maintaining the security of your account",
      "You agree to provide accurate and complete information",
    ],
  },
  {
    title: "User Responsibilities",
    content: [
      "Comply with all applicable laws and regulations",
      "Respect intellectual property rights",
      "Maintain appropriate behavior during events",
      "Protect account credentials and personal information",
    ],
  },
  {
    title: "Content Guidelines",
    content: [
      "No illegal or harmful content",
      "No unauthorized commercial use",
      "No impersonation or false representation",
      "No harassment or abusive behavior",
    ],
  },
  {
    title: "Service Usage",
    content: [
      "Fair and reasonable use of platform resources",
      "No unauthorized access or interference",
      "No automated data collection without permission",
      "No reverse engineering or decompiling",
    ],
  },
  {
    title: "Payment Terms",
    content: [
      "Subscription fees are billed in advance",
      "No refunds for partial subscription periods",
      "Prices may change with notice",
      "Payment information must be accurate and current",
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <VideoBackground videoSrc="/videos/contact.mp4" className="py-20">
        <div className="container">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Terms of Service
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
      <section className="relative overflow-hidden bg-muted">
        <VideoBackground videoSrc="/videos/host.mp4" className="absolute inset-0 h-full w-full">
          <div className="relative z-10 py-20">
            <div className="container">
              <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Questions About Our Terms?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Our team is here to help you understand our terms of service
                </p>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </VideoBackground>
      </section>
    </div>
  )
} 