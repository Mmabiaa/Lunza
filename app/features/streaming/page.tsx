import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, MonitorPlay, PlayCircle, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { VideoBackground } from "@/app/components/video-background"

export default function StreamingFeaturePage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <VideoBackground videoSrc="/videos/streaming-bg-video.mp4" className="py-20">
        <div className="container">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <MonitorPlay className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">High-Quality Live Streaming</h1>
            <p className="mt-6 max-w-[600px] text-lg text-muted-foreground">
              Deliver crystal-clear video and audio to your audience, regardless of their device or connection.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/get-started">Start Streaming</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </VideoBackground>

      {/* Feature Overview */}
      <section className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight">Broadcast-Quality Streaming</h2>
            <p className="mt-4 text-muted-foreground">
              StreamConf provides professional-grade streaming capabilities that ensure your content looks and sounds
              amazing. Our platform supports HD and 4K streaming with adaptive bitrate technology to deliver the best
              possible experience to every viewer.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "HD and 4K streaming support",
                "Low-latency live streaming",
                "Multi-bitrate adaptive playback",
                "Cloud transcoding",
                "Stream recording and archiving",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl border bg-card shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <Button size="lg" variant="outline" className="gap-2 bg-background/80 backdrop-blur">
                <PlayCircle className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <img
              src="/placeholder.svg?height=720&width=1280"
              alt="Streaming Platform Demo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tight">Key Streaming Features</h2>
          <p className="mt-4 text-muted-foreground">
            Our platform offers a comprehensive set of streaming features designed to make your virtual events
            exceptional.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Low-Latency Streaming",
              description:
                "Deliver real-time interactions with our ultra-low latency streaming technology, ensuring your audience experiences events as they happen.",
              icon: Zap,
            },
            {
              title: "Adaptive Bitrate",
              description:
                "Our intelligent streaming automatically adjusts quality based on viewers' connection speeds, ensuring smooth playback for everyone.",
              icon: MonitorPlay,
            },
            {
              title: "Secure Streaming",
              description:
                "Protect your content with advanced security features including token-based authentication, DRM, and geo-restrictions.",
              icon: Shield,
            },
            {
              title: "Multi-Platform Support",
              description:
                "Stream to any device with our responsive player that works seamlessly on desktop, mobile, tablets, and smart TVs.",
              icon: PlayCircle,
            },
            {
              title: "Cloud Transcoding",
              description:
                "Convert your stream into multiple formats and resolutions in real-time, optimizing for different devices and bandwidths.",
              icon: MonitorPlay,
            },
            {
              title: "Stream Recording",
              description:
                "Automatically record your live streams for on-demand viewing, allowing attendees to catch up on missed content.",
              icon: PlayCircle,
            },
          ].map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="container">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Technical Specifications</h2>
            <p className="mt-4 text-muted-foreground">
              Our platform is built on cutting-edge technology to deliver the best streaming experience.
            </p>
          </div>

          <Tabs defaultValue="video" className="mt-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="video">Video</TabsTrigger>
              <TabsTrigger value="audio">Audio</TabsTrigger>
              <TabsTrigger value="protocols">Protocols</TabsTrigger>
            </TabsList>
            <TabsContent value="video" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Video Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Resolutions</h4>
                      <p className="text-sm text-muted-foreground">SD (480p), HD (720p, 1080p), 4K (2160p)</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Codecs</h4>
                      <p className="text-sm text-muted-foreground">H.264/AVC, H.265/HEVC, VP9</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Bitrates</h4>
                      <p className="text-sm text-muted-foreground">Adaptive: 500 Kbps to 15 Mbps based on resolution</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Frame Rates</h4>
                      <p className="text-sm text-muted-foreground">24, 30, 60 fps</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="audio" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Audio Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Codecs</h4>
                      <p className="text-sm text-muted-foreground">AAC, Opus, MP3</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Bitrates</h4>
                      <p className="text-sm text-muted-foreground">64 Kbps to 320 Kbps</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Channels</h4>
                      <p className="text-sm text-muted-foreground">Stereo and 5.1 surround sound</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Sample Rates</h4>
                      <p className="text-sm text-muted-foreground">44.1 kHz, 48 kHz</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="protocols" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Streaming Protocols</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Ingest Protocols</h4>
                      <p className="text-sm text-muted-foreground">RTMP, RTMPS, SRT, WebRTC</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Delivery Protocols</h4>
                      <p className="text-sm text-muted-foreground">HLS, DASH, WebRTC, CMAF</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Latency</h4>
                      <p className="text-sm text-muted-foreground">Ultra-low (1-2s), Low (3-5s), Standard (8-15s)</p>
                    </div>
                    <div>
                      <h4 className="font-medium">CDN</h4>
                      <p className="text-sm text-muted-foreground">Global CDN with edge servers worldwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to start streaming?</h2>
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
