interface VideoPlayerProps {
  src: string
  className?: string
}

export function VideoPlayer({ src, className }: VideoPlayerProps) {
  return (
    <div className="relative aspect-video w-full bg-black">
      <video
        src={src}
        controls
        autoPlay
        playsInline
        className={`w-full h-full object-cover ${className}`}
      />
    </div>
  )
}
