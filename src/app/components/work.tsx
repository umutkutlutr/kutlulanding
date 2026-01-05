import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Work() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const clients = [
    { name: "Global Finance Corp", logo: "GF" },
    { name: "TechVentures Inc", logo: "TV" },
    { name: "SecureHealth Systems", logo: "SH" },
    { name: "International Logistics", logo: "IL" },
    { name: "Advanced Manufacturing", logo: "AM" },
    { name: "Enterprise Solutions", logo: "ES" },
    { name: "Financial Services Group", logo: "FS" },
    { name: "Supply Chain Partners", logo: "SC" },
    { name: "Healthcare Network", logo: "HN" },
    { name: "Technology Holdings", logo: "TH" },
    { name: "Global Operations", logo: "GO" },
    { name: "Strategic Systems", logo: "SS" },
  ];

  return (
    <section id="work" ref={ref} className="relative py-32 overflow-hidden bg-white">
      {/* Scroll-based animated background shapes with enhanced effects */}
      <motion.div
        className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          y: useTransform(scrollYProgress, [0, 1], [100, -200]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.3, 0.9]),
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.8, 0.8, 0]),
        }}
      />

      <motion.div
        className="absolute bottom-20 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30, 64, 175, 0.15) 0%, transparent 70%)",
          filter: "blur(100px)",
          y: useTransform(scrollYProgress, [0, 1], [-100, 150]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 0.8, 1.1]),
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.9, 0.9, 0]),
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30, 58, 138, 0.08) 0%, transparent 70%)",
          filter: "blur(120px)",
          rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.4, 1]),
          opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.6, 0.6, 0]),
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-sm tracking-[0.3em] text-[#fb923c] uppercase font-semibold">
              References
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 text-[#1a1d29] font-bold">
            Trusted brands
          </h2>
          <p className="text-[#52525b] text-xl max-w-2xl mx-auto font-medium">
            Serving leading companies across different industries
          </p>
        </motion.div>

        {/* Logos Grid with advanced stagger animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-44 bg-white border-2 border-[#e5e7eb] rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-[#fb923c]/40 group-hover:shadow-2xl group-hover:shadow-[#fb923c]/20">
                {/* Gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#fb923c]/8 via-transparent to-[#1e40af]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                {/* Animated top border */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#fb923c] via-[#1e40af] to-[#1e3a8a] origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.08 + 0.4, ease: "easeOut" }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                  {/* Logo placeholder with enhanced animation */}
                  <motion.div
                    className="w-24 h-24 rounded-xl bg-gradient-to-br from-[#fb923c]/15 to-[#1e40af]/15 border-2 border-[#e5e7eb] group-hover:border-[#fb923c]/30 flex items-center justify-center mb-4 transition-all duration-500 shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <span className="text-3xl font-bold bg-gradient-to-br from-[#fb923c] to-[#1e40af] bg-clip-text text-transparent">
                      {client.logo}
                    </span>
                  </motion.div>

                  {/* Company name */}
                  <h3 className="text-sm text-[#52525b] group-hover:text-[#1a1d29] transition-colors duration-300 font-semibold">
                    {client.name}
                  </h3>
                </div>

                {/* Decorative corner glow with animation */}
                <motion.div
                  className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle, rgba(251, 146, 60, 0.4), transparent)",
                    filter: "blur(40px)"
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.div
                  className="absolute -top-16 -left-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle, rgba(30, 64, 175, 0.3), transparent)",
                    filter: "blur(40px)"
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line with animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 h-[2px] bg-gradient-to-r from-transparent via-[#fb923c] to-transparent origin-center"
        />
      </div>

      {/* Enhanced grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26, 29, 41, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26, 29, 41, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </section>
  );
}