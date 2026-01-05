import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Shield, Activity, TrendingUp } from "lucide-react";
import { useRef, useState } from "react";

export function Maintenance() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const features = [
    {
      icon: Shield,
      title: "Proactive Monitoring",
      description: "24/7 system health monitoring. Security updates. Performance optimization.",
      color: "#fb923c",
      gradient: "from-[#fb923c]/10 to-[#f97316]/5"
    },
    {
      icon: Activity,
      title: "Guaranteed Response Times",
      description: "Dedicated support team. Clear SLAs. Direct access to senior engineers.",
      color: "#1e40af",
      gradient: "from-[#1e40af]/10 to-[#1e3a8a]/5"
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Regular feature enhancements. Technology updates. Annual roadmap planning.",
      color: "#f97316",
      gradient: "from-[#f97316]/10 to-[#fb923c]/5"
    },
  ];

  return (
    <section
      id="maintenance"
      ref={ref}
      className="relative py-32 border-t border-white/5 overflow-hidden"
    >
      {/* Colorful animated backgrounds */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
          y: useTransform(scrollYProgress, [0, 1], [100, -100]),
          x: useTransform(scrollYProgress, [0, 1], [-50, 50]),
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.08) 0%, transparent 70%)",
          filter: "blur(90px)",
          y: useTransform(scrollYProgress, [0, 1], [-80, 80]),
          x: useTransform(scrollYProgress, [0, 1], [40, -40]),
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-[350px] h-[350px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(45, 212, 191, 0.1) 0%, transparent 70%)",
          filter: "blur(70px)",
          y: useTransform(scrollYProgress, [0, 1], [60, -60]),
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Continuity & Maintenance
          </h2>
          <p className="text-[#9ca3af] max-w-2xl mx-auto leading-relaxed">
            Your software stays current, secure, and performant.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const yOffset = useTransform(
              scrollYProgress,
              [0, 1],
              [40 * (i % 2 === 0 ? 1 : -1), -40 * (i % 2 === 0 ? 1 : -1)]
            );

            return (
              <FeatureCard key={i} feature={feature} index={i} yOffset={yOffset} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index, yOffset }: any) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useSpring(0, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ y: yOffset }}
      className="relative group cursor-hover"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        className="p-10 border border-white/5 rounded-xl transition-all duration-700 bg-white/[0.01] relative overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
      >
        {/* Gradient background on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-700`}
          style={{ 
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Mouse-following spotlight */}
        <motion.div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle 200px at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, ${feature.color}20, transparent)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Border glow */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-700"
          style={{
            background: `linear-gradient(135deg, ${feature.color}30, transparent)`,
            filter: "blur(20px)",
            transform: "translateZ(-1px)",
            opacity: isHovered ? 1 : 0,
          }}
        />

        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6"
          style={{ transform: "translateZ(30px)" }}
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
            <feature.icon 
              className="h-8 w-8 text-white/60 group-hover:text-white/80 transition-colors duration-700" 
              strokeWidth={1.5}
              style={{
                filter: `drop-shadow(0 0 20px ${feature.color}60)`,
              }}
            />
          </motion.div>
        </motion.div>
        
        <h3 className="relative text-xl mb-3 tracking-tight" style={{ transform: "translateZ(20px)" }}>
          {feature.title}
        </h3>
        <p className="relative text-sm text-[#9ca3af] leading-relaxed" style={{ transform: "translateZ(10px)" }}>
          {feature.description}
        </p>

        {/* Floating particle */}
        <motion.div
          className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full"
          style={{
            background: feature.color,
            boxShadow: `0 0 15px ${feature.color}`,
          }}
          animate={{
            y: [0, -12, 0],
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