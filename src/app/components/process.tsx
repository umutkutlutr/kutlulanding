import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Search, Palette, Code, Rocket, Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { useRef } from "react";

export function Process() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discovery",
      description: "On-site workshops. Stakeholder interviews. Process mapping. We learn your business before proposing solutions.",
      color: "#fb923c",
      details: [
        "Multi-day on-site workshops with your team",
        "Process mapping and stakeholder interviews",
        "Technical infrastructure assessment",
        "Identify integration requirements",
      ],
    },
    {
      icon: Palette,
      number: "02",
      title: "Architecture",
      description: "System design reviews. Technology selection. Security planning. We build a foundation for the long term.",
      color: "#1e40af",
      details: [
        "System architecture design and review",
        "Technology stack selection for stability",
        "Security architecture planning",
        "Database design and data modeling",
      ],
    },
    {
      icon: Code,
      number: "03",
      title: "Development",
      description: "Senior-led implementation. Weekly progress reviews. Continuous testing. No surprises.",
      color: "#f97316",
      details: [
        "Senior developers lead implementation",
        "Weekly progress reviews with stakeholders",
        "Continuous integration and testing",
        "Code reviews and quality assurance",
      ],
    },
    {
      icon: Rocket,
      number: "04",
      title: "Deployment",
      description: "Phased rollouts. Staff training. Documentation. We ensure smooth transitions.",
      color: "#1e3a8a",
      details: [
        "Phased deployment strategy",
        "Comprehensive staff training",
        "Full technical documentation",
        "Performance monitoring and optimization",
      ],
    },
    {
      icon: Settings,
      number: "05",
      title: "Support",
      description: "Ongoing maintenance. Feature improvements. Technology updates. We stay engaged.",
      color: "#1e58a8",
      details: [
        "Dedicated support team (not offshore)",
        "Proactive monitoring and maintenance",
        "Regular feature enhancements",
        "Annual roadmap planning sessions",
      ],
    },
  ];

  return (
    <section id="approach" ref={ref} className="relative py-32 border-t border-white/5 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Our Approach
          </h2>
          <p className="text-[#9ca3af] max-w-2xl mx-auto leading-relaxed">
            Transparent and predictable delivery.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Connecting Line */}
          <motion.div 
            className="absolute left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block overflow-hidden"
          >
            <motion.div
              className="w-full h-full bg-gradient-to-b from-[#a78bfa] via-[#60a5fa] to-[#f472b6]"
              style={{
                scaleY: scrollYProgress,
                transformOrigin: "top"
              }}
            />
          </motion.div>

          <div className="space-y-8">
            {steps.map((step, i) => {
              const yOffset = useTransform(
                scrollYProgress,
                [i / steps.length, (i + 1) / steps.length],
                [50, -20]
              );

              return (
                <ProcessStep 
                  key={i} 
                  step={step} 
                  index={i} 
                  onClick={() => setSelectedStep(i)}
                  yOffset={yOffset}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={selectedStep !== null} onOpenChange={() => setSelectedStep(null)}>
        <DialogContent className="bg-[#0f0f14] border-white/10 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3 tracking-tight">
              {selectedStep !== null && (
                <>
                  <span className="text-white/40">{steps[selectedStep].number}</span>
                  {steps[selectedStep].title}
                </>
              )}
            </DialogTitle>
            <DialogDescription className="text-sm text-[#9ca3af]">
              {selectedStep !== null && steps[selectedStep].description}
            </DialogDescription>
          </DialogHeader>
          {selectedStep !== null && (
            <div className="space-y-6 pt-4">
              <div className="space-y-3">
                {steps[selectedStep].details.map((detail, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div 
                      className="w-1 h-1 rounded-full mt-2 flex-shrink-0" 
                      style={{
                        background: steps[selectedStep].color,
                        boxShadow: `0 0 10px ${steps[selectedStep].color}`,
                      }}
                    />
                    <p className="text-sm text-[#9ca3af]">{detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ProcessStep({ step, index, onClick, yOffset }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ y: yOffset }}
      className="relative"
    >
      <div className="flex items-start gap-8">
        {/* Animated Number Circle */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          className="relative flex-shrink-0 z-10 cursor-hover"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            className="w-24 h-24 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center backdrop-blur-sm relative overflow-hidden"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated glow */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-0"
              style={{
                background: `radial-gradient(circle, ${step.color}30 0%, transparent 70%)`,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            
            <span 
              className="text-2xl tracking-tight relative z-10 transition-colors duration-300"
              style={{
                color: isHovered ? step.color : "rgba(255, 255, 255, 0.4)",
                textShadow: isHovered ? `0 0 20px ${step.color}50` : "none",
              }}
            >
              {step.number}
            </span>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          onClick={onClick}
          className="flex-1 group cursor-pointer pt-4 cursor-hover"
          whileHover={{ x: 10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="transition-all duration-500 relative">
            <h3 className="text-2xl mb-2 tracking-tight group-hover:text-white/80 transition-colors duration-500">
              {step.title}
            </h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              {step.description}
            </p>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 0.5, x: 0 }}
              className="text-xs mt-3 group-hover:text-white/50 transition-colors duration-500"
              style={{ color: step.color }}
            >
              Details →
            </motion.p>

            {/* Hover indicator */}
            <motion.div
              className="absolute -left-2 top-0 bottom-0 w-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(to bottom, ${step.color}, transparent)`,
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}