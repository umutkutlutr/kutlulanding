import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export function ProofStrip() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    { 
      number: "Factory-first delivery", 
      labelKey: "proof.stats.0.label",
      color: "#fb923c",
      gradient: "from-[#fb923c] to-[#f97316]"
    },
    { 
      number: "Decision-ready reporting", 
      labelKey: "proof.stats.1.label",
      color: "#1e40af",
      gradient: "from-[#1e40af] to-[#1e3a8a]"
    },
    { 
      number: "Enterprise-grade execution", 
      labelKey: "proof.stats.2.label",
      color: "#f97316",
      gradient: "from-[#f97316] to-[#fb923c]"
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 md:py-20 lg:py-24 border-y border-[#e5e7eb] overflow-hidden bg-gradient-to-b from-[#fafaf9] to-white opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
      }}
    >
      {/* Static gradient backgrounds - no animation */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.15) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Static floating orbs - no animation, reduced blur */}
      <div
        className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(244, 114, 182, 0.08) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(45, 212, 191, 0.06) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {stats.map((stat, i) => {
            const StatCard = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
              const [cardVisible, setCardVisible] = useState(false);
              const cardRef = useRef<HTMLDivElement>(null);

              useEffect(() => {
                if (!isVisible) return;
                
                const timer = setTimeout(() => {
                  setCardVisible(true);
                }, index * 150);

                return () => clearTimeout(timer);
              }, [isVisible, index]);

              return (
                <div
                  ref={cardRef}
                  key={index}
                  className="text-center relative group opacity-0 translate-y-4 transition-all duration-500 ease-out"
                  style={{
                    opacity: cardVisible ? 1 : 0,
                    transform: cardVisible ? 'translateY(0)' : 'translateY(16px)',
                  }}
                >
                {/* Card wrapper */}
                <div
                  className="relative cursor-hover hover:scale-105 transition-transform duration-300"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Static glow effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle, ${stat.color}20 0%, transparent 70%)`,
                      filter: "blur(15px)",
                      transform: "translateZ(-10px)",
                    }}
                  />

                  {/* Number with gradient */}
                  <div
                    className="relative mb-4"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <p
                      className={`text-3xl md:text-4xl lg:text-5xl tracking-tight bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent font-bold`}
                      style={{
                        textShadow: `0 0 40px ${stat.color}40`,
                        lineHeight: '1.2',
                      }}
                    >
                      {stat.number}
                    </p>
                  </div>

                  {/* Label */}
                  <p 
                    className="text-sm text-[#9ca3af] relative"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {t(stat.labelKey)}
                  </p>
                </div>
              </div>
              );
            };

            return <StatCard key={i} stat={stat} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
}
