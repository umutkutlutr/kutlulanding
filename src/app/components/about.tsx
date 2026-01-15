import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export function About() {
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

  const advisoryBoard = [
    {
      name: "Martin BERGSTROM",
      role: "Corporate finance and M&A advisor",
      description: "Focused on capital raising and strategic financing.",
      image: null, // Fotoğraf sonradan eklenecek
    },
    {
      name: "Edon IDRIZI",
      role: "International investment professional",
      description: "Specializing in venture capital, cross-border M&A.",
      image: null, // Fotoğraf sonradan eklenecek
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-14 md:py-20 lg:py-32 border-t border-[#e5e7eb]/50 overflow-hidden bg-[#fafaf9] opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
      }}
    >
      {/* Static background elements */}
      <div
        className="absolute top-10 right-10 md:top-20 md:right-20 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.06) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div
        className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30, 64, 175, 0.06) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-3 md:mb-4">
            <span className="text-xs md:text-sm tracking-[0.3em] text-[#fb923c] uppercase font-medium">
              About Us
            </span>
          </div>
          <h2 
            className="tracking-tight mb-4 md:mb-6 text-[#1a1d29]"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 3.75rem)',
              lineHeight: '1.1',
            }}
          >
            Advisory Board
          </h2>
          <p 
            className="text-[#71717a] max-w-2xl mx-auto leading-relaxed"
            style={{
              fontSize: 'clamp(0.9375rem, 1.5vw, 1.125rem)',
              lineHeight: '1.6',
            }}
          >
            Experienced advisors guiding our strategic direction.
          </p>
        </div>

        {/* Advisory Board Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {advisoryBoard.map((member, i) => {
            const MemberCard = ({ member, index }: { member: typeof advisoryBoard[0], index: number }) => {
              const [cardVisible, setCardVisible] = useState(false);
              const cardRef = useRef<HTMLDivElement>(null);

              useEffect(() => {
                if (!isVisible) return;
                
                const timer = setTimeout(() => {
                  setCardVisible(true);
                }, index * 200);

                return () => clearTimeout(timer);
              }, [isVisible, index]);

              return (
                <div
                  ref={cardRef}
                  key={index}
                  className="group relative p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-[#e5e7eb] bg-white hover:border-[#1e40af]/40 hover:shadow-xl hover:shadow-[#1e40af]/10 transition-all duration-500 opacity-0 translate-y-8"
                  style={{
                    opacity: cardVisible ? 1 : 0,
                    transform: cardVisible ? 'translateY(0)' : 'translateY(32px)',
                  }}
                >
              {/* Photo placeholder - sonradan fotoğraf eklenecek */}
              <div className="mb-4 md:mb-6 flex justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-[#e5e7eb] group-hover:border-[#1e40af]/40 transition-colors duration-500"
                  />
                ) : (
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#fb923c]/20 to-[#1e40af]/20 border-2 border-[#e5e7eb] group-hover:border-[#1e40af]/40 flex items-center justify-center transition-colors duration-500">
                    <span 
                      className="font-semibold text-[#1a1d29]/40"
                      style={{
                        fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                      }}
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 
                  className="font-semibold mb-2 tracking-tight text-[#1a1d29]"
                  style={{
                    fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
                  }}
                >
                  {member.name}
                </h3>
                <p 
                  className="font-medium text-[#1e40af] mb-2 md:mb-3"
                  style={{
                    fontSize: 'clamp(0.875rem, 1.2vw, 0.875rem)',
                  }}
                >
                  {member.role}
                </p>
                <p 
                  className="text-[#71717a] leading-relaxed"
                  style={{
                    fontSize: 'clamp(0.875rem, 1.2vw, 0.875rem)',
                    lineHeight: '1.6',
                  }}
                >
                  {member.description}
                </p>
              </div>

              {/* Decorative element */}
              <div
                className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "#1e40af",
                  boxShadow: "0 0 10px #1e40af",
                }}
              />
                </div>
              );
            };

            return <MemberCard key={i} member={member} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
}

