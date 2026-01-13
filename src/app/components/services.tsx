import { Layers, ChartBar, Brain, Workflow } from "lucide-react";
import { useState } from "react";

export function Services() {

  const services = [
    {
      icon: Layers,
      title: "Enterprise Platforms",
      description: "Scalable software infrastructure tailored to your business processes.",
      color: "#fb923c",
      gradient: "from-[#fb923c]/20 to-[#f97316]/12",
      borderColor: "border-[#fb923c]/40"
    },
    {
      icon: ChartBar,
      title: "Analytics & Reporting",
      description: "Data-driven solutions to support informed decision making.",
      color: "#1e40af",
      gradient: "from-[#1e40af]/20 to-[#1e3a8a]/12",
      borderColor: "border-[#1e40af]/40"
    },
    {
      icon: Brain,
      title: "Intelligent Processes",
      description: "Automation and artificial intelligence integration.",
      color: "#f97316",
      gradient: "from-[#f97316]/20 to-[#fb923c]/12",
      borderColor: "border-[#f97316]/40"
    },
    {
      icon: Workflow,
      title: "System Integration",
      description: "Solutions that connect your existing systems together.",
      color: "#1e3a8a",
      gradient: "from-[#1e3a8a]/20 to-[#1e40af]/12",
      borderColor: "border-[#1e3a8a]/40"
    },
  ];

  return (
    <section id="services" className="relative py-32 border-t border-[#e5e7eb]/50 overflow-hidden bg-[#fafaf9]">
      {/* Static background elements - no animation */}
      <div
        className="absolute top-20 right-20 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.08) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.06) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm tracking-[0.3em] text-[#fb923c] uppercase font-medium">
              Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-[#1a1d29]">
            Our Expertise
          </h2>
          <p className="text-[#71717a] max-w-2xl mx-auto leading-relaxed text-lg">
            Reliable software for critical business processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            return (
              <ServiceCard key={i} service={service} index={i} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: any) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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
      className="group relative cursor-hover"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card */}
      <div
        className="relative p-10 rounded-2xl backdrop-blur-sm transition-all duration-700 overflow-hidden"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.05)",
          background: "rgba(255, 255, 255, 0.01)",
        }}
      >
        {/* Gradient glow on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-700`}
          style={{ 
            transform: "translateZ(-1px)",
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Mouse-following spotlight */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 200px at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, ${service.color}20, transparent)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Border gradient */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `linear-gradient(135deg, ${service.color}30, transparent)`,
            filter: "blur(10px)",
            transform: "translateZ(-2px)",
          }}
        />

        {/* Icon */}
        <div
          className="relative mb-6"
        >
          <div style={{ transformStyle: "preserve-3d" }}>
            <service.icon 
              className="h-10 w-10 text-white/60 group-hover:text-white/80 transition-colors duration-700" 
              strokeWidth={1.5} 
              style={{ 
                filter: `drop-shadow(0 0 20px ${service.color})`,
              }}
            />
          </div>
        </div>

        <h3 className="relative text-xl mb-3 tracking-tight">
          {service.title}
        </h3>
        <p className="relative text-[#9ca3af] text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Floating particle */}
        <div
          className="absolute top-4 right-4 w-2 h-2 rounded-full"
          style={{
            background: service.color,
            boxShadow: `0 0 20px ${service.color}`,
            opacity: 0.6,
          }}
        />
      </div>
    </div>
  );
}