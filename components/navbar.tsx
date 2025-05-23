import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserNav } from "@/components/user-nav"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Lunza</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/features" className="transition-colors hover:text-foreground/80">
              Features
            </Link>
            <Link href="/pricing" className="transition-colors hover:text-foreground/80">
              Pricing
            </Link>
            <Link href="/blog" className="transition-colors hover:text-foreground/80">
              Blog
            </Link>
            <Link href="/events" className="transition-colors hover:text-foreground/80">
              Events
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button asChild variant="ghost">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Get Started</Link>
            </Button>
            <UserNav />
          </nav>
        </div>
      </div>
    </header>
  )
} 