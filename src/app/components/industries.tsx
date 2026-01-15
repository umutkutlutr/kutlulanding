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
    <section id="industries" className="relative py-32 border-t border-[#e5e7eb]/50 overflow-hidden bg-white">
      {/* Static background elements - no animation */}
      <div
        className="absolute top-20 left-20 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30, 64, 175, 0.06) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.08) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm tracking-[0.3em] text-[#1e40af] uppercase font-medium">
              Industries
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-[#1a1d29]">
            Software built for real operations.
          </h2>
          <p className="text-[#71717a] max-w-2xl mx-auto leading-relaxed text-lg">
            From factory floors to field devices, we deliver systems that make processes measurable, traceable, and scalable.
          </p>
        </div>

        {/* Industries Grid - Clean and Simple */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainIndustries.map((industry, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border-2 border-[#e5e7eb] bg-white hover:border-[#fb923c]/40 hover:shadow-xl hover:shadow-[#fb923c]/10 transition-all duration-500"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: `linear-gradient(135deg, ${industry.color}15, ${industry.color}05)`,
                  }}
                >
                  <industry.icon 
                    className="h-8 w-8 transition-colors duration-500" 
                    strokeWidth={1.5} 
                    style={{ 
                      color: industry.color,
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-semibold mb-3 tracking-tight text-[#1a1d29] group-hover:text-[#1a1d29] transition-colors duration-500">
                  {industry.title}
                </h3>
                <p className="text-sm text-[#71717a] leading-relaxed group-hover:text-[#52525b] transition-colors duration-500">
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
          ))}
        </div>
      </div>
    </section>
  );
}
