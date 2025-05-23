"use client"

import { Button } from "@/components/ui/button"
import { Maximize, Minimize, Pause, Play, Volume2, VolumeX } from "lucide-react"
import { useRef, useState } from "react"

export function LiveStreamPlayer({ videoSrc }: { videoSrc: string }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayPause = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleFullscreen = () => {
    if (!videoRef.current) return
    if (!isFullscreen) {
      videoRef.current.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className="relative aspect-video w-full bg-black">
      <video
        ref={videoRef}
        src={videoSrc}
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Live indicator */}
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-md bg-black/70 px-2 py-1">
        <div className="h-2 w-2 animate-pulse rounded-full bg-red-500"></div>
        <span className="text-xs font-medium text-white">LIVE</span>
      </div>

      {/* Viewer count */}
      <div className="absolute right-4 top-4 rounded-md bg-black/70 px-2 py-1">
        <span className="text-xs font-medium text-white">1,245 watching</span>
      </div>

      {/* Controls overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100">
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Center play/pause button */}
        <Button
          variant="outline"
          size="icon"
          className="z-10 h-16 w-16 rounded-full bg-black/50 text-white hover:bg-black/70"
          onClick={handlePlayPause}
        >
          {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
        </Button>

        {/* Bottom controls */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-white/20"
              onClick={handlePlayPause}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-white/20"
              onClick={handleMute}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>

            <div className="text-xs font-medium text-white">LIVE</div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-white/20"
            onClick={handleFullscreen}
          >
            {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  )
}
