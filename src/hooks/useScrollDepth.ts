import { useEffect, useRef, useState } from 'react';

interface ScrollDepthOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollDepth = (options: ScrollDepthOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    observer.observe(element);

    const handleScroll = () => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      const start = rect.top + elementHeight;
      const end = rect.top;

      if (start > 0 && end < windowHeight) {
        const progress = 1 - (rect.top + elementHeight) / (windowHeight + elementHeight);
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [options.threshold, options.rootMargin]);

  return { ref, isInView, scrollProgress };
};
