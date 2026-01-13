import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f1ea]">
      {/* Multi-layered Animated Background */}
      <div className="absolute inset-0">
        {/* Layer 1 - Static gradient orbs - no animation */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(30, 64, 175, 0.1) 0%, transparent 50%)",
          }}
        />

      </div>

      {/* Simplified floating shapes - static, reduced blur */}
      <div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30, 64, 175, 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
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
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
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
          <Button
            onClick={() => scrollToSection("contact")}
            className="relative overflow-hidden bg-[#1e40af] text-white px-10 py-6 rounded-lg text-base tracking-wide border-0 hover:bg-[#1e3a8a] transition-all duration-300 cursor-hover font-semibold shadow-xl shadow-[#1e40af]/30 hover:scale-105 hover:-translate-y-0.5 active:scale-95"
          >
            <span className="relative z-10 flex items-center">
              Schedule a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-500" />
            </span>
          </Button>

          <Button
            onClick={() => scrollToSection("expertise")}
            variant="outline"
            className="border-[#1a1d29]/30 hover:border-[#fb923c]/60 bg-white/80 hover:bg-white text-[#1a1d29] px-10 py-6 rounded-lg transition-all duration-300 text-base tracking-wide cursor-hover font-semibold shadow-lg hover:scale-105 hover:-translate-y-0.5 active:scale-95"
          >
            Our Expertise
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator - removed for performance */}
    </section>
  );
}