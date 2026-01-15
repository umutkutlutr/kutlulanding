import { 
  Building2, 
  Heart, 
  Factory, 
  Cpu, 
  ShoppingBag, 
  Zap, 
  Truck, 
  Home,
  GraduationCap,
  Radio,
  Film,
  Briefcase,
  Bitcoin,
  Plane,
  ShieldCheck,
  Leaf
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export function Industries() {
  const { t } = useLanguage();

  // Ana sektörler - basit ve temiz
  const mainIndustries = [
    {
      icon: Factory,
      title: "Manufacturing & Production",
      description: "Optimize throughput, reduce waste, and standardize workflows with production tracking, OEE-style monitoring, and real-time visibility.",
      color: "#fb923c",
      gradient: "from-[#fb923c]/20 to-[#f97316]/10",
    },
    {
      icon: Truck,
      title: "Inventory, Warehouse & Stock Control",
      description: "Accurate stock, barcode-driven movements, cycle counts, and audit-friendly logs—designed for speed and consistency.",
      color: "#1e40af",
      gradient: "from-[#1e40af]/20 to-[#1e3a8a]/10",
    },
    {
      icon: ShieldCheck,
      title: "Traceability & Quality Systems",
      description: "Lot/batch traceability, genealogy, quality checkpoints, and compliance-ready reporting across the entire lifecycle.",
      color: "#f97316",
      gradient: "from-[#f97316]/20 to-[#fb923c]/10",
    },
    {
      icon: Radio,
      title: "Field Hardware-Integrated Solutions (IoT/Edge)",
      description: "Camera, sensor, device, and screen integrations with secure data pipelines—built for harsh environments and uptime.",
      color: "#1e3a8a",
      gradient: "from-[#1e3a8a]/20 to-[#1e40af]/10",
    },
    {
      icon: Briefcase,
      title: "Internal Management Systems (CRM/ERP)",
      description: "Customer, sales, operations, approvals, and role-based access—tailored to how your teams actually work.",
      color: "#fb923c",
      gradient: "from-[#fb923c]/20 to-[#f97316]/10",
    },
    {
      icon: Building2,
      title: "Accounting & Back Office Automation",
      description: "Lightweight pre-accounting, invoicing, collections, and reconciliation flows that reduce manual work and improve accuracy.",
      color: "#1e40af",
      gradient: "from-[#1e40af]/20 to-[#1e3a8a]/10",
    },
    {
      icon: Cpu,
      title: "Mobile Applications",
      description: "Fast, clean mobile experiences for teams and customers—offline-first when needed, with robust sync and analytics.",
      color: "#f97316",
      gradient: "from-[#f97316]/20 to-[#fb923c]/10",
    },
    {
      icon: Film,
      title: "Mobile Games",
      description: "Production-grade mobile games with polished UX, live-ops readiness, analytics hooks, and scalable backend foundations.",
      color: "#1e3a8a",
      gradient: "from-[#1e3a8a]/20 to-[#1e40af]/10",
    },
  ];

  return (
    <section id="industries" className="relative py-14 md:py-20 lg:py-32 border-t border-[#e5e7eb]/50 overflow-hidden bg-white">
      {/* Static background elements - no animation, responsive sizes */}
      <div
        className="absolute top-10 left-10 md:top-20 md:left-20 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30, 64, 175, 0.06) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div
        className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.08) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-3 md:mb-4">
            <span className="text-xs md:text-sm tracking-[0.3em] text-[#1e40af] uppercase font-medium">
              Industries
            </span>
          </div>
          <h2 
            className="tracking-tight mb-4 md:mb-6 text-[#1a1d29]"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 3.75rem)',
              lineHeight: '1.1',
            }}
          >
            Software built for real operations.
          </h2>
          <p 
            className="text-[#71717a] max-w-2xl mx-auto leading-relaxed"
            style={{
              fontSize: 'clamp(0.9375rem, 1.5vw, 1.125rem)',
              lineHeight: '1.6',
            }}
          >
            From factory floors to field devices, we deliver systems that make processes measurable, traceable, and scalable.
          </p>
        </div>

        {/* Industries Grid - Clean and Simple */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mainIndustries.map((industry, i) => (
            <IndustryCard key={i} industry={industry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry, index }: { 
  industry: {
    icon: any;
    title: string;
    description: string;
    color: string;
    gradient: string;
  };
  index: number;
}) {
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

  return (
    <div
      ref={cardRef}
      className="group relative p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-[#e5e7eb] bg-white hover:border-[#fb923c]/40 hover:shadow-xl hover:shadow-[#fb923c]/10 transition-all duration-500 opacity-0 translate-y-8"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transitionDelay: `${index * 80}ms`,
      }}
    >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl`}
              />

              {/* Icon */}
              <div className="relative mb-4 md:mb-6">
                <div
                  className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg md:rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: `linear-gradient(135deg, ${industry.color}15, ${industry.color}05)`,
                  }}
                >
                  <industry.icon 
                    className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 transition-colors duration-500" 
                    strokeWidth={1.5} 
                    style={{ 
                      color: industry.color,
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 
                  className="font-semibold mb-2 md:mb-3 tracking-tight text-[#1a1d29] group-hover:text-[#1a1d29] transition-colors duration-500"
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                  }}
                >
                  {industry.title}
                </h3>
                <p 
                  className="text-[#71717a] leading-relaxed group-hover:text-[#52525b] transition-colors duration-500"
                  style={{
                    fontSize: 'clamp(0.8125rem, 1.2vw, 0.875rem)',
                    lineHeight: '1.6',
                  }}
                >
                  {industry.description}
                </p>
              </div>

              {/* Decorative corner element */}
              <div
                className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: industry.color,
                  boxShadow: `0 0 10px ${industry.color}`,
                }}
              />
    </div>
  );
}
