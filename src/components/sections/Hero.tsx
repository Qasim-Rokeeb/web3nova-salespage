import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { DynamicSeatCounter } from '@/components/dynamic-seat-counter';
import { ApplyButton } from '../apply-button';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section id="hero" className="relative h-[90vh] min-h-[700px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Launch Your Career in</span>
            <span className="text-gradient block">Web3 Development</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Go from zero to hero with our hands-on, cohort-based program designed to make you a job-ready Web3 developer.
          </p>
          <div className="mt-8">
            <ApplyButton size="lg">
              Apply for the Next Cohort
            </ApplyButton>
          </div>
          <DynamicSeatCounter />
        </div>
      </div>
    </section>
  );
}
