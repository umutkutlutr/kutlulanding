import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export function Hero() {
  const [scrollValues, setScrollValues] = useState({ opacity: 1, scale: 1, y: 0, layer2Y: 0, orb1Y: 0, orb2Y: 0, orb3Y: 0, indicatorOpacity: 1 });
  const rafRef = useRef<number | null>(null);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          // Only update if change is significant (> 5px)
          if (Math.abs(scrollY - lastScrollRef.current) < 5) {
            ticking = false;
            return;
          }
          lastScrollRef.current = scrollY;

          // Calculate all transforms at once
          const opacity = Math.max(0, 1 - scrollY / 300);
          const scale = Math.max(0.95, 1 - scrollY / 6000); // Slower scale change
          const y = Math.min(150, scrollY * 0.3);
          const layer2Y = Math.min(-150, -scrollY * 0.3);
          const orb1Y = Math.min(-100, -scrollY * 0.2);
          const orb2Y = Math.min(120, scrollY * 0.24);
          const orb3Y = Math.min(60, scrollY * 0.12);
          const indicatorOpacity = Math.max(0, 1 - scrollY / 200);

          setScrollValues({
            opacity,
            scale,
            y,
            layer2Y,
            orb1Y,
            orb2Y,
            orb3Y,
            indicatorOpacity,
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f1ea]">
      {/* Multi-layered Animated Background */}
      <div className="absolute inset-0">
        {/* Layer 1 - Animated gradient orbs */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(30, 64, 175, 0.15) 0%, transparent 50%)",
            backgroundSize: "200% 200%",
          }}
        />

        {/* Layer 2 - Scroll-based movement */}
        <div
          style={{ 
            transform: `translateY(${scrollValues.layer2Y}px)`,
            transition: 'transform 0.1s ease-out',
            willChange: 'transform'
          }}
          className="absolute inset-0 opacity-30"
        >
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(ellipse at 70% 30%, rgba(30, 58, 138, 0.12) 0%, transparent 60%)",
            }}
          />
        </div>
      </div>

      {/* Floating 3D shapes with enhanced animation */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: `translateY(${scrollValues.orb1Y}px)`,
          transition: 'transform 0.1s ease-out',
          willChange: 'transform',
        }}
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30, 64, 175, 0.12) 0%, transparent 70%)",
          filter: "blur(70px)",
          transform: `translateY(${scrollValues.orb2Y}px)`,
          transition: 'transform 0.1s ease-out',
          willChange: 'transform',
        }}
        animate={{
          y: [0, 50, 0],
          scale: [1, 0.85, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30, 58, 138, 0.08) 0%, transparent 70%)",
          filter: "blur(90px)",
          transform: `translateY(${scrollValues.orb3Y}px)`,
          transition: 'transform 0.1s ease-out',
          willChange: 'transform',
        }}
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Grain Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <motion.div 
        style={{ 
          opacity: scrollValues.opacity,
          scale: scrollValues.scale,
          transform: `translateY(${scrollValues.y}px)`,
          transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
          willChange: 'transform, opacity',
        }}
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight mb-8 leading-[1.1] text-[#1a1d29] font-bold">
            Software built for the
            <br />
            <span className="bg-gradient-to-r from-[#fb923c] to-[#1e40af] bg-clip-text text-transparent">
              long term.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-[#52525b] mb-16 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          We partner with enterprises to build mission-critical systems.
          <br />
          Senior-led. On-site discovery. Ongoing support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="relative overflow-hidden bg-[#1e40af] text-white px-10 py-6 rounded-lg text-base tracking-wide border-0 hover:bg-[#1e3a8a] transition-all duration-300 cursor-hover font-semibold shadow-xl shadow-[#1e40af]/30"
            >
              <span className="relative z-10 flex items-center">
                Schedule a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-500" />
              </span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => scrollToSection("expertise")}
              variant="outline"
              className="border-[#1a1d29]/30 hover:border-[#fb923c]/60 bg-white/80 hover:bg-white text-[#1a1d29] px-10 py-6 rounded-lg transition-all duration-300 text-base tracking-wide cursor-hover font-semibold shadow-lg"
            >
              Our Expertise
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        style={{ 
          opacity: scrollValues.indicatorOpacity,
          transition: 'opacity 0.1s ease-out',
        }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[2px] h-20 bg-gradient-to-b from-transparent via-[#fb923c] to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}