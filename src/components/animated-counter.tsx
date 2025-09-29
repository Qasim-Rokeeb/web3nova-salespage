'use client';

import { useEffect, useState, useRef } from 'react';

type AnimatedCounterProps = {
  targetValue: number;
  duration?: number;
  start: boolean;
  className?: string;
  prefix?: string;
  suffix?: string;
};

export function AnimatedCounter({
  targetValue,
  duration = 2000,
  start,
  className,
  prefix = '',
  suffix = ''
}: AnimatedCounterProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);
      const newDisplayValue = Math.floor(percentage * targetValue);

      setCurrentValue(newDisplayValue);

      if (progress < duration) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setCurrentValue(targetValue);
      }
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [start, targetValue, duration]);
  
  const displayValue = `${prefix}${currentValue.toLocaleString()}${suffix}`;

  return <span className={className}>{displayValue}</span>;
}
