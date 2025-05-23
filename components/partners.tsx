export function Partners() {
  // Mock data for partners
  const partners = [
    { id: 1, name: "TechCorp", logo: "/placeholder.svg?height=60&width=180" },
    { id: 2, name: "InnovateLabs", logo: "/placeholder.svg?height=60&width=180" },
    { id: 3, name: "FutureWorks", logo: "/placeholder.svg?height=60&width=180" },
    { id: 4, name: "GlobalTech", logo: "/placeholder.svg?height=60&width=180" },
    { id: 5, name: "NextGen", logo: "/placeholder.svg?height=60&width=180" },
    { id: 6, name: "DigitalSolutions", logo: "/placeholder.svg?height=60&width=180" },
  ]

  return (
    <section className="container">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground">Join the companies using StreamConf for their virtual events</p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="max-h-12 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
