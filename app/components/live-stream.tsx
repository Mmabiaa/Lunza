"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { CameraIcon, MicIcon, SettingsIcon } from "lucide-react"

interface LiveStreamProps {
  streamUrl: string
  isOrganizer: boolean
}

export function LiveStream({ streamUrl, isOrganizer }: LiveStreamProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = streamUrl
      videoRef.current.play().catch(console.error)
    }
  }, [streamUrl])

  return (
    <div className="relative bg-black/30 p-4 rounded-lg">
      <video
        ref={videoRef}
        className="w-full h-[400px] rounded-lg object-cover"
        autoPlay
        playsInline
      />
      
      {isOrganizer && (
        <div className="absolute bottom-4 left-4 flex gap-4">
          <Button variant="outline" className="bg-white/10 hover:bg-white/20">
            <CameraIcon className="w-4 h-4 mr-2" />
            Toggle Camera
          </Button>
          <Button variant="outline" className="bg-white/10 hover:bg-white/20">
            <MicIcon className="w-4 h-4 mr-2" />
            Toggle Mic
          </Button>
          <Button variant="outline" className="bg-white/10 hover:bg-white/20">
            <SettingsIcon className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      )}
    </div>
  )
}
