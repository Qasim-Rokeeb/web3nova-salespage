'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

export function Problem() {
    const problemImage = PlaceHolderImages.find((img) => img.id === 'problem-illustration');
    const { ref, isInView } = useInView({ once: true, threshold: 0.3 });
  return (
    <section id="problem" className="py-16 sm:py-24" ref={ref}>
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">
            <div className={cn("animate-slide-in-stagger", { 'is-in-view': isInView })}>
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl h2-underline">
                    YouTube Tutorials Won’t Pay Your Rent
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-prose">
                    You’ve copy-pasted Solidity snippets until your eyes hurt. You still can’t deploy on Base without 17 stack-overflow tabs. Meanwhile, hackathons are handing out 10 000 USDC prizes to devs who actually finish.
                </p>
            </div>
            {problemImage && (
                <div className={cn("rounded-lg shadow-lg animate-slide-in-stagger", { 'is-in-view': isInView })} style={{ animationDelay: '150ms' }}>
                    <Image
                        src={problemImage.imageUrl}
                        alt={problemImage.description}
                        width={600}
                        height={400}
                        loading="lazy"
                        className="rounded-lg object-cover"
                        data-ai-hint={problemImage.imageHint}
                    />
                </div>
            )}
        </div>
      </div>
    </section>
  );
}
