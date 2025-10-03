
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

  return (
    <section id="hero" className="relative h-[90vh] min-h-[700px] w-full overflow-hidden">
      {heroImage && (
        <div
            className="absolute h-full w-full"
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
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-[56px]">
            <span className="block">From Web2 Tickets to</span>
            <span className="text-gradient block">Web3 Paychecks in 90 Days</span>
          </h1>
          <p className="mx-auto mt-6 max-w-prose text-lg text-muted-foreground md:text-xl">
            <Typewriter text="We help Web2 developers ship their first decentralized app and earn their first paycheck in the new internet economy—without the CS degree, bootcamps, or endless tutorials." />
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <ApplyButton size="lg">
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
            <ApplyButton variant="ghost">I&apos;ll pay in bits, I&apos;ve 50% ready</ApplyButton>
          </div>
          <DynamicSeatCounter />
        </div>
      </div>
    </section>
  );
}
