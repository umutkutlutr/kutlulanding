import { useEffect, useState, useRef } from 'react';

export function useScrollAnimation(options?: {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Unobserve after animation to improve performance
            if (elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          }
        });
      },
      {
        threshold: options?.threshold || 0.1,
        rootMargin: options?.rootMargin || '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options?.threshold, options?.rootMargin]);

  return { isVisible, elementRef };
}

