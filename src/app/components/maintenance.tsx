import { Shield, Activity, TrendingUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export function Maintenance() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      titleKey: "maintenance.feature.0.title",
      descriptionKey: "maintenance.feature.0.description",
      color: "#fb923c",
      gradient: "from-[#fb923c]/10 to-[#f97316]/5"
    },
    {
      icon: Activity,
      titleKey: "maintenance.feature.1.title",
      descriptionKey: "maintenance.feature.1.description",
      color: "#1e40af",
      gradient: "from-[#1e40af]/10 to-[#1e3a8a]/5"
    },
    {
      icon: TrendingUp,
      titleKey: "maintenance.feature.2.title",
      descriptionKey: "maintenance.feature.2.description",
      color: "#f97316",
      gradient: "from-[#f97316]/10 to-[#fb923c]/5"
    },
  ];

  return (
    <section
      id="maintenance"
      className="relative py-14 md:py-20 lg:py-32 border-t border-white/5 overflow-hidden"
    >
      {/* Static backgrounds - no animation, reduced blur, responsive sizes */}
      <div
        className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 lg:w-[400px] lg:h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.06) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div
        className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.05) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div 
          className="text-center mb-12 md:mb-16 lg:mb-20 opacity-0 translate-y-8 transition-all duration-700 ease-out"
          ref={(el) => {
            if (el) {
              const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                    observer.unobserve(el);
                  }
                });
              }, { threshold: 0.1 });
              observer.observe(el);
            }
          }}
        >
          <h2 
            className="tracking-tight mb-4 md:mb-6"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 3.75rem)',
              lineHeight: '1.1',
            }}
          >
            {t('maintenance.title')}
          </h2>
          <p 
            className="text-[#9ca3af] max-w-2xl mx-auto leading-relaxed"
            style={{
              fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
              lineHeight: '1.6',
            }}
          >
            {t('maintenance.subtitle')}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, i) => {
            return (
              <FeatureCard key={i} feature={feature} index={i} t={t} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index, t }: any) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className="relative group cursor-hover opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transitionDelay: `${index * 100}ms`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="p-6 md:p-8 lg:p-10 border border-white/5 rounded-xl transition-all duration-700 bg-white/[0.01] relative overflow-hidden"
      >
        {/* Gradient background on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-700`}
          style={{ 
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Mouse-following spotlight */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle 200px at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, ${feature.color}20, transparent)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Border glow */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-700"
          style={{
            background: `linear-gradient(135deg, ${feature.color}30, transparent)`,
            filter: "blur(20px)",
            transform: "translateZ(-1px)",
            opacity: isHovered ? 1 : 0,
          }}
        />

        <div className="relative mb-6">
          <div style={{ transformStyle: "preserve-3d" }}>
            <feature.icon 
              className="h-8 w-8 text-white/60 group-hover:text-white/80 transition-colors duration-700" 
              strokeWidth={1.5}
              style={{
                filter: `drop-shadow(0 0 20px ${feature.color}60)`,
              }}
            />
          </div>
        </div>
        
        <h3 className="relative text-xl mb-3 tracking-tight">
          {t(feature.titleKey)}
        </h3>
        <p className="relative text-sm text-[#9ca3af] leading-relaxed">
          {t(feature.descriptionKey)}
        </p>

        {/* Floating particle */}
        <div
          className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full"
          style={{
            background: feature.color,
            boxShadow: `0 0 15px ${feature.color}`,
            opacity: 0.6,
          }}
        />
      </div>
    </div>
  );
}