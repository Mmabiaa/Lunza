"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { PlayCircle } from "lucide-react"
import { VideoBackground } from "@/app/components/video-background"

export function HeroSection() {
  return (
    <VideoBackground videoSrc="/videos/hero-bg-video.mp4" className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">Elevate</span> Your Virtual Events
          </motion.h1>
          <motion.p
            className="max-w-[700px] text-lg text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A full-featured, modern live streaming platform tailored for conferences and online events. Deliver seamless
            streaming experiences with real-time interaction.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild size="lg">
              <Link href="/register">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/events">
                <PlayCircle className="mr-2 h-4 w-4" />
                Join Live
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="relative mx-auto mt-16 max-w-5xl px-4 sm:px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="overflow-hidden rounded-xl border bg-card shadow-xl">
          <div className="relative aspect-video w-full overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <Button size="lg" variant="outline" className="gap-2 bg-background/80 backdrop-blur">
                <PlayCircle className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <video
              src="/videos/demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </VideoBackground>
  )
}
