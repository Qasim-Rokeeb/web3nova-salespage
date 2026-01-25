
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { DynamicSeatCounter } from '@/components/dynamic-seat-counter';
import { ApplyButton } from '../apply-button';
import { Typewriter } from '../typewriter';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    if (window.scrollY < window.innerHeight) {
        setOffsetY(window.pageYOffset);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-[90vh] min-h-[700px] w-full overflow-hidden">
      {heroImage && (
        <div
            className="absolute h-full w-full parallax-bg"
            style={{ transform: `translateY(${offsetY * 0.4}px)` }}
          >
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90 backdrop-blur-sm"></div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-[56px]">
            <span className="block">From Web2 Tickets to</span>
            <span className="block">Web3 Paychecks in 90 Days</span>
          </h1>
          <p className="mx-auto mt-6 max-w-prose text-lg text-muted-foreground md:text-xl">
            <Typewriter text="Ship your first dApp and earn your first crypto paycheck in 90 days. No CS degree required." />
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <ApplyButton size="lg" href="https://tinyurl.com/CohortII-enrolment">
              Secure My Seat –{' '}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="underline decoration-dashed">
                      ₦100 000
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>No hidden fees</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {' '}→
            </ApplyButton>
            <ApplyButton variant="ghost" href="https://wa.link/58xt45">I&apos;ll pay in bits, I&apos;ve 50% ready</ApplyButton>
          </div>
          <DynamicSeatCounter />
        </div>
      </div>
    </section>
  );
}
