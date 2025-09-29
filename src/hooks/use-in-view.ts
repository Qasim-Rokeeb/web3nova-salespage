'use client';

import { useState, useEffect, useRef } from 'react';

type UseInViewOptions = {
    threshold?: number;
    once?: boolean;
}

export function useInView({ threshold = 0.1, once = true }: UseInViewOptions = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(currentRef);
          }
        } else {
            if(!once) {
                setIsInView(false);
            }
        }
      },
      {
        threshold,
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [once, threshold]);

  return { ref, isInView };
}
