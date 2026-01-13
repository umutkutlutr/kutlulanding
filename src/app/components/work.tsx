// Motion removed for performance

export function Work() {

  const clients = [
    { name: "Global Finance Corp", logo: "GF" },
    { name: "TechVentures Inc", logo: "TV" },
    { name: "SecureHealth Systems", logo: "SH" },
    { name: "International Logistics", logo: "IL" },
    { name: "Advanced Manufacturing", logo: "AM" },
    { name: "Enterprise Solutions", logo: "ES" },
    { name: "Financial Services Group", logo: "FS" },
    { name: "Supply Chain Partners", logo: "SC" },
    { name: "Healthcare Network", logo: "HN" },
    { name: "Technology Holdings", logo: "TH" },
    { name: "Global Operations", logo: "GO" },
    { name: "Strategic Systems", logo: "SS" },
  ];

  return (
    <section id="work" className="relative py-32 overflow-hidden bg-white">
      {/* Static background shapes - no animation, reduced blur */}
      <div
        className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.08) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div
        className="absolute bottom-20 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30, 64, 175, 0.1) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm tracking-[0.3em] text-[#fb923c] uppercase font-semibold">
              {t('work.badge')}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 text-[#1a1d29] font-bold">
            {t('work.title')}
          </h2>
          <p className="text-[#52525b] text-xl max-w-2xl mx-auto font-medium">
            {t('work.subtitle')}
          </p>
        </div>

        {/* Logos Grid with advanced stagger animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative hover:-translate-y-3 hover:scale-[1.03] transition-all duration-300"
            >
              {/* Card */}
              <div className="relative h-44 bg-white border-2 border-[#e5e7eb] rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-[#fb923c]/40 group-hover:shadow-2xl group-hover:shadow-[#fb923c]/20">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#fb923c]/8 via-transparent to-[#1e40af]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated top border - removed animation for performance */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#fb923c] via-[#1e40af] to-[#1e3a8a] origin-left scale-x-100"
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                  {/* Logo placeholder with enhanced animation */}
                  <div
                    className="w-24 h-24 rounded-xl bg-gradient-to-br from-[#fb923c]/15 to-[#1e40af]/15 border-2 border-[#e5e7eb] group-hover:border-[#fb923c]/30 flex items-center justify-center mb-4 transition-all duration-500 shadow-lg group-hover:rotate-[360deg] group-hover:scale-110"
                  >
                    <span className="text-3xl font-bold bg-gradient-to-br from-[#fb923c] to-[#1e40af] bg-clip-text text-transparent">
                      {client.logo}
                    </span>
                  </div>

                  {/* Company name */}
                  <h3 className="text-sm text-[#52525b] group-hover:text-[#1a1d29] transition-colors duration-300 font-semibold">
                    {client.name}
                  </h3>
                </div>

                {/* Decorative corner glow - no animation */}
                <div
                  className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle, rgba(251, 146, 60, 0.4), transparent)",
                    filter: "blur(20px)"
                  }}
                />

                <div
                  className="absolute -top-16 -left-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle, rgba(30, 64, 175, 0.3), transparent)",
                    filter: "blur(20px)"
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative line - no animation */}
        <div className="mt-20 h-[2px] bg-gradient-to-r from-transparent via-[#fb923c] to-transparent origin-center" />
      </div>

      {/* Enhanced grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26, 29, 41, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26, 29, 41, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </section>
  );
}