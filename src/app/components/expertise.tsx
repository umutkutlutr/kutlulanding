import { motion } from "motion/react";
import { Code, Users, Shield, Wrench } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

export function Expertise() {

  const [selectedExpertise, setSelectedExpertise] = useState<number | null>(null);

  const expertiseAreas = [
    {
      icon: Code,
      title: "Custom Enterprise Software",
      brief: "Built to last decades, not months.",
      color: "#fb923c",
      gradient: "from-[#fb923c]/20 to-[#f97316]/12",
      borderColor: "border-[#fb923c]/40",
      details: [
        "We build systems designed for 10+ year lifecycles",
        "Senior architects lead every engagement",
        "Technologies chosen for stability and maintainability",
        "In-house expertise, no outsourcing",
        "Full documentation and knowledge transfer"
      ],
      approach: "We start with deep operational discovery. Our team spends time on-site understanding your workflows, constraints, and long-term vision before writing a single line of code."
    },
    {
      icon: Users,
      title: "On-Site Discovery",
      brief: "We come to you. We learn your business.",
      color: "#1e40af",
      gradient: "from-[#1e40af]/20 to-[#1e3a8a]/12",
      borderColor: "border-[#1e40af]/40",
      details: [
        "Multi-day on-site workshops with your team",
        "Process mapping and stakeholder interviews",
        "Technical infrastructure assessment",
        "Identify integration requirements",
        "Build shared understanding before development"
      ],
      approach: "Discovery is not a formality. We embed with your team to understand the real problems—not just the stated requirements. This foundation prevents costly mistakes later."
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      brief: "Enterprise-grade security from day one.",
      color: "#f97316",
      gradient: "from-[#f97316]/20 to-[#fb923c]/12",
      borderColor: "border-[#f97316]/40",
      details: [
        "Security architecture review included",
        "Compliance requirements (SOC2, HIPAA, etc.)",
        "Regular security audits and updates",
        "Incident response planning",
        "Staff training on secure development"
      ],
      approach: "Security is not an add-on. We design with threat modeling, implement defense in depth, and maintain ongoing vigilance through your system's entire lifecycle."
    },
    {
      icon: Wrench,
      title: "Long-Term Maintenance",
      brief: "We stay. We support. We improve.",
      color: "#1e3a8a",
      gradient: "from-[#1e3a8a]/20 to-[#1e40af]/12",
      borderColor: "border-[#1e3a8a]/40",
      details: [
        "Dedicated support team, not offshore help desk",
        "Proactive monitoring and maintenance",
        "Regular feature improvements and optimizations",
        "Technology updates and dependency management",
        "Annual roadmap planning sessions"
      ],
      approach: "We're in it for the long term. Most of our client relationships span 5-10+ years. We treat your system as if it's our own, because effectively, it is."
    },
  ];

  return (
    <>
      <section id="expertise" ref={ref} className="relative py-32 border-t border-[#e5e7eb]/50 overflow-hidden bg-[#fafaf9]">
        {/* Floating background elements */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(251, 146, 60, 0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(96, 165, 250, 0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="text-sm tracking-[0.3em] text-[#fb923c] uppercase font-medium">
                Expertise
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-[#1a1d29]">
              What we do
            </h2>
            <p className="text-[#71717a] max-w-2xl mx-auto leading-relaxed text-lg">
              Reliable software for critical business processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              {selectedExpertise !== null && expertiseAreas[selectedExpertise].title}
            </DialogTitle>
            <DialogDescription className="text-base text-[#71717a] leading-relaxed">
              {selectedExpertise !== null && expertiseAreas[selectedExpertise].brief}
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
                  {expertiseAreas[selectedExpertise].approach}
                </p>
              </div>

              {/* Details */}
              <div>
                <h4 className="text-sm uppercase tracking-widest text-[#9ca3af] mb-4">
                  What This Includes
                </h4>
                <div className="space-y-3">
                  {expertiseAreas[selectedExpertise].details.map((detail, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" 
                        style={{ backgroundColor: expertiseAreas[selectedExpertise].color }}
                      />
                      <p className="text-sm text-[#52525b]">{detail}</p>
                    </motion.div>
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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative cursor-hover"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* 3D Card with perspective */}
      <motion.div
        className="relative p-10 rounded-2xl backdrop-blur-sm transition-all duration-700 overflow-hidden"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.05)",
          background: "rgba(255, 255, 255, 0.01)",
        }}
      >
        {/* Gradient glow on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 transition-opacity duration-700`}
          style={{ 
            transform: "translateZ(-1px)",
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Mouse-following spotlight */}
        <motion.div
          className="absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 200px at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, ${area.color}15, transparent)`,
            opacity: isHovered ? 0.6 : 0,
          }}
        />

        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `linear-gradient(135deg, ${area.color}40, transparent)`,
            filter: "blur(20px)",
            transform: "translateZ(-2px)",
          }}
        />

        {/* Icon with 3D animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6"
          style={{ 
            transformStyle: "preserve-3d",
            transform: "translateZ(40px)",
          }}
        >
          <motion.div
            animate={{
              rotateY: isHovered ? [0, 360] : 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut"
            }}
            style={{ transformStyle: "preserve-3d" }}
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
          </motion.div>
        </motion.div>

        <h3 className="relative text-xl mb-3 tracking-tight text-[#1a1d29]" style={{ transform: "translateZ(30px)" }}>
          {area.title}
        </h3>
        <p className="relative text-[#9ca3af] text-sm leading-relaxed mb-6" style={{ transform: "translateZ(20px)" }}>
          {area.brief}
        </p>

        {/* Learn more indicator */}
        <div className="flex items-center gap-2 text-sm text-[#9ca3af] group-hover:text-[#1a1d29] transition-colors duration-300" style={{ transform: "translateZ(20px)" }}>
          <span>Learn more</span>
          <motion.span
            animate={{ x: isHovered ? [0, 4, 0] : 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </div>

        {/* Floating particles */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 rounded-full"
          style={{
            background: area.color,
            boxShadow: `0 0 20px ${area.color}`,
            opacity: 0.6,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.3,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
