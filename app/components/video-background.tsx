import { cn } from "@/lib/utils"

interface VideoBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  videoSrc: string
  overlay?: boolean
}

export function VideoBackground({
  videoSrc,
  overlay = true,
  className,
  children,
  ...props
}: VideoBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden min-h-[400px]", className)} {...props}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          filter: "brightness(0.85)",
        }}
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/70 backdrop-blur-[1px]" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
} 