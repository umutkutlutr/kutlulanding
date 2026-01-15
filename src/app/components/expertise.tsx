import { Code, Users, Shield, Wrench } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

export function Expertise() {
  const { t } = useLanguage();
  const [selectedExpertise, setSelectedExpertise] = useState<number | null>(null);

  const expertiseAreas = [
    {
      icon: Code,
      titleKey: "expertise.0.title",
      briefKey: "expertise.0.brief",
      color: "#fb923c",
      gradient: "from-[#fb923c]/20 to-[#f97316]/12",
      borderColor: "border-[#fb923c]/40",
      detailsKeys: [
        "expertise.0.details.0",
        "expertise.0.details.1",
        "expertise.0.details.2",
        "expertise.0.details.3",
        "expertise.0.details.4"
      ],
      approachKey: "expertise.0.approach"
    },
    {
      icon: Users,
      titleKey: "expertise.1.title",
      briefKey: "expertise.1.brief",
      color: "#1e40af",
      gradient: "from-[#1e40af]/20 to-[#1e3a8a]/12",
      borderColor: "border-[#1e40af]/40",
      detailsKeys: [
        "expertise.1.details.0",
        "expertise.1.details.1",
        "expertise.1.details.2",
        "expertise.1.details.3",
        "expertise.1.details.4"
      ],
      approachKey: "expertise.1.approach"
    },
    {
      icon: Shield,
      titleKey: "expertise.2.title",
      briefKey: "expertise.2.brief",
      color: "#f97316",
      gradient: "from-[#f97316]/20 to-[#fb923c]/12",
      borderColor: "border-[#f97316]/40",
      detailsKeys: [
        "expertise.2.details.0",
        "expertise.2.details.1",
        "expertise.2.details.2",
        "expertise.2.details.3",
        "expertise.2.details.4"
      ],
      approachKey: "expertise.2.approach"
    },
    {
      icon: Wrench,
      titleKey: "expertise.3.title",
      briefKey: "expertise.3.brief",
      color: "#1e3a8a",
      gradient: "from-[#1e3a8a]/20 to-[#1e40af]/12",
      borderColor: "border-[#1e3a8a]/40",
      detailsKeys: [
        "expertise.3.details.0",
        "expertise.3.details.1",
        "expertise.3.details.2",
        "expertise.3.details.3",
        "expertise.3.details.4"
      ],
      approachKey: "expertise.3.approach"
    },
  ];

  return (
    <>
      <section id="expertise" className="relative py-14 md:py-20 lg:py-32 border-t border-[#e5e7eb]/50 overflow-hidden bg-[#fafaf9]">
        {/* Static background elements - no animation, responsive sizes */}
        <div
          className="absolute top-10 right-10 md:top-20 md:right-20 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(251, 146, 60, 0.08) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        <div
          className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(96, 165, 250, 0.06) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-block mb-3 md:mb-4">
              <span className="text-xs md:text-sm tracking-[0.3em] text-[#fb923c] uppercase font-medium">
                {t('expertise.title')}
              </span>
            </div>
            <h2 
              className="tracking-tight mb-4 md:mb-6 text-[#1a1d29]"
              style={{
                fontSize: 'clamp(1.5rem, 5vw, 3.75rem)',
                lineHeight: '1.1',
              }}
            >
              {t('expertise.heading')}
            </h2>
            <p 
              className="text-[#71717a] max-w-2xl mx-auto leading-relaxed"
              style={{
                fontSize: 'clamp(0.9375rem, 1.5vw, 1.125rem)',
                lineHeight: '1.6',
              }}
            >
              {t('expertise.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {expertiseAreas.map((area, i) => {
              return (
                <ExpertiseCard 
                  key={i} 
                  area={area} 
                  index={i} 
                  onClick={() => setSelectedExpertise(i)}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Dialog open={selectedExpertise !== null} onOpenChange={() => setSelectedExpertise(null)}>
        <DialogContent className="bg-white/95 backdrop-blur-xl border-[#e5e7eb] max-w-2xl rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl tracking-tight text-[#1a1d29] mb-2">
              {selectedExpertise !== null && t(expertiseAreas[selectedExpertise].titleKey)}
            </DialogTitle>
            <DialogDescription className="text-base text-[#71717a] leading-relaxed">
              {selectedExpertise !== null && t(expertiseAreas[selectedExpertise].briefKey)}
            </DialogDescription>
          </DialogHeader>
          {selectedExpertise !== null && (
            <div className="space-y-8 pt-6">
              {/* Approach */}
              <div>
                <h4 className="text-sm uppercase tracking-widest text-[#9ca3af] mb-3">
                  Our Approach
                </h4>
                <p className="text-[#52525b] leading-relaxed">
                  {selectedExpertise !== null && t(expertiseAreas[selectedExpertise].approachKey)}
                </p>
              </div>

              {/* Details */}
              <div>
                <h4 className="text-sm uppercase tracking-widest text-[#9ca3af] mb-4">
                  {t('expertise.modal.title')}
                </h4>
                <div className="space-y-3">
                  {expertiseAreas[selectedExpertise].detailsKeys.map((detailKey, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" 
                        style={{ backgroundColor: expertiseAreas[selectedExpertise].color }}
                      />
                      <p className="text-sm text-[#52525b]">{t(detailKey)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

function ExpertiseCard({ area, index, onClick }: any) {
  const { t } = useLanguage();
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
      className="group relative cursor-hover opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transitionDelay: `${index * 100}ms`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* 3D Card with perspective */}
      <div
        className="relative p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl backdrop-blur-sm transition-all duration-700 overflow-hidden"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.05)",
          background: "rgba(255, 255, 255, 0.01)",
        }}
      >
        {/* Gradient glow on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 transition-opacity duration-700`}
          style={{ 
            transform: "translateZ(-1px)",
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Mouse-following spotlight */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 200px at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, ${area.color}15, transparent)`,
            opacity: isHovered ? 0.6 : 0,
          }}
        />

        {/* Static border gradient */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `linear-gradient(135deg, ${area.color}40, transparent)`,
            filter: "blur(15px)",
            transform: "translateZ(-2px)",
          }}
        />

        {/* Icon */}
        <div
          className="relative mb-6"
          style={{ 
            transformStyle: "preserve-3d",
            transform: "translateZ(40px)",
          }}
        >
          <div
            className="transition-transform duration-300"
            style={{ 
              transformStyle: "preserve-3d",
              transform: isHovered ? "rotateY(360deg)" : "rotateY(0deg)",
            }}
          >
            <area.icon 
              className="h-10 w-10 transition-colors duration-700" 
              strokeWidth={1.5} 
              style={{ 
                color: area.color,
                filter: `drop-shadow(0 0 20px ${area.color})`,
                transform: "translateZ(20px)"
              }}
            />
          </div>
        </div>

        <h3 
          className="relative mb-2 md:mb-3 tracking-tight text-[#1a1d29]" 
          style={{ 
            transform: "translateZ(30px)",
            fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
          }}
        >
          {t(area.titleKey)}
        </h3>
        <p 
          className="relative text-[#9ca3af] leading-relaxed mb-4 md:mb-6" 
          style={{ 
            transform: "translateZ(20px)",
            fontSize: 'clamp(0.875rem, 1.2vw, 0.875rem)',
            lineHeight: '1.6',
          }}
        >
          {t(area.briefKey)}
        </p>

        {/* Learn more indicator */}
        <div 
          className="flex items-center gap-2 text-[#9ca3af] group-hover:text-[#1a1d29] transition-colors duration-300 min-h-[44px]" 
          style={{ 
            transform: "translateZ(20px)",
            fontSize: 'clamp(0.875rem, 1.2vw, 0.875rem)',
          }}
        >
          <span>{t('expertise.learnMore')}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>

        {/* Floating particles */}
        <div
          className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-60"
          style={{
            background: area.color,
            boxShadow: `0 0 20px ${area.color}`,
          }}
        />
      </div>
    </div>
  );
}
