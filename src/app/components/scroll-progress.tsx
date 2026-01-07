import { useEffect, useState, useRef } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastProgressRef = useRef(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(() => {
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const newProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
          const clampedProgress = Math.min(Math.max(newProgress, 0), 1);
          
          // Only update if change is significant (> 0.01)
          if (Math.abs(clampedProgress - lastProgressRef.current) > 0.01) {
            setProgress(clampedProgress);
            lastProgressRef.current = clampedProgress;
          }
          
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
  
  return (
    <>
      {/* Top progress bar - visible and prominent */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#fb923c] via-[#1e40af] to-[#1e3a8a] origin-left z-[100] shadow-lg shadow-[#fb923c]/20"
        style={{ 
          transform: `scaleX(${progress})`,
          transition: 'transform 0.1s ease-out',
          willChange: 'transform',
        }}
      />

      {/* Side progress indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:block">
        <div className="relative h-64 w-1">
          <div className="absolute inset-0 bg-[#e5e7eb] rounded-full" />
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#fb923c] via-[#1e40af] to-[#1e3a8a] rounded-full origin-top shadow-lg shadow-[#fb923c]/30"
            style={{ 
              transform: `scaleY(${progress})`,
              transition: 'transform 0.1s ease-out',
              willChange: 'transform',
            }}
          />
        </div>
      </div>
    </>
  );
}