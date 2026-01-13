import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const newScrolled = scrollY > 50;
          
          // Only update if state actually changed
          if (newScrolled !== scrolled && Math.abs(scrollY - lastScrollY) > 20) {
            setScrolled(newScrolled);
            lastScrollY = scrollY;
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "expertise", label: "Expertise" },
    { id: "industries", label: "Industries" },
    { id: "approach", label: "Our Approach" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ${
        scrolled 
          ? "bg-[#f5f1ea]/90 shadow-lg border-b border-[#e5e7eb] backdrop-blur-sm py-3" 
          : "bg-[#f5f1ea]/40 py-5"
      }`}
    >
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 relative">
            <span className="text-xl tracking-tight relative inline-block text-[#1a1d29] font-semibold">
              Kutlu Solutions
            </span>
          </motion.div>

          {/* Center Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm text-[#52525b] hover:text-[#1a1d29] transition-colors duration-500 tracking-wide group font-medium"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">{item.label}</span>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#fb923c] to-[#1e40af] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Right CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="relative overflow-hidden bg-[#1e40af] text-white px-6 py-2.5 rounded-lg text-sm tracking-wide border-0 hover:bg-[#1e3a8a] transition-all duration-300 font-semibold cursor-hover shadow-lg shadow-[#1e40af]/30"
              >
                <span className="relative z-10">Let's Talk</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}