import { useEffect, useState, useRef } from 'react';

/**
 * Optimized scroll hook with aggressive throttling
 * Only updates when element is in viewport and scroll change is significant
 */
export function useOptimizedScroll(
  options?: {
    threshold?: number;
    rootMargin?: string;
    minScrollDelta?: number;
    frameSkip?: number; // Skip N frames (1 = 30fps, 2 = 20fps, etc)
  }
) {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastScrollRef = useRef(0);
  const frameSkipRef = useRef(0);
  const minDelta = options?.minScrollDelta ?? 10;
  const frameSkip = options?.frameSkip ?? 2; // Default: 20fps

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting || entry.intersectionRatio > 0);
      },
      {
        threshold: options?.threshold ?? 0,
        rootMargin: options?.rootMargin ?? '0px',
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin]);

  useEffect(() => {
    if (!isIntersecting) return;

    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(() => {
          frameSkipRef.current++;
          
          // Skip frames for lower update rate
          if (frameSkipRef.current % frameSkip !== 0) {
            ticking = false;
            return;
          }

          const scrollY = window.scrollY;
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const newProgress = scrollHeight > 0 ? scrollY / scrollHeight : 0;
          
          // Only update if change is significant
          if (Math.abs(scrollY - lastScrollRef.current) < minDelta) {
            ticking = false;
            return;
          }
          
          lastScrollRef.current = scrollY;
          setScrollProgress(newProgress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isIntersecting, minDelta, frameSkip]);

  return { ref, scrollProgress, isIntersecting };
}

