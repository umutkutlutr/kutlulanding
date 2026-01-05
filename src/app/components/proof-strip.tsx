import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function ProofStrip() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const stats = [
    { 
      number: "$2.3B+", 
      label: "Systems under management",
      color: "#fb923c",
      gradient: "from-[#fb923c] to-[#f97316]"
    },
    { 
      number: "18 years", 
      label: "Average team tenure",
      color: "#1e40af",
      gradient: "from-[#1e40af] to-[#1e3a8a]"
    },
    { 
      number: "Enterprise", 
      label: "Exclusively",
      color: "#f97316",
      gradient: "from-[#f97316] to-[#fb923c]"
    },
  ];

  return (
    <section ref={ref} className="relative py-24 border-y border-[#e5e7eb] overflow-hidden bg-gradient-to-b from-[#fafaf9] to-white">
      {/* Multi-layer animated gradient backgrounds */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -80]),
        }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 0% 50%, rgba(167, 139, 250, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 50%, rgba(96, 165, 250, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 50%, rgba(167, 139, 250, 0.15) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Additional floating orbs */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(244, 114, 182, 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          y: useTransform(scrollYProgress, [0, 1], [50, -50]),
          x: useTransform(scrollYProgress, [0, 1], [-30, 30]),
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(45, 212, 191, 0.1) 0%, transparent 70%)",
          filter: "blur(70px)",
          y: useTransform(scrollYProgress, [0, 1], [-40, 40]),
          x: useTransform(scrollYProgress, [0, 1], [20, -20]),
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, i) => {
            const yOffset = useTransform(
              scrollYProgress,
              [0, 1],
              [30 * (i % 2 === 0 ? 1 : -1), -30 * (i % 2 === 0 ? 1 : -1)]
            );

            const scale = useTransform(
              scrollYProgress,
              [0, 0.5, 1],
              [0.9, 1.05, 0.9]
            );

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: yOffset, scale }}
                className="text-center relative group"
              >
                {/* 3D Card wrapper */}
                <motion.div
                  className="relative cursor-hover"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle, ${stat.color}20 0%, transparent 70%)`,
                      filter: "blur(30px)",
                      transform: "translateZ(-10px)",
                    }}
                  />

                  {/* Rotating background orb */}
                  <motion.div
                    className="absolute -inset-20 rounded-full opacity-30"
                    style={{
                      background: `conic-gradient(from 0deg, ${stat.color}00, ${stat.color}40, ${stat.color}00)`,
                      filter: "blur(40px)",
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 2,
                    }}
                  />

                  {/* Number with gradient */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.15 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative mb-4"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <motion.p
                      className={`text-5xl md:text-6xl tracking-tight bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        backgroundSize: "200% 200%",
                        textShadow: `0 0 40px ${stat.color}40`,
                      }}
                    >
                      {stat.number}
                    </motion.p>
                  </motion.div>

                  {/* Label */}
                  <p 
                    className="text-sm text-[#9ca3af] relative"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {stat.label}
                  </p>

                  {/* Multiple floating particles */}
                  {[...Array(3)].map((_, j) => (
                    <motion.div
                      key={j}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        background: stat.color,
                        boxShadow: `0 0 15px ${stat.color}`,
                        top: `${20 + j * 30}%`,
                        right: `${10 + j * 15}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.6 + j * 0.4,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}