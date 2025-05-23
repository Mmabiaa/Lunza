import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarIcon, PlayIcon, TicketIcon, UsersIcon } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { UpcomingEvents } from "@/components/upcoming-events"
import { Testimonials } from "@/components/testimonials"
import { Partners } from "@/components/partners"
import { EventHighlights } from "@/components/event-highlights"
import { Features } from "@/components/features"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroSection />

      <section className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-2 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <CalendarIcon className="h-10 w-10 text-primary" />
            <h3 className="text-xl font-semibold">Upcoming Events</h3>
            <p className="text-center text-muted-foreground">Browse and register for upcoming conferences and events</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <PlayIcon className="h-10 w-10 text-primary" />
            <h3 className="text-xl font-semibold">Live Streaming</h3>
            <p className="text-center text-muted-foreground">High-quality, interactive streaming experience</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <UsersIcon className="h-10 w-10 text-primary" />
            <h3 className="text-xl font-semibold">Networking</h3>
            <p className="text-center text-muted-foreground">Connect with attendees, speakers, and industry experts</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <TicketIcon className="h-10 w-10 text-primary" />
            <h3 className="text-xl font-semibold">Ticketing</h3>
            <p className="text-center text-muted-foreground">Secure and easy registration and payment process</p>
          </div>
        </div>
      </section>

      <UpcomingEvents />
      <Features />
      <Testimonials />
      <Partners />
      <EventHighlights />

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Ready to host your next event?</h2>
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
