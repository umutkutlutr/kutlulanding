import { useEffect, useState, useRef } from 'react';
import { useScroll, useTransform, MotionValue } from 'motion/react';

/**
 * Optimized scroll hook that only activates when element is in viewport
 * This dramatically reduces scroll calculations for off-screen elements
 */
export function useIntersectionScroll<T = number>(
  transformFn: (progress: number) => T,
  options?: {
    threshold?: number;
    rootMargin?: string;
  }
) {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

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

  // Only calculate transform when intersecting
  const value = useTransform(scrollYProgress, (progress) => {
    if (!isIntersecting) return transformFn(0);
    return transformFn(progress);
  });

  return { ref, value, isIntersecting };
}

