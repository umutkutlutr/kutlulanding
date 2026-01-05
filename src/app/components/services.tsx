import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { Layers, ChartBar, Brain, Workflow } from "lucide-react";
import { useRef, useState } from "react";

export function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

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
    <section id="services" ref={ref} className="relative py-32 border-t border-[#e5e7eb]/50 overflow-hidden bg-[#fafaf9]">
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
            Our Expertise
          </h2>
          <p className="text-[#71717a] max-w-2xl mx-auto leading-relaxed text-lg">
            Reliable software for critical business processes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const yOffset = useTransform(
              scrollYProgress,
              [0, 1],
              [30 * (i % 2 === 0 ? 1 : -1), -30 * (i % 2 === 0 ? 1 : -1)]
            );

            return (
              <ServiceCard key={i} service={service} index={i} yOffset={yOffset} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, yOffset }: any) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useSpring(0, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{ y: yOffset }}
      className="group relative cursor-hover"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Card with perspective */}
      <motion.div
        className="relative p-10 rounded-2xl backdrop-blur-sm transition-all duration-700 overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          background: "rgba(255, 255, 255, 0.01)",
          rotateX,
          rotateY,
        }}
      >
        {/* Gradient glow on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-700`}
          style={{ 
            transform: "translateZ(-1px)",
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Mouse-following spotlight */}
        <motion.div
          className="absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 200px at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, ${service.color}, transparent)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `linear-gradient(135deg, ${service.color}, transparent)`,
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
            <service.icon 
              className="h-10 w-10 text-white/60 group-hover:text-white/80 transition-colors duration-700" 
              strokeWidth={1.5} 
              style={{ 
                filter: `drop-shadow(0 0 20px ${service.color})`,
                transform: "translateZ(20px)"
              }}
            />
          </motion.div>
        </motion.div>

        <h3 className="relative text-xl mb-3 tracking-tight" style={{ transform: "translateZ(30px)" }}>
          {service.title}
        </h3>
        <p className="relative text-[#9ca3af] text-sm leading-relaxed" style={{ transform: "translateZ(20px)" }}>
          {service.description}
        </p>

        {/* Floating particles */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 rounded-full"
          style={{
            background: service.color,
            boxShadow: `0 0 20px ${service.color}`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        />
      </motion.div>
    </motion.div>
  );
}