import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Globe, Award, Heart } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About | Lunza",
  description: "Learn about Lunza and our mission to transform virtual events",
}

const stats = [
  { label: "Events Hosted", value: "10,000+" },
  { label: "Active Users", value: "50,000+" },
  { label: "Countries", value: "150+" },
  { label: "Customer Satisfaction", value: "98%" },
]

const values = [
  {
    title: "Innovation",
    description: "Constantly pushing the boundaries of what's possible in virtual events",
    icon: Award,
  },
  {
    title: "Global Community",
    description: "Connecting people and ideas across borders and time zones",
    icon: Globe,
  },
  {
    title: "User-Centric",
    description: "Building solutions that put our users' needs first",
    icon: Users,
  },
  {
    title: "Passion",
    description: "Dedicated to making virtual events as engaging as in-person ones",
    icon: Heart,
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              About StreamConf
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We're on a mission to transform how people connect and share knowledge through virtual events
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="container">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Our Values</h2>
          <p className="mt-4 text-muted-foreground">
            These core principles guide everything we do at StreamConf
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {values.map((value) => (
            <Card key={value.title}>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Join Our Journey
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Be part of the future of virtual events
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 