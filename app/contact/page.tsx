import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { VideoBackground } from "@/app/components/video-background"

export const metadata: Metadata = {
  title: "Contact | Lunza",
  description: "Get in touch with our team for support or inquiries",
}

const contactInfo = [
  {
    title: "Email",
    description: "support@streamconf.com",
    icon: Mail,
  },
  {
    title: "Phone",
    description: "+1 (555) 123-4567",
    icon: Phone,
  },
  {
    title: "Address",
    description: "123 Tech Street, San Francisco, CA 94107",
    icon: MapPin,
  },
  {
    title: "Hours",
    description: "Monday - Friday, 9:00 AM - 6:00 PM PST",
    icon: Clock,
  },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <VideoBackground videoSrc="/videos/event-bg-video.mp4" className="py-20">
        <div className="container">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We're here to help. Get in touch with our team for any questions or support.
            </p>
          </div>
        </div>
      </VideoBackground>

      {/* Contact Info Section */}
      <section className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info) => (
            <Card key={info.title}>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{info.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container">
        <div className="mx-auto max-w-[600px]">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send us a message</CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 