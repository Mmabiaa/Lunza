"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/date-picker"
import { TimePicker } from "@/components/time-picker"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Navbar } from "@/app/components/navbar"
import { useEffect, useState } from "react"

export default function CreateEventPage() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/blog.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"></div>

      {/* Content */}
      <div className="relative z-20">
        <Navbar user={user} />

        <div className="container py-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white">Create Event</h1>
                <p className="text-white/70">Set up your event details and configure streaming options</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">Save as Draft</Button>
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20">Publish Event</Button>
              </div>
            </div>

            <Tabs defaultValue="details" className="w-full">
              <TabsList className="mb-4 w-full justify-start bg-white/10 border-white/20">
                <TabsTrigger value="details" className="text-white data-[state=active]:bg-white/20">Event Details</TabsTrigger>
                <TabsTrigger value="streaming" className="text-white data-[state=active]:bg-white/20">Streaming</TabsTrigger>
                <TabsTrigger value="tickets" className="text-white data-[state=active]:bg-white/20">Tickets</TabsTrigger>
                <TabsTrigger value="engagement" className="text-white data-[state=active]:bg-white/20">Engagement</TabsTrigger>
                <TabsTrigger value="settings" className="text-white data-[state=active]:bg-white/20">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">Basic Information</CardTitle>
                    <CardDescription className="text-white/70">Enter the basic details about your event</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="event-title" className="text-white">Event Title</Label>
                      <Input id="event-title" placeholder="Enter event title" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="event-description" className="text-white">Description</Label>
                      <Textarea id="event-description" placeholder="Enter event description" className="min-h-32 bg-white/5 border-white/20 text-white placeholder:text-white/50" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="event-category" className="text-white">Category</Label>
                        <Select>
                          <SelectTrigger id="event-category" className="bg-white/5 border-white/20 text-white">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent className="bg-black/90 border-white/20">
                            <SelectItem value="technology" className="text-white">Technology</SelectItem>
                            <SelectItem value="business" className="text-white">Business</SelectItem>
                            <SelectItem value="design" className="text-white">Design</SelectItem>
                            <SelectItem value="marketing" className="text-white">Marketing</SelectItem>
                            <SelectItem value="education" className="text-white">Education</SelectItem>
                            <SelectItem value="other" className="text-white">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="event-type" className="text-white">Event Type</Label>
                        <Select>
                          <SelectTrigger id="event-type" className="bg-white/5 border-white/20 text-white">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent className="bg-black/90 border-white/20">
                            <SelectItem value="conference" className="text-white">Conference</SelectItem>
                            <SelectItem value="webinar" className="text-white">Webinar</SelectItem>
                            <SelectItem value="workshop" className="text-white">Workshop</SelectItem>
                            <SelectItem value="panel" className="text-white">Panel Discussion</SelectItem>
                            <SelectItem value="course" className="text-white">Course</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">Date & Time</CardTitle>
                    <CardDescription className="text-white/70">Set when your event will take place</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="multi-day" className="data-[state=checked]:bg-white/20" />
                      <Label htmlFor="multi-day" className="text-white">Multi-day event</Label>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label className="text-white">Start Date</Label>
                        <DatePicker />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-white">Start Time</Label>
                        <TimePicker />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label className="text-white">End Date</Label>
                        <DatePicker />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-white">End Time</Label>
                        <TimePicker />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Timezone</Label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent className="bg-black/90 border-white/20">
                          <SelectItem value="utc-8" className="text-white">Pacific Time (UTC-8)</SelectItem>
                          <SelectItem value="utc-5" className="text-white">Eastern Time (UTC-5)</SelectItem>
                          <SelectItem value="utc+0" className="text-white">UTC</SelectItem>
                          <SelectItem value="utc+1" className="text-white">Central European Time (UTC+1)</SelectItem>
                          <SelectItem value="utc+8" className="text-white">China Standard Time (UTC+8)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">Event Cover</CardTitle>
                    <CardDescription className="text-white/70">Upload images for your event</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col gap-4">
                      <Label className="text-white">Cover Image</Label>
                      <div className="flex h-64 items-center justify-center rounded-md border border-dashed border-white/20">
                        <div className="flex flex-col items-center gap-2 p-4 text-center">
                          <div className="rounded-full bg-white/10 p-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-6 w-6 text-white"
                            >
                              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                              <line x1="16" x2="22" y1="5" y2="5" />
                              <line x1="19" x2="19" y1="2" y2="8" />
                              <circle cx="9" cy="9" r="2" />
                              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                            </svg>
                          </div>
                          <p className="text-sm font-medium text-white">Drag & drop or click to upload</p>
                          <p className="text-xs text-white/70">Recommended size: 1920x1080px (16:9)</p>
                          <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                            Select File
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="streaming" className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">Streaming Setup</CardTitle>
                    <CardDescription className="text-white/70">Configure your live streaming settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label className="text-white">Streaming Provider</Label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue placeholder="Select provider" />
                        </SelectTrigger>
                        <SelectContent className="bg-black/90 border-white/20">
                          <SelectItem value="mux" className="text-white">Mux</SelectItem>
                          <SelectItem value="vimeo" className="text-white">Vimeo</SelectItem>
                          <SelectItem value="youtube" className="text-white">YouTube Live</SelectItem>
                          <SelectItem value="custom" className="text-white">Custom RTMP</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator className="bg-white/20" />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-white">Stream Settings</h3>
                          <p className="text-sm text-white/70">Configure quality and access settings</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label className="text-white">Quality Preset</Label>
                          <Select>
                            <SelectTrigger className="bg-white/5 border-white/20 text-white">
                              <SelectValue placeholder="Select quality" />
                            </SelectTrigger>
                            <SelectContent className="bg-black/90 border-white/20">
                              <SelectItem value="auto" className="text-white">Auto (Adaptive)</SelectItem>
                              <SelectItem value="high" className="text-white">High (1080p)</SelectItem>
                              <SelectItem value="medium" className="text-white">Medium (720p)</SelectItem>
                              <SelectItem value="low" className="text-white">Low (480p)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-white">Access Control</Label>
                          <Select>
                            <SelectTrigger className="bg-white/5 border-white/20 text-white">
                              <SelectValue placeholder="Select access" />
                            </SelectTrigger>
                            <SelectContent className="bg-black/90 border-white/20">
                              <SelectItem value="public" className="text-white">Public</SelectItem>
                              <SelectItem value="private" className="text-white">Private (Ticket holders only)</SelectItem>
                              <SelectItem value="password" className="text-white">Password Protected</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="recording" className="text-white">Record Stream</Label>
                          <Switch id="recording" className="data-[state=checked]:bg-white/20" />
                        </div>
                        <p className="text-xs text-white/70">
                          Record the stream for on-demand viewing after the event
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Stream Layout</CardTitle>
                    <CardDescription>Customize how your stream appears to viewers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                      <div className="flex flex-col items-center gap-2 rounded-md border p-4 hover:border-primary">
                        <div className="aspect-video w-full rounded bg-muted"></div>
                        <span className="text-sm font-medium">Standard</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 rounded-md border p-4 hover:border-primary">
                        <div className="aspect-video w-full rounded bg-muted"></div>
                        <span className="text-sm font-medium">Side-by-side</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 rounded-md border p-4 hover:border-primary">
                        <div className="aspect-video w-full rounded bg-muted"></div>
                        <span className="text-sm font-medium">Picture-in-picture</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Custom Overlay</Label>
                      <div className="flex h-32 items-center justify-center rounded-md border border-dashed">
                        <div className="flex flex-col items-center gap-2 p-4 text-center">
                          <p className="text-xs text-muted-foreground">
                            Upload a PNG with transparency for custom overlays
                          </p>
                          <Button variant="outline" size="sm">
                            Upload Overlay
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tickets" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Ticket Options</CardTitle>
                    <CardDescription>Create ticket types and set pricing</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-md border">
                      <div className="p-4">
                        <h3 className="text-lg font-medium">General Admission</h3>
                        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                          <div className="space-y-2">
                            <Label>Price</Label>
                            <div className="flex">
                              <div className="flex h-10 items-center justify-center rounded-l-md border border-r-0 bg-muted px-3 text-sm">
                                $
                              </div>
                              <Input type="number" placeholder="0.00" className="rounded-l-none" defaultValue="29.99" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label>Quantity</Label>
                            <Input type="number" defaultValue="100" />
                          </div>
                          <div className="space-y-2">
                            <Label>Sale End Date</Label>
                            <DatePicker />
                          </div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <Label>Description</Label>
                          <Textarea
                            placeholder="Describe what's included with this ticket"
                            defaultValue="Access to all sessions and recordings"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="rounded-md border">
                      <div className="p-4">
                        <h3 className="text-lg font-medium">VIP Access</h3>
                        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                          <div className="space-y-2">
                            <Label>Price</Label>
                            <div className="flex">
                              <div className="flex h-10 items-center justify-center rounded-l-md border border-r-0 bg-muted px-3 text-sm">
                                $
                              </div>
                              <Input type="number" placeholder="0.00" className="rounded-l-none" defaultValue="99.99" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label>Quantity</Label>
                            <Input type="number" defaultValue="50" />
                          </div>
                          <div className="space-y-2">
                            <Label>Sale End Date</Label>
                            <DatePicker />
                          </div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <Label>Description</Label>
                          <Textarea
                            placeholder="Describe what's included with this ticket"
                            defaultValue="Premium access with exclusive Q&A sessions and networking opportunities"
                          />
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      + Add Ticket Type
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Payment Settings</CardTitle>
                    <CardDescription>Configure payment methods and options</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Payment Processor</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment processor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stripe">Stripe</SelectItem>
                          <SelectItem value="paypal">PayPal</SelectItem>
                          <SelectItem value="square">Square</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="promo-codes">Enable Promo Codes</Label>
                        <Switch id="promo-codes" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Currency</Label>
                      <Select defaultValue="usd">
                        <SelectTrigger>
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD ($)</SelectItem>
                          <SelectItem value="eur">EUR (€)</SelectItem>
                          <SelectItem value="gbp">GBP (£)</SelectItem>
                          <SelectItem value="cad">CAD ($)</SelectItem>
                          <SelectItem value="aud">AUD ($)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="engagement" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Audience Engagement</CardTitle>
                    <CardDescription>Configure interactive features for your event</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Live Chat</h3>
                          <p className="text-sm text-muted-foreground">Allow attendees to chat during the event</p>
                        </div>
                        <Switch id="live-chat" defaultChecked />
                      </div>

                      <div className="ml-6 space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="chat-moderation" />
                          <Label htmlFor="chat-moderation" className="text-sm">
                            Enable chat moderation
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="chat-private" />
                          <Label htmlFor="chat-private" className="text-sm">
                            Allow private messages
                          </Label>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Q&A</h3>
                          <p className="text-sm text-muted-foreground">Allow attendees to submit questions</p>
                        </div>
                        <Switch id="qa" defaultChecked />
                      </div>

                      <div className="ml-6 space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="qa-upvote" defaultChecked />
                          <Label htmlFor="qa-upvote" className="text-sm">
                            Enable question upvoting
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="qa-anonymous" />
                          <Label htmlFor="qa-anonymous" className="text-sm">
                            Allow anonymous questions
                          </Label>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Polls</h3>
                          <p className="text-sm text-muted-foreground">Create interactive polls for your audience</p>
                        </div>
                        <Switch id="polls" defaultChecked />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Breakout Rooms</h3>
                          <p className="text-sm text-muted-foreground">Enable smaller group discussions</p>
                        </div>
                        <Switch id="breakout" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Event Settings</CardTitle>
                    <CardDescription>Configure additional settings for your event</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label>Event Visibility</Label>
                      <Select defaultValue="public">
                        <SelectTrigger>
                          <SelectValue placeholder="Select visibility" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="unlisted">Unlisted</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">Public events appear in search and event listings</p>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Registration</h3>
                          <p className="text-sm text-muted-foreground">Configure registration settings</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="approval">Require approval</Label>
                          <Switch id="approval" />
                        </div>
                        <p className="text-xs text-muted-foreground">Manually approve each registration</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="waitlist">Enable waitlist</Label>
                          <Switch id="waitlist" defaultChecked />
                        </div>
                        <p className="text-xs text-muted-foreground">Allow registrations after tickets are sold out</p>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Email Notifications</h3>
                          <p className="text-sm text-muted-foreground">Configure automated emails</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="email-confirmation" defaultChecked />
                          <Label htmlFor="email-confirmation">Registration confirmation</Label>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="email-reminder" defaultChecked />
                          <Label htmlFor="email-reminder">Event reminders</Label>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="email-followup" defaultChecked />
                          <Label htmlFor="email-followup">Post-event follow-up</Label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" asChild>
                      <Link href="/dashboard">Cancel</Link>
                    </Button>
                    <Button>Save Settings</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
