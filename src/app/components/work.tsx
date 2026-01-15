// Motion removed for performance
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export function Work() {
  const { t } = useLanguage();

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
    <section id="work" className="relative py-14 md:py-20 lg:py-32 overflow-hidden bg-white">
      {/* Static background shapes - no animation, reduced blur, responsive sizes */}
      <div
        className="absolute top-10 right-1/4 w-48 h-48 md:w-64 md:h-64 lg:w-[500px] lg:h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.08) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div
        className="absolute bottom-10 left-1/4 w-56 h-56 md:w-80 md:h-80 lg:w-[600px] lg:h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30, 64, 175, 0.1) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-3 md:mb-4">
            <span className="text-xs md:text-sm tracking-[0.3em] text-[#fb923c] uppercase font-semibold">
              {t('work.badge')}
            </span>
          </div>
          <h2 
            className="tracking-tight mb-4 md:mb-6 text-[#1a1d29] font-bold"
            style={{
              fontSize: 'clamp(1.875rem, 6vw, 4.5rem)',
              lineHeight: '1.1',
            }}
          >
            {t('work.title')}
          </h2>
          <p 
            className="text-[#52525b] max-w-2xl mx-auto font-medium"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: '1.6',
            }}
          >
            {t('work.subtitle')}
          </p>
        </div>

        {/* Logos Grid with advanced stagger animation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <ClientCard key={index} client={client} index={index} />
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-12 md:mt-16 lg:mt-20 h-[2px] bg-gradient-to-r from-transparent via-[#fb923c] to-transparent origin-center" />
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

function ClientCard({ client, index }: { client: { name: string; logo: string }, index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (cardRef.current) {
              observer.unobserve(cardRef.current);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative hover:-translate-y-3 hover:scale-[1.03] transition-all duration-300 opacity-0 translate-y-4"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transitionDelay: `${index * 50}ms`,
      }}
    >
              {/* Card */}
              <div className="relative min-h-[120px] md:h-36 lg:h-44 bg-white border-2 border-[#e5e7eb] rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-[#fb923c]/40 group-hover:shadow-2xl group-hover:shadow-[#fb923c]/20">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#fb923c]/8 via-transparent to-[#1e40af]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated top border - removed animation for performance */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#fb923c] via-[#1e40af] to-[#1e3a8a] origin-left scale-x-100"
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 md:p-6">
                  {/* Logo placeholder with enhanced animation */}
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg md:rounded-xl bg-gradient-to-br from-[#fb923c]/15 to-[#1e40af]/15 border-2 border-[#e5e7eb] group-hover:border-[#fb923c]/30 flex items-center justify-center mb-2 md:mb-4 transition-all duration-500 shadow-lg group-hover:rotate-[360deg] group-hover:scale-110"
                  >
                    <span 
                      className="font-bold bg-gradient-to-br from-[#fb923c] to-[#1e40af] bg-clip-text text-transparent"
                      style={{
                        fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
                      }}
                    >
                      {client.logo}
                    </span>
                  </div>

                  {/* Company name */}
                  <h3 
                    className="text-[#52525b] group-hover:text-[#1a1d29] transition-colors duration-300 font-semibold text-center"
                    style={{
                      fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                      lineHeight: '1.4',
                    }}
                  >
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
  );
}