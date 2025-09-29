
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type TypewriterProps = {
  text: string;
  speed?: number;
  className?: string;
  cursorClassName?: string;
  startDelay?: number;
};

export function Typewriter({
  text,
  speed = 50,
  className,
  cursorClassName,
  startDelay = 0,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(startDelay === 0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (startDelay > 0) {
      const delayTimeout = setTimeout(() => {
        setIsTyping(true);
      }, startDelay);
      return () => clearTimeout(delayTimeout);
    }
  }, [startDelay]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeoutId);
    } else {
        // Blinking cursor at the end
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }
  }, [displayedText, text, speed, isTyping]);
  
  const cursor = (
    <span
      className={cn(
        'ml-1 inline-block',
        (displayedText.length < text.length) ? 'animate-pulse' : '',
        !showCursor && (displayedText.length === text.length) ? 'opacity-0' : 'opacity-100',
        cursorClassName
        )}
    >
      |
    </span>
  );

  return (
    <span className={cn('inline', className)}>
      {displayedText}
      {isTyping && cursor}
    </span>
  );
}
