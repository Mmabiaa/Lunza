import { Metadata } from "next"
import Link from "next/link"
import { Check, Users, Clock, CalendarIcon, MessageSquare, Video, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VideoBackground } from "@/app/components/video-background"

export const metadata: Metadata = {
  title: "Pricing | Conference Streaming Platform",
  description: "Choose the perfect plan for your virtual conference needs",
}

const plans = [
  {
    name: "Starter",
    price: "99",
    description: "Perfect for small events and webinars",
    features: [
      {
        name: "Up to 100 concurrent viewers",
        icon: Users,
      },
      {
        name: "720p streaming quality",
        icon: Video,
      },
      {
        name: "Basic chat functionality",
        icon: MessageSquare,
      },
      {
        name: "Event recording (24 hours)",
        icon: Clock,
      },
      {
        name: "Email support",
        icon: MessageSquare,
      },
    ],
    popular: false,
    badge: "Best for small teams",
  },
  {
    name: "Professional",
    price: "299",
    description: "Ideal for medium-sized conferences",
    features: [
      {
        name: "Up to 500 concurrent viewers",
        icon: Users,
      },
      {
        name: "1080p streaming quality",
        icon: Video,
      },
      {
        name: "Advanced chat and Q&A",
        icon: MessageSquare,
      },
      {
        name: "Event recording (7 days)",
        icon: Clock,
      },
      {
        name: "Priority support",
        icon: MessageSquare,
      },
      {
        name: "Custom branding",
        icon: Shield,
      },
      {
        name: "Analytics dashboard",
        icon: Zap,
      },
    ],
    popular: true,
    badge: "Most popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale events and organizations",
    features: [
      {
        name: "Unlimited concurrent viewers",
        icon: Users,
      },
      {
        name: "4K streaming quality",
        icon: Video,
      },
      {
        name: "Full suite of engagement tools",
        icon: MessageSquare,
      },
      {
        name: "Permanent event recording",
        icon: Clock,
      },
      {
        name: "24/7 dedicated support",
        icon: MessageSquare,
      },
      {
        name: "Custom integration options",
        icon: Shield,
      },
      {
        name: "Advanced analytics",
        icon: Zap,
      },
      {
        name: "SLA guarantee",
        icon: Shield,
      },
    ],
    popular: false,
    badge: "For large organizations",
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <VideoBackground videoSrc="/videos/pricing.mp4" className="py-20">
        <div className="container">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the perfect plan for your virtual conference needs
            </p>
          </div>
        </div>
      </VideoBackground>

      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.popular ? "border-primary" : ""}>
              <CardHeader>
                {plan.badge && (
                  <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {plan.badge}
                  </div>
                )}
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 