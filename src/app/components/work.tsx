import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

// Logo type definition
type Reference = {
  name: string;
  logoSrc: string;
  fallback?: string;
  url?: string;
};

export function Work() {
  const { t } = useLanguage();

  const references: Reference[] = [
    { name: "Maison Sacree", logoSrc: "/images/logos/maison-sacree.png", fallback: "MS", url: "https://maisonsacreecannes.com" },
    { name: "T&M Mühendislik", logoSrc: "/images/logos/tm-muhendislik.png", fallback: "TM", url: "https://www.heidenhain.com.tr" },
    { name: "LEDVISION", logoSrc: "/images/logos/ledvision.png", fallback: "LV", url: "https://ledvision.tr" },
    { name: "Avitech", logoSrc: "/images/logos/avitech-metal.png", fallback: "AV", url: "https://www.avitechmetal.com" },
    { name: "Vesil", logoSrc: "/images/logos/vesil.png", fallback: "VE", url: "https://vesil.com.tr" },
    { name: "Işıl Metal", logoSrc: "/images/logos/isil-metal.png", fallback: "IM", url: "https://www.isilmetal.com.tr" },
    { name: "TZL Suites", logoSrc: "/images/logos/tzl-suites.png", fallback: "TZ", url: "https://www.tzlsuites.com" },
    { name: "Sadık Kağıt", logoSrc: "/images/logos/sadik-kagit.png", fallback: "SK", url: "https://www.sadikkagit.com.tr" },
    { name: "Diaporta", logoSrc: "/images/logos/diaporta.png", fallback: "DI", url: "https://www.diaporta.com.tr" },
    { name: "The CSKY Partners Corp", logoSrc: "/images/logos/csky.png", fallback: "CS", url: "https://www.thecsky.com" },
    { name: "Graphene", logoSrc: "/images/logos/graphene.png", fallback: "GR" },
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

        {/* Infinite Scrolling Logo Ticker */}
        <ReferencesTicker references={references} />

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

function ReferencesTicker({ references }: { references: Reference[] }) {
  return (
    <div 
      className="ticker-wrapper relative w-full"
      aria-label="References"
    >
      {/* Edge fade masks - soft gradient */}
      <div 
        className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none ticker-fade-left"
        style={{
          width: 'clamp(60px, 8vw, 120px)',
        }}
      />
      <div 
        className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none ticker-fade-right"
        style={{
          width: 'clamp(60px, 8vw, 120px)',
        }}
      />
      
      <div className="ticker overflow-hidden">
        <div className="ticker-track flex items-center">
          {/* First set of logos */}
          {references.map((ref, index) => (
            <LogoItem key={`first-${index}`} reference={ref} />
          ))}
          {/* Duplicated set for seamless loop */}
          {references.map((ref, index) => (
            <LogoItem key={`second-${index}`} reference={ref} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LogoItem({ reference }: { reference: Reference }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  // Check if image exists before trying to load
  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.warn(`Logo not found: ${reference.logoSrc} - showing fallback for ${reference.name}`);
    setImageError(true);
    setImageLoading(false);
  };

  const logoContent = (
    <div className="flex items-center justify-center relative overflow-hidden" style={{ width: '240px', height: '80px' }}>
      {reference.logoSrc && !imageError ? (
        <>
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-[#e5e7eb] border-t-[#fb923c] rounded-full animate-spin opacity-50" />
            </div>
          )}
          <img
            src={reference.logoSrc}
            alt={reference.name}
            className={`object-contain grayscale hover:grayscale-0 transition-all duration-300 ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ 
              maxWidth: '230px', 
              maxHeight: '70px', 
              width: 'auto', 
              height: 'auto',
              objectFit: 'contain',
              objectPosition: 'center',
              display: 'block'
            }}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#fb923c]/10 to-[#1e40af]/10 border border-[#e5e7eb]">
          <span 
            className="font-bold text-[#52525b] text-sm md:text-base"
          >
            {reference.fallback || reference.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </span>
        </div>
      )}
    </div>
  );

  return (
    <div 
      className="ticker-item flex-shrink-0 flex items-center justify-center"
      style={{
        width: '240px',
        height: '80px',
      }}
    >
      {reference.url ? (
        <a
          href={reference.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
          aria-label={`Visit ${reference.name} website`}
        >
          {logoContent}
        </a>
      ) : (
        logoContent
      )}
    </div>
  );
}