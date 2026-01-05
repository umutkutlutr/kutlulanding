import { motion, useScroll, useTransform } from "motion/react";

export function ScrollVortex() {
  const { scrollYProgress } = useScroll();
  
  // Multiple rotation layers for complex vortex effect
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -270]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.5, 0.5, 0.2]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Main Vortex Container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh]">
        
        {/* Outer spiral ring 1 - warm orange */}
        <motion.div
          className="absolute inset-0"
          style={{ 
            rotate: rotate1,
            scale,
            opacity: useTransform(opacity, [0.2, 0.5], [0.15, 0.35]),
          }}
        >
          <svg viewBox="0 0 1000 1000" className="w-full h-full">
            <defs>
              <linearGradient id="spiral1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fb923c" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.12" />
              </linearGradient>
            </defs>
            <circle cx="500" cy="500" r="420" fill="none" stroke="url(#spiral1)" strokeWidth="1.5" opacity="0.6" />
            <circle cx="500" cy="500" r="380" fill="none" stroke="url(#spiral1)" strokeWidth="1" opacity="0.4" />
          </svg>
        </motion.div>

        {/* Middle ring - deep blue */}
        <motion.div
          className="absolute inset-0"
          style={{ 
            rotate: rotate2,
            scale: useTransform(scale, [0.9, 1.2], [0.85, 1.05]),
            opacity: useTransform(opacity, [0.2, 0.5], [0.18, 0.4]),
          }}
        >
          <svg viewBox="0 0 1000 1000" className="w-full h-full">
            <defs>
              <radialGradient id="spiral2">
                <stop offset="0%" stopColor="#1e40af" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.08" />
              </radialGradient>
            </defs>
            <ellipse cx="500" cy="500" rx="320" ry="240" fill="none" stroke="url(#spiral2)" strokeWidth="1.2" opacity="0.7" />
            <ellipse cx="500" cy="500" rx="280" ry="200" fill="none" stroke="url(#spiral2)" strokeWidth="0.8" opacity="0.5" />
          </svg>
        </motion.div>

        {/* Inner ring - gradient mix */}
        <motion.div
          className="absolute inset-0"
          style={{ 
            rotate: rotate3,
            scale: useTransform(scale, [0.9, 1.2], [0.75, 0.95]),
            opacity: useTransform(opacity, [0.2, 0.5], [0.2, 0.45]),
          }}
        >
          <svg viewBox="0 0 1000 1000" className="w-full h-full">
            <defs>
              <linearGradient id="spiral3">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#1e40af" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#fb923c" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <circle cx="500" cy="500" r="200" fill="none" stroke="url(#spiral3)" strokeWidth="1.5" opacity="0.8" />
            <circle cx="500" cy="500" r="160" fill="none" stroke="url(#spiral3)" strokeWidth="1" opacity="0.6" />
          </svg>
        </motion.div>

        {/* Central glow - dynamic */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(251, 146, 60, 0.12) 0%, rgba(30, 64, 175, 0.08) 50%, transparent 70%)",
            filter: "blur(100px)",
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.4, 0.9]),
            opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 0.5, 0.5, 0.2]),
          }}
        />
      </div>
    </div>
  );
}