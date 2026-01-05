import { motion, useScroll } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  return (
    <>
      {/* Top progress bar - visible and prominent */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#fb923c] via-[#1e40af] to-[#1e3a8a] origin-left z-[100] shadow-lg shadow-[#fb923c]/20"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Side progress indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:block">
        <div className="relative h-64 w-1">
          <div className="absolute inset-0 bg-[#e5e7eb] rounded-full" />
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#fb923c] via-[#1e40af] to-[#1e3a8a] rounded-full origin-top shadow-lg shadow-[#fb923c]/30"
            style={{ scaleY: scrollYProgress }}
          />
        </div>
      </div>
    </>
  );
}