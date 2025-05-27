"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { CameraIcon, MicIcon, SettingsIcon } from "lucide-react"

interface LiveStreamProps {
  streamUrl: string
  isOrganizer: boolean
}

export function LiveStream({ streamUrl, isOrganizer }: LiveStreamProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [isCameraOn, setIsCameraOn] = useState(false)
  const [isMicOn, setIsMicOn] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = streamUrl
      videoRef.current.play()
        .then(() => {
          setError(null)
        })
        .catch((err) => {
          setError('Failed to load stream: ' + err.message)
        })
    }
  }, [streamUrl])

  const toggleCamera = async () => {
    if (isCameraOn) {
      setIsCameraOn(false)
      return
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
      setIsCameraOn(true)
    } catch (err) {
      setError('Failed to access camera: ' + (err instanceof Error ? err.message : String(err)))
    }
  }

  const toggleMic = async () => {
    if (isMicOn) {
      setIsMicOn(false)
      return
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      // Add audio stream to video element
      const existingStream = videoRef.current?.srcObject as MediaStream
      existingStream?.addTrack(stream.getAudioTracks()[0])
      setIsMicOn(true)
    } catch (err: unknown) {
      setError('Failed to access microphone: ' + (err instanceof Error ? err.message : String(err)))
    }
  }

  return (
    <div className="relative bg-black/30 p-4 rounded-lg">
      {error ? (
        <div className="text-red-400 text-center p-4">
          {error}
        </div>
      ) : (
        <video
          ref={videoRef}
          className="w-full h-[400px] rounded-lg object-cover"
          autoPlay
          playsInline
        />
      )}
      
      {isOrganizer && (
        <div className="absolute bottom-4 left-4 flex gap-4">
          <Button 
            variant="outline" 
            className="bg-white/10 hover:bg-white/20"
            onClick={toggleCamera}
          >
            <CameraIcon className="w-4 h-4 mr-2" />
            {isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
          </Button>
          <Button 
            variant="outline" 
            className="bg-white/10 hover:bg-white/20"
            onClick={toggleMic}
          >
            <MicIcon className="w-4 h-4 mr-2" />
            {isMicOn ? 'Mute Mic' : 'Unmute Mic'}
          </Button>
          <Button 
            variant="outline" 
            className="bg-white/10 hover:bg-white/20"
          >
            <SettingsIcon className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      )}
    </div>
  )
}
