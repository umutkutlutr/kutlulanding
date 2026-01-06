import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export function ScrollVortex() {
  const { scrollYProgress } = useScroll();
  const [reducedMotion, setReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Optimized: Single layer instead of 3, less transforms
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 180]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 0.3, 0.3, 0.15]);

  // Hide completely for reduced motion
  if (reducedMotion) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh]">
        {/* Single optimized layer - much better performance */}
        <motion.div
          className="absolute inset-0"
          style={{ 
            rotate: rotate1,
            scale,
            opacity,
            willChange: 'transform',
          }}
        >
          <svg viewBox="0 0 1000 1000" className="w-full h-full" style={{ willChange: 'transform' }}>
            <defs>
              <linearGradient id="spiral1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fb923c" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <circle cx="500" cy="500" r="400" fill="none" stroke="url(#spiral1)" strokeWidth="1" opacity="0.5" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}