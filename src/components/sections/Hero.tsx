
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { DynamicSeatCounter } from '@/components/dynamic-seat-counter';
import { ApplyButton } from '../apply-button';
import { Typewriter } from '../typewriter';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-[90vh] min-h-[700px] w-full overflow-hidden">
      {heroImage && (
        <div
            className="absolute h-full w-full"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
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
            <Typewriter text="Earn your first 200 – 1 000 USDC on Base, Celo, Solana or Lisk—without quitting your day job." />
          </p>
          <div className="mt-8">
            <ApplyButton size="lg">
              Secure My Seat – ₦100 000 →
            </ApplyButton>
          </div>
          <DynamicSeatCounter />
        </div>
      </div>
    </section>
  );
}
