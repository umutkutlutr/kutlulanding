import { useEffect, useState, useRef } from "react";

export function ScrollVortex() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || !containerRef.current) return;

    const container = containerRef.current;
    const svg = container.querySelector('svg') as SVGSVGElement;
    if (!svg) return;

    // Throttled scroll handler - only update every 2 frames (30fps)
    let frameCount = 0;
    const handleScroll = () => {
      frameCount++;
      if (frameCount % 2 !== 0) return; // Skip every other frame

      const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);
      
      // Only update if change is significant (> 0.01) to reduce repaints
      if (Math.abs(clampedProgress - lastScrollRef.current) < 0.01) return;
      lastScrollRef.current = clampedProgress;

      // Use CSS transforms - GPU accelerated
      const rotate = clampedProgress * 180;
      const scale = 1 + (clampedProgress * 0.1);
      const opacity = 0.2 + (clampedProgress * 0.1);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        svg.style.transform = `rotate(${rotate}deg) scale(${scale})`;
        svg.style.opacity = String(Math.min(opacity, 0.3));
      });
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return null;
  }

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ willChange: 'transform' }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh]">
        <svg 
          viewBox="0 0 1000 1000" 
          className="w-full h-full"
          style={{ 
            willChange: 'transform',
            transform: 'rotate(0deg) scale(1)',
            opacity: 0.2,
            transition: 'opacity 0.1s ease-out'
          }}
        >
            <defs>
              <linearGradient id="spiral1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          <circle cx="500" cy="500" r="400" fill="none" stroke="url(#spiral1)" strokeWidth="1" opacity="0.5" />
          </svg>
      </div>
    </div>
  );
}